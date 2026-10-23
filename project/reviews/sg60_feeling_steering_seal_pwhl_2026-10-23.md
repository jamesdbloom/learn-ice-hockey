# SG60: "feeling" cue, steering without "push", a bare seal, and the PWHL edition (23 October 2026)

## What changed

- **offensive_zone_play :500 (facts) and center :457.** "a defender you are feeling rather than watching" used the old body-on-the-defender contact cue's word. It now reads "a defender you cannot see" / "a defender can walk you sideways before you see it coming", matching body_contact :1267 (SG59). The head-up, chin-off-chest and never-duck limbs are unchanged. No copy of the old phrase remains in the corpus.
- **language_and_glossary :200.** "Steering is shadowing the carrier to push them into an area" used "push", which HC 7.3(a) prices in non-checking divisions. It now reads "shadowing the carrier, with your route and stick, so they skate into an area…", which is close to HC's own Interpretation 1 to 7.3(a) ("steer or direct an opposing player… without actually touching").
- **offensive_zone_play :990 (facts Rule).** "Seal with body position" had no object when voiced alone, so a listener could hear it as sealing the player. It now reads "Seal the wall with body position — never hold with an arm…", using the settled SG44 forms. "Hold" was added by the coordinator after the review: the reviewer flagged "never with an arm" as too broad and named "never hold with an arm" as the fix if the line was edited (299/300).
- **PWHL edition (plan row closed).** The source-verifier confirmed that sources/pwhl_rules is the 2025-2026 book. The title page and the PDF CreationDate (14 Nov 2025) match the 2025-26 rule-changes release, and the live thepwhl.com/en/rules page links it as the most up-to-date book; the fresh fetch was byte-identical (sha256 fa4f1115…). The 11 "2024 – 2025" running headers are stale Word section headers on section-opening pages. All 39 corpus labels say 2025-2026/2025-26. **sources/README.md** gains one sentence recording the re-check. **link_baseline.tsv** gains a row for the rules page.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety (C6) | safety-reviewer, rendered (OZP 026/067, center 027, glossary 008) | CLEAR. All four changes are true, every limb is intact, and each line reads correctly voiced alone. HC 7.3(a) and Interpretation 1 verified. Seal-the-wall is consistent with SG44. check_marker_pairs: 0 lost. |
| Sources (C5) | source-verifier | PWHL edition verified as above. No instruction-like content in fetched pages. |
| Rules (C4) | not dispatched | No rule claim changed: wording only. The HC 7.3(a) and Interpretation 1 quotations were checked by the safety-reviewer. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_marker_pairs: 0 lost. |

## Dimensions

D1–D3 no rule change; D4–D5 PWHL source verified; D6–D8 and D13 out of scope; D9 checked (corpus grep for the old phrase); D10 within caps; D11 safety-reviewer; D12 rendered; D14–D15 check_links and build.

## What this method could not have found

- Sibling documents that define steering with a contact verb.
- Whether the 11 stale-footed PWHL pages carry unrevised 2024-25 text. The 2024-25 book was not diffed.
- A 2026-27 PWHL book, expected around mid-November.
