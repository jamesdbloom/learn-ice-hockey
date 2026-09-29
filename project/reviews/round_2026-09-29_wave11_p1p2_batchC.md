# Round 29 September 2026, wave 11: P1/P2 batch C (five files)

**Scope.** Five documents that had not been re-aimed before, one author each, under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible":

- `core_principles`, `uk_rules`
- `equipment`, `team_play_and_culture`
- `forechecking_systems`

**What the wave did:**

- **P1 re-aim:** Key focus, Overview, Common Mistakes and Key Takeaways were re-aimed at what a player does. Missing kernels were filled in, and inherited board-posture limbs were demoted only after a per-limb layer test.
- **P2 placement:** amber panels were moved to inline amber on the hazard clause.
- **Lane rule:** a rules defect was repaired only if it was permissive and penalty-bearing. The shared brief is reproduced in Appendix A.

The wave was dispatched while wave 10 was still under review on other files. It was staged separately, and wave 10 committed first (66ca3f3).

## Method

1. Five authors worked in parallel.
2. Two `safety-reviewer`s and one `rules-verifier` read all five diffs.
3. One fix batch followed, one agent per file.
4. Two blocking-only final `safety-reviewer`s read the fix round.
5. A line-scoped `rules-verifier` read the last forechecking edits.
6. A `site-reviewer` checked all five pages in Chrome.

## Key focus, before → after

| File | Before | After | Added |
|---|---|---|---|
| `core_principles` | 10 | 10 | Unchanged list; KF4 adds "skates and stick blade just outside the crease" |
| `uk_rules` | 5 | 7 | Once you have one misconduct, the next ends it (IIHF 20.4; In-House kit misconducts). Keep wingers out of the circle and have a second draw-taker ready (In-House 76; IIHF 2026/27 76.3) |
| `equipment` | 6 | 9 | Chin strap done up and every pad strapped; sharp edges on one hollow you know; a stick you can bend and control, labelled a starting point with alternatives |
| `team_play_and_culture` | 9 | 10 | When to change and naming who you replace; filling a teammate's spot and getting back to yours (system-dependent); talking early |
| `forechecking_systems` | 5 | 9 | Beaten → take the vacated role; stick in the lane; hunting, recovering or choosing; defencemen pinch on arrival, one at a time (labelled the default) |

**Panels.** Every file ended at 0.

- `equipment` went from 5 to 0, `uk_rules` from 2 to 0 and `forechecking_systems` from 1 to 0.
- `core_principles` and `team_play_and_culture` were already at 0.

The owner's complaint about `core_principles` was two warnings after the first Key focus point. The page now renders ten sibling paragraphs. The only two inline amber runs are in items 9 and 10, and the site reviewer confirmed each reads as part of its own item.

## Permissive, penalty-bearing (fixed in every layer)

- **WNIHL, `team_play_and_culture`.**
  - *Problem:* a sentence said the IIHF 101.1 "restricted contact, not a blanket prohibition". A WNIHL player would hear that as leave to make contact. The league's own Rules of Competition label every format "Full ice, non-checking" (`ihuk_wnihl_roc.txt:152-153`) and never define the term.
  - *Fix:* the ⚠️ now sits on "**In the WNIHL, play it as no body checking**", in the body, Common Mistakes and KT4.
- **USA Hockey's lean permission, `core_principles` CM.** It was scoped to USA Hockey's Competitive Contact category (`usah.txt:359/:380`).
- **CARHA 49(a) "does not avert body contact", `forechecking_systems`.** Added at facts :766 and CM :919.
- **USA Hockey Casebook 607 Situation 5, "can be legally checked", `forechecking_systems`.**
  - *Fix:* it is now read against 607(d) Note 1: *"Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging"*.
  - *Deletion:* one sentence was deleted outright. It read the 604(c) Note as leaving a non-check player free to engage a goaltender. That Note (`usah.txt:3574-3584`) never mentions a goalkeeper, and Note 1 contradicts the reading. **This document has no notes section, so this record is where the cut is noted, as non-negotiable 3 requires.**
