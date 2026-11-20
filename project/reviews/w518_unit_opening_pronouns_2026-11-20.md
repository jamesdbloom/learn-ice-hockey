# W518: unit-opening bare pronouns, corpus-wide (20 November 2026)

This wave closes plan row W515(7). The work used the new worklist tool `scripts/check_unit_openers.py` (commit 86c79776), which lists every spoken unit that opens on "it", "its", "they", "them" or "their" — a paragraph, list item, facts line or blockquote paragraph — beside the end of the unit heard just before.

A listener hears that pronoun as the previous unit's last noun. Examples:
- "Once it reaches the head" heard straight after "careless contact";
- "Why it works" heard after a diagram caption about goal posts.

Seven editing agents worked file groups that did not overlap, from one shared brief (`scratchpad/w518_common.md`). Each also took its group's leftover rows.

## Results

- **The tool's hits:** it listed 268 units across 41 documents.
- **Agent rulings:** about 130 were DEFECTS, each repaired by naming the thing meant. The rest were ruled OK; the usual cases are "their goalie" meaning the opponents, a list whose first item names the subject, or a heading that names it.
- **Re-run:** the tool now lists 127 units, all ruled OK by an agent.

### Worst cases, where meaning reversed or a rule was misattributed

| Document | Before | Heard as | After |
|---|---|---|---|
| breakouts | "If they are already past you" | "the IIHF and PWHL" | "If the forechecker is already past you" |
| special_teams (facts) | "Risk: It ignores the middle" | "a competent box", which is the formation that defends the middle | "The 2-3 ignores the middle" |
| forechecking_systems (facts) | "Key: It is the first thing…" | "backchecking" | names forechecking |
| mental_game, Key Takeaway 1 | "If it has spread beyond the rink…" | nothing: it is heard straight after the heading. The same claim at :45 was heard as "frustration". | "If anxiety or low mood has spread beyond the rink…" |
| how_to_watch_hockey | "it inherits the xG model's weaknesses" | GSAA, the wrong statistic | names GSAx |
| center | "It can cost your team the goal" | a goaltender-interference minor | "Standing in the crease can cost your team the goal" |

### Leftover rows closed

| Row | Document | Change |
|---|---|---|
| W517(1) | body_contact_and_battles facts :598 | Rewritten within the cap. It now voices USA Hockey 608(b)'s mandatory major and game misconduct for a reckless hit from behind, and its closing "if reckless" now attaches to the hit. |
| W517(5) | center :536 | "a highly violent one", matching Hockey Canada 7.7(b) |
| W517(6) | time_and_space :664 | "a reckless pick" |
| W517(6) | neutral_zone_systems :363/:400 | "accidental head contact that injures" |
| W517(6) | faceoffs :1144 | "a reckless head-butt" |
| W517(7) | risk_management :915 | Split into a three-limb enumeration from Casebook 608 Situation 1 |
| W517(7) | playing_without_the_puck :849, :1024; risk_management :861 | "from behind" added for 608(c) |
| W517(8) | defender :96, :750, :1031 | "a puck over the glass … putting the puck out deliberately" (any deliberate puck out of play, not only over the glass) |
| W517(8) | special_teams :1138 | Judged OK |

## Review

| Reviewer | Scope | Critical | Major | Minors |
|---|---|---|---|---|
| safety-reviewer | every rule-bearing hunk, plus a census for others; rendered body_contact_and_battles and risk_management | none | none | 2 |
| content-reviewer | systems and technique, all 79 changed lines | none | 1 | 6 |
| content-reviewer | foundation, getting-started, off-the-ice, hockey-iq and positions, all 71 changed lines | none | 1 (pre-existing) | 13 |

**Safety-reviewer, the minors.**
- Defender :96's new "doing it deliberately" put the pronoun back, where it could be heard as kicking the puck clear. It now names the act; see W517(8) above.
- The goaltender :1443 In-House scope was already there before this wave and stays as it is.

**Content-reviewer (systems and technique), the major.**
- special_teams :984 and facts :972 said "6-on-4 is the largest advantage in hockey". The claim was already there before W518; this wave made it a stand-alone bullet. Pulling the goalie during a 5-on-3 gives 6-on-3, which is larger.
- It now reads "the largest advantage you will normally see". No other "largest advantage" claim exists in content/.

