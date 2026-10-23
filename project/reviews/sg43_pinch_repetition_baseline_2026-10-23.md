# SG43: risk_management pinch safety, repetition passes on offensive_zone_play and special_teams, link baseline (23 October 2026)

## What changed

**`content/hockey-iq/risk_management.md`: the pinch section said when to pinch, never how**
- **Gap:** SG42's safety review found the page that owns the pinch decision (Key focus :26 "pinch, activate") carried no contact guidance. Only the pinch caption did.
- **Key focus :26 and KT12:** now say "pinch for the puck".
- **New facts line :581:** "Action: Pinch for the puck — check only where your league allows it and only while they still have the puck; if you can see their numbers, pull up".
- **Body :600:** "Otherwise, hold your position" now comes first, then "⚠️ **When you do pinch, pinch for the puck: check only where your league allows it and only while they still have the puck, and if you can see their numbers, pull up.**"
- **How the final wording was reached** (two review rounds):
  - The first draft ("with your stick, not the player") contradicted offensive_zone_play's "take the player where your league permits body checking".
  - Its "Otherwise" bound to the inserted clause.
  - The scoped redraft then dropped the late-hit limb.

**`content/systems/offensive_zone_play.md`: repetition pass, then a sealing contradiction resolved**
- **Repetition pass:**
  - 29 cuts of restatement and throat-clearing; prose 21,759 → 21,360 words.
  - No disclosure, coaching-choice ask, rule tier or ⚠ lost; 62 marked units, unchanged.
  - Screen sentence :709 is now "Only NHL and IIHF 69.1 (PWHL 71.1) can take a goal off for a screen outside the crease, and only one that stops the goalie moving freely in their crease". This was verified against IIHF/NHL Table 14 rows 5C and 5E, and against PWHL 71.
  - 78.5(ix) is restored as "both books list the pushed-goalie play again, more loosely, at 78.5(ix): take the conditions from 69.7".
- **Sealing contradiction:**
  - The page said both "seal the wall — never the winger's body" and "take the player where your league permits body checking".
  - It now reads, at :954: "seal the wall with your position — never by extending a hip or pinning them; check only where your league permits body checking, and never into a back turned to you". This matches HC 7.3 (a hip extended after angling is a check), IIHF women's 101.1 (no pinning along the boards) and CARHA 49(a).
  - Facts :924 reads "seal the wall with position, never by pinning; check only where your league allows, never their back".
  - :941 reads "check a winger who can see you coming".
  - The facing-the-glass trigger now ends "a reason to go for the puck, never licence to hit a player facing the glass".
  - The first repair of this contradiction had dropped the sealing scope from the facts line (critical) and put "check the winger" directly before the facing-the-glass trigger (major). Both were caught by the safety re-check and fixed.

**`content/systems/special_teams.md`: repetition pass**
- 27 cuts; prose 21,776 → 21,421 words; 55 marked units, unchanged.
- The wedge+1 handover is now stated as "when the puck moves, the nearest wedge player becomes the new +1 and the old one drops in".
- In the Check-yourself intro, "producing an answer and getting it wrong is worth more than recognising a right one — but only when you then check it" is restored. The precondition is load-bearing, per the style guide.

**`project/verification/link_baseline.tsv`**
- +43 rows, appended per the file's convention: 33 sg22b equipment rows (verbatim from the proposal), 5 sg22c rows (inferred, because the sg22c report is not on disk), and 6 SG42 policy rows.
- The 6 SG42 rows were refetched on 23 Oct, and every byte count matched.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety and rules | safety-reviewer (three passes) | **Pass 1:** CLEAR on the first edits, with 3 minors: "Otherwise" binding, the risk_management line stricter than OZP, and "reach" being opaque. **Pass 2** (on the fixes): NOT CLEAR. One critical: OZP facts :924 lost the sealing scope. Two majors: OZP :941 put "check the winger" next to the facing-the-glass trigger, and risk_management :600/:581 had no late-hit limb. **Pass 3:** CLEAR on all repairs. Verified against IIHF 101.1 and Table 14 5C/5E; HC 7.3; CARHA 49(a); NHL/IIHF 69.1 and 78.5(ix); PWHL 71; USAH Preface. It ruled that BCB's "Take the puck, not the player" at :1800/:1812 is stick discipline, not a conflict, and raised a candidate: BCB KT8 "seal with your body alone" (now a plan row). |
| Content | content-reviewer | CLEAR on the repetition passes and the first pinch clauses, with 4 minors: the Check-yourself precondition, the 78.5(ix) stub, the vague handover, and the puck/player cross-page tension. All were applied by the owning agent; the safety-relevant ones were re-checked by the safety-reviewer. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check-links: 56 pages. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_callout_flow --bare: 0. check_marker_pairs on 3 files: 0 lost. The new risk_management ⚠️ renders as warn-inline in dist. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the safety-reviewer (list above) |
| D4–D5 citations | Out of scope: no citation added. 78.5(ix) was restored with its wording verified. |
| D6 negative existence | Out of scope |
| D7 cardinal rule | Checked: every coaching-choice ask kept in both repetition passes; checking is scoped to the league |
| D8 numeric ownership | Checked: the 15.50% figure kept with its qualifiers; the 51,308 sample is still stated at the replication paragraph |
| D9 summary layer | Checked: risk_management Key focus, KT12 and facts carry the pinch cue; OZP's facts, body and the trigger bullet are consistent |
| D10 facts | Checked: two facts lines changed (OZP :924 at 191/200, risk_management :581 at 140/200); each makes sense voiced alone; check_facts --near is clean |
| D11 safety | Checked by the safety-reviewer (three passes) |
| D12 read-aloud | Partly: "Otherwise" binding and the facing-the-glass adjacency were judged by paragraph order. No SSML render of these files. |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links, check_absolutes, list counts, punctuation scan |
| D15 rendered site | Checked: warn-inline in dist for the new ⚠️. No visual pass. |

## What this method could not have found

- Unscoped "seal" wording on sibling pages (BCB KT8, forechecking_systems, defender, winger). This is now a plan row.
- Whether the sg22c five rows are the five the lost report intended.
- Chunk-level listening for the longer risk_management ⚠️ sentence.
- Whether a legal seal is executed safely at speed.
