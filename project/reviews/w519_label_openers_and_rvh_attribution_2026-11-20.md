# W519: label openers, a narrowed out-of-play rule, and the RVH passivity attribution (20 November 2026)

## Scope

**The tool change.** `scripts/check_unit_openers.py` was extended in commit d2ef176c to catch three openings it had missed:
- label openers ("What it is.", "What it costs.", "How it works", "Who it suits");
- chains of subordinators ("And if it…");
- inline labels ("Why it works: …").

On 20 November the extension added 175 candidates. Five editing agents triaged only those new hits, working from `scratchpad/w519_add.md` and the per-file list in `scratchpad/w519_newhits.txt`.

**Other work.**
- A source-verifier checked goaltender :301 (W518 row 4), and a sixth agent repaired it.
- W518 row 8 was assigned to two of the agents.

## Results

| Agent | Files | New hits | Defects fixed |
|---|---|---|---|
| A | foundation | 42 | most, including all 17 rink_map "Why it matters:" labels, which each sat behind a "Where:" paragraph (e.g. "the office" was heard as "the opponent's net"), and the rules_primer per-foul "What it costs." labels |
| B | hockey-iq, off-the-ice | 37 | 38 edits |
| C | systems (breakouts, defending_the_rush, defensive_zone_coverage, faceoffs, forechecking_systems), defender | 37 | 26 |
| D | systems (game_management, neutral_zone_systems, offensive_zone_play, special_teams, zone_entries) | 22 | 18 |
| E | technique | 35 | 30 |

- **Pattern of the defects.** Nearly every one was a "What it costs." or "What it is:" label with a paragraph, list or facts block between it and its heading, so "it" landed on that unit's last noun. One example: defending_the_rush's "What it gets you:" was heard as "retreating", the opposite of what it meant.
- **Remaining hits.** `check_unit_openers` now lists 144 units, all ruled OK by an agent.

### goaltender :301

**What the source-verifier found.** It re-fetched InGoal's "How Sweden Invented the RVH" (HTTP 200). The page gives two separate sets of three:

| Passage | Set | Source | Status |
|---|---|---|---|
| :293 | Blomquist's three problems with VH: "trouble staying by the post… with the rebounds… with getting off it" | Blomquist, quoted | correct |
| :301 | InGoal's three concerns with RVH: "passive goalies, the gap over the shoulder, immobility off the post" | InGoal's own paywall-teaser text, not Blomquist or Henriksson; absent from Wayback captures from 2023 to June 2026 | collided with :293 |

:301 had said passivity was one of "the three problems they had to solve", which a listener hears as :293's list.

**The repair.** :301 now credits the three RVH concerns to InGoal. Its "stops reading the play" mechanism, not found in the free text, is now stated as the guide's own coaching point. The Sources gloss at :1815 names both sets. The link baseline row was updated with the refetch.

### W518 row 8

- **team_play_and_culture :292** now reads "A game misconduct in the handshake line can cost the next game too". Agent B verified it against USA Hockey 404(b), Hockey Canada 4.8(c) and 4.9(b), and CARHA 32(c) and 32(d).
- **The out-of-play wording.** "putting the puck out deliberately" is now "putting the puck out of play deliberately", at defender :96 and :1031 and in a breakouts paragraph.

## Review

| Reviewer | Scope | Critical | Major | Minors | Notes |
|---|---|---|---|---|---|
| safety-reviewer | rule-adjacent hunks | none | none | 2 | Re-fetched InGoal and upheld the :301 attribution. Checked every renamed "What X costs" label in body_contact, rules_primer and equipment against its penalties; none narrows. |
| content-reviewer | foundation, off-the-ice, hockey-iq, positions | none | 1 (same as safety M1) | 13 | |
| content-reviewer | systems, technique | none | none | 11 | |

