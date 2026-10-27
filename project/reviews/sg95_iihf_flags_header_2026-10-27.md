# SG95: "The IIHF flags are yours" reworded across the corpus (27 October 2026)

**Files:** 38 content files (git diff --cached --name-only content/ lists them). They are the 37 page headers that said "Playing in Britain? The IIHF flags are yours" or a variant, and the lines that made the same claim:
- game_management :44;
- rules_primer :45 and :55;
- uk_rules :25, :500, KT1 :618;
- getting_started KT9 :714;
- faceoffs :8;
- zone_entries :141.

## Why
From the plan row: since SG84 a 🇬🇧 opens only a block, so "the IIHF flags" read as the visible flag emoji. That is not what was meant.

## What changed
- **The headers** now read "Playing in Britain? Wherever this page gives the IIHF rule, it is yours — every level of UK hockey runs the IIHF book, amended locally". The rest of each header is unchanged. language_and_glossary gained the "amended locally" clause it lacked.
- **rules_primer In short (:45):** "If you play anywhere in Britain, the IIHF rule is yours as amended locally — by the In-House Rules, or in the Elite League by its own Casebook."
- **Other "flag" wordings** became "rule". The first sweep missed three sites (getting_started :129 and :193, the latter hidden by bold markup, and the uk_rules :539 self-test question). The second sweep missed two more (body_contact_and_battles :142, "the IIHF rows and flags in this document… describe your game", and the uk_rules :9 Key focus, "When a document flags an IIHF difference"). A third gate pass found a sixth, the uk_rules :3 header ("which of those flags is theirs"), which used "theirs". The commit gate caught all six, and all six are reworded. The final sweep stripped markup, joined lines, and was case-insensitive, using `IIHF.{0,40}\bflags?\b`, `flag\w*.{0,40}(your game|yours)` and its reverse. It finds 0 hits in content/. A wider coordinator sweep then read every "flag" with IIHF, Britain, UK, yours, theirs or "your game" within 100 characters, red flags excluded. It found only that header, plus medical "seizure flag" and "skull flag" labels and a coaching verb, which are unrelated.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules and scope | rules-verifier | **SHIP for every hunk group**, with one optional fix (rules_primer :45 named only the EIHL layer), which was taken. Verified the In-House adoption clause (eiha_inhouse_2026-27 :43–54) and the EIHL Casebook Preamble (:198–208), so "amended locally" holds for both layers. faceoffs' header is fine without the clause, because its next lines state the local Rule 76 position. Read the whole diff: no unrelated hunk. |

Safety: no penalty, contact or technique claim changed, so no safety review was required. The wording only scopes which rulebook a reader follows.

### C11
The gate's first three passes BLOCKED on surviving sites (three, then body_contact :142 and uk_rules :9, then uk_rules :3) and on a false completeness claim in this record. Both were fixed: the sites (wording only) and this paragraph.

After the review, the fixing agent applied the reviewer's rules_primer :45 sketch verbatim. It also changed rules_primer :55, "USA Hockey and Hockey Canada flags are not yours", to "rules", the same rewording missed by the first grep. The gate reads both.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 | The rules-verifier checked the scope claims against both British layers. |
| D4–D5 | No new citations. |
| D6–D13 | n/a, or out of scope (a wording change). |
| D14 | check_links passes. |
| D15 | Site build after the last edit. |

## Carried to the plan
- **Rules the British layers amend.** "Wherever this page gives the IIHF rule" cannot tell a reader which rules are amended. A per-page sweep of the In-House and EIHL amendments against each page's IIHF statements would find any un-noted amended rule; equipment, faceoffs, fighting and junior ejection are the likeliest places.
- **Editions.** In-House competitions use IIHF 2025/26 v1.1 and the EIHL uses 2026/27. A page quoting one edition's text can differ from the other's.

## What this method could not have found
- Synonyms for "flag" that the grep did not cover, such as "the IIHF notes" or "marked IIHF".
- A "flag" more than 80 characters from "yours".
