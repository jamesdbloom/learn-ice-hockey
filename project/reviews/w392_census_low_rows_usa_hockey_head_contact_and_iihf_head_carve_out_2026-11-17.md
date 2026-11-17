# W392: the W391 census carry-overs. A match line for offensive_zone_play's hit-from-behind facts block, USA Hockey careless head contact on three pages, and the IIHF Rule 48 head carve-out on playing_without_the_puck (17 November 2026)

**Files:**
- content/systems/offensive_zone_play.md
- content/technique/passing_and_receiving.md
- content/foundation/on_ice_communication.md
- content/systems/defending_the_rush.md
- content/hockey-iq/playing_without_the_puck.md
- project/plans/OPEN_ITEMS.md
- project/reviews/w390_census_hc_high_cross_check_without_deliberate_2026-11-17.md (new evidence file; it moves the W390 site list out of the scratchpad, as the W391 gate asked)
- this record

No diagram changed.

## Source
These rows from From W391, each briefed as a hypothesis:
- (1) offensive_zone_play §8 facts block
- (2) center's "Contact with the goalie" facts block
- (4) passing :221, on_ice :608, dtr :650 and pwtp :1019

One was refuted:
- **(2) center, "Contact with the goalie" facts block.** No edit was made. The block makes no false claim and is not a closed list. The hit-from-behind price is already voiced four times on the page, including body :789. A fifth restatement would be one more place for a correction to miss.

## The rules
| Rule | What it says |
|---|---|
| USAH 602(a) | a match "shall be assessed" for reckless endangerment |
| USAH 608(a) | a minor plus misconduct, or a major plus GM |
| USAH 608(b) | a mandatory major plus GM if reckless, or for sending a player head first into the boards or goal frame |
| USAH 608(c) | a mandatory match for a reckless hit "with excessive force while the opponent is in a vulnerable or defenseless position" |
| Casebook 608 Situation 1 | a major plus GM, or a match, "must be called" for a forceful check on an opponent standing along the boards |
| USAH 620(b) | a mandatory major plus GM for intentional or careless contact with the head, face or neck |
| HC 7.5(c) / CARHA 53(b) | a mandatory match from behind into the boards or goal frame/net when the player cannot protect themselves |
| IIHF 43.2 / 43.3 | no minor for checking from behind; major plus automatic GM |
| IIHF 48.1 / 48.2 | 48 "supersedes all similar actions regarding hits to the head and neck"; 48.2 is a discretionary minor. Same in v1.1 and 2026/27. |
| HC 7.6 | supersedes for head contact; 7.6(a) is a minor at its lowest |
| NHL / PWHL 48 | no supersession clause, so they are excluded from the carve-out |

## What changed
**offensive_zone_play, new facts line :813 (294/300):**
> "Rule: Driving a player from behind into the boards or goal frame when they cannot protect themselves is a mandatory match under Hockey Canada 7.5(c) and CARHA 53(b); USA Hockey 608(c) makes any reckless hit from behind with excessive force on a vulnerable or defenceless player a match, boards or not"

- The author first wrote "on a defenceless player". Both reviewers flagged it (safety M2): it narrowed 608(c).
- It is not a closed list. NHL and PWHL 43.4 need intent, and the IIHF has no match.
- No suspension sentence was added. The safety reviewer ruled that a listener does not need one here, since neither the line nor body :823 states any book's suspension. It would not fit either.
- check_marker_pairs reports a SPLIT candidate against body :823. Both reviewers ruled it a false positive: no line in the block is marked.

**passing_and_receiving :221:**
- Adds "Under USA Hockey, careless contact with their head or neck is also a major and a game misconduct (620(b))."
- The next sentence became "If any of these is reckless, plan on a match…".
  - The rules reviewer first suggested "If either is reckless".
  - The safety reviewer's final read noted that "either" left out the open-ice 608(a) case, which 602(a) also reaches. That reviewer's "any of these" shipped.

