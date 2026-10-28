# SG114: Hockey Canada head-contact match grounds on Goaltender, Body Contact, Rules Primer and Winger (28 October 2026)

**Files:**
- content/positions/goaltender.md
- content/technique/body_contact_and_battles.md
- content/foundation/rules_primer.md
- content/positions/winger.md
- project/plans/OPEN_ITEMS.md

## What changed and why
Under Hockey Canada, a head-contact match is mandatory on two grounds. Rules 7.6(c) and 7.7(c) say it "will be assessed" where the player "is unable to protect or defend themselves", and also against "any player who attempts to or deliberately injures an opponent by Head Contact". SG113 fixed four pages to say this. The commit gate's `grep -rn "up to a match" content` then found the same understatement on these four pages.

Fifteen units now give the match as mandatory "if defenceless or meant to injure", where they used to say "up to a match" or give the defenceless ground only:
- goaltender :1266, :1273, :1376, :1377 and :1651;
- bcb :361, :685, :750, :751 and :1358;
- rules_primer :412, :584 and :810;
- winger :749 and :777.

Round 2 repaired a read-aloud regression the first edit had introduced. In bcb :751 and winger :749, dropping "in" made the facts line voice as "…a high cross-check, minor and female if hurt, Junior or Senior if highly violent…". A listener could hear that as a minor penalty, or as the high cross-check depending on the level. Both lines now read "major and game misconduct: any high cross-check, in minor/female if hurt, in Jr/Sr if highly violent…", which voices as "minor or female" and "Junior or Senior". That follows 7.6(b) and 7.7(b), which say "Any player who strikes … above the normal height of their shoulders with a cross-check … whether or not injury results".

Smaller round-2 changes:
- goaltender :1651: an aside is now in parentheses, so the harsher-of sentence holds together aloud.
- goaltender :1377 wording tidied.
- rules_primer :472: round 1 changed it to "up to a mandatory match"; round 2 reverted it to the HEAD wording "up to a match", because the same unit already carries both grounds ("a match if the player could not protect themselves or you tried to injure them"). Net: no change at :472.
- bcb :2001 (the sixteenth changed unit): "the harsher of 7.5 and head contact". The old "7.6" left out 7.7.

Left alone on purpose, each a different act or already complete:
- bcb :1613 (8.6 and 8.7 tripping and clipping), :1751 (accidental contact, where intent cannot arise) and :1829 (7.1 facemask);
- rules_primer :420 (slew-footing) and :438 (accidental contact);
- winger :556, where the intent limb sits in the same bullet.

## Reviews
| Round | Dimension | Reviewer | Result |
|---|---|---|---|
| 1 | D1–D3 | rules-verifier | All 16 round-1 units CONFIRMED (the 15 above plus rules_primer :472, since reverted) against hc.txt 7.6(c) and 7.7(c). INCOMPLETE on winger :749 and bcb :751 (the read-aloud regression above). Nit at rules_primer :472. |
| 1 | D11, D12 | safety-reviewer | goaltender and rules_primer SHIP. winger and bcb FIX, minor: the same read-aloud regression. |
| 1 | D10, D9, D12, D7, D13, D14 | facts-reviewer | Substance correct everywhere. Same read-aloud fix on :749 and :751, plus the minors applied in round 2. No unit still uses the old wording for Hockey Canada head contact. Pre-existing traceability gaps carried. |
| 2 | D1–D3, D11, D12 | safety-reviewer (with a rules check against hc.txt) | All four files SHIP. "any high cross-check" is the book's own word and errs harsh for minor/female (Interpretation 2). Both lines now voice unambiguously. |

### C11
- The coordinator made no content edits in this wave.
- The agent made every edit, and each was reviewed afterwards.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier (round 1) and safety-reviewer (round 2) against hc.txt 6.9(c), 7.4(b) Interp. 3, 7.5–7.7 with interpretations, 8.5 and 9.2(b) Interp. 2 |
| D2 Rules travelling without exceptions | facts-reviewer: grep and read across all four files for "up to a match", "reach a match" and "can be a match". Exception found by the commit gate: bcb :704 ("Both reach a match at (c)", no grounds), carried to SG115. |
| D3 Rule-set divergence | rules-verifier: only Hockey Canada limbs changed |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | Out of scope, declared by the coordinator: no absence claim touched |
| D7 Cardinal rule | facts-reviewer: no coaching choice is stated as law |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | facts-reviewer: Common Mistakes and Key Takeaways in all four files are consistent with the change |
| D10 Key-facts layer | facts-reviewer (round 1), plus rules-verifier and safety-reviewer on the changed facts lines |
| D11 Reader safety | safety-reviewer, rounds 1–2 |
| D12 Read-aloud integrity | safety-reviewer and facts-reviewer rendered all four files with md_to_speech and read every changed unit voiced alone |
| D13 Folklore | facts-reviewer: none |
| D14 Structure, style, terminology, cross-links | facts-reviewer: no paragraph over 1,200 characters; the dash chain at :1651 fixed. check_links passes. |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No visual structure changed, so no site-reviewer was run. |

## Carried to the plan
- **SG115:** units that give 7.5(c) without its second paragraph (a hit from behind meant to injure is a match anywhere):
  - goaltender :1374 and :1378;
  - bcb :624 and :1421;
  - rules_primer :35 and :1126;
  - winger :557 and :798.

  Also bcb :704, the head-contact cost paragraph: "Both reach a match at (c)" gives no grounds, and it is the body sentence that bcb :361 and :685 should trace to. Also bcb :1613: the 8.7(c) clipping match is mandatory but reads "up to a match if meant to injure".
- Pre-existing traceability gaps:
  - goaltender :1376 and :1377 carry the full 7.6 and 7.7 ladders, and no goaltender body sentence teaches them;
  - bcb :361 (7.6(c));
  - bcb :685 (the triggers).
- Unresolved reading: 7.6's "supersedes any other rules" sits against goaltender :1376's "a minor, double if intentional" for a head hit on a turned back. Bear in mind the owner's 18 Oct harsher-of ruling.

## What this method could not have found
- Hockey Canada head contact priced in words that avoid "match", for example "an ejection".
- Sibling documents outside these four, beyond the corpus-wide "up to a match" grep.
- How the colon-led facts lines sound in synthesised audio; no listening pass was done.
