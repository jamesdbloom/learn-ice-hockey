# W334: owner decisions C, D and F. Rules out of two summary layers, stronger "can" Key Takeaways, and stepping on an opponent added once (14 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/foundation/rules_primer.md
- content/technique/shooting.md
- content/hockey-iq/playing_without_the_puck.md
- content/positions/defender.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
On 14 November 2026 the owner answered questions put after W333. The answers are recorded in the plan row "Owner decisions, 14 November 2026" (commit 9f5ebf03). This wave carries out three of them:

| Decision | What the owner ruled |
|---|---|
| **C** | Strengthen the three Key Takeaways that said a hit from behind "can" end your game. |
| **D** | Add stepping on an opponent, once, priced in every book. |
| **F** | Move the USA Hockey price lists out of body_contact_and_battles' Key focus and rules_primer's Overview, because those layers are for tactics. |

Decision A (moving penalty ladders out of the long Key Takeaways) is the next wave, W335. Decisions B and E needed no edit.

Three authors worked on disjoint files: X (body_contact_and_battles), Y (rules_primer) and C (shooting, playing_without_the_puck, defender). Y also ran a read-only census of every Key focus and Overview unit in the corpus that carries a per-book price list. Its findings are in the plan for the owner.

## What changed
- **body_contact_and_battles Key focus :31 (F), 124 → 52 words.** It now reads: "Never hit a player who cannot see you coming, and never finish a check once the puck has gone. If you can see their numbers, pull up and play the puck. In most books here a call for checking from behind ends your game every time, and in every book it can." The book-by-book ladder is gone. Every removed limb is still carried in the same document: the facts Never line :762 carries the old ladder almost word for word, and :765, :766, :782, :788, :798, :1227/:1228, Common Mistakes :2053/:2055 and KT6 :2173 carry it as well.
- **rules_primer Overview :35 (F), 230 → 119 words.** The author removed the ladder for every book, not only USA Hockey's, under the brief's "without a per-book ladder". The paragraph now gives:
  - the instruction;
  - the cost: in most books the call ends your game, in every book it can, and a match in some for driving a defenceless player into the boards or net;
  - a closing tactic: arrive on the hip.

  Every removed limb survives at :475–:481, :534, :1081, Common Mistakes :1149 and the KTs. One piece of reasoning has no exact carrier: the IIHF glossary's "reckless by definition". Its price, plan on the major and game misconduct, survives at :477.
- **Key Takeaways (C).**
  - shooting KT5 :1006, playing_without_the_puck KT10 :1108 and defender KT2 :1090 now say "checking from behind ends it in most books and can under USA Hockey".
  - "Checking from behind", not "a hit from behind", per the W328/W329/W331 rulings.
  - USA Hockey is named as the exception, so a listener cannot hear it inside "most".
  - Charging and boarding stay "can".
- **Stepping on an opponent (D).** body_contact_and_battles gains a body paragraph at :1178 in "Working the puck free with your feet", and a facts line at :1155. The text: "Keep your skates off a player who is down or tangled with you in the pile — plan on stepping on an opponent on purpose ending your game in every book here." The routes it gives:
  - USA Hockey Casebook 627 Situation 2 and 602 Situation 2, a match;
  - NHL and PWHL 21.1;
  - Hockey Canada 7.1(c), whose definition counts "by the use of a stick, skate or other object";
  - CARHA 48(a);
  - IIHF 21.1, a major plus an automatic game misconduct, because the IIHF has no match penalty.

  Every route depends on intent or on the referee's judgement, hence "plan on". The trailer gained each quotation verbatim.

## After review (coordinator applied reviewer wordings verbatim)
- **rules_primer :35 (rules-verifier).** The new closing tactic, "choose your angle early: arrive on their hip", assumed a check was available, in a layer that is voiced alone. Checking is barred in CARHA adult leagues, in non-checking categories under Hockey Canada and USA Hockey, in IIHF women's hockey, and in IHUK U10/U12. The line now reads "So, where checking is allowed, choose your angle early…". The safety-reviewer re-checked it: OK, and nothing else in :35 assumes checking.
- **body_contact :1178 (safety-reviewer).** The bold opener names a player "tangled with you in the pile", but the paragraph priced only the deliberate act. USA Hockey 627(a) and Casebook 627 Situation 1 make a skate push-off on a tangled opponent a major plus a game misconduct, with no intent condition. A sentence was added: "Under USA Hockey even pushing off them with your skate to free yourself is a major plus a game misconduct (627(a); Casebook 627, Situation 1)." Re-checked: OK.
- **Not applied.**
  - The rules-verifier's optional "the route is a match penalty".
  - The safety-reviewer's advisory to add "never contact the head" to body_contact's Key focus. Once the USA Hockey list left :31, that Key focus no longer mentions head contact; it lives at Overview :51. Adding it to Key focus is an owner quality-bar call, and it is in the plan.

## Reviews
| Reviewer | Result |
|---|---|
| authors X, Y, C | Owner rulings carried out. Layer test with carrier lines for every removed limb. All sources verified. Renders read. |
| rules-verifier | Nothing blocking. Confirmed "most books … every time" (NHL, PWHL, IIHF, HC, CARHA) and "can" for USA Hockey (608(a)). Verified every stepping route and quotation. No rule prices stepping lower; IIHF 49 kicking costs the same. One WORDING item (:35 checking scope), applied. |
| safety-reviewer | Nothing blocking. Ran its own layer test on both F units: every removed limb has a carrier, and no summary layer was built on the old wording. One WORDING item (:1178 push-off), applied, plus one advisory. 0 LOST; harness clean. |
| safety-reviewer narrow re-check | Both applied edits OK in a fresh render. |

### C11
The wave was written by authors X, Y and C. The coordinator's only content changes after review were two reviewer wordings, each applied verbatim and re-checked. The coordinator wrote the plan rows and this record.

### Checks after the last content edit
Run after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all five files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | trailer quotations verified verbatim |
| D5–D8 | not engaged |
| D9 Summary layer | Key focus :31, Overview :35 and three KTs; layer test by two reviewers |
| D10 Key-facts layer | body_contact :1155, voiced alone |
| D11 Reader safety | safety-reviewer, plus a narrow re-check |
| D12 Read-aloud | renders by the authors and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus harness; no site-reviewer (text only) |

## What this method could not have found
- **Sibling documents.** Units in other documents that echo the old ladder wording, or now contradict "most books". No sweep was run.
- **How referees call a stamp.** Whether a referee in practice calls a stamp in the pile under 21.1 or 7.1(c), or as roughing. No book but USA Hockey's answers this directly.
- **Listening.** Whether the shortened Key focus and Overview read well aloud needs the owner's listening pass.
