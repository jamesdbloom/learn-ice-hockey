# SG159: readability — long Key Takeaways shortened and long paragraphs split on ten pages (3 November 2026)

**Files:** content/positions/center.md, winger.md; content/systems/faceoffs.md, defensive_zone_coverage.md, offensive_zone_play.md, zone_entries.md; content/off-the-ice/mental_game.md, team_play_and_culture.md; content/technique/body_contact_and_battles.md; content/foundation/uk_rules.md; project/plans/OPEN_ITEMS.md

## Source
check_readability (40 Key Takeaways over 60 words, 9 paragraphs over 1,200 characters corpus-wide), worked on the owner's standing instruction "keep going with the plan" and the owner's "shorter is better" / "readable beats defendable" rulings.

## What changed
- All 9 paragraphs over 1,200 characters on these pages split at a topic boundary (no rule words cut); where a new half was a warning, it got its own ⚠️ so its spoken "Important." survives (body_contact +3, dzc/ozp/zone_entries +1 each, faceoffs +1). No claim was separated from its counterweight; each new half stands alone (backward pointers replaced).
- Key Takeaways shortened toward 60 words, leading with the instruction, cutting restated tariffs that the body or Common Mistakes carry (each cut traced to its surviving copy in the same document). mental_game KT11 92 → 60. KTs left over 60 to keep a safety or tariff limb that is the only summary copy: center KT6 (checking from behind), dzc KT4 (scope "as long as the hit stays off the head"), uk_rules KT17, KT18 (jersey limb now including a modified sweater, EIHL Casebook 46.13) and KT19 (cross-league ban, DOPS §11), body_contact KT6, ozp KT8, winger KT11, center KT9 and KT18.
- Review repairs: uk_rules KT19 restored the cross-league ban (cut in the first pass; cheaper); KT18 "only if it comes off" → "if it comes off or has been modified"; body :314 adds the modified sweater; faceoffs KT12 "thrown off the dot" (a bare "thrown out" read as an ejection), :624 "at least a minor" (USA Hockey 603 boarding can be more), "and bring a minor"; center KT9 makes USA Hockey's reckless-charge ejection automatic (607(b) "shall"), KT18 restores "if a winger beats you to the puck, they are F1"; zone_entries :804 "Never drive a goalie…"; dzc KT4 scope made explicit; body_contact backward pointers and two markers moved onto the hazard clause.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer (all ten; rendered the largest cuts) | 9 SHIP; FIX uk_rules KT19 (only summary copy of the cross-league ban cut) → restored; minors KT18 "only", faceoffs KT12, winger KT11 scope → fixed or accepted harsh |
| rules-verifier | FIX uk_rules KT19, KT18; FIX faceoffs :624 ("is a minor" understated beside USA Hockey 603); FIX center KT9 ("risks" read as discretionary vs 607(b) "shall"); the rest PASS |
| content-reviewer (all ten; layer echo) | Majors uk_rules KT19, faceoffs KT12, zone_entries :804 imperative; minors: backward pointers, marker placement, center KT18 meaning drift → all fixed. KT→CM echo fell on mental_game (13.4% → 9.6%) |
| rules-verifier (re-check of every repaired line) | All six PASS; nothing cheaper |

### C11
One authoring agent per file pair; the coordinator wrote the plan and this record. Every post-review repair was re-checked by the rules-verifier.

Checks after the last edit: full `npm run build` with the absolute binary exit 0 including check:links; check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets exit 0; check_marker_pairs 0 LOST in every file; check_callout_flow --panels 0 on the five files that gained markers; the coordinator confirmed in site/dist that each new marker renders as span.warn-inline (body_contact ×3, zone_entries, faceoffs, dzc), not a panel; check_counts --update matches.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 | rules-verifier on every rule-bearing rewording, then a re-check |
| D4, D5 | DOPS §11 and EIHL Casebook 46.13 quoted from disk; no URL changed |
| D6–D8, D13 | None changed |
| D9 | Key Takeaway layer is the subject; each cut limb traced to its surviving copy in body/CM |
| D10 | No facts line changed |
| D11 | safety-reviewer |
| D12 | Rendered before and after by authors and the safety-reviewer; chunk placement of every split checked |
| D14 | check_links and the build |
| D15 | Build; marker rendering confirmed in dist by the coordinator; no layout change (declared, no site-reviewer pass) |

## What this method could not have found
- Older copies of a shortened claim in layers that share no words with it.
- How the shortened takeaways sound to a listener in sequence.
- Pre-existing: four lines say a hit from behind ejects without the "stays off the head" scope (plan).
