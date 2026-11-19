# Verdicts, OPEN_ITEMS.md lines 252-320 (HEAD 69414796, tested 19 Nov 2026)

Corpus-wide evidence used repeatedly: `python3 scripts/check_readability.py` now reports **0 paragraphs over 1,200 chars, max sentence 60 words on every page, and only two Key Takeaways over 60 words corpus-wide (forechecking_systems KT6 65, getting_started 61)**. Every "KT left long", "longest sentence N words" and "long paragraph" item below is DONE on that evidence unless stated.

| Row | Item | Verdict | Evidence |
|---|---|---|---|
| Captions and small rules notes (23 Oct) | heading only, no rows | STALE | empty section; drop the heading |
| Off-ice cards | lemons "wide" label ~4 units below an IN tag | UNSURE | visual; not measured |
| Off-ice cards | four cards say "slowly" in step 1 and stage 1 | OPEN | practising_on_your_own.md :134/:142, :152/:161, :400/:410 still pair "slowly" in step 1 and stage 1 |
| Off-ice cards | markers amber where owner wrote orange; blade-to-shaft angle | STALE | owner style ruling of 1 Nov recorded in site/src/drills/lib/office_stick.mjs header ("markers are WEIGHTED PUCKS in the kit's cone colour, which is not the right-shoe orange"); "owner approved the pilot" |
| Off-ice cards | lib/office_stick.mjs figure8() unused, docstring "ONE direction" | OPEN | office_stick.mjs:90 "drawn in ONE direction"; figure8 only referenced in a comment at 07_off_ice_stick.mjs:269 |
| Off-ice cards | punch-turn card step 1 differs from the page | UNSURE | 05_turns_b.mjs card steps now match the page word for word; only the `trains` line differs ("Getting comfortable committing…" vs "committing…") |
| Off-ice cards | NotebookLM and Principles episodes predate §4/§5 | UNSURE | audio not checked |
| Off-ice cards | §4 never says shoes rather than socks on tiles | OPEN | no shoe/footwear instruction in §4 (only "a shoe" as a marker, :805) |
| Off-ice cards | Diagonal pulls card never says front dangle is side to side | OPEN | card step 1 and page :909 "dangle there"; only the desc says side to side |
| Off-ice cards | figure of 8 ~1345px tall | UNSURE | layout; not measured |
| Off-ice cards | hip-mobility front shin touches head circle | UNSURE | visual; not checked |
| Off-ice cards | glossary defines Dangle as a move to beat a defender | OPEN | language_and_glossary.md:304 |
| Finding More Ice | "faces suspension and fines" (R&R 14.5), change with getting_started KT8 and CM | UNSURE | text present at finding_more_ice :79, :153 and getting_started KT8 :715; the row names no defect — a "change together" note |
| Owner decisions | Readability method (owner, 8 Nov) | STANDING | owner decision |
| Owner decisions | Priority (owner, 8 Nov) | STANDING | owner decision |
| Owner decisions | "None open (all answered 31 Oct)" | STANDING | status line, no work |
| Content: rules accuracy | heading only, no rows | STALE | empty section |
| What it costs restructure | restructure itself | DONE | W371 record: "restructure is COMPLETE corpus-wide" |
| What it costs | W372 team_play handshake section, KTs, nzs :442 trim | DONE | W372 record |
| What it costs | team_play KT4 64 words; nzs :442 sentence 66 | DONE | check_readability: team_play KTmax 60, nzs maxS 59 |
| What it costs | nzs facts voice 602(a) only as intent | DONE | nzs :430 "A reckless USA Hockey charge … plan on a match … (602(a))" |
| What it costs | nzs :442 "a match likely" register | DONE | phrase not found |
| What it costs | mental_game :569 CARHA 32(c) unchecked | DONE | carha.txt:1498-1503 32(c) matches the sentence (last 10 minutes incl. overtime, next game) |
| What it costs | dzc :850 link → breakouts#over-the-glass | OPEN | dzc :850 still links #off-the-glass-and-out; breakouts has ### Over the glass at :1164 |
| What it costs | breakouts :307 "What it costs." label | OPEN | breakouts :307 still opens "**What it costs.**" |
| What it costs | breakouts restates the icing no-change split ~5 times | OPEN | :484, :506, :857, :943, :953, :1249 |
| What it costs | on_ice_communication screener :608/:610 restate USAH 640/604, HC 7.3 | OPEN | :608, :610 still carry them |
| What it costs | on_ice_communication :624 omits CARHA 10 ft | OPEN | :624 gives only the NHL five feet |
| What it costs | pilot: crease-catch case law could move to goaltender | OPEN | dzc :832-:834 still carry 10.2(a)(v), Sit. 67.6 (optional) |
| What it costs | pilot: facts :166/:466 and KT4 HC off-head carve-out | DONE | facts :166 now "(IIHF or Hockey Canada head hits can be: plan on ejection)"; KT4 no longer carries the carve-out |
| What it costs | pilot: KT6/KT11 over 60 words | DONE | dzc KTmax 60 |
| What it costs | pilot: leads without a tier (cross-check, scramble, loose puck) | UNSURE | not re-read |
| What it costs | Lessons from the pilot (5) | STANDING | brief guidance |
| What it costs | Pilot visual pass DONE; production `srcdoc` iframe trick; Chrome refuses local origins | STANDING | done + environment guidance |
| W262–W264 | (1) rules question | DONE | row marks CLOSED by W265–W268 |
| W262–W264 | (2) switching KT8 130 words | DONE | switching KTmax 60 |
| W262–W264 | (3) special_teams HC head sentences 79–81 words | DONE | ST maxS 59 |
| W262–W264 | (4) zone_entries :949 61 words | DONE | ZE maxS 59 |
| W262–W264 | (5) special_teams CM verbless subject; "it does" sites | DONE | ST :1277 now "for a hit from behind into…"; "Under Hockey Canada it does while" 0 hits; row marks CLOSED by W268 |
| W265–W268 | (1) center/winger goalie head limbs lack 7.6(c)/7.7(c) match | DONE | center :791, winger :875 both name the match (7.6(c); 7.7(c)) |
| W265–W268 | (1) body_contact goalie head limb lacks floor | DONE | body_contact :1391 "at least 7.5's minor plus game misconduct otherwise" |
| W265–W268 | (1) goaltender precedence inconsistent | STALE | "takes precedence" retired; goaltender carries no precedence wording |
| W265–W268 | (2)+(7) 7.7 precedence; center KT6 | DONE | row: CLOSED by W269–W276 |
| W265–W268 | (3) paraphrase sweep for the old false reason | UNSURE | lexical form 0 hits; paraphrases and captions never swept |
| W265–W268 | (4) faceoffs PWHL "(Rule 81.6)" | DONE | faceoffs :941 "PWHL 83.6"; "(Rule 81.6)" 0 hits in faceoffs |
| W265–W268 | (5) KTs long; (6) game_management sentence 68 | DONE | readability figures |
| W269–W276 | (1) flat "is head contact, a match if…" | STALE | W273 reviewer ruled acceptable; never cheaper |
| W269–W276 | (2) "can be called" understates 7.6's "must" | DONE | "can be called (as) head contact" 0 hits |
| W269–W276 | (3) 7.7 Interpretation 1 omitted from two-book accounts | OPEN | dzc :755 and forechecking :984 still "unless the violence is minimal, when the referee sends it to another rule"; body_contact :799 cites only Interp. 2; rules_primer :439 now carries Interp. 1 |
| W269–W276 | (4) passing_and_receiving head-first, no 7.5(b) | DONE | p&r :223 "must be a major and a game misconduct (7.5(b))" |
| W269–W276 | (5) body_contact "whichever rule it is called under" voices only numbers | OPEN | body_contact :1455 |
| W269–W276 | (6) dzc J/S sentence omits 7.7(a) minor + 10-min misconduct | OPEN | dzc :755 J/S sentence lists only major+GM and match |
| W269–W276 | (7) goaltender 7.7 preamble charging vs 8.5(b) unresolved | STALE | book gap; page plans on 8.5(b), conservative; no action stated |
| W269–W276 | (8) 7.6 division scope is an inference | STALE | observation, no action stated |
| W269–W276 | (9) goaltender :1650 no head match; center KT6 tension | DONE | goaltender :1662 names 7.6(c)/7.7(c) match; "every book but USA Hockey" 0 hits in center |
| W277–W280 | (1) KTs long | DONE | readability figures |
| W277–W280 | (2) sibling KT drift check | UNSURE | sweep not re-run |
| W277–W280 | (3) rules_primer "9.5's bare minor" | OPEN | rules_primer :439 still "back down to 9.5's bare minor" (accidental-injury double minor is stated at :420) |
| W277–W280 | (4) PWTP :737 69.7 reverse limb without condition | DONE | PWTP :739 states all three conditions |
| W277–W280 | (5) body_contact returning goalie names only NHL/IIHF/PWHL | OPEN | body_contact :1341 (optional HC/CARHA) |
| W277–W280 | (6) defender "plan then on a match" over three triggers | OPEN | defender hit-from-behind paragraph still "— plan then on a match penalty…" (errs harsher) |
| W277–W280 | (7) next readability census | DONE | long paragraphs 0 corpus-wide |
| W277–W280 | (8) rules_primer bold lead "once it is more than minimal violence" | OPEN | rules_primer :439 bold lead unchanged (corrected later in the paragraph) |
| W277–W280 | (8) rules_primer "NHL Rule 53" scopes 53.7/53.8 to NHL | OPEN | rules_primer :603 |
| W277–W280 | (8) body_contact KT13 rim/reverse moved to on-the-wall | UNSURE | KT13 reads "With the puck on the wall … rim … reverse"; needs content-reviewer judgement |
| W277–W280 | (9) p&r CARHA only 53(b) | OPEN | p&r :227 cites 53(b) only; no 53(a) |
| W281–W284 | (1) KTs long | DONE | readability figures |
| W281–W284 | (2) ST goalie paragraph 1,330 / CM 1,423 chars | DONE | longest ST line 1,194 |
| W281–W284 | (3) "plan on" over mandatory match | DONE | ruled; CLOSED by W285–W288 |
| W281–W284 | glossary KT11/CM never mention HC 7.4(c) for a goalie charge | OPEN | glossary :518, KT11 — rules-verifier question still unasked |
| W281–W284 | glossary CM "A match is there for any attempt to injure" align with KT11 | STALE | KT11 no longer says "is a match" |
| W281–W284 | center :737 optional bold | UNSURE | not located by text |
| W281–W284 | goaltender :1650 USAH 608(c) omits "recklessly" | DONE | body :1623/:1635/:1661 say reckless; note facts :1375 still "always with excessive force … (608(c))" without "reckless" (harsher) |
| W281–W284 | center facts cites only (7.6(c)) | OPEN | center :886 "a match if they cannot protect themselves (7.6(c))" |
| W281–W284 | ST facts "or on the head, it is a match" | DONE | 0 hits |
| W281–W284 | rules_primer "Assume a major and game misconduct" for HC high stick | OPEN | rules_primer :1110 table cell (errs harsher) |
| W281–W284 | census gap at wider window | UNSURE | not re-run |
| W281–W284 | W287: 608 sites' "plan on a match" rationale; rules-verifier re-rule | OPEN | no later record found re-ruling it |
| W281–W284 | unswept "expect a match" (7), "can be a match"; "plan on it; a match if defenceless" facts shape | OPEN | "expect a match" 7 hits; "can be a match" 1; shape now at zone_entries :239, :845 only |
| W281–W284 | (4) dtr flat "on the head it is head contact" omit attempt-to-injure match | OPEN | dtr :404, :652, :951, :1099, :1111, :1115 (not permissive) |
| W281–W284 | (5) sibling check: description→instruction, split half losing "to the head" | UNSURE | not re-swept |
| W281–W284 | (6) HC off-head carve-out ends sentence before counterweight | OPEN | shooting :536 "…only while it stays off the head. On the head…"; forechecking :222 same shape |
| W281–W284 | (7) "harsher of the two if you drive them head first" | OPEN | game_management, winger, dzc :755 (rules-verifier, rule once) |
| W260–W261 | (1) zone_entries facts at 300/300 | STALE | status note; :239 no longer at cap |
| W260–W261 | (2) amber on discretionary "a charge can end your game" | OPEN | zone_entries :371, :823, KT11 :1270 (reviewer did not judge them defects) |
| W260–W261 | (3) IIHF owner question / 7.7(b) | DONE | see W256 (3), (4) |
| W260–W261 | (4) USAH 607(e) not cited for reckless-charge match | OPEN | 607(e) 0 hits in zone_entries and shooting (optional) |
| W256–W259 | (1) facts silent on head floor | DONE | PWTP :824, ZE :239/:845, defender :820, dzc :166 and Never :477 all carry the head limb |
| W256–W259 | (2) rules_primer table cell "while the hit stays off the head" | DONE | 0 hits |
| W256–W259 | (3) "never just two minutes in any book" vs IIHF 48.2 | DONE | "in any book" form 0 hits; IIHF head scope handled in W362 and W392 records |
| W256–W259 | (4) HC 7.7(b) beside 7.5 floor | DONE | body_contact :801 names 7.7(b) |
| W256–W259 | (5) head-first drive with no head contact under 7.6 | UNSURE | rules question, unruled |
| W256–W259 | (6) paraphrase census not swept | UNSURE | not re-swept |
| W253–W255 | (1) forechecking KT2 attributes arm/shoulder/hip to IIHF | DONE | KT2 :1172 now PWHL for arm/shoulder/hip, IIHF women's for step/glide |
| W253–W255 | (2) EIHL 46.1 "2nd Major" per game or season | DONE | ambiguity disclosed in uk_rules and body_contact ("The Casebook never says…") |
| W253–W255 | (3) junior-age player in an NIHL fixture | UNSURE | unsettled reading; page safe either way |
| W253–W255 | (4) shooting long sentences | DONE | shooting maxS 60 |
| W253–W255 | (5) shooting "defenceless" vs "helpless" | OPEN | shooting facts :508 "helpless", CM :953 "helpless goalie" |
| "Harsher of" ruling | whole row | DONE | row: wave DONE in W256–W259; sources/README.md PWHL entry now "identical numbers — not identical text: PWHL 48.2 is a major"; :798 and "harsher price stands" phrases gone |
| W249–W252 | (1) special_teams fight opener | DONE | row ✅ |
| W249–W252 | (2) long amber runs ST :1099 435, FC :970 400 | DONE | longest runs now ST 332 (:1277), FC 296 (:1086) |
| W249–W252 | (3) optional amber: defender 7.4(b), faceoffs CARHA "any game", winger 608(c) | OPEN | all three still plain (defender charging paragraph, faceoffs "Under CARHA the forechecker may not hit that player in any game", winger "in all instances") |
| W249–W252 | (4) non-price ambers as only marker (center, dtr, faceoffs) | UNSURE | judgement; not re-read |
| W249–W252 | (6) faceoffs kick sentence split by the glyph | DONE | faceoffs :1196 "⚠️ **Kicking or attempting to kick an opponent is a match penalty**" |
| W249–W252 | (5) forechecking USAH/CARHA goalie charging bullets unmarked | OPEN | "Contact with the goalie" bullets "Charging one, under USA Hockey/CARHA" carry no ⚠️ |
| W245–W248 | (1) shooting goalie P3 | DONE | shooting :923 amber now on "Some books make it mandatory" |
| W245–W248 | (1) zone_entries goalie P3, OZP late hit P1 | OPEN | ZE :371 amber ends before "automatically under Hockey Canada"; OZP :1004 amber on "not capped at a minor in any book" |
| W245–W248 | (2) amber on non-price as only marker (many paragraphs) | UNSURE | cited by paragraph number only; not re-read |
| W245–W248 | (3) long amber runs PWTP/ZE/OZP | UNSURE | PWTP and ZE hit-from-behind runs now ≤220 chars (done); OZP hit-from-behind runs still 276-295 chars |
| W245–W248 | (4) unmarked paragraphs carrying ejections | UNSURE | judgement; not re-read |
| W245–W248 | (5) switching "gets your centre ejected from the draw" | OPEN | switching :557 |
| W243/W244 | (1) marker pass | DONE | row ✅ |
| W243/W244 | (2) goaltender What it costs ~15 screens; tier section repeats lead | OPEN | goaltender :1281 "The price." and :1618 open on the same "Charging you is a mandatory major…" sentence; height not re-measured |
| W243/W244 | (3) switching KT8 132 words | DONE | switching KTmax 60 |
| W243/W244 | (4) IIHF 43-vs-48 precedence | DONE | W392 record (48.1 supersedes, 48.2 minor, "plan on the major") |
| W243/W244 | (5a) switching :272 repeats :270; goaltender "It is the game…" | UNSURE | switching sentence no longer in that form (STALE); goaltender :1660 unchanged (optional) |
| W243/W244 | (5) centres' pre-drop contact mandatory minor, USAH 613(e)/HC 6.2(c) | OPEN | 613(e) 0 hits in switching_positions (optional) |
| W241/W242 | (1) amber asymmetry | DONE | row ✅ |
| W241/W242 | (2) shooting high-sticks 4,887px | UNSURE | not measured |
| W241/W242 | (3) two "comes later" pointers four blocks apart | OPEN | shooting :532 and :542 |
| W241/W242 | (4) shooting facts off-head without counterweight | DONE | facts :508 "on it, plan on ejection anyway" |
| W241/W242 | (5) shooting 97-word sentence | DONE | maxS 60 |
| W241/W242 | (6) Common Mistakes never link into What it costs | OPEN | no #what-it-costs/#contact-with-a-goalie link in shooting CM (:935-:1060) |
| W241/W242 | (7) CM945 USAH 608(c) mandatory match | DONE | CM :953 names USA Hockey's reckless excessive-force match |
| W239/W240 | (1) risk_management slew-foot marker asymmetry | DONE | :909 HC 8.8(c) amber; section opens "Do not plan on a minor… eject you" |
| W239/W240 | (2) zone_entries hit-from-behind lead | DONE | row ✅ |
| W239/W240 | (3) risk_management "The price." repeats What it costs | OPEN | :320 and :897 open on the same amber sentence |
| W239/W240 | (4) pointer wording varies | OPEN | :320 "The section headed What it costs…, near the end of the page" vs :771 "What it costs, below" |
| W239/W240 | (5) ZE sentence 114; RM paragraph 1,216 | DONE | readability figures |
| W239/W240 | (6) HC "harsher of" at ZE/RM | DONE | ruling went to "plan on"; wave W256–W259 |
| W237/W238 | (1) game_management "A late hit" dominates; no hit-from-behind subsection | OPEN | What it costs :1164; A late hit :1180-:1243 of :1168-:1270 |
| W237/W238 | (2) mid-list pointers (gm, OZP) | UNSURE | not re-read |
| W237/W238 | (3) "harsher of" ruling | DONE | W256–W259 |
| W237/W238 | (4) forechecking stride cue | DONE | row ✅ W254 |
| W237/W238 | (5) OZP "a charge on a player who cannot defend themselves — the winger facing the glass" | DONE | phrase not found |
| W235 | (1) "Contact with their goalie" ~40% | UNSURE | now 34% of What it costs, still the largest subsection; whether to tighten is judgement |
| W235 | (2) Smothering body keeps Rule-only panel after its pointer | UNSURE | section :750 now opens on the instruction; not re-judged |
| W235 | (3) two consecutive cross-references in PK clearing list | UNSURE | :748 has one pointer; not re-judged |
| W235 | (4) 608 sweep done | DONE | row |
| W235 | (4) USAH penalty summary lists 608(c) as "Match Penalty Option" — undisclosed | OPEN | "Match Penalty Option" disclosed only for 615(c); no 608 disclosure |
| W235 | (4) Casebook 608 Sit. 1 cited without its mandatory-match limb | OPEN | zone_entries :240, :846; winger :709 |
| W235 | (4) shooting drops "reckless" from 608(c) | UNSURE | shooting :509 "a must for excessive force…" follows "reckless" earlier in the line; harsher either way |
| W235 | (4) shooting CM / switching KT8 "plan on a match" vs body "must" | DONE | switching KTs carry no 608; shooting CM :953 states the match |
| W235 | (4) facts voiced "608(c), clause c must give a match" | OPEN | "608(c) must give" still in ~13 facts lines across 9 files |
| W235 | (5) HC division-split middle tier | UNSURE | optional; not re-swept |
| W235 | (6) facts match-only at caps (acceptable) | STALE | ruled acceptable |
| W235 | (7) four long sentences | DONE | ST maxS 59 |
| W234 | (1) dtr carve-outs subsection ~12,200px | OPEN | ### The carve-outs… :1008-:1059, still the largest; px not re-measured |
| W234 | (2) paired "comes later" pointers | OPEN | :252/:254, :337/:339, :455/:457, :553/:555 |
| W234 | (3) scene tariffs before pointer | UNSURE | not re-read |
| W234 | (4) Boarding, Interference, A hit from behind, Far attacker's stick no facts panel | OPEN | :929, :937, :949, :984 subsections have no facts block |
| W234 | (5) "What it costs you:" label | OPEN | :750, :775 |
| W234 | (6) optional HC counterweight; PWHL clause at :254 | UNSURE | PWHL phrase gone; counterweight optional |
| W234 | (7) "none prices it cheaply" skips USAH 608(a) floor | OPEN | dtr CM :1115 |
| W348 | (1) sweep | DONE | row: done in W349 |
| W348 | (2) dzc facts never carry defenceless-into-boards match | OPEN | no 7.5(c)/53(b)/608(c) in any dzc facts line |
| W348 | (3) forechecking "may you body check" pair restated | DONE | W475 record |
| W348 | (4) forechecking :223 no CARHA 48 / USAH 602(a) intent-to-injure route | OPEN | forechecking :222 names HC 7.5(c)/7.6(c)/7.7(c) and CARHA 53(b) only |
| W348 | (5) USAH 640(b) adult-male exception, corpus silent | DONE | body_contact :663, forechecking :1076 |
| W348 | (6) no British book on disk states checking status for EIH/SIHA adult rec or BUIHA | UNSURE | not checked against sources/ |
| W348 | (7) ear test; forechecking panel height | UNSURE | needs audio/browser |
| Site checks before commit | Playwright fallback | STANDING | environment guidance |
| SG212 | (1) HC 8.3 measured from the puck | DONE | game_management :172, :1197, :1205 and mental_game :153 all measure from the puck carrier / arm and stick |
| SG212 | (2) forechecking late-hit facts imply a timed check exists, no "if checking is allowed" limb | OPEN | forechecking facts under ### Late, sideways and third-man hits (:1067-:1070) |
| SG212 | (3) "640(g) ejects if reckless" unqualified for adult men | OPEN | forechecking facts :1064 |
| SG212 | (4) CARHA 66(a) Note 1 possession | UNSURE | not traced |
| Coaching sections lead with tactic | written-lead programme complete; reopen only on change | STANDING | owner decision + programme closed |
| Coaching | H4/H3 all-bold lead looks like a heading (style tweak; 12 W228 leads 100% bold) | UNSURE | not re-measured |
| Coaching | (2) HC head trigger "above the shoulder" | DONE | no HC head-contact "above the shoulder" in rules_primer (the :433 hit is high-sticking) |
| Coaching | (2) zone_entries "pressure and contact triggers" for USAH 630(d) | OPEN | zone_entries :1146 |
| Coaching | (2) WNIHL overtime format; EIHL Casebook amends Rule 19 | UNSURE | not checked |
| Coaching | (2c) turn-away limit wordings not searched; route-implied turns | UNSURE | not swept |
| Coaching | (2c) zone_entries §5 "side-on" curl-back | OPEN | zone_entries :558 (one look when §5 next edited) |
| Coaching | gm CM "get the goalie off at once" vs goaltender | OPEN | game_management :1285 |
| Coaching | dzc man-on-man Convention "including down into the corner" voiced alone | OPEN | dzc :276 |
| Coaching | body_contact Action "meet contact with your legs moving" | OPEN | body_contact :960 |
| Coaching | body_contact poke-check never states tripping risk | OPEN | no "never through their skates"-type limb (optional) |
| Coaching | forechecking ~:1009 goalie limb implicit | UNSURE | not located |
| Coaching | CARHA possession edges untested | UNSURE | not tested |
| Coaching | game_management "5-on-4 in regulation" | DONE | 0 hits |
| Coaching | (3) back-references across a panel, judged readable | STALE | judged readable, no action |
| SG220/221 | (1) winger "A hit from behind" ordering | UNSURE | still lead → prose → facts; judgement |
| SG220/221 | (1) defender "Your goalie behind the net" mid-subsection panel | DONE | panel now directly after the lead (:878) |
| SG220/221 | (2) scene paragraphs restate tiers then "comes later" | UNSURE | standing tension; not re-read |
| SG220/221 | (3) winger backcheck body lengthening lacks 625(a)(4) | OPEN | winger facts :851 "your body may lengthen their path"; no 625 in :719 |
| SG220/221 | (4) HC 4.8(b)(i) three stick minors = ejection | OPEN | not on winger or defender (winger :826 cites 4.8(b) for head contact only) |
| SG220/221 | (5) defender :720 "under NHL and IIHF rules" omits PWHL | OPEN | defender :752 (facts :986 carries PWHL) |
| SG220/221 | (6) defender icing omits HC Senior option | DONE | defender :986 "Member-opted Senior (6.7(d))" |
| SG220/221 | (6) winger "So a charge, cross-check or interference…" names no book | OPEN | winger :794 |
| SG220/221 | (6) defender walk-out drops IIHF 101.1 women's tier | STALE | gate judged it covered |
| SG220/221 | (6) defender facts "however little force" cited to 620(a) | OPEN | defender :291 |
| W215/W216 | (1) Casebook 620 Sit. 2 — owner decided, keep strict | STANDING | owner decision |
| W215/W216 | (2) "in most books it ends your game" with no USAH price | OPEN | faceoffs facts :586, risk_management KF :30 and KT11, on_ice_communication :604 |
| W215/W216 | (3) pages not swept for the shape | UNSURE | not swept |
| W215/W216 | (4) switching CM and KT5 price helmet contact for IIHF only | OPEN | switching CM "Getting low at the dot…" and KT5 |
| W215/W216 | (5) faceoffs HC 7.7 "a minimal clash is still a minor" | OPEN | faceoffs :1160 |
| W215/W216 | (6) no summary layer says minor+misconduct is for minimal cases | UNSURE | not re-swept |
| center SG214 | (1) instruction first | DONE | shipped W219 |
| center SG214 | (1) forechecking What it costs bullets restate panel Rule lines | UNSURE | not re-read |
| center SG214 | (1) faceoffs "Your head at the dot" states instructions three times | OPEN | faceoffs :1142 lead, facts, and the two bold paragraphs after |
| center SG214 | (2) center/faceoffs narration audio lags | UNSURE | audio |
| center SG214 | (3), (5) | DONE | row: closed in W215/W216 |
| center SG214 | (4) EIHL Casebook 47 example cut from center CM | OPEN | no Elite League head-butt example in center or faceoffs (optional, owner want) |
| center SG214 | (6) HC 7.6 vs 7.1 for a minor/female head-butt unsettled | UNSURE | unruled |
| faceoffs SG213 | (1) "Using your feet" / "Getting low" panels open on Rule rows | OPEN | :283 panel opens with 5 Rule rows; :764 with 2 |
| faceoffs SG213 | (2) Defensive-zone plays 10 rows; four 8-row panels | UNSURE | not counted |
| faceoffs SG213 | (3) 17 "comes later" pointers | OPEN | still 17 |
| faceoffs SG213 | (4) center At-the-dot should point at faceoffs | DONE | center ### At the dot links five faceoffs.md anchors |
| faceoffs SG213 | (5) five-second late-arrival removal should name PWHL 78.4 | OPEN | faceoffs :747, :758 cite NHL/IIHF 76.4 only |
| Out-of-play SG53 | IIHF lowercase limb citation case (cosmetic) | OPEN | 16 joint "NHL and IIHF 63.2(x)" sites (goaltender 8, faceoffs 3, puck_handling 3, defender 2) |
| Contact wording SG56 | "all 31 pages swept" | DONE | row states swept |
| Contact wording | steering verbs dtr :249/:415 passive | DONE | "pushed to the wall" / "they are pushed wide" 0 hits |
| Contact wording | USAH "control" vs "has the puck" | STALE | row: "left for readability" |
| Contact wording | cues not swept ("finish", "take the man after the poke", "use your size", "tie them up") | UNSURE | sweep not done; "tie them up" hits are faceoff stick tie-ups |
| Restated ladders exhausted on breakouts (SG51) | method conclusion | STANDING | "not worth repeating page by page" |
| Repetition pass (SG42) | method note | STANDING | guidance |
| Repetition pass | core_principles "whatever system, position or league"; §3 "ninety-six percent" | DONE | both 0 hits |
| Restated rule ladders (SG45) | pointer-reduction pilot | STALE | superseded by the What it costs restructure, complete per W371 |
| Spoken "Important." runs | body_contact KT8–11 stays unless owner rewords | STANDING | decision |
| Spoken "Important." runs | rules_primer no run of four | DONE | measurement, nothing open |
| Diagrams and site | heading (line 320) | — | kept; its rows belong to the next range |
