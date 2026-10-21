# SG6: batch 2 page rows, the boards-line wording, and the diagram pronoun sweep (21 October 2026)

**Origin.** This wave did four things:
- It closed the remaining source-gap rows on the pages behind NotebookLM batch 2: (n), (p), (q) and (t), plus the CARHA 32(d) "at least" limb.
- It applied the owner's 21 October ruling. Wherever the boards safety line is voiced alone, it now reads "never turn your back to anyone coming at you", replacing "…the checker".
- It applied the owner's 20 October gender-neutral instruction to reader-visible diagram text, meaning captions, describes and on-canvas labels.
- It applied the owner's 21 October terms ruling. "man-on-man", "odd-man rush", "your man" and "point man" stay. Coinages such as "five-man" and "three-man" become "-player".

Each content file had one agent with exclusive ownership. One workflow handled the diagram modules.

## Changes by file

| File | What changed |
|---|---|
| systems/breakouts.md | USAH 624(b)(1) short-handed icing exemption now includes High School, at :119, :528 and facts :107. :107 previously had no USA Hockey scope when voiced alone and now carries it. |
| systems/offensive_zone_play.md | "five-man rotation" → "five-player" (10 sites). CARHA slap-shot major now says "and at least the next game" (32(d)) at :1066, :1075, :1098 and :1109. |
| systems/faceoffs.md, positions/center.md, positions/winger.md, positions/goaltender.md, systems/neutral_zone_systems.md | CARHA 79(a) injurious slap-shot major: "ends your game and at least the next" (30(a), 32(d)). Also at center facts :101 and goaltender facts :708. |
| positions/defender.md | USAH interference citations corrected. 625(a)(4) was dropped: it covers an opponent no longer in control of the puck, so the old "names this exact play" was an overclaim. The Note and Casebook 609 Sit. 2 are quoted verbatim. |
| systems/defending_the_rush.md | Facts :330: CARHA 53(a) / HC 7.5(a) off the head; on the head 7.6/7.7, up to a match and a must if the player is defenceless; head first, the harsher of 7.5 and 7.6/7.7 (owner rulings 15 and 18 Oct). The boards and net match lives in :331. |
| foundation/language_and_glossary.md | KT13 adds High School to the USAH 624(b)(1) list. |
| foundation/core_principles.md, foundation/rules_primer.md, hockey-iq/risk_management.md | "never turn your back to the checker" → "…to anyone coming at you" (rules_primer :33, :344, :510, KT6; risk_management :44, :444, :460). |
| site/src/diagrams/*.mjs (about 30 modules) and site/src/data/diagrams.json | Reader-visible he/his/him → they/their/them or a role name, in 228 caption and describe strings and 13 labels. Rulebook quotations are untouched; NHL 69.1's "his" remains. Follow-up referent fixes: "takes the middle" (rush-3-on-2-default), "cannot see F" (the-call-and-who-can-see-it), "above the opposing winger" (forecheck-2-3-lock), "into the forechecker's path" (breakout-wheel). |

## Reviews

- **sg6S (safety-reviewer, content diff).** No CRITICAL or MAJOR findings. It made four MINORs:
  - M1, goaltender facts :708 "a one-game ban" was flat.
  - M2, DTR :330 said "boards" only.
  - M3, DTR :330 dropped "off the head".
  - M4, center facts :101 was flat.

  It also found three sibling gaps: breakouts :107, offensive_zone_play's CARHA sites, and glossary KT13. It noted that rules_primer and risk_management had not been edited for the boards line. A fix agent applied all of these.
- **sg6S2 (fresh reader of those repairs).** One **MAJOR**, created by the repair itself: compressing DTR :330 lost the HC 7.6/7.7 head-contact tier, and could be heard as scoping the head-contact match to the boards. The repair restored the limb and removed the boards clause, which :331 carries in full. sg6S2 then rendered chunk 018 and re-read it: **CLEAR**. risk_management :444 "Nothing?" read as a bare question when heard alone; it was changed to "No outlet?". **CLEAR**.
- **gnS (safety-reviewer, diagram text).** No CRITICAL or MAJOR findings. All 228 strings were read old against new.
  - No safety limb, ban or tariff moved to a different person.
  - The "never on their back" and goalie-contact limbs are intact.
  - No quotation was altered.

  It raised four referent MINORs, all fixed (listed in the table above).
- **gnD (diagram-reviewer, labels).** All 13 changed labels were rendered from both HEAD and the working tree.
  - One MAJOR, "the middle is theirs", which read as the opposition owning the middle. Fixed.
  - Three MINORs: "cannot see it" (fixed), and two labels that now cross the blue line but stay legible (left as they are).
  - check_geometry and check_zones pass.
- **sg6Site (site-reviewer, C10).** It covered 7 pages, at 1440 and 400 widths, in light and dark: 28 renders in headless Chrome. The extension was not connected.
  - Captions match diagrams.json.
  - No clipping, no overlap and no horizontal scroll.
  - The console is clean.

  All pages **PASS**. One cosmetic MINOR: dz-walk-down-man "goes with the carrier" crosses the blue line at 400px. It is logged.

- **sg6R (rules-verifier), added after the first commit-gate BLOCKED on C4.** Every changed rules claim was confirmed against primary text, with greps and file:line quoted:
  - NHL/IIHF 56.2(i)/(iii) and PWHL 57.2(i)/(iii); USAH 604 title vs 625 heading; the 625 Note and Casebook 609 Sit. 2 verbatim.
  - USAH 624(b)(1) and its Casebook restatement.
  - CARHA 53(a)/(b); HC 7.5(a)/(c), 7.6 preamble and (a)–(c), 7.7(a)–(c), read in hc.txt and diffed against the August print (identical).
  - CARHA 79(a), 30(a) and 32(d).
  - **Sweep by act:** no CARHA rule prices an *accidental* injurious slap shot above 79(a)/30(a)/32(d). 48(a) makes a deliberate one a match, and "at least" leaves room for it.

  One item was **confirmed but incomplete**: defender :295 quoted the 625 Note only up to "play the puck". The coordinator completed it verbatim ("…, maintain normal foot speed or maintain an established skating lane"; usah.txt :4448–4452). A fresh safety-reviewer then read the paragraph and returned **CLEAR**: the quote is verbatim and grants no walk-out permission.

  Gaps outside the diff were logged under SG8: special_teams :299/:302, rules_primer :1063, 32(d)'s major-only trigger, and CARHA 62(b).

## Gates (after the final content edit, no pipe)

- check_facts, check_links, check_absolutes (after build-diagrams), check_geometry and check_secrets all pass.
- check_marker_pairs: 13 files, 0 LOST, 0 SPLIT.
- check_counts --update: no change.
- `npm run build` was run after the final edit (see the commit-gate for the exit code and mtimes).

## Dimensions (D1–D15 per project/reviews/TEMPLATE.md)

| Dim | Status |
|---|---|
| D1 Rules accuracy | ✓ sg6R (rules-verifier) confirmed every changed claim with greps; sg6S and sg6S2 also quoted each changed rule from disk: CARHA 2026 30(a), 32(d), 53(a)/(b), 79(a); HC 7.5–7.7; USAH 624(b)(1), 625 and its Note; Casebook 609 Sit. 2; NHL/IIHF 56.2; PWHL 57.2. |
| D2 Rules travelling without exceptions | ✓ High School is added to the USAH exemption. The head-contact match is unscoped from boards. 32(d) "at least" is applied. |
| D3 Rule-set divergence | ✓ The CARHA limb is scoped to CARHA, and the USAH exemption to its classifications. |
| D4 Citation integrity | ✓ The defender 625(a)(4) overclaim is removed. The truncated 625 Note quote is completed. Quotes are verbatim. |
| D5 Provenance | Out of scope: no new external source. |
| D6 Negative existence claims | Out of scope: none made. |
| D7 The cardinal rule | ✓ Wording only. No coaching choice is turned into a rule. |
| D8 Numeric ownership | Out of scope: no figures changed. |
| D9 The summary layer | ✓ Each claim was applied file-wide. The boards line was done in KT6 and Key focus. Some sites are still open (see below). |
| D10 The key-facts layer | ✓ --near was checked before edits. Every changed facts line was read voiced alone, and DTR :330 was rendered twice. |
| D11 Reader safety | ✓ sg6S, sg6S2 and gnS. One MAJOR was created by the repair, then fixed and re-read CLEAR. |
| D12 Read-aloud integrity | ✓ DTR chunk 018 and the changed facts lines were rendered. |
| D13 Folklore | Out of scope. |
| D14 Structure, style, terminology, cross-links | ✓ check_links is clean. The pronoun and terms rulings were applied, and the owner's man-terms ruling was respected. |
| D15 The rendered site | ✓ sg6Site PASS (headless Chrome); the build passed. |

## Still open (rows in OPEN_ITEMS.md)

- **SG7.** About 150 sites across 23 files still say "back to the checker" in voiced-alone layers, plus about 29 diagram strings.
- **SG8.** Remaining CARHA 32(d) sites, for example goaltender :1197 and onward, center :485 and onward, and offensive_zone_play :536 and onward.
- **Cosmetic.** The dz-walk-down-man label crosses the blue line. Stale source comments still quote old labels, in game_management, breakouts, scanning and on_ice_communication.

## What this method could not have found

- A layer built on an old premise with no lexical trace of it. The siblings were traced through "fifteen inches", "15-Only", "the checker" and "625(a)".
- Another CARHA rule that prices an injurious slap shot more harshly (under 48 or 87). This is a true-negative risk and has not been swept.
- How a listener actually binds "them" and "their" in captions read aloud inside a host page. No caption was rendered through md_to_speech.
- Real-phone and extension-driven browser behaviour.
