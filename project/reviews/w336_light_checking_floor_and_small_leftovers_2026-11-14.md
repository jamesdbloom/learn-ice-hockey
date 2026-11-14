# W336: "even light checking from behind", a missing USA Hockey tier, a trailer's provenance, and special_teams KT8 (14 November 2026)

**Files:**
- content/positions/switching_positions.md
- content/systems/defending_the_rush.md
- content/hockey-iq/risk_management.md
- content/systems/special_teams.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
Small leftovers from the W329–W333 plan rows that needed no owner call. Four authors worked disjoint files:
- **A:** center and switching_positions.
- **B:** defending_the_rush.
- **C:** risk_management.
- **D:** special_teams.

Each item was briefed as a hypothesis to refute.

## What changed
- **"Even light checking from behind" (A, B).** The floor "even a light hit from behind is at least a minor plus a misconduct (608(a))" now says "even light checking from behind" at four sites: switching_positions :270 and Common Mistakes :607, and defending_the_rush :336 and Common Mistakes :1089.
  - 608(a) prices "checking from behind", and its Note includes pushing.
  - Casebook 609 Situation 2 makes light stick contact to the back, "not … enough force to be considered a check from behind", a cross-checking violation.
  - "Light" is backed by Casebook 608 Situation 1(2), where the minor plus misconduct "must be assessed" for minimal body contact from behind with board contact.
  - The change is a precision gain. The old wording erred harsher, not cheaper. The quoted USA Hockey warning "Even a light hit from behind could inflict…" is untouched everywhere.
- **defending_the_rush facts :319 (B), new.** :318 gave USA Hockey only its reckless match, and no line in the block gave the 608(a) floor or the 608(b) ejecting tier. The new line, as worded after review: `Rule: USA Hockey: even light checking from behind is at least a minor + misconduct (608(a)); forceful at the boards, head first into boards or net, or reckless, at least a major + game misconduct (608(b); Casebook 608 Sit. 1)` (219/300). The block is now 14/14, at HARD_MAX.
- **risk_management :998 Sources trailer (C), not voiced.**
  - The CARHA glossary's "Kicking" quotation is now complete, ending "…, with no intent to play the puck", and is dated 14 November 2026, when it was added (1c885b9b).
  - A 19 October dash insert (1316eabf) had also swept Rule 53(b), read on 25 September (e89ee4c9), under the later date. Each part now carries its true date.
- **special_teams KT8 :1324 (D).** The authors refuted the brief's premise: the KT already carried Hockey Canada's on-head tier. At 105 words it was over the aim, so its four-book ladder was replaced with the corpus cost clause, "In most books a call for checking from behind ends your game every time, and in every book it can; plan on being ejected if it reaches their head, too", followed by USA Hockey's tiers. Final length 92 words.

## Refuted, no edit
- **center Options :681, "never a hold or a hit from behind" (A).** The line names the hazard and prices nothing; the price follows at :684, which says "checking from behind". "Never … a hit from behind" is the wider prohibition, so narrowing it would be permissive.
- **center :686 dropping "reckless" (A).** The line already carries it through "one" ("a reckless check from behind … one with excessive force").
- **special_teams, an unqualified "head contact takes precedence" (D).** No such line exists. The Hockey Canada head limb is priced "plan on being ejected anyway" at every site.
- **special_teams :1113, "a hit meant to injure is a match in every book but the IIHF" (D, confirmed by rules-verifier).** It is accurate:
  - NHL and PWHL 21.1: "A match penalty shall be imposed on any player who deliberately attempts to injure…";
  - USA Hockey 602(a);
  - Hockey Canada 7.1(c) and 7.5(c);
  - CARHA 48(a);
  - the IIHF has no match penalty ("match penalt": 0 hits, raw and flattened, in both IIHF books).
- **defending_the_rush Common Mistakes :1101, "There is no cheap tier for this hit" (B).** The act named is a forceful hit at the wall, which is at least a major plus game misconduct under Casebook 608 Situation 1(1). It does not understate.
- **risk_management Key focus :30 (C, read only).** "A hit on a player's back ends your game in most books" correctly leaves out USA Hockey, and its price is carried in the body and in KT11.

