# Wave 24 — goalie contact: the rules on unnecessary contact, and the permissions scoped (30 September 2026)

**Scope.** This wave worked the permissive follow-ups wave 23 left open, and a read-only census of goalie-contact lines across the rest of the corpus.
- **The follow-ups:** the 69.4 incidental-contact permission voiced without USA Hockey's contrast; goalie contact framed as deliberate-only; the CARHA lane and 54(b); CARHA 74(a); USAH Casebook 607 Situation 5; and the checking-level limb.
- **The census:** 13 candidates found in seven more documents, in two shapes.

Nine file-disjoint lanes changed seventeen documents.

**Method.** One author per lane, briefed with wave 23's lesson: read every edited unit together with its voiced neighbours, and never add a permission to a summary layer. Then:
- an independent `rules-verifier` or `safety-reviewer` read every lane;
- every blocked unit went back to its author;
- every repair was re-read;
- a final reviewer re-read all late repairs, and one last read cleared the three it blocked.

**What was wrong, in kind.**
- **Deliberate-only contact.** Goalie contact was priced as deliberate-only in NHL, IIHF and PWHL text, while a neighbouring line gave USA Hockey or Hockey Canada "any" or "even accidental" contact. Every book penalises unnecessary contact: NHL/IIHF 42.1 and 69.4, PWHL 42.1 and 71.4, USAH 607(d), HC 8.5 "anywhere on the ice", and the CARHA 52(b) Note.
- **Unscoped permission.** The 69.4 incidental-contact permission was voiced with no book named, or without its conditions ("while the goalkeeper is playing the puck", "reasonable effort"), or without USA Hockey's Note 1.
- **Understated or misplaced rules.** CARHA 52(b)'s mandatory crease ejection sat under a discretionary 66(b) price. CARHA 54(b)'s head-high cross-check ejection was missing. CARHA 74(a) was missing, with holding the puck in your own end called "completely legitimate". Casebook 607 Situation 5 was cited for a crease case.
- **Pointers and counterweights repaired to the wrong target:**
  - "The same rule" re-pointed at 607(d).
  - A returning-goalkeeper limb whose subject became the goalie.
  - A rebound Key Takeaway implying contact is fine outside the Elite League: only NHL/IIHF 69.7 and PWHL 71.7 carve out rebound contact.
  - A CARHA line making "that impedes" a qualifier.
  - "Tried to avoid" softening 69.4's "reasonable effort".

**A coordinator ruling this wave adds.** USA Hockey 607(d) Note 1 ("any accidental or unavoidable contact… shall be penalized under the Interference rule") can be read as penalising accidental contact outright, or as routing it to interference once it is penalised. playing_without_the_puck's Notes already disclosed that. Several repairs stated the first reading flat, which made that disclosure false. **Ruling:** every site quotes Note 1, or says it "sends/files" accidental contact to interference; never "penalises even accidental contact". Naming the price ("a 625(a)(8) minor") is allowed and was restored where a repair had dropped it.

**The lesson.** Wave 23's contrast lesson held, and was briefed, but it still recurred in new forms: naming USA Hockey alone implied the other books grant the permission; "writes none" was false against the Casebook; and "avoidable contact" implied unavoidable contact is free. **Each was found only by a reader who read the edited unit with its neighbours as voiced.**

**Gates, after the last content edit (22:24, center.md):**
- `check_links` 0, `check_facts` conform, `check_absolutes` 0, `check_geometry` 0, `check_secrets` 0.
- `check_marker_pairs`: 0 lost in all 17 files.
- Clean `npm run build` (absolute binary), started 22:29 and again at 22:50 after the gate repairs, exit 0; check-links resolves all 54 pages.
- `check_callout_flow --panels` 0 and `--bare` 0.

## After the first commit gate (30 September, 22:40–22:50)

The first `commit-gate` run blocked on two points.