**Safety-reviewer minors.**
- **M1.** An intermediate wording, "shooting the puck out of play deliberately", narrowed every book. NHL and IIHF 63.2(ii), PWHL 65.2(ii), USA Hockey 610(c) and Hockey Canada 10.1 all cover shooting, batting or throwing, with the hand, leg, foot, arm or stick. It was repaired to "putting the puck out of play deliberately".
- **M2.** The CARHA 32(c) window under the :292 heading. Filed as W519(2).

**Content-reviewer (foundation, off-the-ice, hockey-iq, positions), minors repaired.** Labels whose new noun did not fit everything under them:
- scanning "What screening costs" sat over a contact-free legal screen, and is now "What net-front play can cost";
- team_play "What using your body costs" contradicted "non-check is not no contact", and is now "What illegal contact costs in a non-check game";
- "What getting in the goalie's way can cost you";
- "What trouble in the handshake line costs";
- sibling labels in puck_support and conditioning.

**Content-reviewer (systems, technique), minors repaired.**
- breakouts :921: "What a clear costs — the rule." sat over the delayed-penalty rule and duplicated :502's meaning. It is now "The delayed-penalty rule."
- breakouts: "What playing outside the trapezoid costs".
- forechecking: every "How it is beaten" and "What it concedes" now names its system.
- DZC: "What the hybrid concedes".
- body_contact: "What pinning the puck costs", "What walking a screener out costs" and "What an illegal hit costs".
- puck_handling: "What closing your hand on the puck costs" and "What holding an opponent costs".
- passing: "What batting the puck above your shoulders costs" and "Why a bank pass is only moderately reliable".
- shooting: two facts lines now name "the follow-through carve-out".
- OZP :599: "What a high tip costs."

**C11.** No reviewer re-read these repairs. Each is a label-word change confined to its finding and taken from the reviewer's sketch. This is the C11 terminating case.

## Rows

- **Closed:**
  - W518(1), the tool gaps, closed by the extension.
  - W518(4).
  - W518(5).
  - W518(8).
- **New, From W519:**
  1. Label-then-restatement stutter: "Why the slot matters: the slot is…" in about 11 rink_map entries, plus rules_primer and conditioning.
  2. Optional: the CARHA 32(c) window under the :292 heading.
  3. rules_primer label consistency, mixing gerunds and nouns, with :831 and :853 near-synonymous.

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check-arrivals`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 30 files, 0 lost. The 3 split-half candidates (body_contact :123, rules_primer :518 and :831) are false positives: none carried ⚠ in HEAD or the tree.
- `check_unit_openers`: 144 remaining, all ruled OK.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered for rule-adjacent hunks by the safety-reviewer. Rules read: NHL, IIHF and PWHL 63.2/65.2, 63.9/65.9; USA Hockey 404(b), 610(c); HC 4.8(c), 4.9(b), 10.1; CARHA 32, 46, 55(a), 59. |
| D2 exceptions | Covered: the CARHA 32(c) window, filed. |
| D3 cross-book divergence | Covered: the out-of-play act by book. |
| D4/D5 citations | Covered. The InGoal attribution was refetched twice and the link baseline updated. |
| D6 negative existence | Covered: the RVH triad is absent from Wayback captures from 2023 to June 2026 (recorded in the baseline). |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Partly covered. Labels sit in body sections; the safety-reviewer caught one body-against-facts mismatch (M1). |
| D10 facts layer | Covered: the shooting and risk_management facts edits were checked against caps. |
| D11 reader safety | Covered: one minor narrowing, repaired. |
| D12 read-aloud integrity | Not rendered. Every call was made from the markdown pair; label edits change no chunking. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: label consistency within documents, and check_links. |
| D15 rendered site | Structural only: 0 bare glyphs, no `<p>*`. Chrome not connected. |

## What this method could not have found

- **Labels the tool still cannot parse.** Examples: "*Use it for:*", "What it's good at", "*Limits:*".
- **Labels that name the wrong subject without opening on "it".**
- **How the longer labels sound aloud.** No render was done.
- **The InGoal paywalled body.** The coaching mechanism behind passivity was not reached.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
