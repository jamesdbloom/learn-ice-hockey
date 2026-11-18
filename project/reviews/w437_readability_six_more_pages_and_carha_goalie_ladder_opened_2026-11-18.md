# W437: readability on six more pages (defender, offensive_zone_play, defending_the_rush, special_teams, risk_management, uk_rules); the CARHA goalie-contact ladder is no longer a closed list of four (18 November 2026)

**Content files changed:** positions/defender.md, systems/offensive_zone_play.md, systems/defending_the_rush.md, systems/special_teams.md, hockey-iq/risk_management.md, foundation/uk_rules.md.
**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W436 (1), the next readability wave. Owner priority.
- **Brief:** scratchpad/w437/brief.md, the W436 brief plus an addendum on scope drift, imperatives read aloud, small qualifiers, and naming the carrier for every cut limb.
- **Authors:** six, one file each.

## Measured (check_readability.py)
| Page | longest sentence | paragraphs > 1,200 | KT max |
|---|---|---|---|
| defender | 71 → 55 | 1 → 0 | 60 |
| offensive_zone_play | 84 → 56 | 1 → 0 | 60 |
| defending_the_rush | 84 → 60 | 0 | 60 |
| special_teams | 70 → 59 | 2 → 0 | 60 |
| risk_management | 59 | 0 | **76 → 56** |
| uk_rules | 67 → 60 | 0 | **74 → 60** |

## What changed (voiced)
**Key Takeaways**
- **risk_management KT9:** "⚠️ **Keep your feet out of theirs:** in most books a called slew-foot ends your game, and in every book it can." The rules reviewer checked the ejection books: NHL 52.2, PWHL 53.2, IIHF 52.2 and USAH 639(b) eject; HC 8.8 and CARHA 86(b) can. The HC/CARHA kick and injury match is carried in the body at :905/:907/:909 and in facts :755/:758/:759. Safety accepted the cut.
- **uk_rules KT19:** "…costs at least a game in every league or age group you're registered in." An interim cut dropped the cross-league game. Safety ruled that a **MAJOR**: under DOPS §11, fielding a suspended player forfeits the match. Restored, with "or age group" per §11.

**Splits and fixes**
- **offensive_zone_play CARHA goalie ladder:**
  - An interim "These four rungs are mandatory" was a closed list. The rules reviewer ruled it **WRONG**: it omitted 48(a) match, 53(a) game misconduct, 53(b) match, 49(a) major and 62(b) major, and so made the act sound cheaper by leaving rungs out.
  - It now reads "These rungs are mandatory", with every rung, split into a bullet and a continuation that opens "Under CARHA, more rungs are mandatory".
  - The author corrected the reviewer's own sketch in three places, each confirmed by the rules reviewer:
    - 53(a) is "on a goalie or anyone";
    - 53(b) needs no intent and covers the boards;
    - 62(b) is "accidental or not", with the accidental-high-stick exception to 30(a)/32(d).
  - "66(e) is a major and game misconduct (30(a)) … 49(a) the same" now sits in chunk 049, so the ejection is heard there.