- **Checking from behind, `forechecking_systems` KT9 and facts :38/:546/:658/:660/:716.** The text named only the NHL and IIHF as having no minor, which implied a lower floor elsewhere. It now says that in every book but USA Hockey the lightest penalty ends your game:
  - NHL, IIHF and PWHL 43.2 have no minor.
  - HC 7.5(a) and CARHA 53(a) are a minor plus a game misconduct.
  - USA Hockey still ejects for a forceful check on a player at the boards, and for any check that sends a player head first (608(b); Casebook 608 Situation 1).
- **"Off the glass" framing.** This was not in wave 11's files. It was fixed in wave 12 (`puck_handling`).

## Harsher-and-false (fixed)

- **Leaving the bench, `team_play_and_culture` KF/KT10/:40/:451/:599.** The text said "at least a game misconduct in all six books, not one stops at the first player off".
  - NHL and IIHF 70.3/70.6 and PWHL 72.x give the automatic game misconduct to the first or second player off.
  - CARHA 70(c) and HC 10.4(e)(ii) give it to later players only if they are penalised.
  - Only USA Hockey 629(a) is flat.
- **"Off the bench to argue, under every book"** is written only by the NHL, IIHF and PWHL (6.1 + 39.2). The CARHA 46(a) Note's "required" minor-first contradicted the "usual course" claim, which was dropped.
- **The chin strap, `uk_rules` and `equipment`.** In-House 9.8 reads *"First offence: … (team warning). Second offence: 10-minute Misconduct Penalty to the offending player"*. It was read as a TEAM warning from the book's own parallel clauses:
  - shorts, `:264`;
  - blood on ice, `:728-730`: *"Second offence (same team)"*;
  - USA Hockey Casebook 304 Situation 14, *"by any player on the same team"*.

  Six sites in `uk_rules` read 9.8 as a team warning: KF5 :17, Overview :41, body :207, body :261, CM :465 and KT13 :601. Three in `equipment` do the same: :494, :731 and :804. The phrase "once your team has been warned for one" appears at `uk_rules` :17, :41, :261 and :601 and at all three `equipment` sites. `uk_rules` :207 and :465 state the same reading in other words ("Read that warning as your team's…"; "the first offence on your team … as a team warning").
- **Women's hockey was missing** from `uk_rules`' In-House competition list (In-House Rules 100–102). It was added at every site, and in the table, which was also missing the SNL.
- **The crease, `core_principles` :107.** The text read as if the stoppage were USA Hockey-only. IIHF 69 also lets the referee stop play, and HC and CARHA 66(b) can disallow the goal. The claim "no equivalent in the other books" was refuted.
- **Closed counts.** "Four of the books say you are" (`core_principles` :89) is now "most of the books here": NHL/IIHF 56.1, PWHL 57.1, the USA Hockey Declaration and CARHA 66(a) Note 2.

## Coordinator errors, recorded

- **Sketch error #5.** "Even there it is a minor plus a misconduct" (USA Hockey checking from behind) understated USA Hockey for a player at the boards. The agent refused it.
- **Sketch refused.** "Other books disallow a goal scored while you stand there" was refused in favour of "can be disallowed". HC allows a goal by a different attacker, and the NHL and IIHF tie a disallowed goal to impairment.
- **An unmeasured premise.** The `check_facts <paths>` "false pass" a reviewer reported was refuted by the coordinator: those two files have no facts blocks.

## Markers

`check_marker_pairs` found 0 LOST in four files. `equipment` lost 1: the glyph on `### ⚠️ If you play in Britain` moved into the blockquote's first paragraph. The render still voices "Important." at the start of the section, and moving it also removed a table-of-contents heading id that began with U+FE0F.

## Gates and build

