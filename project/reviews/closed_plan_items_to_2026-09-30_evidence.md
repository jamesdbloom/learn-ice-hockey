# Evidence for plan items closed by later work — clean-up of 30 September 2026

Companion to [closed_plan_items_to_2026-09-30.md](closed_plan_items_to_2026-09-30.md) (the verbatim archive of OPEN_ITEMS.md at commit 6401d61). Six triage agents judged these items already fixed at HEAD, on the evidence given with each. An independent verifier sampled 85 and found 2 wrongly closed (reopened in OPEN_ITEMS.md); the rest are not individually re-verified — see the Records row in OPEN_ITEMS.md. Section D lists items the verifier or coordinator moved to closed after the draft.

## A. Rows the triages placed in their OPEN list but marked closed themselves (excluded from the draft)

- [T2] [body_contact:1750] (now :1795) — decided: CARHA now mentioned; closed. — (see §5) — **excluded because:** T2 marks closed (see its §5)
- [T2] [goaltender 21/KT] (closed — see §5) — **excluded because:** T2 marks closed (see its §5)
- [T2] [P1] puck_handling.md KT (was KT11 "rules appendix") — closed; see §5. — **excluded because:** T2 marks closed (see its §5)
- [T2] [P2] forechecking_systems chunk orphans / six forechecking Key-focus… (closed — see §5) — **excluded because:** T2 marks closed (see its §5)
- [T5] (none new — PWHL footer stale header and 43.3 cross-ref to 45.5 already in sources/README per 26991; see GUIDANCE) — **excluded because:** T5 says "none new" — not a row

## B. Rows kept OPEN in the draft although a triage leaned closed (verifier ruled — see section D)

- [T5] [defender KT9] defender.md KT9 lost "if you go down, go down toward the shooter, not sideways" → safety-reviewer (plan 23490–23492) — ruled safe at 25011 (Action: line is sole extraction carrier, must not be trimmed) → treat CLOSED with standing condition — **note:** triage 5 suggests CLOSED with a standing condition (ruled safe at plan 25011; the Action: line is the sole extraction carrier and must not be trimmed) — verifier to confirm
- [T5] [puck_handling counts] puck_handling.md:961/KT8/KT9 — now uses "six books"; KT kicking counts likely CLOSED-BY-LATER (not verified line by line) — **note:** triage 5: likely closed by later work, not verified line by line
- [T5] [CARHA slew act] — sweep CARHA "knock/kick/sweep the feet" (done at 24339: clean) → CLOSED; PWHL/others act sweep on "bare-minor by name" label remains (plan 23634–23636) — **note:** CARHA half swept clean at plan 24339; only the PWHL/other-book act sweep remains
- [T5] [site-review owed] faceoffs.md, center.md after demotion wave — --panels/--bare unrun, four lines moved ⚠️ relative to strong runs (plan 27629–27630) — likely superseded by later builds; verify — **note:** triage 5: likely superseded by later builds — verify
- [T2] [site D14] Caption `entry-trail-skate-drag` (site/src/diagrams/zone_entries.mjs:1198) names only NHL/IIHF while zone_entries.md reaches six books — verify. (plan 10074) — **note:** triage 1 records this caption as repaired at plan 2006 (closed); triage 2 keeps it open to verify — (triage disagreement)
- [T5] [act-sweep vs 604] passing_and_receiving.md — 604 scoping ruled not required (closed at 23967) — **note:** triage 5 lists this in OPEN but says "closed at 23967" — verifier to confirm

## C. The six triages' CLOSED-BY-LATER-WORK sections, verbatim

### Triage 1 — its §5


- winger :651 "can cost a match penalty nowhere near the boards" (plan 1422) → winger.md:653 now "…costs a match penalty nowhere near the boards — USA Hockey 608(c) names no place at all".
- winger contrast "USA Hockey 608(c) writes its match penalty with or without board contact" (plan 1757) → grep 0 in winger.md.
- zone_entries :1063 CARHA "53(a) reaches a match penalty with no boards" (plan 1740) and ze :754 "heaviest price on the boards version" (plan 1929) → both grep 0 in zone_entries.md.
- DTR double adverb "deliberately attempting to or injuring" (plan 1455) → grep 0; defending_the_rush.md:307 reads "deliberately attempting to injure".
- DTR shared predicate "for deliberate injury" (plan 2760) → grep 0 in defending_the_rush.md.
- DTR HC 8.8(c)/CARHA 86(b) "eject only by a match" pairing and bare "Three of the other five" (plan 2792, 2803) → defending_the_rush.md:651 names slew-footing and says "Hockey Canada 8.8 ejects only by a match; CARHA 86(a) can eject without one".
- Offside residue "legal under all four rule sets" at rules_primer/rink_map/ze/t&s (plan 2664) → grep 0 corpus-wide.
- entry-trail-skate-drag caption missing PWHL (plan 2082) → site/src/data/diagrams.json caption now has "PWHL Rule 85.1 that skate could instead be held in the air".
- Glossary C6 Critical/Majors (plan 3376–3424: KT12 HC 7.5(c), KT11 CARHA, 8.5(b)/66(e) injury route) → language_and_glossary Key Takeaways now carry 7.5(c) ×2, 52(b) ×2, 66(e), 8.5(b).
- Glossary "the one clause in the four books…" and NHL 43.4 (plan 3063, 3081) → repaired at plan 2919 (recorded) — CLOSED.
- breakouts KT9 trapezoid "neither USA Hockey nor Hockey Canada has one" (plan 3729) → phrase gone; breakouts.md:967–980 now covers the restricted area with 27.8.
- offensive_zone_play KT11 "two of the five have no crossbar at all" (plan 4200) → grep 0.
- special_teams "the five books" used for two different sets (plan 4193) → no longer present.
- special_teams :635 IIHF-no-match leniency (plan 4559) → special_teams.md facts now "The IIHF writes no match penalty, but its 43.3 major…".
- center :468 / winger :491 "Hockey Canada is the fourth answer and the strictest" (plan 4618) → grep 0.
- goaltender :1547 CARHA 54(b) "above your shoulders" (plan 4457) → grep 0 in goaltender.md.
- goaltender :880 high stick "it is not a penalty" (plan 4851) → grep 0.
- forechecking_systems trailer missing sentence terminator before "⚠️ Note the scope of those sub-sections" (plan 4446) → now `…of this rule." ⚠️ **Note the scope…`.
- Goaltender peacemaker uncovered (plan 3978) → goaltender.md:1035–1038 carry HC 7.10(e)(ii) and a CARHA goalkeeper limb (37(c)).
- Penalty-shot spin-o-rama ban reaches shootouts (plan 4837) → shooting.md:923 KT7 "On a penalty shot or a shootout attempt…" (goaltender not re-checked).
- USAH Declaration head-contact redirect "penalized as head contact" absent from content (plan 2288) → now in rules_primer.md and passing_and_receiving.md (propagation to bc/others not checked).
- center KT8 "without leaning on a goaltender who already has the puck" (plan 5094) → phrase survives only at center.md:456 (body, correctly limiting 69.7).
- body_contact :1196 "607(e) adds a match penalty option for reckless endangerment" (plan 4914) → grep 0 (other house-form sites unverified; row kept open).
- slash sites pwtp NHL/IIHF 63.2(ii)/42.1, fc "NHL/IIHF counterpart", rules_primer "IIHF/NHL split" ×2 (plan 3948) → no longer present (grep); equipment `CAN/CSA` remains.
- DZC :738 "all five books" (plan 324), gm KT8 :1173 "two of the four books" (plan 323, 786), faceoffs facts :1030 unscoped post-icing (plan 334), time_and_space OV :44 steer/lean (plan 531, 383), time_and_space KF :22 stick on blade (plan 325), rules_primer :344 gain-the-line HC (plan 336), rules_primer item 10 Casebook 624 Sit 9 (plan 407), body_contact CM :1777/:1779 CARHA avert (plan 408), special_teams facts :1089/:1090 (plan 326, 342), pwtp EIHL KT11 pointer (plan 318) — all recorded fixed in the later W21/W22 log lines of the same slice.
- HC 6.7(d) "reads as all-optional" (plan 525) → fixed in W9/W10 C10; spot-check: center.md:628 "applies the no-change rule only in U18AAA, Junior and, at the Member's option, Senior"; no other "Member's option" hit reads all-optional.
- "glass and out" without "not over it" census (plan 477) → only rink_map/rules_primer/passing hits, all "never over it"/descriptive.
- WNIHL rows (plan 450, 538) → fixed in switching, team_play, DTR (W10/W11/W13 logs).
- PWHL 84.1 exceptions row (plan 526) → REFUTED in W10.
- check_marker_pairs blockquote under-count (plan 850–859) → fixed (plan 576, units per blockquote inner paragraph; `--base`).
- `.warn-inline` gap before punctuation, glyph wrap at 400 px, equipment heading U+FE0F ToC glyph (plan 547, 600, 655, 792) → fixed by W12 CSS/NBSP (plan 441–442) and W11 heading-marker move (plan 449).
- P2 panels (plan 103 carried row) → 0 amber panels site-wide after W13 (plan 127).
- "REBUILD BEFORE ANY DEPLOY" (plan 4472) → superseded by every later wave build.