**(1) "Tried to avoid" had survived at ozp facts :556.** It softens 69.4's "reasonable effort", and it was the very defect class this record lists. It is repaired to "…allowed only as they play the puck, if you made a reasonable effort". The same gloss was also aligned at:
- rules_primer :704;
- pwtp :650 (69.1);
- goaltender facts :1118 and bullet :1137. These now use Casebook 607 Situation 4's "clearly made every attempt to avoid", where they had said "clearly tried".

A `rules-verifier` re-read all five: **CLEAR**.

**Correction, found by the second gate:** this record first said "a grep of the 17 files for 'tried to avoid' now returns 0". That was false. The coordinator ran the grep over `git diff --name-only`, which lists only UNSTAGED files; the files were already staged, so the grep searched nothing and printed zero. It is the silent-false-pass family CLAUDE.md records, and it reproduced on the coordinator. A correct grep of the staged index found four hits. Two were the same softened Casebook 607 Situation 4 gloss:
- special_teams facts :1094, pre-existing and voiced alone;
- body_contact :1186, in a staged hunk.

Both are now aligned to "clearly made every attempt to avoid", as are body_contact facts :1215 ("an obvious attempt") and body :1232 ("the attempt"). A `rules-verifier` read all four: **CLEAR**. Its grep of the working tree of all 17 files leaves two hits, both at special_teams :1125 and KT10 :1248 ("be the player who visibly tried to avoid it"). They are coaching instructions across all books, not glosses of a relief, and are kept. `site/dist` was rebuilt after the last content edit.

**(2) An unrelated plan row.** The staged plan also carries a `[podcast v4]` row. It is the coordinator's own finished row, recording the owner's decision of 30 September to synthesise Style B audio on ElevenLabs Eleven v4 and to generate every episode before the launch discount ends on 12 October. It is not wave-24 work. It is named here and in the commit message.

Row carried: goaltender facts :1118 "a defender" could be heard as "a defenceman". The book means any defending player, and "a teammate" is the same length. Not permissive: a misreading narrows the no-penalty rung.

## Rendered site (D15)