**on_ice_communication :608:**
- The 620(b) clause became its own sentence: "Careless contact with their head or neck, from behind or not, is a mandatory major plus a game misconduct too (620(b))."
- Both reviewers flagged the first form ("— and so does careless contact…") because it followed a verbless dash run, and aloud it latched onto "sends them head first".
- "Forceful at the boards" was not added, because this is a net-front screener scene (Casebook 608 Situation 1 is limited to an opponent "standing along the boards").

**defending_the_rush :650, "Angle them wide" (safety M1):**
- The 620(b) addition made the bullet's USA Hockey sentences read as a complete list while 608(b)'s head-first trigger and the 608(a) floor were missing. That is the breakaway picture, with the goal frame right there.
- The safety reviewer's text pushed the paragraph to 1,256 bytes by the author's count, so the bullet was split.
  - :650 ends at the Hockey Canada/CARHA match sentence (632 characters).
  - A continuation inside the same list item at :652 (653 characters) reads: "**Under USA Hockey.** Even a light hit from behind is at least a minor plus a misconduct; ⚠️ **it ends your game if it is forceful at the boards, drives them head first into the boards or net, or is reckless, and so does careless contact with their head or neck.** Under USA Hockey, plan on a match and a likely multi-game suspension for any reckless one (602(a)) — mandatory with excessive force on a vulnerable or defenceless player, boards or not (608(c))…"
- The author changed "a light one" to "a light hit from behind" so the new paragraph has its own antecedent.
- The second "Under USA Hockey" restores the 602(a) scope, a rules nit.
- check_marker_pairs: 91 → 92 marked units, 0 LOST, 0 SPLIT. Each half is spoken with its own "Important." (chunks 035 and 036).

**playing_without_the_puck: the IIHF Rule 48 head carve-out, at three sites:**
- **:1019:** "On the head, its Rule 48 says it takes over and allows a minor (48.1, 48.2), but plan on the major and game misconduct anyway."
- **:1017, What it costs amber run:** now "⚠️ **No book prices a hit from behind at a bare two minutes — under the IIHF and Hockey Canada, only while it stays off the head, and on the head plan on ejection anyway — and none confines checking from behind to the boards.**"
  - The counterweight is inside the run (safety m3), in the body_contact_and_battles :51 form.
  - Before, the run voiced alone read as a two-minute window.
- **:846:** "…and under Hockey Canada while it stays off the head; the IIHF has no minor for it off the head. On the head, plan on it under Hockey Canada and the IIHF anyway."
  - "In both" was a pointer back past five books. Both reviewers flagged it.
- The rules reviewer added a note on the British In-House Rules: the IHUK In-House 2026-27 Section 4 tells officials to call a cross-check to the head as cross-checking, not head contact. That weakens "48 takes over" for In-House games and supports the plan-on advice. No edit was needed.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** nothing WRONG. ozp :813 was incomplete ("vulnerable"; 602(a) is broader). Wording issues at on_ice :608 and pwtp :846. IIHF 43 and 48 confirmed in both editions. **Final read:** all six post-review sites OK. |
| safety-reviewer | **First read:** no Critical. M1 (dtr :650 head-first and floor) and M2 (ozp :813 "vulnerable"). Minors m1–m3 (on_ice grammar, pwtp "both", pwtp amber counterweight). Every 620(b) addition is heard as USA Hockey-only. KT9 is silent, not closed. **Final read:** CLEAR, with one optional minor (passing "any of these"), applied. |

### C11
The coordinator wrote no content. Every post-review edit is a reviewer's own text, except two:
- **The dtr split.** The coordinator sketched the placement; the author wrote the text, and both reviewers read it in their final reads.
- **"a light hit from behind".** An author antecedent fix, read by both reviewers.

