# W480: offside timing says the puck must be completely across, Defending the Rush scopes the Women's NIHL ban to the Women's NIHL and names the US and Canadian women's bans again, and the calling caption names the blind defender (18 November 2026)

**Files changed**
- **Content:**
  - foundation/rules_primer.md
  - hockey-iq/puck_support_and_spacing.md
  - positions/center.md
  - systems/zone_entries.md
  - systems/defending_the_rush.md
- **Diagrams:** site/src/diagrams/on_ice_communication.mjs, and site/src/data/diagrams.json (rebuilt)
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan rows:** From W479 (1) (offside census), From W476 (2)(3) (British women's competitions; captions), and From W469 (4) (the-call caption).
- **Read-only censuses:** two rules-verifier runs.
- **Authors:** three agents.

## Censuses (read-only)
- **Offside timing.** All six books time the call to the puck *completely* crossing:
  - NHL 83.1, IIHF 83.1 and PWHL 85.1 say "completely crosses" in the rule itself.
  - USAH 630(a) and HC 6.11(a) say a bare "crosses" in the rule sentence, but their Notes and Interpretations say "completely". HC Interp 4 covers exactly the case of a puck still on the line.
  - CARHA 72(c) Notes 1–2.

  No corpus sentence times offside permissively, and no "every book" claim is wrong. Of about a dozen bare "crosses" sites, the fixes went to those that tell the reader when to release the trail skate, or are rule lines voiced alone. The rest are left alone: they read naturally and match USAH/HC's own rule wording. The census also refuted one brief premise: CARHA has no plane test (`plane` = 0).
- **Women's competitions.**
  - **What the WNIHL RoC covers:** Elite, Divisions 1 and 2, U16 (including a Scottish club), and the Frank Wright Conference ("normal WNIHL rules").
  - **Gaps on disk:** there is no separate junior girls' competition, and no BUIHA, Scottish women's or NIHL National rules. In-House :43 says BUIHA adopts the IIHF book.
  - **Defects found:** no unit attaches the WNIHL ban to a competition it does not govern. One body sentence (dtr :927) was ambiguous and truncated the 101.1 quotation. One list (:248) called women's hockey "barred". One facts line (:920) said "adult NIHL".
  - **Captions:** no defect.

## What changed (voiced)
| Site | Now |
|---|---|
| zone_entries :174 | "push once the puck is **fully** across" |
| puck_support_and_spacing :524 (facts Rule:) | "The puck must be completely across the blue line before your second skate is (NHL Rule 83.1 offside)". The old "before or as your second skate does" called a dead heat onside; per the rules reviewer, the new text is equivalent to 83.1. |
| rules_primer :185 | "until the puck is completely across" |
| center :280 (Key facts), :299 (Overview), :903 (CM), :994 (KT11) | "time your stride so the puck is fully across first" |
| dtr :927 | "**In a women's game in Britain the rule text is IIHF Rule 101.1 — and in the Women's NIHL, whose rules say "non-checking", do not plan a hit at all.** 101.1 itself allows body checking only "when there is a clear intention of playing the puck or attempting to 'gain possession' of the puck"…" (quotation completed; "every level of it in Britain" and "Elsewhere" dropped) |
| dtr :248 | "barred or restricted — younger age groups, non-check adult leagues, women's hockey under USA Hockey, Hockey Canada and the Women's NIHL, and IIHF women's hockey" (HEAD said "barred — … women's hockey"; the first rewrite dropped USAH 604(a) and HC 7.3, and review restored them) |
| dtr :919 (facts, voiced alone) | "In the WNIHL, do not body check — its rules say "non-checking"; in any other British women's game, IIHF 101.1 allows…" (was "elsewhere", which a US or Canadian woman could hear as hers) |
| dtr :920 (facts) | "NIHL Divisions 1 and 2" (was "adult NIHL"; the RoC covers Divisions 1 and 2 only) |
| the-call-and-who-can-see-it caption | "In this picture the defenceman going for the puck cannot see the forechecker closing from behind; the two who can, partner and goalie, cannot reach the puck, so all they can do is tell the defenceman." Cut: "Both are labelled "calls it":". 148 → 154 words; the safety block is byte-identical. |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** all eight OK. The 101.1 quotation is verbatim in both IIHF editions. :920 is checked against the Junior and NIHL RoC. The offside edits are OK, and :524 is equivalent to 83.1. **Flags:** :248 lost USAH/HC (fixed); :919 "elsewhere" (fixed); the W477 eligibility question (filed). |
| safety-reviewer | **First read:** CLEAR. :927 is upheld; no British woman is told something cheaper. The caption safety block is byte-identical. The offside edits are stricter or neutral. Same two minors (fixed). **Confirmation:** CLEAR. 0 lost markers. The :927 split-half candidate is a false positive (no ⚠ in HEAD or the tree). |
| diagram-reviewer | the-call caption: NO WORSE, leaning BETTER. It matches the PNG labels, and the amber starts at the ⚠️ in both hosts. Pronoun fix applied. |
| site-reviewer | 7 pages at 400 light on the 19:39 build: 0 bare/untreated/panels; ⚠️ = HEAD; 0 console errors. Worst windows unchanged, except on_ice_communication (43.3 → 41.3) and goaltender (43.6 → 41.9). |

### C11
The coordinator wrote no content or caption text. The later edits were the dtr :248/:919 fixes and the caption pronoun. Each repairs a reviewer finding, and the safety reviewer confirmed them against the tree and the built diagrams.json.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 19:44:36; the newest source is dtr at 19:43:56.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
  - check_counts: no change.
  - check_caption_pairs: 0.
  - check_callout_flow --bare = 0.
- **Marker pairs:** check_marker_pairs: 0 lost (1 split-half candidate, a false positive per safety).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 83.1, IIHF 83.1 (both editions), USAH 630(a) and Casebook, HC 6.11 Interps 3–4, CARHA 72(c), PWHL 85.1; IIHF 101.1 (both editions); USAH 604(a); HC 7.3; IHUK WNIHL, NIHL, Junior and U10 RoC; In-House :43 and Section 11 |
| D2 Exceptions | HC Interp 4; USAH/HC skate-on-ice |
| D3 Cross-book divergence | plane test vs skate on ice; where women's checking is barred vs restricted |
| D4 Citation integrity | 83 → 83.1; 101.1 quotation completed |
| D5 Provenance | not engaged |
| D6 Negative existence | no British women's non-checking rule beyond the WNIHL on disk (searched) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | center KF, Overview, CM and KT; dtr facts with body |
| D10 Key-facts | puck_support :524, center :280, dtr :919/:920 |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | pronoun; "elsewhere" heard alone |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer |

## Found, not fixed (plan row From W480)
1. **W477's "a girl on a junior team from U14… can be checked" (bcb :511).** The junior table makes U14+ checking. But the Sex & Gender Policy §10.1 and WNIHL :399 say competition is sex-segregated from U12, while WNIHL :431 refers to U18 female players on junior teams. The sentence is conditional and errs toward warning her. An owner or IHUK answer is needed before it is stated as an eligibility fact.
2. **"Elsewhere, 101.1 allows" units without ask-your-league** (rink_map :532, winger :757, ozp :959/:1195, bcb :191, pwtp :222, center :753, FS :1167). In-House :43 makes 101.1 BUIHA's book, so these are correct for British non-WNIHL games. No sweep.
3. **The 101.1 quotation is truncated after "playing the puck"** in defender :616 and the winger :1020 trailer.
4. **mental_game :151, "Outside the leagues IHUK runs, ask".** It implies NIHL National is settled.
5. **Remaining bare "crosses" sites** (special_teams :410/:413, nzs :666, zone_entries :20/:26/:1156, P&R :304). Nits only.

## What this method could not have found
- NIHL National, BUIHA women's and Scottish women's rules (not on disk).
- Real synthesised audio.
- Sibling "barred" lists carrying the old :248 narrowing.