`site-reviewer` ran on `site/dist` built at 22:29. **All 17 pages pass: no critical, major or minor findings.**
- **Coverage:** 68 probe runs at 400 px and 1440 px (CDP device metrics), in light and dark.
- **Callouts:** 0 panels, 0 bare or untreated glyphs. Every wrapper opens with its glyph, and all 12 facts lines carrying ⚠️ are wrapped.
- **Structure:** Key Takeaways are continuous, and all 20 in-text references are in range. No horizontal scroll at 400 px.
- **Console and network:** console clean, no HTTP errors, no off-origin requests.
- **Spot checks by eye:** 8 new amber runs in rink_map, shooting, neutral_zone_systems, breakouts and special_teams each wrap the instruction, not a citation.
- **Not reached:** the theme toggle itself, 320 px, search, and non-Chrome browsers.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×5, `safety-reviewer` ×12 | NHL/IIHF 42.1, 69.1–69.7; PWHL 42.1, 71.1–71.7; USAH 604, 607(a)–(e) + Notes 1/2, 625(a), Casebook 607 Sits. 4/5/6; HC 8.3 preamble, 8.5 + (a)–(e) + Interps. 1–4, 10.1(v); CARHA 30, 32, 49, 52(a)/(b) + Note, 54(a)–(d), 55(a), 66(a) Notes, 66(b), 74(a)/(b); EIHL Casebook 42, 69. |
| D2 | Exceptions | Yes | same | 69.4's two conditions; 69.7/71.7 rebound carve-out scoped to three books; Situation 5 kept with its 604 scope, out of summary layers; CARHA 74(a)'s "unless prevented". |
| D3 | Rule-set divergence | Yes | same | False "USA Hockey permits none/alone" and USA-Hockey-only contrasts repaired; "every book" claims verified across six books. |
| D4 | Citation integrity | Yes | readers | Quotations read past their closing marks; a Situation cited out of its scope replaced. |
| D5 | Provenance | No citation added | coordinator | No external URL added, so no `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | readers | "No rebound carve-out in HC/USAH/CARHA" (searched by act); "no duty to advance the puck outside CARHA"; "USAH Rule 607 writes no incidental permission" (scoped to the rule, not the Casebook). |
| D7 | Cardinal rule | Partly | readers | Not the wave's subject. |
| D8 | Numeric ownership / restatement | Partly | readers | Book lists named rather than counted. **Otherwise declared out of scope.** |
| D9 | Summary layer | Yes | layer tests and readers | Key focus, Overview, CM, KT and facts repaired wherever the claim appeared; permissions removed from two KTs rather than added. |
| D10 | Key-facts layer | Yes | readers | Several lines at 294–300/300; HARD_MAX blocks edited by substitution; merges checked for lost limbs. |
| D11 | Reader safety | Yes | a reader on every lane and every repair | |
| D12 | Read-aloud integrity | Yes | every author and reader rendered `md_to_speech` | 0 lost markers ×17; units read with their chunk neighbours. |
| D13 | Folklore | No | | **Declared out of scope.** |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | **Declared out of scope** beyond changed units. |
| D15 | Rendered site | Yes | `site-reviewer` | See above. |

**What this wave could not have found.** Every lane found sites by wording (69.4, "incidental", "deliberate", "unnecessary", Note 1). A goalie-contact permission phrased without those words would pass. The follow-up rows in OPEN_ITEMS.md name the known remaining carriers: rebound framing in goaltender, winger and ozp; the 42.1 route; the HC 8.5(b) voice; and the uneven carriage of Casebook Situations 4 and 5.

## Wave log (moved verbatim from OPEN_ITEMS.md)

## In flight

- ⏳ **W24 (30 Sep): the W23 permissive follow-ups.** Lanes: A pwtp; B ozp+winger; C goaltender+rules_primer; D body_contact; E shooting+NZS+breakouts; F puck_support+scanning; G1 rink_map+glossary; G2 center+special_teams; G3 forechecking+time_and_space+game_management (G = the census's 13 goalie-contact candidates). Brief: scratchpad w24_brief.md; reads use w24_read_brief.md.
- ✅ F scanning: body "roadblock" + new facts "not fair game" (69.4/71.4, HC 8.5, USAH 607(d) + Note 1, 69.2/71.2). puck_support: false premise. Read (rules): **CLEAR**. Rows: add CARHA 52(b) Note + 66(b) to scanning :371 (optional); **HC 8.5(b) (mandatory major+GM for charging the goaltender, no location) never voiced in scanning — check siblings**.
- **Coordinator ruling (30 Sep), from read A:** USA Hockey 607(d) Note 1 is ambiguous (pwtp Notes :985 disclose "neither reading is asserted"). Every site must use a wording true under both readings: quote "sends 'any accidental or unavoidable contact' to the Interference rule", or "files even accidental contact under interference"; never "penalises even accidental contact". Keep 69.4's "reasonable effort"; never "tried to avoid it". Sent to live lanes E, G1-G3; pwtp author resumed with read A's 3 blocks ("tried to avoid" at facts :633; flat Note 1 at 5 sites; CARHA 66(b) "any contact that impedes" as a qualifier). **Sweep 30 Sep: the flat wording is at rules_primer :1102, time_and_space :481, body_contact :1186, goaltender :1154, forechecking :757/:772/:776/:933, ozp :579, special_teams :1075, shooting :861, and pwtp** — fix each in its lane's read-repair; pre-existing sites included.
- ✅ E shooting+NZS+breakouts: shooting 69.4 "not fair game / in every case" at facts :309, body :314 (+ ⚠️ USAH Note 1), blockquote :320, 🇬🇧 :498, CM :861; **CARHA 54(b) (head-high cross-check = mandatory major+GM, injury or not) at :538 and CM :861**; **CARHA 74(a) ("shall always advance the puck" in the defending zone) at NZS low regroup (facts, body :521, trap item 6) and breakouts control breakout (facts, body :750)**. 0 lost. Rows: shooting :538 "USA Hockey Rule 625(a) writes only a minor" beside 69.2 (W16 shape, mitigated in unit); breakouts delayed-penalty/6-on-5 "buy time" behind the net under CARHA 74(a); CARHA 75(d) unplaced.
- Read C (goaltender+rp): **BLOCK goaltender :1170** — the new USAH sentence re-pointed "The same rule" (the 69.4 returning-goalkeeper clause) at 607(d), which has no such clause. Rest clear. Author resumed: move it; apply the Note 1 ruling at goaltender :1154, rp :704/:1015/KT9; DROP the three-book permission from rp KT9 (the only permission in a KT); goaltender :1154 "they" → the attacker, "reasonable effort".
- Read D (body_contact): **BLOCK facts :1224** — "one 'prevented from returning'… may be penalised" makes the goalkeeper the subject; the attacker's foul (HEAD limb) is lost. KT11 "every book penalises unnecessary contact" verified in all six; CARHA lane edits clear. Author resumed (+ Note 1 ruling at :1186).
- A repaired ("reasonable effort" restored; Note 1 both-readings wording at 5 sites; CARHA 52(b) Note + 66(b); net-drive :557 "reasonable effort"). C repaired (:1170 pointer; Note 1 wording; rp KT9 permission dropped). Re-read dispatched. B read CLEAR → author applying "USA Hockey writes none" (was "permits none", false vs Casebook Sits. 4/5) + Note 1 ruling at ozp :579. G1 and G3 authors done (rink_map KF/Overview/KT16/:210/:212, glossary :335; forechecking :756/:757/:772/:776/:933, time_and_space :481, game_management :328); reads dispatched. G2 read running.
- B follow-up applied: ozp :556 "USA Hockey writes none —", :579 "USA Hockey's playing rules write no such allowance", Note 1 wording at ozp :579/:602 and winger :479/:487 ("filed under interference, 625(a)(8)"; "minor" dropped at ozp :602 and winger :479/:487 — final read to judge whether dropping the tariff loses information); winger trailer :794. D repair done (:1224 attacker named; :1186 quotes Note 1; HC 8.3 preamble at :1359) → re-read D dispatched.
- Read G2: center :462 and ST :1075 CLEAR; **BLOCK center KT8** — "EIHL: don't touch the goalie on a rebound. Elsewhere: without leaning" implies touching is fine outside the EIHL; false under HC 8.5(a) Interp. 1, USAH Casebook 607 Sit. 5, CARHA. Also facts :432 and body :456. Author resumed. **Row: sweep goaltender, winger, ozp and other rebound carriers for the same EIHL-versus-elsewhere 69.7 framing.**
- Read G3 (forechecking, time_and_space, game_management): **CLEAR**; "every book here" verified; time_and_space :481 repairs a permissive HEAD sentence. Minor: forechecking :757 "only while" restored by author. Rows: Casebook 607 Sit. 4 (pushed-in attacker who made every attempt: no penalty; "going hard to the goal" honest attempt: minor+misconduct) makes "files even accidental contact under interference" harsher in one case and leaves a charging floor unstated (harsher/completeness).
- Read G1 (rink_map + glossary): KF/Overview/KT16/glossary :335 CLEAR ("every book" verified); **BLOCK rink_map :212** — CARHA priced via 66(b) (discretionary major) where 52(b) makes a crease charge a mandatory major+GM; **:210** NHL/IIHF/PWHL incidental permission stated without "while the goalkeeper is playing the puck". Author resumed (+ nits: :210 USAH "privileged area"; KT15 52(b) in-crease trigger).
- Read E (shooting+NZS+breakouts): all quotes verified; CARHA 74(a) is a stoppage + own-zone face-off, stated correctly; **BLOCK breakouts :654/:666** ("regrouping in your own zone" vs 1-2-2, unscoped for CARHA 74(a)). Author resumed (+ NZS :515 / breakouts :748 consequence wording; shooting :861 "playing rules write no such permission"; :534 PWHL 71.4 not "alone"). Rows: CARHA 55(a) bench minor "deliberately delaying the game in any manner" vs "do the waiting in the neutral zone"; breakouts KT7 "you have time — use it" and NZS :131/:150 patience vs 74(a) (candidates).
- Re-read A+C repairs: pwtp, goaltender, rules_primer **CLEAR**. Last pwtp items sent to the author: :654 asserts the penalising Note 1 reading (makes Notes :985 untrue); CM :889 omits 69.4 "reasonable effort". Rows: goaltender never states Casebook 607 Sit. 5 "can be legally checked" outside the privileged area (goalie may overestimate protection in a checking classification); rp :704 "narrower" Casebook permission vs :706 "exactly as the NHL and the IIHF do" (wording).
- E: Note 1 ruling applied in shooting :314/:861. Read E dispatched.
- ✅ A pwtp, C goaltender+rp, D body_contact, B ozp+winger: author reports in; reads running. **New claim for W25: NHL/IIHF/PWHL 42.1 repeats "not fair game… unnecessary contact" and carries its own discretionary incidental permission — unrouted wherever goalie contact is priced via 69.2/69.4 alone.**


## Plan rows closed by this wave (verbatim from OPEN_ITEMS.md at 70b812e)

- [69.4 permission] playing_without_the_puck.md facts :633 (found by the W23 commit gate), offensive_zone_play, winger, goaltender, rules_primer — the NHL/IIHF 69.4 incidental-contact permission voiced without USA Hockey 607(d) Note 1 ("any accidental or unavoidable contact… penalized under the Interference rule"); a zone_entries repair created this shape three times in W23. Read, never sweep (direction: permissive)
- [69.2 without 69.4] corpus — NHL/IIHF/PWHL goalie contact framed as deliberate-only (69.2) with no 69.4/71.4 "unnecessary contact" limb; worst beside a line giving another book "any" or "even accidental" (direction: permissive)
- [CARHA lane] body_contact_and_battles.md :1341/:1359/:1904 — loose-puck "hold only a lane you already have" addressed to any CARHA player; Note 2 writes the right for defenders only — scope it or add "never to shield a teammate" (direction: permissive-mild)
- [USAH 607 Sit. 5] playing_without_the_puck.md :631 — "USA Hockey keys engaging a goalkeeper to their having possession" lacks 607(d) Note 1 and the 604 scope (pre-existing; safety read) (direction: permissive)
- [level] puck_support_and_spacing.md and scanning_and_anticipation.md — 0 hits for body checking / non-checking; never read for the checking-level limb (W23 closed the [level] row on breakouts, zone_entries, passing and puck_handling only). Report-only unless a reader delivers contact (direction: possibly permissive)
- [CARHA 54(b)] shooting.md :538/:861 — cross-check above the shoulders is a mandatory major+GM "whether or not injury results", no location; :861 reads as CARHA's whole mandatory cross-check tier (direction: completeness)
- [CARHA 74] neutral_zone_systems / breakouts low regroup — CARHA 74(a) "shall always advance the puck" in the defending zone, 74(b) minor for holding it against the boards or goal, 75(d) goalkeeper puck onto the netting; absent. Read first (direction: possibly permissive for CARHA)
- [CARHA 54(b)] corpus — CARHA 54(b) "whether or not injury results" cross-check sentence scores 0 in content (unused same-tier parallel to HC 7.7(b)); sibling "only Hockey Canada" head cross-check claims, completeness (direction: completeness) — (plan 652, 2571) — [T1]