### Triage 2 — its §5


- puck_handling.md four-book kicking frames (plan 5731): "the one of the four" and "two-minute mistake" return 0 in content/technique/puck_handling.md.
- passing_and_receiving.md :464/:452 (plan 5731): "put kicking the" and "barred in all four" return 0.
- British kicking/slew-footing search (plan 5715): closed by plan 5646–5658 (all British extractions read; only ihuk_coaching_regs unopened → kept as open row).
- shooting.md spin-o-rama KT (plan 5898): "write no rule either way" gone; shooting.md:705 now states the positive requirement.
- CARHA 66(e) in body_contact_and_battles.md (plan 5915): now at body_contact_and_battles.md:1523 ("66(e) makes the major mandatory where it injures").
- offensive_zone_play.md:633 "strictest of the four" (plan 6005): phrase absent from ozp.
- defensive_zone_coverage.md:517 / defender.md "three of the four" (plan 6020): 0 hits in both files.
- 6141 row 7 (ihuk_junior_roc Appendix D never read): closed by plan 5550–5557 (read in full, `_layout:1473-1640`).
- W1 winger half (plan 6249): winger.md:460 now "NHL and IIHF Situation 5 E, and the PWHL's unlettered row" (shooting.md:473 half remains OPEN).
- Interleave census (plan 6406 row 1): closed by plan 6219–6243.
- Permissive table in USAH/HC/CARHA (plan 6406 row 2): answered by plan 6337–6345 (label caveat recorded).
- defender.md:870 "oldest of the five" (plan 6355 row 5): phrase absent.
- rules_primer.md KT9 7,634 chars (plan 6420): KTs now 10 items, largest 2,420 chars (rules_primer.md:1102).
- rules_primer.md KT5 510 words (plan 9012): KT5 now 1,470 chars (rules_primer.md:1094).
- remark-corpus.mjs stale 6.11(b)(ii) comment (plan 6543): site/src/plugins/remark-corpus.mjs:67 now "The 6.11(b)(ii) citation now carries no glyph".
- defending_the_rush.md:959 `a* tight *gap` (plan 6627, site only): string absent (census row stays OPEN).
- goaltender.md CARHA Rule 66 KT "makes deliberate contact with one a minor" (plan 6897): phrase absent.
- team_play_and_culture.md:338 "a ceiling of" (plan 7069): phrase absent.
- game_management.md "free in all four books" (plan 7333): absent.
- playing_without_the_puck.md "in every rulebook" (plan 7365): absent.
- Two owner Key-focus decisions (plan 7374): owner ruled KEEP BOTH (plan 9605; CLAUDE.md).
- body_contact_and_battles.md:1750 bracing bullet omits CARHA (plan 7449): now :1795 and mentions CARHA (3 hits on the line).
- winger.md:674 "(the same, 'while the goalkeeper is within the goal crease')" (plan 7643): string absent.
- PWHL Rule 48 §5 facts "rules out a major" (plan 7734): phrase absent; :598 "Head contact is not capped at a minor in any book".
- defending_the_rush.md :383/:217/:373 CARHA absent (plan 7866): CARHA 49(a) now at defending_the_rush.md:227, 53(b) at :306–307.
- puck_handling.md KT11 rules appendix (plan 7923): "those four" absent; KT11 now 38 words.
- Style B script standard (plan 8194): project/podcast_style_b_script_standard.md exists.
- Style B pipeline (plan 8184): scripts/synthesize_style_b.py exists (settings unheard → open row kept).
- TTS experiment on defender.md (plan 8203): five-engine comparison run, ElevenLabs chosen (plan 8068–8076).
- zone_entries.md:22 PWHL omitted from checking-from-behind KF (plan 8574): zone_entries.md:22 now names PWHL.
- rules_primer/pwtp Situation 5 604 bar (plan 8750): closed by plan 8301–8318 (all five carriers scoped).
- EIHL Rule 76 negative (plan 8756): largely closed by plan 8660–8662 (headings jump 69→77, act swept in seven wordings) — residual read kept as low open row.
- zone_entries.md:1055 "CARHA neither" (plan 8778): phrase absent corpus-wide in zone_entries.
- forechecking_systems.md trailing newline (plan 8789): file now ends "\n".
- forechecking_systems.md chunk 081 orphan "A rule you were told wrongly" (plan 8796): string absent.
- rules_primer.md :704/:708/:721 goaltender-contact four-book frame (plan 8804): "survives all four books" and "defence in all four books" absent (pwtp :593/:969 half kept OPEN).
- rules_primer.md:288 "only two of the four books" (plan 8559): phrase absent (630(d) re-read kept OPEN).
- uk_rules.md:556 KT1 "centre is replaced for any faceoff violation" (plan 8973): phrase absent.
- special_teams.md:1230 "without appearing here" (plan 9000): phrase absent.
- goaltender.md PWHL Rule 71 signpost (plan 9034): goaltender.md:1191, :1214 now name PWHL Rule 71 / Table 14.
- defender.md four-vs-six count (plan 9072): "the four books" 1 hit vs "six books" 22 (winger 3 residual kept OPEN).
- body_contact §9 CRITICAL CARHA 52(b) understated (plan 9153): body_contact_and_battles.md:1228 "CARHA 52(b) compels a major and game misconduct … in the crease or any charge that injures"; "crease line does not set the tier" returns 0.
- goaltender.md stale "competition regulations are not held" (plan 9235): phrase absent.
- team_play_and_culture.md "No book makes it an offence" (plan 9449): phrase absent (British warm-up shelf sweep kept OPEN).
- defender.md PWHL 57.1 (plan 9468): defender.md:250 cites PWHL 57.1.
- Hockey Canada 9.2(a) Interpretation 1 "striking motion" (plan 9485): now present in body_contact_and_battles.md and defender.md (1 each), plus rules_primer/puck_handling/glossary.
- puck_handling.md "a minor in every book read here" (plan 9496): phrase absent.
- game_management.md KT11 ordering (plan 9556): the "straight down" instruction is now KT12 at char 190 of 999 (leads).
- Ask the EIHL which Casebook edition (plan 9573): closed by plan 8645–8666 (refetched, SHA-identical, v1.1 080926 current).
- Key-focus audit against the new bar (plan 9614): project/reviews/key_focus_quality_bar_2026-09-23.md measures 35 documents (check that record for any not reached).
- backcheck-stick propagation (plan 9773) and safety-read MAJOR (plan 9786): repaired in defending_the_rush.md and playing_without_the_puck.md per plan 9709–9712.
- risk_management.md:680 vs "all four books" (plan 10074): "all four books" returns 0 in risk_management.md.
- 26 exclusivity clusters (plan 10151): "NHL and IIHF only"-type strings now 4 corpus-wide (residual kept OPEN).
- Trapezoid "two of the four books" at time_and_space/center/dzc (plan 10166): 0 hits.
- goaltender M3 "Play the puck, not the body" (plan 10230): absent. M1 PWHL 65.2(iii): 2 hits in goaltender.md. M2: "recklessly endangers" 14 hits in goaltender.md (verify rung — kept as a low open row).
- ozp KT10 permission-last ordering (plan 10296): "before any of it" absent from KT10.
- shooting.md:897 IIHF 42.4 predicate (plan 10315, 10380): KT6 no longer cites 42.4.
- practice_and_development.md:23 "the four rulebooks" (plan 10313): absent.
- shooting.md:519 CARHA 66(b) "no injury tier at all" minor-only (plan 10390): sentence now about the other books' 69.2/71.2 "minor or major".
- shooting.md xG "how far the goalie had to travel" (plan 10397): absent.
- Wave-7 gate rows ozp "Three of the four books count the painted line", rink_map:194 (plan 10489): phrase absent; gate cleared at 23c33de.
- fair-game four-book sites language_and_glossary :13/:419/:447, shooting:293 (plan 10567): current "the four books" hits in glossary are unrelated (:301, :353, :489); shooting.md:306/:512 now include PWHL.
- Three worst takeaways (plan 10709) and unit table (plan 10833): ozp KT5 285 w, ozp KT10 314 w, forechecking KT7 248 w, shooting KT6 305 w, winger KT8 372 w.
- goaltender.md 21 takeaways (plan 10750): now 12.
- Facts-layer majors (plan 10862): winger.md "covered by one" absent; goaltender "so that retrieval" absent; "Rule 1.8 writes no" absent; dzc "7.5(a) is a floor" absent; risk_management "Convention: A coaching convention with real exceptions" absent; winger:468 split (plan 10780).
- faceoffs.md:52 "slightly negative" (plan 10981): "slightly" not used for the negative season in faceoffs.md.