**Content-reviewer (systems and technique), minors repaired.**
- breakouts :868, a self-contradiction;
- DZC :300/:320, man-on-man siblings;
- special_teams Key focus :25 and KT2: "clears it" became "clears the puck";
- NZ facts :363, "head" restored;
- body_contact :598, "careless head contact".

**Content-reviewer (foundation, off-the-ice, hockey-iq, positions), the major.**
- goaltender :301 credits Blomquist and Henriksson with naming passivity as a problem. :293's list of their three problems does not include it. This was already there before W518.
- Filed as W518(4) for a source-verifier. The bullet is not deleted.

**Content-reviewer (foundation, off-the-ice, hockey-iq, positions), minors repaired.**
- rink_map :404, :455 ("behind the net", which had landed on "the end boards"), :471 and :551 ("Keeping somebody above the puck");
- core_principles :99 and :134 "What … costs";
- equipment :130 ("USA Hockey's helmet-removal rule", checked against 615(c)) and :215/:217;
- time_and_space :250 "Why scanning first works";
- risk_management :915, now "For the reckless kind";
- facts lines center :658, risk_management :224 and playing_without_the_puck :885;
- playing_without_the_puck :313/:326, now "If it is unclear who goes".

**"Why it matters" labels.** The reviewer ruled that only consistency within each document is needed, so no labels were renamed corpus-wide.

**Re-reads.** No reviewer re-read the final repairs. Each is confined to its finding, taken from the reviewer's sketch, and checked against the cited rule where one exists. This is the C11 terminating case.

## Rows

- **Closed:**
  - W515(7)
  - W517(1)
  - W517(5), except defender :411/:495
  - W517(6)
  - W517(7)
  - W517(8), except faceoffs :158; that exception and the defender one are re-filed as W518(7)
- **New, From W518:**
  1. Tool gaps: "What/How/Where it…" labels, chains of subordinators, and `FACTS_LABEL_RE` stripping inline "Why it works:" labels.
  2. "Why it matters" label consistency.
  3. Pronouns later in the opening words.
  4. goaltender :301 against :293.
  5. Tool regex gaps (folded into row 1).
  6. risk_management :861's vulnerable-or-defenceless condition, and the scope of mental_game's new noun.
  7. The two unclosed W517 items.

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check-arrivals`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 33 files, 0 lost, 0 split halves.
- `check_unit_openers`: 127 remaining, all ruled OK.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered for every rule-bearing hunk by the safety-reviewer. Rules read: usah 602, 603, 608, 610, 619, 620, 625 and Casebook 608; HC 7.6, 7.7; NHL and PWHL 43, 63.2; CARHA 53; IIHF 43, 48; In-House 9.12. |
| D2 exceptions | Covered: 7.7(a) moderate against 7.7(b) high violence; 7.6(b)'s accidental trigger. |
| D3 cross-book divergence | Not engaged. |
| D4/D5 citations | Not engaged. No citation changed. The goaltender :301 attribution is filed for a source-verifier. |
| D6 negative existence | Covered: "largest advantage" appears nowhere else. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered for the edited units, including KT1 (mental_game) and KT2 (special_teams), both voiced alone. |
| D10 facts layer | Covered. Every facts-line edit checked against its cap; several are now at 297–299. |
| D11 reader safety | Covered by the safety-reviewer. No majors. |
| D12 read-aloud integrity | Partly covered. Agents B, D, E, G and both content reviewers rendered several documents. Many calls were made from the markdown pair alone. The final repairs were not re-rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: check_links, label consistency ruling. |
| D15 rendered site | Structural only: 0 bare glyphs, no `<p>*`. Chrome not connected. |

## What this method could not have found

- **Pronouns the tool does not flag.** These include "What it is" labels, chains of subordinators ("And if it…"), inline "Why it works:" labels, demonstratives, and pronouns later in a unit. All are filed as W518(1) and (3).
- **New claims voiced flatly.** Where a pronoun was replaced with a confident noun, the claim it now voices was tested only where a reviewer happened to read it against sources. The 6-on-4 claim shows why that matters.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