- `check_links`, `check_facts`, `check_absolutes` and `check_counts` all exit 0.
- **Build:** absolute npm, 23:39–23:40, exit 0, full chain to `check:links` (54 pages, all links resolve). The newest wave-11 content edit is 21:25.
- On all five pages, `--panels` and `--bare` are 0, and the site reviewer found no untreated glyph inside a strong run.

## Rendered site (`site-reviewer`)

**Result: CLEAR**, with no critical or major finding. The Chrome extension was used, and narrow views were made with a same-origin iframe at 400 and 320 px, because `resize_window` still silently does nothing.

What it checked:

- 434 inline amber runs across the five pages, 0 panels, and 0 literal `**`.
- Every `[x]` bracketed quotation renders.
- All 30 forechecking facts blocks render.
- The `equipment` Britain note: the heading is clean, and the table-of-contents deep link lands below the header.
- The `uk_rules` tables at 400 and 320 px: the body never overflows.
- The theme toggle persists, and the console and network are clean.

Minors carried:

- `.warn-inline` right padding leaves a gap before punctuation (a site-wide CSS fix).
- At 400 px the glyph can wrap away from its words.
- There is no scroll-spy on the table of contents (pre-existing).

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` (all five diffs); a line-scoped `rules-verifier` (forechecking); `safety-reviewer`s | Operative wording is quoted with `sources/` line refs in the OPEN_ITEMS W11 log. |
| D2 | Exceptions | Yes | same | 625(b) pushed-in carve-out; 608(b) head-first; 70.3/70.6 first/second player; the 9.8 team warning. |
| D3 | Rule-set divergence | Yes | same | Six books plus the British layer (In-House, EIHL Casebook, WNIHL/Junior/NIHL RoC); place vs competition. |
| D4 | Citation integrity | Yes | readers | New quotations checked verbatim; five `[a]`-bracketed capitals in `uk_rules` verified against their sources. |
| D5 | Provenance | Partly | readers | New trailer citations (WNIHL RoC, In-House 101, HC 6.1(f), PWHL 8.1/8.2/39.2(i), IIHF 69, HC 8.5 Goal Crease, CARHA 66(b)) cite on-disk primary texts. No `source-verifier` refetch; **declared out of scope**. |
| D6 | Negative existence claims | Yes | `rules-verifier` | The 625(b) "no equivalent" claim was refuted; the WNIHL "non-checking is never defined" was verified; the CARHA "off the bench to argue" label search is disclosed as label-only. |
| D7 | Cardinal rule | Yes | every reader | Forecheck roles, the pinch, cover-and-return and sharpening/stick sizing are all labelled coaching choices or starting points. |
| D8 | Numeric ownership | Partly | readers | Sharpening hours, hollow, stick length and flex are carried from the `equipment` body. Other figures were not re-derived; **declared out of scope**. |
| D9 | Summary layer | Yes | every reader (the P1 subject) | Per-limb layer tables for every demotion. |
| D10 | Key-facts layer | Yes | readers | Changed facts lines were read voiced alone; `check_facts --near` before edits. |
| D11 | Reader safety | Yes | `safety-reviewer` ×4 | |
| D12 | Read-aloud integrity | Yes | readers rendered `md_to_speech` into their own `--out` directories | |
| D13 | Folklore | Partly | readers | The D13 superlative in `team_play` :61 was reworded; `equipment`'s "stricter than it looks" was cut. The body was not swept; **declared out of scope**. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | The heading glyph was removed from `equipment`'s Britain heading, so its anchor changed; all links resolve. Body prose outside the changed layers was not style-reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` | CLEAR. |

## Carried (not blocking)

**`forechecking_systems`**

- :716 does not say that HC 7.5(a)'s minor carries a game misconduct.
- KT9 does not list 608(b)'s reckless-endangerment limb or 608(a)'s major option.
- Body :677 says "two of the four books" and :213 says "the other two books eject", but the PWHL is a third.
- :297 overstates the USA Hockey Casebook (a minimal pinch is a minor plus a misconduct).
- Facts :766 did not get its strides clause back (no room).
- The trapezoid advice leans on EIH R&R 22.3 but is scoped by place.
- The trailer's 49(a) wording.

