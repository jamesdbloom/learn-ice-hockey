# W512: the deliberate-injury match in the owner document, and the ruling for the corpus-wide wave (20 November 2026)

This is phase 1 of plan row W511(1). One editing agent, which owned content/technique/body_contact_and_battles.md exclusively, repaired the owner's units listed in the census `hc_7_5c_intent_limb_census_2026-11-20.md`. In parallel, a safety-reviewer ruled on the census's judgement call and on the repair form, to set the rules for phase 2.

## Review

| Reviewer | Scope | Critical / major | Findings |
|---|---|---|---|
| safety-reviewer (ruling) | the census judgement, on eight sample units in seven documents, all rendered; HC 7.1–7.7 and 8.5, NHL 21.1 and 43.4, PWHL 21.1, USA Hockey 602(a), CARHA 48(a) and 53 | — | The wave ruling below. |
| rules-verifier | the four owner edits, against HC 7.1(c), 7.5–7.7 and 8.5(c) and Table Note 1; NHL and PWHL 21.1, 43.1–43.5; USA Hockey 602(a), 603 and 608 plus Casebook 602 Situations 1–4; CARHA 2026 48 and 53; IIHF 20, 21, 40, 43 (both editions) and the Situation Handbook; the EIHL Casebook; In-House Rules | none | All four confirmed. Minors F1–F4 below. |
| safety-reviewer | the four edits after repair, rendered (chunks 068, 123, 125, 199); a layer test for the old "NHL, PWHL only" frame | none | Two wording minors, both repaired. No layer is built on the old frame. |

**What the rules-verifier confirmed.** Every book but the IIHF makes a hit meant to injure a match, mandatory once intent is found:
- NHL and PWHL 21.1 "shall be imposed". NHL and PWHL 43.4 word the from-behind match as discretion; the finding of intent is the referee's judgement.
- USA Hockey 602(a) "shall be assessed", which is broader than intent ("recklessly endangers or attempts to injure").
- Hockey Canada 7.5(c), 7.6(c), 7.7(c) and 8.5(c) "will be assessed".
- CARHA 48(a) "shall be assessed … in any manner".

**The IIHF has no match penalty in either edition.** The rules-verifier checked by flattened search for the label and for three wordings of the act. A from-behind hit that recklessly endangers is a discretionary major plus an automatic game misconduct (43.3, 20.4).

**Rules-verifier minors.**
- **F1.** Facts :765 lost the five books' citations. Not restored: the line is at the cap and the block at HARD_MAX. Recorded in the plan.
- **F2.** "which ejects instead" stated the IIHF's discretionary ejection flat. It is now "plan on ejection".
- **F3.** Common Mistakes :2087 did not say what the IIHF does. It now adds "there, plan on a major and game misconduct (43.3)".
- **F4.** The goalie paragraph now cites 8.5(c) for intent.

**Safety-reviewer minors.** "bar" became "but" (it can be heard as a noun), and "is one anywhere" became "is a match anywhere". No reviewer re-read these two one-word repairs. This is the C11 terminating case.

## What changed (content/technique/body_contact_and_battles.md)

- **Facts :765.** "…NHL, PWHL: meant to injure (21.1); IIHF: no match, but 43.3 ejects (20.4)" implied that Hockey Canada, CARHA and USA Hockey have no intent match. It now reads "…meant to injure: every book but the IIHF (plan on ejection: 43.3, 20.4)".
- **Facts :1412.** It carried only the defenceless match, both from behind and on the head. It now reads "a match if defenceless or meant to injure, head or not (7.5(c), 7.6(c), 7.7(c))". The two match clauses were merged, so no limb was dropped.
- **Common Mistakes :2087.** After the goal-frame match it adds "A hit meant to injure is a match anywhere in every book but the IIHF; there, plan on a major and game misconduct (43.3)".
- **Body :1391** (found by the agent, not in the census). For a goalie head hit it now reads "…who could not protect themselves, or one meant to injure, is a match (7.6(c); 7.7(c); for intent, 8.5(c) too)". In minor and female hockey 7.6 supersedes, so 7.6(c)'s own intent limb is the one that applies.

## The ruling for phase 2

The plan row W511(1) carries this in full:

1. **The limb is not Hockey Canada-specific.** Repair with the corpus's all-book sentence, intent first, once per unit. Never graft an HC-only clause.
2. **Never drop the boards/net limb.**
3. **A GAP is only an explicit match gate or a book-by-book list of match routes.** Leave alone floors that name a situational limb, and units whose all-book intent statement is heard in the same chunk. This departs from the census's rule that "a neighbour never cures it".
4. **Each document's owner section carries the intent sentence once**, in the body and in its facts block.
5. **Facts lines at the cap are repaired by substitution only.**
6. **CARHA 53(a)'s discretionary unconditional match** is a follow-up.
7. **Severity is minor**, because every unit already says never to make the hit.

On the eight samples the reviewer ruled:
- **GAP:** center :707, center :911, zone_entries :239 (weak), special_teams :1243 (strongest).
- **GAP on the unit but largely cured in context:** risk_management :861.
- **Not a ceiling:** on_ice_communication :593, shooting :511, defending_the_rush :411.

## Rows

- **W511(1)** stays open for phase 2, with the ruling and the owner's remaining items added (:764's head portion, :765's citations, and the optional Common Mistakes :2068–2069).

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check-arrivals`.
- Full `npm run build` with the v22.23.4 binary: exit 0. The final Common Mistakes text is in dist.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 203 marked units at HEAD and in the tree, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered (rules-verifier; both safety-reviewers grepped the core books). |
| D2 exceptions | Covered: 43.3's discretion and condition; 7.7(c)'s attempt-only wording; NHL and PWHL 43.4's "may" against 21.1's "shall". |
| D3 cross-book divergence | Covered: the intent match by book; the IIHF's absence. |
| D4/D5 citations | Covered: 8.5(c) added; :765's citation loss recorded. No URL added. |
| D6 negative existence | Covered: "the IIHF has no match penalty", searched by label and by three wordings of the act, in both editions and the British books on disk. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered: the safety-reviewer's layer test for the old "NHL, PWHL only" frame across every layer. Key focus :15/:35 and KT6 agree. |
| D10 facts layer | Covered: two facts lines repaired, each read alone in the render (chunks 068, 125). |
| D11 reader safety | Covered: two safety-reviewer passes. Every edit makes the act dearer, never cheaper. |
| D12 read-aloud integrity | Covered by the agent's and the reviewer's renders. The last two one-word repairs were not re-rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: check_links; "bar" → "but". |
| D15 rendered site | Structural: 0 bare glyphs, no `<p>*`, and the new text is in dist. Chrome not connected. |

## What this method could not have found

- **EIHL supplementary discipline.** The EIHL Department of Player Safety's discipline for an intent-to-injure hit is not on disk.
- **Units with no lexical trace.** A layer built on the old frame without the words "injure", "intent" or "21.1".
- **The rest of the corpus.** Other documents carry the census GAPs; that is phase 2.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
