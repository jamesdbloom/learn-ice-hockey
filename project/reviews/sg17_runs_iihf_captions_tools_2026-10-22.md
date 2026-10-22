# SG17: remaining "Important." runs, IIHF ceilings, HC 7.11 interpretation, caption and title leftovers, checker tools (22 October 2026)

## Changes

**rules_primer**
- **Markers.** The body-fouls run of 11 and the runs of 8 (boarding/charging, Common Mistakes, KTs 3–10) are broken.
  - 9 markers removed: :451, :457, :494, :499, :502, CM :1083, CM :1086, KT3, KT7. KT4's marker moved onto "Play as though one major ends your game".
  - Spoken "Important." went from 194 to 185. The longest run is now 6 (elbowing/helmets and crease contact, both still open).
- **IIHF lines.** No match penalty exists in the IIHF books, so the claim is accurate. Where it was missing, "supplementary discipline can follow" was added: :388 (28.1), :476 (45.5), :477 (50.4).
- **:497 was wrong** ("not settled by its text"). It now says only the IIHF stops at the minor for holding (54.2), because Rule 21 reaches only an act no playing rule covers; supplementary discipline can follow (28.1).

**body_contact_and_battles**
- 3 markers removed (:207, :392, CM :1986). Runs of 4 in §1, §3 and CM are broken. The KT run of 4 is kept on purpose: each takeaway is a distinct injury or ejection hazard.
- :1699 now says HC's Interpretation 2 to 7.11(c) "lets the referee give 7.1(c)'s match in extreme cases despite 7.11(c)'s own no-match bar, so plan on the match". This replaces "the book does not reconcile the two".

**defending_the_rush :734 (facts, 298/300), :751, :1130:** "nothing joins them" is replaced by HC's own example: Interpretation 2 to 7.11(c) "allows" 7.1(c)'s match, in extreme cases, despite a no-match bar. "Plan on the match" is kept. risk_management needed no change.

**Diagrams** (site/src/diagrams/*.mjs; diagrams.json rebuilt)
- **winger-arriving-at-the-line:** posture mechanics dropped. The host is open-ice blue-line timing; "never turn your back… never duck" is kept.
- **the-last-player-back:** demoted to WALL_POSTURE_SHORT; self-narration removed.
- **puck-on-the-far-side:** self-narration removed.
- **Comments:** breakouts rim comment fixed; the wall_contact_clauses list now names seven captions.
- **Titles.** 15 titles that repeated their own caption were renamed (screen readers hear the title as the image name). The other 16 were kept: definitions led by their term, or no adjacent repeat.

**Checker tools** (scripts/)
- **check_readability:** a bare `>` now ends a blockquote paragraph, and `**Related:**` lines are skipped. Corpus long paragraphs went 45 → 28. It now uses argparse.
- **check_layer_echo:** the Key Takeaways layer stops at the Sources trailer. CM↔KT mean went 3.3% → 4.26%.
- **check_pointers and check_zones:** unknown flags now exit 2. check_pointers resolves paths from the repo.
- **check_caption_echo:** stacked diagrams compare against the prose above the stack; comparison stops at a heading, fence or bare `>`. Hits went 24 → 25 (new, real: getting-beaten-wide in switching).
- Every before/after was run against a frozen content snapshot.

## Reviews

- **rules-verifier: 5 hold, 1 light fix, 1 wrong.**
  - "applies" overstated HC Interp 2's "may… in extreme cases" → "allows"/"lets the referee give".
  - body_contact :1699 had an ambiguous referent → named.
  - rules_primer :497 was wrong → fixed.
  - **Re-read: CLEAR.** "Only the IIHF stops at the minor" holds across the paragraph's books; the EIHL Casebook and In-House Rules don't depart.
- **safety-reviewer: CLEAR.**
  - All 12 LOST markers judged, including the three relaxed-adjacency calls (:457 suspension accounting; CM :1086 bench-door minor; KT3 late-change minor). KT7's checking-from-behind hazard is still voiced by Key focus 1.
  - The captions and the 15 titles don't misdescribe their diagrams.
  - Optional minor applied: the ⚠️ is restored on "Interference is not capped at a minor" (:492) and moved off the minor-only screening sentence (:494).

## Gates (after the final edit, no pipe)

- build-diagrams and `npm run build` exit 0 after the final edits.
- check_callout_flow --bare: 0 glyphs without visual treatment.
- check_facts, check_links, check_absolutes, check_geometry and check_secrets pass.
- check_marker_pairs: 3 files, 12 LOST, all intended and reviewed (rules_primer 9, body_contact 3).
- check_counts: no change.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier ×2 |
| D5, D6, D8, D13 | Out of scope |
| D7 | ✓ |
| D9 | ✓ The HC 7.11 claim was aligned across defending_the_rush and body_contact. Every marker removal was layer-checked |
| D10 | ✓ Facts caps respected |
| D11 | ✓ safety-reviewer CLEAR |
| D12 | ✓ Run lengths re-rendered |
| D14 | ✓ |
| D15 | ✓ site-reviewer PASS (run after the gate blocked on C10). Headless Chrome via CDP, switching_positions, puck_handling and winger at desktop and 400px, light and dark: the accessibility tree names each SVG with its new title; captions render in full with warn-inline on every ⚠️; no overflow; console clean. All 15 renamed titles are the SVG `<title>` on all 18 host placements, and no old title remains. |

## Still open

- **rules_primer runs:** 6 (elbowing/helmets; crease contact), 5 (screening; CM faceoff/glass), and 4s.
- **body_contact:** a run of 4 at :1735–1741 (stick above the shoulders).
- **IIHF act search:** could a hold that deliberately injures be called as roughing (51) or another rule with a major? This needs an act-keyed search.
- **Checker tools:** other scripts may still exit 0 on an unknown flag. check_pointers can't see pointers to sibling documents.
- **Unverified:** PWHL 21.1 at body_contact :1699 (the verifier's grep hit a tool limit).

## What this method could not have found

- Whether the remaining runs still numb a listener, which needs a listening judgement.
- What VoiceOver or NVDA actually announce. Only the computed accessible name was checked.
- Real devices.