**`team_play_and_culture`**

- :596/:670, "at least a game misconduct in every book" for spitting or physical force, is unverified.
- USA Hockey's dispute ladder is unverified.
- NHL "82.1" at :129.

**`uk_rules`**

- The lift lacks "then let go".
- CM :453, "a warning, then a minor", reads as the Elite League ceiling.
- The KF dive has no Elite League exception.
- The BUIHA neck-guard disclosure may be retirable.
- KT15 overtime and KT16 first-aider need an Elite League scope.

**`equipment`**

- :109 gives the gap with no tariff.
- KT2 lacks the lower 615(c) tier.
- Three "four books" counts are unchecked against CARHA and PWHL.
- EIH R&R 24.6 vs In-House 9.12 is unresolved; the harsher reading was shipped.

**`core_principles`**

- :107 lacks NHL/PWHL 69.1's "does not immediately vacate" minor.
- The "no source ≠ made up" CM is a candidate cut, for the owner to decide.
- The trailer cites IIHF 2025/26.

**Coordinator**

- The PWHL extraction's page footer near 42.1 needs a `sources/README` note.

## What this method could not have found

- **Defects in unchanged body text.** The readers diffed and read the changed units. A permissive claim in untouched body text that shares no wording with a changed limb would have passed them.
- **Rules that price the same act under a label nobody searched.** Examples: CARHA pricing "off the bench to argue" under another rule; a crease rule in HC or CARHA beyond 8.5 and 66(b).
- **Whether British officials apply In-House 9.8's "team warning" team-wide.** It was settled from textual parallels.
- **How a real TTS engine voices the new text, and how real phones render it.**

## Appendix A — the shared author brief, verbatim


Repository: /Users/uk45004860/Documents/personal/ice_hockey. You are one of five parallel authors (wave 11 / P1-P2 batch C). Wave 10 is under review on OTHER files at the same time.

You own EXCLUSIVELY the one file named in your task. Do not edit any other file. Never touch project/, scripts/, site/ or git: no add, no stash, no checkout. Other agents are editing sibling files concurrently. If a checker fails on a file you do not own, that is not yours; ignore it.

READ FIRST: CLAUDE.md (in particular "THE CORPUS TEACHES TACTICS", "READABLE BEATS DEFENDABLE", the rendering-states and marker sections, and the non-negotiables), then project/content_style_guide.md.

TASK:
- P1: re-aim the summary layers (Key focus, Overview, Common Mistakes, Key Takeaways) at what a player DOES.
  - Key focus holds up to 10 bullets, each truly one of the things a player should MOST focus on. Stated as actions. Siblings must look like siblings.
  - The Overview DISCUSSES those points; it is not a map of the rules.
  - Common Mistakes: lead each bullet with the instruction, then the tariff. RE-ORDER; do not strip.
  - Key Takeaways are kernels: what a player does in a situation.
  - The defect is usually ABSENCE: add the core craft a coach names first, if it is missing.
  - State tactics plainly as the common approach, name a realistic alternative, and say to check what your team plays. Do not present a coaching choice as a law.
  - Document-relative: keep a limb that is this document's subject. Demote an inherited limb only with a per-limb LAYER TEST showing it is carried elsewhere in the document.
- P2: `python3 scripts/check_callout_flow.py --panels --file <path>` (it reads site/dist; your file has no uncommitted edits, so the last build reflects it — but if the listing looks wrong, say so and do not rebuild: the coordinator owns the build). Move a panel's ⚠️ off a paragraph opening onto a **strong** run of the hazard clause (bold the instruction, never a citation). Split `**head, ⚠️ hazard**` into `**head,** ⚠️ **hazard**`. Never strip a paragraph's LAST marker. Repair, re-run and repeat until the listing stops changing.