## After review (coordinator applied reviewer wordings verbatim)
- **special_teams KT8 (safety-reviewer MAJOR; rules-verifier WORDING).**
  - **The problem:** the shortened KT voiced USA Hockey's floor ("even the lightest is a minor and a misconduct") and then only the reckless match. A forceful hit along the boards or a head-first hit, a mandatory major plus game misconduct (608(b) "shall"; Casebook 608 Situation 1 "In every instance…"), was left as "can". That is permissive, in a KT voiced alone, on the penalty kill, where a defender meets a carrier facing the boards.
  - **The fix:** the rules-verifier's sentence was applied: "Under USA Hockey even the lightest is a minor and a misconduct, a forceful one along the boards or a head-first one ejects you, and if it is reckless, plan on a match and a likely multi-game suspension." The safety-reviewer's own wording made the same fix in different words. It was not applied, and the safety-reviewer re-checked the applied text: OK.
- **defending_the_rush :319 (rules-verifier WORDING).**
  - **The problem:** the line named only forceful and head-first for the ejecting tier. 608(b), which the line cites, names reckless first, and Casebook 608 Situation 1(3) adds "regardless of whether or not board contact is made".
  - **The fix:** the rules-verifier's 219-character line was applied, adding "or reckless" and "even light checking". The safety-reviewer re-checked it: OK.
- **Not applied, logged in the plan:**
  - about 20 other sites still say "even a light hit … is at least a minor plus a misconduct" (harsher, and backed by Casebook 608 Situation 1(2); consistency only);
  - risk_management :756/:905 against defending_the_rush :1017 on CARHA 48(c)'s reach. Authors B and C both recommend moving risk_management toward "any kick"; this needs its own brief.

## Reviews
| Reviewer | Result |
|---|---|
| authors A, B, C, D | Premises re-tested in sources; four refuted or already closed; layer tests given; renders read. |
| rules-verifier | Read 602, 608, 609, 620, Casebook 608 Sit. 1 and 609 Sit. 2, NHL/PWHL 21.1 and 43, IIHF 43, Hockey Canada 7.1/7.5–7.7, CARHA 48/53/86 and the glossary. Hunks 1 and 3 OK; WORDING on :319 and KT8; refutation of :1113 confirmed. "Plan on" kept for 602(a), never "must". |
| safety-reviewer | Three hunks OK; KT8 MAJOR (dropped mandatory ejection), with a layer test: KT8 was the only summary layer to drop the limb. 0 LOST in all four files. |
| safety-reviewer narrow re-check | KT8 and :319, as applied, OK in a fresh render (chunks 084 and 017). |

### C11
The wave was written by authors A, B, C and D. The coordinator's only content changes after review were the rules-verifier's two wordings, applied verbatim and re-checked by the safety-reviewer. The coordinator wrote the plan rows and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all four files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | trailer quotations read past their closing marks; dates checked against git history |
| D5–D8 | not engaged |
| D9 Summary layer | special_teams KT8, with a layer test by the author and the safety-reviewer |
| D10 Key-facts layer | defending_the_rush :319, voiced alone by both reviewers |
| D11 Reader safety | safety-reviewer, plus a narrow re-check |
| D12 Read-aloud | renders by the authors and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus checks; no site-reviewer (text only) |

## What this method could not have found
- **Other layers.** Layers in these four files built on the old wording that never use "forceful", "608" or "from behind". The layer tests keyed on those words.
- **Other rules.** Whether USA Hockey 603 (boarding) belongs beside 608 on the penalty kill.
- **Other books.** Whether other books have a light-contact carve-out like Casebook 609 Situation 2. Hockey Canada 7.5 Interpretation 3 (marginal contact) was not read.
- **Other KTs.** Whether any of the seven KTs shortened in W335 voices USA Hockey's floor and then skips the 608(b) ejection, the shape the KT8 review found. The reviewer flagged this; it is in the plan.

## After commit 575b7604
The coordinator read the seven Key Takeaways W335 shortened, testing the lead in the last bullet above:
- switching_positions KT8;
- center KT6;
- language_and_glossary KT12;
- risk_management KT11;
- winger KT10;
- offensive_zone_play KT8;
- zone_entries KT4.

None voices USA Hockey's minor-plus-misconduct floor on its own. Each leaves USA Hockey under "in every book it can" or "under USA Hockey it can", and gives the head and reckless tiers. The shape found in special_teams KT8 (the floor stated, then only the reckless match) is not present, and the lead is closed. winger KT10 now carries the Hockey Canada on-head tier ("plan on being ejected if it reaches their head"), which closes the W314–W316 plan item about it. Plan only; no content changed.