- **offensive_zone_play :586:** "CARHA prices the accident too. ⚠️ **Under 62(b), even accidental high-stick contact above the shoulders is a major**…". The marker moved off deliberate injury onto the hazard a player is more likely to meet.
- **defender :840/:842:** the split had bound "a reckless one" to head contact; both reviewers flagged it. Now 608(b), then the 608(c) match for a reckless hit from behind, then 620(b) as its own sentence. The :842 marker moved to HC 7.6(c) "a mandatory match if they cannot protect themselves".
- **defending_the_rush :337:** "There, careless contact…" could be heard as "at the boards". It now reads "…ends your game under USA Hockey too (620(b)). Under that book, plan on a match…"
- **special_teams :1099:** the instigator sentence moved with the In-House text. "there" previously followed an EIHL sentence; the EIHL plays 2026/27, where 46.3 is renumbered. It is now "under the In-House Rules". The England/Wales ban half gains ⚠️.
- **uk_rules :306:** split. "In 2026/27, 46.1 reaches the plain willing fight directly" now carries its edition tag (2026/27 :4146 "shall" against v1.1 "may be ejected").

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:**<br>• ozp "four rungs" WRONG.<br>• Scope drift at defender :840 and dtr :337.<br>• OK: ozp 62(b), special_teams :1101, uk 46.1, KT19 carrier and C.2 "end of game", risk KT9.<br>• defender :842 errs harsh (NHL/PWHL 43.4 "may").<br>**Confirmation:**<br>• All five OK.<br>• Raised "66(e)/49(a) a major" split from 30(a) across chunks; fixed. |
| safety-reviewer | **First read:**<br>• MAJORs: uk_rules KT19, defender :840.<br>• Minors: ozp "four", dtr :337, and the defender/ozp marker placements.<br>• Accepted risk KT9.<br>**Confirmation:** CLEAR, with the same 66(e)/49(a) minor; fixed. |
| site-reviewer | Six pages at 400×812 DPR 2 light/dark and 1440 light, on the 05:48:21 build.<br>• Every worst window unchanged.<br>• Nothing over 50%.<br>• 0 bare, 0 untreated, 0 panels, 0 console errors.<br>• All four new or moved ⚠️ are warn-inline.<br>• Continuations render inside their `<li>`.<br>• The ozp high-stick item is now 8 paragraphs long; the grouping still reads clearly. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text applied by its author, or an author deviation a reviewer confirmed:
- the ozp 53(a)/53(b)/62(b) corrections to the reviewer's sketch;
- uk_rules "or age group";
- special_teams "under the In-House Rules".

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 18 Nov 05:48:21; the last content edit was at 05:47:34.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change.
- **Callout flow:** --bare 0; --panels 0 on all six.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all six.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | **CARHA 2026:** 30(a), 32(b)/(d), 48(a), 49(a), 52(b), 53(a)/(b), 54(b)/(c), 62(a)–(c) and Note, 66(e), 86(b).<br>**USAH:** 602(a), 608(b)/(c), 620(b)/(c), 639(b).<br>**HC:** 7.6(c), 7.7(c), 8.8.<br>**NHL/PWHL:** 21.1, 43.4, 52.2/53.2.<br>**IIHF:** v1.1 46.1/46.3; 2026/27 46.1; 52.2.<br>**In-House:** Introduction, Section 6.<br>**EIH DOPS:** §11, C.1, C.2. |
| D2 Exceptions | Accidental high stick under CARHA 30(a)/32(d); 53(b) no intent |
| D3 Cross-book divergence | Slew-foot 4 of 6 books eject; EIHL vs In-House edition |
| D4 Citation integrity | IIHF edition tag at uk_rules :306 |
| D5 Provenance | Not engaged |
| D6 Negative existence | "Four rungs" closed list removed |
| D7 Cardinal rule | Instruction leads kept |
| D8 Numeric ownership | Not engaged |
| D9 Summary layer | risk KT9 and uk KT19, each cut limb's carrier named and verified |
| D10 Key-facts | Not changed |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | Chunk placement of 30(a) for 66(e)/49(a); pointers resolved |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links; continuations inside `<li>` |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **Next readability candidates** (run check_readability): body_contact_and_battles, language_and_glossary, zone_entries (KT 70), rules_primer, getting_started (KT 61), forechecking_systems (KT 65).
2. **The 2020 carha.txt still exists.** Several agents checked against it; CARHA claims follow carha_2026. Consider a sources/README note naming 2026 as operative for every CARHA check.
3. **The ozp high-stick list item now runs to 8 paragraphs.** It is a candidate to become its own section.
4. **The ozp CARHA continuation states 32(d)'s next game only in chunk 050** (mid-game; kept under the W433 ruling).

## What this method could not have found
- A pronoun whose antecedent is clear on the page but lands in a different chunk.
- Sibling documents carrying the old "four rungs" framing.
- Real audio.