LANE RULE (the owner's): repair a rules defect ONLY if it is PERMISSIVE and PENALTY-BEARING, i.e. it tells a reader an act is cheaper than the book makes it. Verify against sources/*.txt: grep with flattened wraps, quote the wording, ask whether the rule is the book's WHOLE answer to the act, and check every book in `ls sources/*.txt`. Report everything else rather than fixing it.

PLAN ROWS AS HYPOTHESES: `grep -n <your stem> project/plans/OPEN_ITEMS.md` and read hits in lines 25-240 (the carried-row sections). Each row naming your file is a hypothesis. Refute it before acting; line numbers may be stale. A row that is permissive and penalty-bearing is in your lane; fix it in EVERY layer of your file ("this claim, wherever it appears") and report the layer test.

RULES OF WORK:
- Never fabricate; never state a rule from memory; never strip an honest disclosure; no project narration in content.
- Airway: never write a flat "don't move them"; the CRT6 exception is "except to keep their airway clear". The helmet stays on.
- Facts caps: run `python3 scripts/check_facts.py --near <path>` before editing a block. Value caps are 300 for Rule:/Convention: and 200 otherwise. Block caps are MIN 3, MAX_COACHING (non-Rule) 8, HARD_MAX 14.
- When a qualifier moves between layers, ask what it was qualifying.
- Summaries overstate toward harsher, simpler rules. Re-read every new sentence against the body it summarises.

GATES, run on your file without pipes before you finish:
  python3 scripts/check_links.py --quiet ; python3 scripts/check_facts.py ; python3 scripts/check_absolutes.py
  python3 scripts/check_marker_pairs.py <path>
For every LOST marker, restore it or justify it. Render with `python3 scripts/md_to_speech.py --only <stem> --out <SCRATCH>/<stem>`, where SCRATCH is /private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad/w11 (use only your own subdir). Read your new KTs and facts lines voiced alone.

REPORT:
- Key focus count before → after, with the list.
- Panels before → after, and marked units before → after (checker output).
- Every rules repair: the staged line, the source quote with file:line, and the direction.
- Every rules issue you did NOT fix, as a plan row with its direction.
- Self-caught defects in your own new text.
- "What this method could not have found."

WAVE-11 ADDITIONS (standing positions from waves 8–10; apply them where your file touches the act):
- Net-front screener: NEVER walk/move a screener out, any game — no puck, so interference (NHL/IIHF 56.2(i), PWHL 57.2, USAH 625(a)(4), HC 8.3(i), CARHA 66(a)(1)); hold the inside beside them. "No lean, no push" is coaching, and a RULE under CARHA 49(a). Interference is not capped at a minor: NHL/IIHF 56.4, PWHL 57.4, HC 8.3(b) (mandatory major+GM on injury), CARHA 66(a); USAH 625 is a minor but a walk-out that becomes a check can be roughing under 640 (major+GM if it recklessly endangers). Beware QUALIFIERS THAT IMPLY A CAP BY CONTRAST (e.g. "where checking is barred it is not capped" implies it IS capped elsewhere) — this shape produced a MAJOR three rounds running in wave 10.
- Stick lift: below the bottom hand, as the puck arrives, then let go (held = holding; at the hands = hooking).
- Goalie contact: attacker's duty to avoid (NHL/IIHF 69.1 effort proviso, HC 8.5 onus, CARHA 66(b) flat). Charging a goalie: HC 8.5(b) mandatory ejection anywhere; CARHA 52(b) in the crease or on injury. Any "crash the net" carries "under control, never into the goaltender".
- Draw out of play: never aim one out (63.2(ii) deliberate from anywhere vs 85.1 "regardless" — unreconciled).
- Place vs competition (British): In-House Rules amendments do not reach the EIHL; never attach "in Britain"/"in England and Scotland" to a rule scoped by a competition.
- Do NOT touch site/src/diagrams or diagrams.json; if a caption hosted in your file needs work, REPORT it.
- A sketch in a plan row is a claim; four coordinator sketches were refuted in wave 10. Verify before writing.