### Triage 3a — its §5


- **"Most teams" at the five named promoted sites** (plan 11123) — no "most teams" at `center.md:9/:36`, `winger.md:17`, `defender.md:11`, `switching_positions.md:11`, nor `center.md:625`, `winger.md:643` (grep over content/). Class row stays OPEN.
- **center.md net-front posture limb** (plan 11166–11176) — `content/positions/center.md:403` (facts: "Never: Duck away from the shot … Chin off your chest") and `:730` (CM).
- **winger-offensive-zone-patches caption posture** (plan 11262–11264) — `site/src/data/diagrams.json` caption now reads "arrive head up with your chin off your chest: never meet a goal post head first, and never duck into one."
- **Original five book-pair slash sites** (plan 11292–11296) — none carry `NHL/IIHF`/`NHL/PWHL` now (two new sites listed OPEN).
- **winger.md CARHA 52(b) facts narrowing** (plan 11324–11329) — `content/positions/winger.md:471`: "CARHA 52(b) both in the crease and for any charge that injures an opponent".
- **center.md "keep moving" vs screen stillness** (plan 11530–11548) — `content/positions/center.md:15` ("But once your defenceman is winding up, screen them — plant, and be still at the moment of release"), `:406`, `:411`, `:729`.
- **Borrowers adopt owner's "well before it"** (plan 11564) — `winger.md:9`, `:454`; `center.md:417`; `offensive_zone_play.md:546`.
- **winger.md hound-the-puck checking-from-behind limb** (plan 11757–11762) — `content/positions/winger.md:664`: "never finish the backcheck into the back of a carrier skating at their own end boards".
- **"the middle third of the neutral zone"** (plan 11981–11984) — 0 hits in content/.
- **rules_primer IIHF "Definitions"** (plan 12029) — no IIHF-adjacent "Definitions" in `content/foundation/rules_primer.md`.
- **check_callout_flow defects** (plan 12093–12110) — `scripts/check_callout_flow.py` `classify()` tests emphasis before list items; `stacks()` tracks blank-line breaks; `--markers` and `--panels` exist; docstring records THREE MOVES (`:31`–`:48`). ("Re-measure" presumed done; CLAUDE.md records later measurements.)
- **"Hockey Canada's is only the one that is mandatory"** (plan 12175–12202) — 0 hits corpus-wide for the false phrasing (center, shooting, playing_without_the_puck dispatch sites all clean).
- **defending_the_rush penalty-shot for throwing a stick vs CARHA** (plan 12212) — `content/systems/defending_the_rush.md:703` now covers CARHA 83(a).
- **defender.md boarding "none of them caps boarding at a minor"** (plan 12213) — `content/positions/defender.md:406`, `:421`, `:803` now "none of the six".
- **center.md three further "four books" scope claims** (plan 12237–12240) — "none of the four books prices that hit cheaply" gone; remaining "four books" hits in center.md (`:452`, `:731`, `:800`) are crease-line claims on another subject.
- **winger.md CARHA crease regime absent** (plan 12244–12248) — `content/positions/winger.md:461`, `:463`, `:468`, `:479`, `:554`, `:688` carry CARHA 66(a)/(b).
- **goaltender.md CARHA interference regime** (plan 12394–12406) — `content/positions/goaltender.md:1102`, `:1108` ("CARHA writes a crease rule of its own"), `:1141` (66(b), 66(e), 52(b)), `:1464`.
- **check_tactics_ratio.py two bugs** (plan 12451–12470) — `scripts/check_tactics_ratio.py` `units()` splits list items into units and resets the layer at the `*Sources`/`*Rules` trailer. Interim per-bullet workaround obsolete.
- **winger.md "That split belongs to a low zone collapse"** (plan 12570–12578) — phrase gone; `content/positions/winger.md:30` now names the systems ("Under a low zone collapse … you never go into the corner; under man-on-man …").
- **game_management "seventeen citations moved" rules-verifier row** (plan 11994–12004) — refuted inside the plan itself at 11377–11410 (16 of 18 citation counts unchanged; re-ordering within units).

### Triage 3b — its §5