## Checks after the last content edit
- A full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 02:45:49, and no content file is newer.
- check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets: pass.
- check_counts --update: no change.
- check_callout_flow --bare: 0.
- check_marker_pairs: 0 LOST on all five files. 0 SPLIT on four; ozp has 1 SPLIT, the false positive explained above.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, two reads. Sources: <br>• USAH 602, 608 + Casebook Sit. 1, 620 + Casebook Sit. 4 <br>• HC 7.5–7.7 <br>• CARHA 53 <br>• NHL / PWHL 43, 48 <br>• IIHF 43, 48 (both editions) + Situations <br>• EIHL Casebook <br>• IHUK In-House 2025-26 / 2026-27 |
| D4 Citations | 608(c), 620(b), 7.5(c), 53(b), 48.1, 48.2 |
| D8 Counts | "no book", "under the IIHF and Hockey Canada", "every book but the IIHF", "any of these" |
| D9 Summary layer | dtr KT9 read and judged silent, not closed, by both reviewers |
| D10 Key-facts | ozp :813 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | every page rendered by its author into its own `--out`; the safety reviewer re-rendered dtr and pwtp |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 02:45:49 build (below) |
| D5–D7, D13 | not engaged |

**D15:** site-reviewer, five pages, Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark.

**dtr "Angle them wide":**
- The continuation renders as a second `<p>` inside the same `<li>`, aligned with the bullet text.
- The amber run has its glyph leading.
- The densest window touching the item is 30.3%.

**pwtp :1017:** a single 223-character run with its glyph leading.

Worst 400px window per page:

| Page | Worst window |
|---|---|
| offensive_zone_play | 47.9 |
| passing_and_receiving | 26.9 |
| on_ice_communication | 46.7 |
| defending_the_rush | 38.1 |
| playing_without_the_puck | 34.7 → **40.4** (the longer :1017 run) |

- **No 400px window is over 50%.**
- 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll.
- The 1440 windows over 50% are the known full-width-SVG artefact.

## Found, not fixed (plan rows)
Line numbers are as staged in this commit. Find each site by its text.

1. **ozp :1170 (300/300) does not carry USA Hockey 608(c).** It is at its cap. The commit gate notes that the next Rule line in the same block (:1171) states 608(c) in full, so this may not be a defect. Test it before editing.
2. **ozp :823 body: no suspension sentence.** Not required while no book's suspension is stated (safety). Flag only.
3. **ozp :812 Never line (200/200), disputed between reviewers.** It reads "…and the NHL, PWHL, CARHA and Hockey Canada do off the head".
   - **W392 safety m6:** only Hockey Canada (and the IIHF by 48.1) has a written head carve-out. NHL 43.5 is a GM on every major, and CARHA 53(b)'s Note forbids substituting penalties. So "off the head" may make the NHL, PWHL and CARHA head case sound conditional.
   - **W391 rules-verifier:** ruled "off the head" exact, because a head hit can fall under NHL 48 (a minor).
   - The W392 rules-verifier found that the NHL and PWHL write no rule on the 43/48 overlap (item 10).
   - Brief this as a hypothesis for both reviewers. Any fix needs a substitution at the cap.
4. **ozp :813 omits 602(a)'s broader "shall" match** for any reckless endangerment (rules, optional). The body carries it.
5. **passing :221 does not name 608(c).** The captions this page hosts (winger-dz-rim, winger-dz-reverse) were not checked for the same omission.
6. **dtr :949, :952 and facts :635** state the IIHF's "no minor" flatly, without the Rule 48 head carve-out that pwtp, body_contact :51 and dtz :753 now carry. This errs harsher. It is a propagation gap (safety m7).
7. **dtr KT9's USA Hockey match clause is 608(c) only.** 602(a) is broader; the body carries it.
8. **pwtp Sources trailer does not list IIHF 43/48.**
9. **dtr "Angle them wide" loose-list spacing (site, minor).** The paragraph gap inside the item (17.6px) nearly equals the gap between items, so only the missing bullet marker shows that "Under USA Hockey." belongs to the item. A CSS change (`li > p + p` margin) would fix it site-wide. It needs a site-reviewer pass of its own.
10. **NHL / PWHL 43 vs 48 on a hit from behind that reaches the head** is unresolved. Neither book addresses the overlap. The corpus says to plan on the ejection, which is safe.

## What this method could not have found
- Other pages that rely on the flat "the IIHF has no minor" claim without repeating its words.
- Other USA Hockey rules that also price a shove on a net-front screener.
- Real devices, and a screen reader.
