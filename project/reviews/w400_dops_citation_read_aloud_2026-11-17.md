# W400: the IHUK discipline citation is read as "Appendix C one and Section eleven", not "C point one, s point eleven" (17 November 2026)

**Files:**
- scripts/md_to_speech.py
- project/plans/OPEN_ITEMS.md
- this record

No content or diagram changed.

## Source
From W399 (1). The W395 change folded "(IHUK DOPS C.1, s.11)" into DOPS facts lines across the corpus. That citation reached the SSML as unhandled "DIGIT ONE" constructs (`--report`), so a listener heard the dotted forms read literally.

## What changed (coordinator, between waves)
Five LEXICON rows were added at the top of the tuple:

| Source | Spoken as |
|---|---|
| `DOPS C.1, C.2, s.11` | DOPS Appendix C 1, C 2 and Section 11 |
| `DOPS C.1, s.11` | DOPS Appendix C 1 and Section 11 |
| `DOPS C.1` | DOPS Appendix C 1 |
| `Appendix C.1` | Appendix C 1 |
| `Appendix C.2` | Appendix C 2 |

- **Order.** LEXICON applies in tuple order with `str.replace` (the reviewer checked :2703 and :2711); it is not longest-first. The rows are written longest-first by hand, and a comment now says that order matters. No rendered output contains a string that an earlier or later row would match.
- **The comment no longer carries a count.** The first draft said "about eight facts lines"; the reviewer's sweep found 10.

## Review
**content-reviewer: CLEAR.** The coordinator wrote the change and did not review it.
- **Wording.** "Appendix C", C.1, C.2 and "Section 11" are the DOPS document's own terms: eih_dops_2026-27.txt :227/:335 "Appendix C - Suspension tariffs", :338 "C.1 Guiding Principles", :349 "C.2 Tariff Bands", :17 "11. Suspensions", :768 "Sections 6–13".
- **Sweep.** Every `C.1`, `C.2` and `s.11` in content/ is a DOPS reference, so there are no false matches:
  - 8 × "DOPS C.1, s.11" and 2 × "DOPS C.1, C.2, s.11";
  - Appendix forms in eight documents;
  - bare "C.1" in body_contact :2221 and uk_rules :680, which sit in unvoiced trailer layers and did not appear in any SSML.
- **Renders.** The reviewer rendered risk_management, goaltender, special_teams, body_contact_and_battles and uk_rules (72, 136, 87, 204 and 49 chunks). Every UNRECOGNISED CONSTRUCTS section reads "(none)". With tags stripped, the SSML reads "(IHUK DOPS Appendix C one and Section eleven)" and "(IHUK DOPS Appendix C one, C two and Section eleven)".
- **Minor nits, both applied.** These were the reviewer's own comment text: drop the count, and record the order dependency.

## Checks
- The site build does not use md_to_speech, and no content changed, so dist is unaffected.
- check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts reports no change.

## Dimensions
| Dimension | Coverage |
|---|---|
| D12 Read-aloud | content-reviewer: five renders with `--report`, and a corpus sweep for false matches |
| D4 Citation integrity | the spoken form matches the DOPS document's own headings |
| D1–D3, D5–D11, D13–D15 | not engaged: no content, rule, facts or site change |

## Found, not fixed (plan rows)
1. **LEXICON ordering is enforced only by hand.** A future shorter "C.1" row inserted above these rows would consume them. A guard or test could enforce it.
2. **DOPS references written another way would be missed.** "Appendix C, paragraph 1" or "s 11" would not match these rows (none exist today).
3. **Diagram captions were not searched for "C.1".**

## What this method could not have found
- How a real TTS voice says "Appendix C one".
- The six documents not rendered by the reviewer (center, defender, winger, game_management, offensive_zone_play, playing_without_the_puck). Their DOPS strings are byte-identical to rendered ones.
