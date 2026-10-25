# SG74: wording leftovers, three caption trims, the paired-caption checker, and a dialogue mode (25 October 2026)

## Content

- **on_ice_communication, Common Mistakes.** The bullet said the icing exemption "lasts while you are a skater short". Added: "Under the NHL and PWHL, an empty box when a major expires loses it too" (NHL 81.6, PWHL 83.6). The IIHF has no such limb; its 20.3 requires an immediate substitute.
- **how_to_watch_hockey :300.** "(Rule 63.8)" scoped to "(NHL and IIHF Rule 63.8)".
- **rules_primer :1051 (faceoff table).**
  - NHL cell: "only warned after an icing" added (76.4).
  - IIHF (2026/27) cell: "only warned after an icing, then a bench minor". The safety-reviewer and rules-verifier both flagged that "only warned" alone read as the whole cost.
  - check_tables passes.
- **Hockey Canada 6.4(a) Interpretation 1 end-zone scope ("from your own end").** Added at game_management :143, risk_management :367 and :395, switching_positions :318 and :327, defender :84, and special_teams :761. These had overstated the line-change cost, never understated it.
  - A sweep agent prepared the risk_management, switching_positions and defender edits but could not write them, because the tool safety classifier was unavailable. The coordinator applied them verbatim after it recovered.
- **Standing-block glove wording completed:** defensive_zone_coverage :534, :605 (facts) and :614, and mental_game :690 now read "hands behind your body with the backs of the gloves out".
- **body_contact :913.** Attribution aligned with the trailer: "the brochure reproduced on the Hockey Equipment Certification Council's site".
- **Checked and not edited:** faceoffs :721 (refuted; it names no PWHL). rules_primer :1097 was already scoped.

## Captions

- **forecheck-roles-rotate:** 1,311 → 1,121. Narrative cut. Both hosts voice it next door (forechecking_systems 008, rink_map 042).
- **off-wing-open-to-the-ice:** 1,290 → 616. Cut limbs are voiced in switching_positions chunk 039. The post-review fix, following SG56 and the source: "If contact comes, skates parallel to the wall, forearm and hip to it…"; it was a bare "forearm and hip" with no condition.
- **winger-leaves-the-point:** 1,277 → about 690. After the safety review it now says "under a hybrid it is the job only below the line your team sets", where the trim had made it "a mistake only under low zone collapse".

## Tools

- **New worklist `scripts/check_caption_pairs.py`.** It reports when a dependent caption is not directly preceded by the caption it relies on. Declared rows: forecheck-212-stacked → forecheck-212 (every host), and forecheck-122 → forecheck-212 (how_to_watch_hockey). Result: 0 violations; self-test 10/10. Added to CLAUDE.md's scripts list. The "fragile caption dependency" plan row is now marked guarded.
- **`scripts/check_quote_drift.py`.** New `scrub_furniture()` blanks repeated running-header and footer lines at page edges, preserving offsets, before matching. It reduced not-found by 30 across 21 files, lost no clean match, and fixed the HC 6.2(a) false SPLIT. Self-test 8/8. Closes the "header splices" plan row.
- **`scripts/synthesize_style_b.py`.** Adds an opt-in `--dialogue --voice-map` mode for ElevenLabs Text to Dialogue (eleven_v4, inputs of {text, voice_id}, requests of ≤2,000 characters). It reuses the existing cache and stitching. Single-voice dry-run output is byte-identical before and after. Self-test 20/20. The endpoint has not been called live. This supports the owner's Basics two-voice pilot. The header records that adopting two voices reopens the 18 September single-voice decision, and that the decision is the owner's.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules (C4) | rules-verifier | Every changed claim VERIFIED, with quotations from NHL 81.6/76.4/63.8, PWHL 83.6, IIHF 2026/27 and v1.1, HC 6.4(a) Interpretation 1 and its examples, In-House Rule 76, and the EIHL Casebook. Flagged the IIHF bench-minor gap (fixed) and special_teams :761 (fixed). |
| Safety (C6) | safety-reviewer ×2 | Captions batch: CLEAR, with two minors (off-wing posture condition and object), both fixed. Content batch: CLEAR, with the IIHF cell minor (fixed). Not safety: the winger hybrid wording (fixed). check_marker_pairs on 11 files: 0 lost. |
| Rules, gate follow-up (C4) | rules-verifier, resumed | VERIFIED all eight current HC 6.4(a) sites from the working tree, including the two the gate found (risk_management :349 now says "a skater's unintentional puck out of play from your own end"; defender :779) and the six applied earlier. Its note that special_teams :761 was unscoped was stale: the tree and the index both carry "from your own end" there (nine sites in all). |
| Mechanical | coordinator | build-diagrams exit 0. Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_geometry, check_secrets, check_counts, check_links and check_tables all exit 0. Self-tests: check_caption_pairs 0, check_quote_drift 0, synthesize_style_b 0. |

## Dimensions

| Dimensions | Status |
|---|---|
| D1–D3 | rules-verifier |
| D4–D5 | Rule citations unchanged except scoping. The bcb :913 HECC attribution change is a provenance change, aligned with the trailer at :2139. The attribution ("a brochure HECC's site reproduces, distributed by the Massachusetts Medical Society") was body-verified by source-verifier in SG55 (sg55_hecc_attribution_iihf_case_2026-10-23.md: hecc.org/headsup.html refetched, brochure contact and distribution lines located). This edit brings :913 into line with that verified wording. |
| D6 | IIHF empty-box negative tested (81.6, Situation Handbooks, EIHL, In-House) |
| D7, D8, D13 | Out of scope |
| D9 | The 6.4(a) claim: seven sites scoped by the sweep, and the gate found two more (risk_management :349, defender :779), now scoped too. Nine in total, each now saying "from your own end" with the goaltender exclusion where the line names skaters. Other wordings not caught by grep for "6.4(a)" or "line change" may remain. |
| D10 | Caps checked with `--near` |
| D11 | safety-reviewer |
| D12 | Rendered |
| D14–D15 | check_links, check_tables, build |

## Gate BLOCK and repair

The first commit-gate pass blocked on two points. First, the 6.4(a) scope had not reached risk_management :349, and defender :779 needed a ruling; both are now scoped and verified. Second, C5 needed a source for the bcb :913 attribution. It points to SG55's source-verifier body check, and the D4–D5 line is corrected. Tidy-ups from the gate:
- the plan rows these edits closed are removed;
- the stale comments in winger.mjs and positions.mjs are corrected;
- CLAUDE.md's tts_sample "single-voice" note now records the opt-in dialogue pilot.

## What this method could not have found

- How the dialogue endpoint behaves live (billing, seams, settings).
- Whether "your own end" is heard as the end zone or as your own half of the ice. If heard as half, it errs harsher, so it stays safe.
- Copies of these claims worded differently in files outside this sweep.