- plan 13232–13233 (two emphasis false-negative sites) — content/systems/faceoffs.md:1258 now `*("they has"* …)` (opening `*` no longer consumed); content/hockey-iq/playing_without_the_puck.md:994 no longer carries `***` (`English Ice Hockey Association***` absent).
- plan 13105–13111 (EIHL "website" drift) — content/foundation/rules_primer.md:1140 reads "on the EIHL web site".
- plan 13463 (EIHL edition answer to rules_primer and body_contact) — rules_primer.md:52 and :440 (*"In the Elite League the floor applies… under the 2026/27 book's 60.1 and 60.3"*); body_contact_and_battles.md:1682 (*"the Casebook settles the edition question for the EIHL alone"*).
- plan 13464 (shooting.md pointer "sets that out") — shooting.md:181 points at uk_rules, and uk_rules.md:54 sets out the cover-vs-Introduction contradiction.
- plan 13716–13718 (rules_primer:286 PWHL pronouns under NHL+IIHF+PWHL) — rules_primer.md:284 now attributes the *her/she* wording to PWHL 85.1 explicitly.
- plan 13759 (CARHA checking-from-behind in center.md) — center.md:686 facts (CARHA 53(a)) and :725 ("none of the six books here prices that hit cheaply").
- plan 13776/13782 (IIHF 60.1, 76, 83.1 unchecked) — rules_primer.md:440 (60.1 waist floor), faceoffs.md:1258 (76.3/76.4 replace the centre), zone_entries.md:143–144 and rules_primer.md:281 (83.1 both editions).
- plan 13796–13814 (NHL/IIHF 50.1 "same sentence") — body_contact_and_battles.md:549 now quotes NHL 50.1 with *his* and says IIHF 50.1 is "that sentence in the plural".
- plan 13820–13825 (CARHA kneeing in body_contact) — body_contact_and_battles.md:553 (CARHA 56(a), no clipping rule; PWHL 44/50 unrenumbered; sled-hockey carve-out).
- plan 13904–13921 (rules_primer:457 kneeing HC limb) — rules_primer.md:457 carries HC 7.8 *"on an otherwise legal hit"*.
- plan 13973/13979 (center + neutral_zone "four-book comparison" pointers) — refuted at plan 13734–13747; neutral_zone_systems.md:65 now "sets out the six side by side"; center.md:283 never said "four-book".
- plan 14191–14203 (EIHL Casebook Rules 44/50) — body_contact_and_battles.md:553 and :1916 (neither rule in Casebook; *knee*/*clip* absent).
- plan 14206–14216 and 14337–14348 (headings "four worst fouls", "The four that cause the injuries", "prevents most of it") — 0 hits in content/.
- plan 14219–14231 (HC clipping at hips; Interpretation 1; CARHA no clipping; sled carve-out) — body_contact_and_battles.md:543, :553; defender.md:788, :899; defending_the_rush.md:523, :658.
- plan 14243–14255 (bench neck-guard duty; equipment propagation) — uk_rules.md:155; equipment.md:106.
- plan 14297–14309 (read change log; 12.1 age scope) — superseded inside the plan by 13765–13792 (whole log read; 12.1 verified).
- plan 14312–14335 (kneeing/clipping absent; IIHF 44.1 checker limb; CARHA/PWHL) — body_contact_and_battles.md:514, :527, :543, :549, :553, :857.
- plan 14371–14376 (offside six-book incl. PWHL) — rules_primer.md:284 (PWHL 85.1), neutral_zone_systems.md:65 ("onside in all six").
- plan 13644–13658 (equipment wording fixes) — equipment.md:219 (break-in "halves" labelled shop lore), :391 ("strength and speed"), :600 ("3-6 weeks" is about smell).
- plan 12980–13029 / 12941–12979 (callout wave 1; panel ranking) — `check_callout_flow.py --panels` reports 0 panels and `--bare` 0 bare glyphs corpus-wide; record `project/reviews/callout_flow_wave_1_2026-09-22.md`.

**Found still open although the plan logged it repaired:** plan 13241 — `playing_without_the_puck.md:954` (Key Takeaway 3) still says "In Britain neither book states an age". Listed under OPEN ROWS.

### Triage 3c — its §5


- 14434–14445 Coaching Regs not on disk → `sources/ihuk_coaching_regs.{pdf,txt,_layout.txt}`; `scripts/fetch_sources.sh:160`, `:227` (DUAL_EXTRACT); `sources/README.md:47`.
- 14469–14483 special_teams net-front EIHL limb → `content/systems/special_teams.md:1071` (facts `Rule:` "An Elite League game adds three criteria to IIHF 69.1…").
- 14528–14543 (Coaching-Regs half of the refresh row) → as above; the NIHL half stays OPEN.
- 14870–14872 CLAUDE.md refinements 2 and 3 → CLAUDE.md now carries "`timeout` DOES NOT EXIST ON macOS" and "`md_to_speech.py --only` TAKES THE BARE DOCUMENT STEM".
- 14887–14897 USAH 601(a)(4) "Shooting"→"Shoots" repair → no "Shooting the puck after the whistle" quotation remains attributed to USA Hockey (the only hit is a Hockey Canada trailer label, `team_play_and_culture.md:693`).
- 14949–14954 CARHA "considered as 'icing'" → quoted correctly in content (1 hit for "considered as 'icing'", 0 for "considered 'icing'").
- 14984–14994 unscoped checking-from-behind tier → `content/technique/body_contact_and_battles.md:859` "…a major penalty with an automatic game misconduct under the NHL and IIHF, and never a bare minor under USA Hockey or Hockey Canada".
- 14995–15004 HC Interpretation 3 carve-out → `foundation/rules_primer.md:1012`; `technique/body_contact_and_battles.md:1119`, `:1801`; `systems/forechecking_systems.md:548`, `:594`, `:1002`.
- 15025–15038 U12 3/4-minute minor, served on own line's shifts → `foundation/uk_rules.md:350`.
- 15041–15043 and 15067–15083 British period length prose → `foundation/rules_primer.md:86` ("🇬🇧 ⚠️ Twenty minutes is the British adult answer and not the junior or women's one…").
- 15230–15240 breakouts :563/:561 unscoped facts → `systems/breakouts.md:586` ("Position: Under the standard swing breakout, …") and `:588` ("Never: Drift wide to the boards under the standard swing breakout … under a centre fly…").
- 15267–15287 the three prose-count instances → "Both CARHA rules" 0 hits and "which one your league uses" 0 hits corpus-wide.
- 15317–15342 puck_handling women's boards-pinning → `technique/puck_handling.md:508` (facts, IIHF 101.1 "pin her along the boards"), `:955`; "USA Hockey is the one that states it in terms" 0 hits.
- 15351–15365 goaltender manufactured quotation → `positions/goaltender.md:870` "only be stopped if there is no immediate and impending scoring opportunity".
- 15372–15382 limit missing from CM/KT → `technique/puck_handling.md:955` (Common Mistakes) and `:1036` (KT5) "The opponent has a limit too, and two books write it in terms…".
- 15400–15414 (instance) rules_primer:52 In-House "say so in terms" → `foundation/rules_primer.md:50` "…for every one of those but the Elite League".
- 15560–15569 EIHL Casebook publisher gaps → Casebook/eliteleague entries in the trailers of `systems/special_teams.md` (2), `technique/shooting.md` (3), `hockey-iq/playing_without_the_puck.md` (2), `getting-started/getting_started.md`, `positions/switching_positions.md`.
- 15592–15593 playing_without_the_puck 608 trailer → 608 appears 6× in its `*`-trailer lines.
- 15630–15665 EIHL reverse lookup F4/F5/F6/F7 → `rules_primer.md:858` (Elite League face-off under IIHF 76 unamended), `:947` (EIHL 9.12 neck-guard warning-then-minor), `:946` (fighting row names the EIHL), `:952` (overtime row names the EIHL); `equipment.md:104`.
- 15672–15684 and 16039–16043 zone_entries:18 → `systems/zone_entries.md:18` Key focus re-aimed to tactics ("Be the last of your three forwards to the blue line…"); "ends your night in every book" 0 hits.
- 15691–15693 equipment:374 EIHL broken-stick exception → `off-the-ice/equipment.md:740` "the IIHF book the Elite League plays already made carrying it a minor at Rule 10.3".
- [RECLASSIFIED OPEN BY COORDINATOR — rules_primer.md never had a facts block; premise needs re-scoping, not archiving] 15694–15696 rules_primer facts carry no British scoping → moot: `foundation/rules_primer.md` has 0 ` ```facts ` fences at HEAD. (Flag for coordinator confirmation that the removal was intended.)
- 15755–15761 In-House Rule 76 "either centre" / "whole of their stick blades" → `systems/faceoffs.md:258-260`, `:288`; `foundation/rules_primer.md:858`, `:950` (table has a British column); `positions/center.md:497`, `:521`, `:833`; `foundation/uk_rules.md:247`; `foundation/language_and_glossary.md:305`.
- 15770–15800 British-scope census dispatches → video review scoped "EIH or SIHA" (`rules_primer.md:277`); neck-protector tariff split (`getting_started.md:28`, `switching_positions.md:313`, `equipment.md:22/104`, `uk_rules.md:11/29/160`); centre replacement "by two different routes" (`special_teams.md:1017`).
- 15861–15877 third man in, summary layers → `technique/body_contact_and_battles.md:1812` (CM "Skating in to help a teammate who is already in a scrum… catches the player who was on it"); `:1627` facts attempted-punch `Rule:` line.
- 15911–15912 and 16049–16050 defender:126 / retrieval route → `positions/defender.md:132` ("never take the contact with your back to the wall, and never duck"), `:138`, `:802`, `:887` (KT10).
- 15987–15990 faceoffs HC 7.3 trailer → faceoffs.md trailer carries "Hockey Canada" ×5, "7.3" ×4 (the residual "other rules in that trailer" stays OPEN).
- 16068–16071 corpus-wide over-broad British framing sweep → performed as the British-scope census (plan 15770); its blind spots stay OPEN (15835–15849).

### Triage 3d — its §5


| Plan line | Item | Evidence (current tree) |
|---|---|---|
| 16099, 16103 | Diagram-key route as a component (and needing a phrase, not just an href) | `site/src/plugins/remark-corpus.mjs:434-452` — `diagram-key-link`, text "What the shapes and fills mean", suppressed on the key page |
| 16107 (partial) | Key doc had zero `###` sections | `reading_ice_hockey_diagrams.md` now has 6 `###` (e.g. `:81` "Where each symbol comes from"); symbol-table half stays OPEN |
| 16131–16158 | Shoulder clause dropped in new captions; census "7 modules with zero shoulder clause" | `site/src/diagrams/wall_contact_clauses.mjs:74-89` `SHOULDER_NOT_THE_SURFACE`/`SHOULDER_TAIL`, imported by breakouts, on_ice_communication, puck_handling, risk_management, playing_without_the_puck, puck_support_and_spacing, zone_entries, winger, rules_primer, positions, offensive_zone_play |
| 16159–16168 | Posture limb copy-pasted, not a shared constant | `wall_contact_clauses.mjs:107` `WALL_POSTURE_INSTEAD`, imported in `breakouts.mjs:32` |
| 16232–16261 | Warm-up fight Critical (IIHF 46.8 major + automatic GM misread via 5.6) | `body_contact_and_battles.md:184`, `:195`, `:200`, `:1774` |
| 16264 | EIHL fighting presented as one-way relaxation (no DOPS, no 46.2) | `body_contact_and_battles.md:1660` "### The EIHL's fighting rules — lower on the sheet, not lower in cost"; `:1666`, `:1671`, `:1676`, `:1678` |
| 16274 | "Four minutes" for a completed head-to-head push (47.3 ejection) | `body_contact_and_battles.md:1765` ("A completed head-butt is a double minor in only two of them…") and `:1752` |
| 16287 | Bare ambiguous "keep your feet" | No bare "keep your feet" left in `body_contact_and_battles.md` (only "…under you/moving/on") |
| 16434–16453 | §6's fourth USA Hockey "far shoulder" sentence — establish and RECORD, don't resolve | `body_contact_and_battles.md:843` ("set down here rather than explained away… 'far' is never defined") |
| 16463 | `faceoffs.md` teaches a hit posture without saying whether the hit is legal | `faceoffs.md:922` ("whether that forechecker is allowed to hit him at all is a separate question…"), `:634` Rule line |
| 16498–16509 | C1+C2 `center.md` posture limb absent | `center.md`: 7 "forearm and hip", 5 facts-layer posture lines |
| 16511–16515 | C3 `faceoffs.md` posture limb | `faceoffs.md`: 6 "forearm and hip", 2 facts lines, `:1151` Common Mistakes |
| 16517–16523 | C4 `defensive_zone_coverage.md` protects only the opponent | DZC: 4 "forearm and hip", 3 "skates parallel", 1 facts line |
| 16593–16613 | Reverse and Rim lack the posture limb | `breakouts.md`: 18 "forearm and hip", 9 facts-layer posture lines; posture text present in §Reverse (`:292`–) |
| 16617 | `breakouts.md` "three exceptions" (IIHF 81.4 has four) | `breakouts.md:818` "The NHL lists three; the IIHF's 81.4 lists four" |
| 16621 | `breakouts.md:775` "624(a) attaches no strength test" traveling alone | `breakouts.md:800` Rule line with 624(b)(1) classification scope; `:816` body |
| 16628 | `special_teams.md` unscoped Key Takeaway on clear costs | `special_teams.md:1163`, `:1247` now scoped by book (USAH "costs only the draw") |
| 16635 | `breakouts.md:780` "That bench freeze" + U18AAA ambiguity | "That bench freeze" gone (grep 0); `:802`, `:874` "in U18AAA and Junior, and in Senior at the Member's option" |
| 16649 (half) | USAH 636(f) time-out after icing not carried | `special_teams.md:1026` |
| 16681 | IIHF 81.4 vs 82.1 conflict unflagged in §8 | `breakouts.md:453`, `:468` ("neither rule says which governs") |
| 16687 | Whole-corpus block-level posture extraction | Done — the 847-block census at plan 16477 |
| 16710–16725 | EIHL instigator facts line without the final-five-minutes limit; bare IIHF 46.10 | `body_contact_and_battles.md:1664` (limit carried; IIHF number no longer quoted bare) |
| 16726–16739 | `breakouts.md:775` `Never:` with no alternative | `breakouts.md:806` `Never:` + `:807` `Action:` "off the glass, not over it… delay-of-game minor… takes your advantage away" |
| 16741–16750 | `goaltender.md:1035` drops Casebook criterion 2 | `goaltender.md:1068` facts line and `:1082` body carry criterion 2 |
| 16752–16759 | `breakouts.md:780` dangling antecedent | Gone (grep 0) |
| 16776 | "Rules of Competition carries" | `body_contact_and_battles.md:109` "carry" |
| 16805–16827 | `equipment.md` attributes IIHF 9.5 ladder to the Elite League in voiced layers | `equipment.md:136`, `:138`, `:147`, `:743` (Common Mistakes) — "not the Elite League's own" |
| 16931–16942 (M4) | Nordic lineage for the left-wing lock | Removed; `forechecking_systems.md:481` gives Czechoslovak origin only |
| 16955 (m1) | "three kinds of dump" | grep 0 in `forechecking_systems.md` |
| 16962 (m4) | `defender.md` has no link to `forechecking_systems.md` | `defender.md`: 2 references |
| 16981 (half) | `neutral_zone_systems.md:49` facts line with "see Special Teams, which covers the conditions" | grep 0 |
| 17157 | EIHL 86.6 warm-up contact ban | `body_contact_and_battles.md:197-198`; `uk_rules.md:162`; `team_play_and_culture.md:322` |
| 17164 | EIHL Rule 47 head-butting examples | `body_contact_and_battles.md:1742` section, `:1752`, `:1764` |
| 17170 | Rule 64 diving; In-House "2 plus 10" vs EIHL minor divergence | `uk_rules.md:253-261`, `:459`; `risk_management.md:730` |
| 17175 | `eiha_inhouse_2026-27.txt:408` "2 plus 10" context unread | `uk_rules.md:255` quotes and explains it |
| 17081 (half) | `uk_rules.md` quoting In-House `:388` without the unwilling-combatant relief | `uk_rules.md:275` carries the relief (jersey half stays OPEN) |
| 17407 | `rules-verifier` owed: 624 read whole; IIHF 81.4/87.1 wording | `breakouts.md:802` "(Rule 624 read whole…)"; `:818` 81.4/87.1 quoted |
| 17449–17457 | CARHA fifth route on the unpressured-freeze minor | `special_teams.md:758`, `:884` "a minor in five of the six books" |
| 17503–17524 | Casebook 86.6(i)/(ii) enforcement route vs 9.12 warm-up neck guard | `uk_rules.md:162` (standby referee; referees authorised to call all penalties from the start of the warm-up; 86.6(ii) quoted) |
| 17529–17535 | Casebook safety territory (41, 42, 46, 47, 64, 69, 86.6) unread | Read and carried in wave 3 (plan 17088–17177) and `body_contact_and_battles.md:1914` trailer; Section 11 residual → OPEN at 17492 |
| 17567–17584 | `special_teams.md:941` HC no-glass relief + "both ends of the rink" | `special_teams.md:743`, `:1255` |
| 17596–17600 (M2) | `switching_positions.md` "longer timeline than any of the others" | grep 0 |
| 17602–17604 (M3) | "each section names what changes under man-on-man" | grep 0 |
| 17606–17609 | Dangling "Those trades" / "Those preferences" | grep 0 in both files |
| 17663 (tool half) | `check_layer_echo.py` docstring over-generalised "voiced alone" | `scripts/check_layer_echo.py:34` "ONLY ```facts LINES ARE VOICED ALONE" |
| 17860 | Add the truncated-safety-list blind spot to `check_layer_echo.py` docstring | `scripts/check_layer_echo.py:21-25` |

---

### Triage 4 — its §5


- 18176-18179 other books' 30(a) shape → answered in-plan at 19043-19053 (HC 4.4, USAH 404(b), CARHA 30(a)/32(d)).
- 18180-18182 CARHA 53 vs a goaltender → `positions/goaltender.md` now cites CARHA 53(a) and 53(b) (4 hits).
- 18186-18189 CARHA 66(b) fourth paragraph in winger → `positions/winger.md` contains "fails to attempt" (also in 6 other files).
- 18294-18298 oic PWHL 49.3 kicking match → `foundation/on_ice_communication.md:95` "under NHL and PWHL 49.3, USA Hockey 627(b), Hockey Canada 7.1(c)(iii) and CARHA 48(c)".
- 18304-18308 puck_handling crease "all four books" ×7 → "all four books" = 0 in `technique/puck_handling.md` (CARHA addition not separately verified).
- 18317-18336 zone_entries KT11/CM crease condition + 30(a) omission → `systems/zone_entries.md:1066` now "for charging the goaltender" with 52(b)'s crease condition quoted; `30(a)` cited 17×.
- 18738-18744 USAH Casebook sweep → done as TEST 2 (18930-18955).
- 18883-18886 pwtp KT11 length → 3,810 → 1,156 chars (21961).
- 18957-18959 USAH Rule 411 → cited in `rules_primer.md`, `body_contact_and_battles.md`, `conditioning_and_recovery.md`.
- 18960-18961 defender HC 8.3 → restored (19099).
- 18962-18966 USAH stand-your-ground sentence (usah.txt:380) → "wishes to skate through" now in on_ice_communication, core_principles, rink_map, body_contact_and_battles, defensive_zone_coverage, playing_without_the_puck, breakouts.
- 18967-18974 silence-as-grant; British layer → 19062, 19469-19482.
- 18989-19008 faceoffs toe/"USA Hockey end-zone draw" and "bench cannot help you" → both phrases 0 in `systems/faceoffs.md`.
- 19077 EIHL Casebook injury-to-face/head → propagated at four sites (19470-19474).
- 19171-19191 IIHF 101.1 "never cited" → 176 sites; edition scope discharged (19419-19421); sources/README entry added (19539-19544).
- 19221-19225 facts race; USAH 403(b) read → 19307-19308, 19266-19272.
- 19363-19373 IIHF 43.1 high-stick no-minor; CARHA 53(b) elision → bcb new facts line + three verbs restored (19627-19631).
- 19383-19386 USAH Casebook 623 Sit 3 uncarried → "hooked around the upper body" now in `positions/switching_positions.md`.
- 19446-19452 bcb:1103/:1768 women's pinning scope → scoped to "IIHF women's hockey" (19631).
- 19547-19551 dtr hedge + CARHA trailer → In-House scope cleared (21564-21566); `systems/defending_the_rush.md` trailer now names CARHA.
- 19613-19616 USAH other rule for a two-handed shove → Casebook 609 Sit 2 / 608 (18930-18954).
- 19670-19673 bcb "three books write the cross-check into their checking-from-behind rule" → phrase 0 in `technique/body_contact_and_battles.md` (glossaries not re-verified).
- 19711-19722 defender CARHA 30(a) frame → `positions/defender.md` cites 30(a) 12× (repaired 19829).
- 19889-19892 passing_and_receiving CARHA 48(c) layers → 48(c) now 4× in `technique/passing_and_receiving.md` (layers not individually checked).
- 20056-20069 goaltender 61(b), HC 10.2, USAH 610(a)/632(b) → 61(b) 3× in goaltender.md; `10.2` in 14 files; `632(b)` in 6 files; `610(a)` in 5.
- 20145-20148 HC 6.3(e) Interp 5 → cited in rules_primer, risk_management, switching_positions, game_management, special_teams.
- 20185-20188 moved-clause test defender KT2/KT3 → KT1/2/3/7 read, no defect (21648-21649).
- 20271-20291 63.2(ii) / two carve-outs → 20493-20551; special_teams 63.2(ii) ×5, switching_positions ×2.
- 20390-20397 late-hit paraphrase census; CARHA other rules → §63 census; §58/§64.
- 20554-20555 British U12 "No icing calls at U12" → cited in `uk_rules.md` and `rules_primer.md`.
- 20728-20729 breakouts never links DZC → `systems/breakouts.md` now links defensive_zone_coverage.md 5×.
- 20764-20808 freeze D1–D5 → faceoffs:908 fixed (21186-21189); rules_primer :764 etc. (21289-21291); CARHA 74(b) now in 7 files; special_teams clause iv now used only for the jumps-on-the-puck case (`:365`); IIHF Sit 67.8 in rules_primer.
- 20810-20816 USAH 618(c) warning → added (21832); 618(c) in 5 files.
- 20827-20829 U12 "excessive freezing" → cited in `uk_rules.md`.
- 20901-20932 late-hit census M1–M5, m6/m7/m12/m13 → 21090-21127, 21283-21286; mental_game.md:147 links `#the-late-hit--and-the-narrow-window-for-finishing-a-check`.
- 21062-21064 risk_management "all four books" → CARHA added (21190).
- 21073-21074 defender KT1/2/3/7 unreviewed → read, no defect (21648).
- 21130-21135 ozp facts omits USAH; KT10 pointer → 21752-21756.
- 21139-21142 bcb:577 "each of the four books writes a narrow window" → phrase 0; CARHA named (21677-21679).
- 21236-21239 CARHA Rules 10/46 for freeze; USAH beyond 614(c) → 21391-21396; 632(b)/610 Sit 3 cited (`610 Situation 3` in goaltender.md).
- 21300-21304 CARHA Rule 50 → added to game_management (21826-21829); `Rule 50/50(a)` 2× in game_management.md.
- 21317-21397 head-contact blocker; 632(b); CARHA 55(a) Note 2 → repaired (21819-21836); `55(a)` in 7 files.
- 21442-21474 winger KT8, ozp KT10, pwtp KT11 splits → 21741-21746, 21961.
- 21475-21498 defender:73, dzc:700 "writes no such minor", ozp:838 → 21757-21759; `writes no such minor` = 0 in dzc; ozp :839 added.
- 21499-21507 CARHA 66(b) attribution drift in winger facts → fixed (21969).
- 21515-21523 denominator drift → "all four books" now 0 in `positions/defender.md` and `positions/winger.md` (named-set correctness not verified — see open row).
- 21591-21592 fourth rendering state for that wave → 75/13, wave added none (22194-22195).
- 21596-21669 safety criticals C1–C3, M2, M3, m1 → 21819-21836, 21672-21679; bcb "operative bodychecking rule" = 0.
- 21992-22000 + 22058-22075 IIHF match-penalty claim at winger:472 → `positions/winger.md:472` now "the IIHF caps it in-game at 42.4's major plus game misconduct, automatic from behind (43.3)".
- 22101-22106 six bare glyphs → worked by later waves (wave 12 "panels lift" et al.); run `check_callout_flow.py --bare` for the live figure.

### Triage 5 — its §5

- Geometry inference "back to their own net" — `grep` = 0 in content/.
- IIHF 43.1 truncation at "in any manner" — full "(i.e., high-sticking, cross-checking, etc.)" now at forechecking_systems.md:772, playing_without_the_puck.md:653, zone_entries.md:738, center.md:476/:837, winger.md:499/:780, shooting.md:540.
- Stale trailer "The PWHL was not searched for this route" — 0 hits.
- HC Interpretation 3 (low-speed pinning) not carried — now rules_primer.md:1012, body_contact_and_battles.md:1119, :1801.
- conditioning "those ten red flags" bare count — now "Any one of CRT6's ten red flags" conditioning_and_recovery.md:274.
- conditioning sixth Overview defect "Everything here is reasoned from one demand" — now "Most of what follows is reasoned from one demand" :39.
- "the one part of this document with no nuance in it" — 0 hits.
- p&r "the book most adult rec players meet" — 0 hits in passing_and_receiving.md.
- team_play KT10 "the bench rule is not the one that reaches you" — 0 hits.
- team_play peacemaker scoped to USA Hockey only — now HC 7.10(e)(ii), CARHA 59(b), NHL/IIHF/PWHL at team_play_and_culture.md:282, :611.
- team_play missing 601(d)(10) after-game GM — now :288.
- team_play HC Interpretation 15 (helmet grab → match) — now :276.
- team_play three-books-forgive-helmet contrast — now :274.
- switching_positions "IIHF writes no such bar" — now IIHF 5.3 privileges limb at switching_positions.md:326, :497.
- p&r "penalty shot in all four books" (:427) and defending_the_rush thrown-stick "all four books" — 0 hits for the phrase; defending_the_rush.md has no "all four books".
- center.md "legal in all four books" (faceoff encroachment) and "now true in all five books" — 0 hits.
- p&r "USA Hockey alone sends it the other way" — 0 hits.
- p&r whistle Action: line — now "in four of the five books it waits to see who gains possession" passing_and_receiving.md:422.
- center.md sole-carrier crease-volume gap — center.md:547 "extends vertically until the top of the crossbar" + instruction; :801.
- center.md KT lacks PP/PK/line changes/icing — now KT14–17 (1-3-1 bumper, PK shape, extra stride before dump, change on your legs).
- center.md five/six mix — now "all six books" at :474, :490, :495, :513, :553, :798, :829; one "five books" at :732 is a different claim (mandatory tier).
- goaltender.md HC "one warning" permission read aloud — "in your crease, and only there, Hockey Canada gives you one warning first" at goaltender.md:27, :1545.
- faceoff-dzone-alignment caption "all four books" — now "not the same in every book" / "satisfies every book" (faceoffs.mjs:210, :261, :266).
- winger/area-pass-into-space caption counts — dropped (winger.mjs:462 comment; passing_and_receiving.mjs:168 "DO NOT RESTORE A COUNT").
- chop-at-the-hands facts twin "all four books" (a4f7436 row) — body_contact_and_battles.md:345 Rule: line now "every book read here" with PWHL and CARHA. (Note: on_ice_communication.md:264/:277 still say "all four books" for the same tariff, consistently within that file — outside this slice's rows; restrictive.)
- rules_primer / mental_game disputing NHL-only — mental_game.md:541 now enumerates IIHF, USA Hockey, HC, CARHA; rules_primer.md:906 frames Rule 39 generically.
- forechecking_systems.md two-book 43.1 waiver — :682 now names PWHL 43.1. (rules_primer.md:1012 still NHL+IIHF only → OPEN.)
- practice_and_development.md "all four books"/no CARHA link — CARHA 20(d) and PWHL now at :397, :611, trailer :683.
- scanning_and_anticipation.md KT10 rules appendix — KT10 is now "You cannot scan if you have to look at the puck."
- puck_handling.md PWHL untested five-book scope — document now says "six books here" (:513, :1041, :1051, :1063).
- risk_management.md slew-footing absent from CM/KT — 4 slew mentions from Common Mistakes onward.
- check_marker_pairs.py dict-collapse docstring — present (scripts/check_marker_pairs.py:26–31).
- Push status — a4f7436 is on origin/main (branch -r --contains).
- defender.md 63.2(iii) PWHL trap — :684 names "the PWHL's" with no number.
- defender.md 608(c) two sites dropping different conditions — :283 and :803 now carry the same two (force + defenceless); both still omit "recklessly endangers" (conservative).

### Triage 6 — its §5


- Carriers of the body-position pronoun (27946–27956) → repaired in winger/defending_the_rush and sound in breakouts/forechecking (28032). `winger.md:772` carries all three provisos.
- `winger.md` trailer NHL 56.1 missing the third condition (27999–28004) → `winger.md:772` and `:792` quote it in full.
- USAH/HC/CARHA body-position entitlement gap (28025–28028) → CARHA answered at 28828; USAH's conditioned grant is stated at `body_contact_and_battles.md` (31780); `:1896` KT4 "four of the six".
- `center.md` state-4 glyphs (27871) → refuted as false positives at 27922.
- `faceoffs.md` five vs `center.md` six (27873) → `faceoffs.md:221` declares the five-book scope and "there is a sixth book here" (ruled correct at 31011).
- 625(a)(4) sub-clause narrower than the sentence (28132–28139) → body `defending_the_rush.md:318` carries the Note (per 28265).
- PWHL Rule 52 absent from `body_contact_and_battles.md` (28259) → `:92`, `:155`, `:171` cite PWHL 52.1.
- IIHF 43.3 floor for a non-reckless CFB (28320) → `defender.md:280` "the IIHF's major (43.3) is discretionary"; `center.md:685/:694`.
- `defender.md` KT2 six-book cap claim (28326) → verified true at 28512.
- NHL 43.1 flat vs IIHF 43.1 rider (28524–28528) → `defender.md:423`, `rules_primer.md:34/:1012`, `forechecking_systems.md:666/:682`, `body_contact_and_battles.md:41/:656`.
- `defender.md` overstatements, CARHA 53(b) without "into the boards" (28519) → `defender.md:283` carries the geometry and the Note.
- IIHF match-function negative (28572) and uk_rules/shooting ceiling carriers (28760) → `uk_rules.md:371` and `shooting.md:174/:234/:241` route to Rule 28 "ceiling inside the game only".
- The rendering of the new ⚠️ at `:357` and the anchor at `goaltender.md:1240` (28587–28590) → DOM sweep zero untreated (27920); `check_links` is a gate.
- `defending_the_rush.md:666` thrown stick "all four books" (28639, 28851) → the 32306 wave repaired it; `defending_the_rush.md` now has 0 "four books" hits.
- `winger.md` → `playing_without_the_puck.md#backchecking` carrier-scoped (28646) → no "for the carrier" in pwp; `:745` carries CFB tiers.
- `risk_management.md` clipping from HC 8.7 alone (28649) → `risk_management.md:658/:711` (8.6→8.7/8.8 handoff) and `:787/:792` (7.5(c) both paragraphs).
- KT7 "safe under Hockey Canada" with no red-line scope (28705) → `goaltender.md:1545` now carries the trapezoid limits and a centre red-line clause.
- CARHA box-out true negative (28708) → answered at 28828–28843 (CARHA never adopted the clause; 66(a) Note 2 vs 49(a)).
- Reframing risk "IIHF ceiling is suspension" (28785) → 28881: all six escalate the same shape; no wave.
- Clipping carriers / clipping from behind (28846, 28926) → 29697 wave; `defender.md:774` facts carry HC 8.7(a)-(c), PWHL 44.3 etc.
- `on_ice_communication.md` four-book enumerations (28909) → gate ruled not permissive (28971).
- USAH 411 progressive suspensions (28913) → refuted at 28946 (carried at `body_contact_and_battles.md:690`, `rules_primer.md:32/:518`).
- NHL accumulation trigger and HC 4.4(a) referral (28951–28952) → repaired at 29216 (`rules_primer.md:32`, `:417`).
- Four minors → next game (28958–28959) → `rules_primer.md:520` repaired (29221, confirmed 29968).
- `goaltender.md` KT8 "Rule 69.3 … both books" with no book (28976) → no "69.3 … both books" string remains.
- `puck_handling.md:300` NHL 49.3 "ends your night" (28978) → repaired 29152; `:301` "ceiling inside the game".
- PWHL Table 11 restricted-area contradiction unstated (28979) → `defender.md:161` states it ("Its goalkeeper summary table still lists…").
- `goaltender.md:25` pad wording and KT6 27.7 overstatement (29024–29031) → repaired 29162.
- USAH 627(b)/HC 7.1(c)(iii)/CARHA 48(c) route-above (29192–29195) → 29330; `puck_handling.md:967/:1039`.
- "USA Hockey has two" (29248) and the HC supplementary-discipline label negative (29254) → 29408 (HC 4.4(a)/4.8(a)/4.10(a) in `rules_primer.md:32`).
- `defending_the_rush.md:500` head-first residual (29622) → 608(b) "reckless endangerment or head-first" (31557).
- `defender.md:781` truncated IIHF 43.1 parenthetical (29502) → `defender.md:788` quotes "(i.e., high-sticking, cross-checking, etc.)".
- §5 low-hit unit omits the match limbs (29799–29806) → `body_contact_and_battles.md:546` (HC 7.5(c) mandatory match), `:652`.
- The reviewer's PWHL from-behind weakest negative (29820) → 32890 act sweep (43.3/43.4/43.5 read).
- `body_contact_and_battles.md:651` omits PWHL 43.4 → `:652` "NHL and PWHL 43.4".
- `puck_handling.md:473` "the five" (29962, 29979) → 0 hits for "of the five".
- `defender.md` "of the four here" / "all four of them" and `defending_the_rush.md:386` "any of the four books" (29990) → 0 hits.
- `offensive_zone_play.md:637` (30023) → repaired 30625. EIHL goalie-interference gap (30050, 30239) → closed 30314. `goaltender.md:1102` → cleared 30485.
- PWHL 48.2/48.5 not checked against the corpus (30079) → added to `body_contact_and_battles.md` (32533).
- IIHF 63.2 capital roman (30169) → `playing_without_the_puck.md:325-326` write IIHF 63.2(III)/(II) and NHL (ii)/(iii) distinctly.
- M3 "in that limb only" (30289) → 0 hits in content/.
- "on this shelf" (30398, 30830) → 0 hits for "this shelf" in content/.
- Unaudited four-book premise in `defending_the_rush.md` (30413) and its ten unreached sites (30759) → 32291 wave plus 0 "four books" hits. The catch site is kept OPEN above.
- `shooting.md:521` silent premise (30547) → repaired 30643. PWHL 82 (30495) → closed 30651. `offensive_zone_play.md:1087` (30659) → "all five of these books" 0 hits.
- CARHA 53(b) at the net front (30716) → 32155 declined the facts-line tariff on measured grounds and raised the ceiling at `offensive_zone_play.md` `:709/:716/:1095` (now `:729/:737`).
- HC 7.5(c) carriers (30862–30865) → `forechecking_systems.md:662/:680/:1002`, `defender.md:283/:423`, `body_contact_and_battles.md:546/:652`.
- PWHL 52.1 "names angling only to limit it" (30867) → repaired 31095; closed-list "only" (32034) → propagation closed 32077.
- `defending_the_rush.md:733` "None of the five" (30874) → 0 hits. The M-D crease block (30879) → CARHA 58(c) added (31088).
- `defender.md:99/:805` CARHA 55(a) vs 75(b) (30908) → `defender.md:99`, `:813` cite 75(b).
- `puck_handling.md` Key focus / KT10 cage (30929) → `puck_handling.md:18` "and never on their cage"; `:1041`.
- Facemask half-answer (30941) → `puck_handling.md:442-443` (NHL/IIHF 75.2 "the lenient pair").
- Skates freezing 63.2(i) (30947) → `puck_handling.md:300`, `:1038`.
- `defender.md:781` "USA Hockey is the harshest" (30957) → 31206 wrote no superlative.
- Chunk 039 "not on the list above" (30965) → 0 hits.
- `forechecking_systems.md:515` offside (31025) → refuted at 31342.
- `forechecking_systems.md` local 49(b) (31141) → added (31361). Trailer contradiction (31161) → 31355.
- `puck_handling.md:952` Common Mistakes cage USA-only (31231, 31391) → `puck_handling.md:957` names CARHA 63/30(a) and USAH 622.
- CARHA 58(a) (31236) → settled via 74(b) (31405, 31639).
- `puck_handling.md:279` skate trap with no limit (31400) → `:279` "parking on it to force a whistle is a delay-of-game minor, and a penalty shot inside your own crease".
- Crease escalation absent from `:300` (31414) → `puck_handling.md:300` "a loose puck held in your skates at your own net-front is a penalty shot…".
- `defender.md:767` clipping trigger (31430) → `defender.md:774`. `puck_handling.md:281` "four books" (31435) → 0 hits.
- `forechecking_systems.md:236` HC charging truncations (31367) → 0 hits for the period-closed forms.
- `team_play_and_culture.md` CARHA first player off / PWHL (31468) and the bench-leaving CARHA exclusion (31847) → `off-the-ice/team_play_and_culture.md:24` "at least a game misconduct in all six books here — during a fight, in Hockey Canada…", and `:40` HC/CARHA double minor.
- `uk_rules.md` checking-age alarm (31579) → refuted 31663.
- `special_teams.md` "two books may be a floor" (31901) → USAH 607(b) added as the third (31983).
- ~25 four-book sites in `body_contact_and_battles.md` (31966) → per-section audit at 32208.
- `language_and_glossary.md:347` 607(b) (32019) → 32107.
- CARHA "goal frame" vs "goal net" (32095) → `defending_the_rush.md:306/:388` now say "the goal net in CARHA 53(b)". `:1700` NHL 70.1 (32097) → refuted 32248. PWHL 41/42/57 sweep (32099) → clean at 32301.
- `body_contact_and_battles.md:1892` KT6 late hit (32256) → phrase gone; `:576` facts "A late hit is not capped at a minor". `:1769` count vs walk (32260) → `:1775` now names no count.
- Offside four-book count in seven files (32339) → `rules_primer.md:23` "which makes six"; no four-book offside frame found in those files (`time_and_space.md:459` "All four books whistle a delayed offside" is a different claim, not re-checked).
- `breakouts.md:886/:896` "in all four books" (32459) → 0 hits.
- `goaltender.md` HC 8.5(c) match limb (32513, goaltender half) → `goaltender.md:1071`, `:1106` (special_teams half still OPEN).
- Two declared PWHL/Casebook negatives (32658–32670) → tested and held at 32901.
- `check_callout_flow.py` does not strip `details.toc-inline` (32692) → `scripts/check_callout_flow.py:274-279` now strips it.
- Tenth critical, false "two cases" (32774–32780) → repaired at 33084 and committed (`4224899`).
- CARHA 62(b)/54(b)/48(b) "not yet audited" (33029) → widely carried: `rules_primer.md:419/:441/:530/:725`, `body_contact_and_battles.md:355/:1567`, `language_and_glossary.md:489`. 48(b) head-butt is carried per 31474.
- Adverb census, eleven permissive paraphrases (33229–33247) → fixed: `defending_the_rush.md:307/:319/:913/:917` (no "causing injury" remains), `offensive_zone_play.md:729/:737`, `special_teams.md:646/:1117/:1271`, CARHA 62(c) double adverb at `rules_primer.md:974`, `offensive_zone_play.md:1211`, `passing_and_receiving.md:796`, `shooting.md:185/:981`; `body_contact_and_battles.md:1534`.
- Session-limit dirty list (33306–33321) → later commits (`4224899` onward) committed `body_contact_and_battles.md`, `language_and_glossary.md` and `rink_map.md`; the working tree is clean except `site/package-lock.json`.
- `risk_management.md` CARHA "so no mandatory ejection" (28438) → `risk_management.md:710/:716` state 48(a) mandatory.
- `defending_the_rush.md` M3, HC mandatory boarding major (30607) → `defending_the_rush.md:421`. M1/M2 (30605–30606) → 30739 and 0 "four books". M5 broken bold run at `:889` → not verified; low.


## D. Closed after verification (30 September 2026)

- [site D14] Caption `entry-trail-skate-drag` (site/src/diagrams/zone_entries.mjs:1198) names only NHL/IIHF while zone_entries.md reaches six books — verify (direction: accuracy) — (plan 10074) — [T2; triage 1 records this caption as repaired at plan 2006 (closed); triage 2 keeps it open to verify — (triage disagreement); untested since 30 Sep 2026] — **CLOSED (verifier, 30 Sep): `site/src/diagrams/zone_entries.mjs:1198` now names NHL 83.1, IIHF 83.1, PWHL 85.1, USAH 630(a), HC 6.11 and CARHA 72(c).**
- [defender KT9] defender.md KT9 lost "if you go down, go down toward the shooter, not sideways" → safety-reviewer (plan 23490–23492) — ruled safe at 25011 (Action: line is sole extraction carrier, must not be trimmed) → treat CLOSED with standing condition (direction: safety) — (plan 23490–23492) — [T5; triage 5 suggests CLOSED with a standing condition (ruled safe at plan 25011; the Action: line is the sole extraction carrier and must not be trimmed) — verifier to confirm] — **CLOSED (verifier): `defender.md:719`/`:735` carry the clause; the sole-carrier condition is kept as standing guidance.**
- [puck_handling counts] puck_handling.md:961/KT8/KT9 — now uses "six books"; KT kicking counts likely CLOSED-BY-LATER (not verified line by line) (direction: readability) — (plan line not given by triage) — [T5; triage 5: likely closed by later work, not verified line by line] — **CLOSED (verifier): every count in the file is "six".**
- [act-sweep vs 604] passing_and_receiving.md — 604 scoping ruled not required (closed at 23967) (direction: tooling) — (plan line not given by triage) — [T5; triage 5 lists this in OPEN but says "closed at 23967" — verifier to confirm] — **CLOSED (verifier): ruled at plan 23967.**
