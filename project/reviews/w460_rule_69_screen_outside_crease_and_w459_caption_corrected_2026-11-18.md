# W460: the W459 screening-caption "fix" is undone — a screen outside the crease keeps the goal even if it impairs the goalie's defending, and the in-crease limb is added where it was missing (18 November 2026)

**Files changed**
- **Content:**
  - positions/winger.md
  - technique/body_contact_and_battles.md
  - hockey-iq/scanning_and_anticipation.md
  - hockey-iq/time_and_space.md
  - systems/offensive_zone_play.md
- **Diagrams:** site/src/diagrams/playing_without_the_puck.mjs and site/src/data/diagrams.json (rebuilt)
- **Also:** project/plans/OPEN_ITEMS.md and this record

## What went wrong, in order
1. **W459, rules-verifier.** It ruled the screen-the-goalie-sightline caption WRONG because the caption omitted the second limb of 69.1: *"impairs the goalkeeper's ability to move freely within his crease **or defend his goal**"*. Its text, "or defending their goal", **shipped in d1895bf3**. The safety reviewer, the commit gate and the coordinator all passed it.
2. **W460 brief (coordinator).** The brief called the one-limb wording permissive and sent twelve agents to add "or defending their goal" at about 24 sites.
3. **Three agents refuted the brief from primary text:** goaltender, core_principles and playing_without_the_puck. The last of these refused to edit. Table 14 Situation 5, in the NHL (`nhl_rules.txt:12240-12301`), IIHF 2026/27 (`:10010-10047`; v1.1 `:9909-9945`) and PWHL (`:10865-10890`) books, says:
   - **5C**: in motion *"outside the crease"* and *"impairs the goalkeeper's ability to defend his goal"* — **Goal is allowed**.
   - **5E**: planted *"on the crease line or outside the goal crease"*, obstructing vision and impairing the ability to defend — **Goal is allowed**.
   - **5B and 5D**: inside the crease — **Goal is disallowed**. See also 69.3, `nhl_rules.txt:7210-7213`: *"establishes a significant position within the goal crease… impair his ability to defend his goal"*.

   The "defend" limb therefore applies only through a position **inside** the crease. Adding it to a sentence about a screen outside the crease makes the sentence stricter than the books. It also contradicts the "a screen outside the crease keeps the goal" that those same sentences carry.
4. **The coordinator stopped the remaining agents.** The body_contact_and_battles and winger agents had already caught the error and added only the in-crease limb. The offensive_zone_play agent reverted its edit.
5. **Rules re-ruling.** The rules-verifier re-read the books itself and **withdrew its W459 finding**: *"I read the 69.1 text alone and did not open Table 14… the 'one rule read, not the book's whole answer' failure."* It ruled on every W460 edit.

## Outcome (per the rules ruling)
- **Reverted to HEAD.** The coordinator ran `git restore` on these files. Each file carried only the wrong W460 hunk, and its agent had finished:
  - core_principles :138
  - center :502, :771, :774
  - goaltender :550
  - faceoffs :472
  - zone_entries :365
  - shooting :279, :296, :468
- **Reverted by their authors:** scanning :347; time_and_space :277 and :555.
- **Kept, because they add only the in-crease limb:**
  - winger :504 facts ("screening from the crease") and :770 ("a screen from inside the crease")
  - bcb :1329 facts ("or a screen held inside it… (Situations 5 B and 5 D)") and :1340 ("— and a screen held inside the crease costs it too", inside the ⚠️ run)
- **Replaced:**
  - scanning :369 lead-in: "Impeding the goalie is different."
  - time_and_space :553: "so outside the crease the rule protects the goalie's body and room to move, not their view"
- **New repair (permissive at HEAD):** offensive_zone_play :616 facts read "the tables allow a screen that impairs defending (5C, 5E)" with no location. Heard alone, that covers an in-crease screen, which 5B and 5D disallow. It now reads "…a screen **outside the crease** that impairs defending". The rules reviewer confirmed it.
- **Caption screen-the-goalie-sightline (live since d1895bf3):** "…but contact, a position that stops the goalie moving freely in their crease, **or a screen held inside it**, can still cost the goal (NHL and IIHF 69.1 and 69.3)". The source comment now records the withdrawn finding and says not to re-add the limb for an outside screen.

**The correct form, for every future site:** "A screen outside the crease keeps the goal, but contact, or a position that stops the goalie moving freely in their crease, can cost it — and so does a screen held inside the crease." Never attach "or defending their goal" to a position outside the crease.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | Re-ruled after reading 69.1, 69.3 and Table 14 5A–5E in all three books. W459 finding withdrawn. Per-site ruling as above. ozp :616 confirmed. |
| safety-reviewer | CLEAR. None of the eight remaining changed units is cheaper than HEAD; each is stricter or more accurate. "Important." counts are equal in all five files. The caption still opens "Important." in all three hosts. |
| site-reviewer | bcb, winger and pwtp at 400 light/dark and 1440 light on the 14:41:06 build. The bcb :1340 amber run forms and includes the new clause. The caption shows the new text and "defending their goal" is gone. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. |

### C11
The coordinator wrote no content. The coordinator's `git restore` returned six files to committed, reviewed text. The rules reviewer ruled those edits wrong, and the restore removed only hunks the coordinator's own agents had made in this wave.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 14:41:06; the newest source is pwtp.mjs at 14:39:12.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
  - check_counts made no change.
  - check_callout_flow --bare is 0, and `--panels --file` is 0 on all five content files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.
- **Coordinator grep** for "defend(ing) … goal" in content: every remaining hit is a verbatim rule quotation or in-crease scoped, except special_teams :1075 (filed below).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 69.1, 69.3, Table 14 5A–5E; IIHF 2026/27 and v1.1 69.1(I), 69.3, Table 14; PWHL 71.1 and its table |
| D2 Exceptions | 5C/5E outside-crease allowance |
| D3 Cross-book divergence | NHL, IIHF and PWHL identical on 5A–5E |
| D4 Citation integrity | caption now cites 69.3 for the in-crease limb |
| D5 Provenance | not engaged |
| D6 Negative existence | not engaged |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | every layer swept per document by its author |
| D10 Key-facts | winger :504, bcb :1329, ozp :616 voiced alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | ozp :616 heard alone was the lenient reading |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Lessons (for review_process, not content)
- **A reviewer's replacement text is a claim.** This is the second time in this run (W453's "only if" was the first) that a rules-verifier's own wording shipped wrong and every downstream gate passed it.
- **A rule and its book's worked situations are one answer.** Reading 69.1 without Table 14 is the "verified quotation of an incomplete rule" shape that CLAUDE.md names.
- **Tell agents to refute the brief.** Brief-refutation by agents caught it before it propagated. The instruction "refute the brief before acting" did its job three times out of twelve.

## Found, not fixed (plan row From W460)
- **special_teams :1075** states both 69.1 limbs with no location scope near a screening context. It needs a read against 5C/5E.
- **The "first limb" wording** at ozp :616 and :638 names only the movement half of limb (1). This is a nit.
- **USA Hockey, Hockey Canada and CARHA** in-crease screening rules were not re-checked in this wave.

## What this method could not have found
- A one-limb or two-limb claim worded without "crease", "freely" or "defend".
- Real synthesised audio.
