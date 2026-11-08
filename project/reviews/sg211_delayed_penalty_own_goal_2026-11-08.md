# SG211: a deflection off an opponent into your empty net counts under USA Hockey, and every layer now says to make no pass across the front of your own empty net during a delayed call (8 November 2026)

**Files:**
- content/systems/game_management.md
- content/foundation/rules_primer.md
- content/systems/breakouts.md
- content/positions/goaltender.md
- content/systems/special_teams.md
- site/src/diagrams/game_management.mjs (caption and describe of `delayed-penalty-your-own-net`)
- site/src/data/diagrams.json (build product)
- project/reviews/sg211_delayed_penalty_own_goal_2026-11-08.md

## Source
A safety reviewer on the SG209 caption wave found that game_management.md:383 says "A deflection off an opponent doesn't count". That is NHL 78.5(xi), and USA Hockey's Casebook rules the other way. Three authoring waves followed, each on disjoint files: SG211 (game_management, rules_primer), SG211b (breakouts, goaltender), and SG211c (all five plus the caption).

## The rule, verified in every book on disk
During a delayed penalty, the penalised team can score only off the non-offending team's own action. What differs is whether a deflection off an opponent counts as that action:

| Book | A deflection off an opponent | Source |
|---|---|---|
| NHL | **does not count** | 78.5(xi), nhl_rules.txt:8425-8431 |
| IIHF 2026/27 and 2025/26 | **does not count** | 78.5(XI), iihf_rules_2026-27.txt:6625-6628 |
| PWHL | **does not count** | 80.5, pwhl_rules.txt:7033-7038 |
| Hockey Canada | **does not count** | 4.15(b) Interpretation 11, Example 1 ("No goal… because of contact by the offending team"), hc.txt:4065-4077 |
| USA Hockey | **counts** | 409(c), "as the direct result of the action of a player of that team"; Casebook 409 Situation 2, "Yes. The goal is allowed" |
| CARHA | **does not say** | 39(b) Note 2 covers only "no contact by the offending team"; 60(b) supports the conservative reading |

- **Britain.** The In-House Rules amend Rule 78 only for video review, so the IIHF answer applies. The EIHL Casebook has no entry.
- **An offending player's stick-check.** Every book that addresses it rules no goal: NHL, IIHF and PWHL by text, Hockey Canada in Interpretation 11 Example 2, USA Hockey in Casebook 409 Situation 9.

## What changed
- **Body.** The deflection claim is scoped book by book at game_management :383, rules_primer :674, breakouts :966 and :971, goaltender :1132 and special_teams :998. Under USA Hockey the clipped pass counts. For CARHA: "play as if it would count".
- **Premise sentences.** Three places were written on the old "they cannot score" idea. They now read:
  - game_management :381: "almost no empty-net risk… off its own play";
  - breakouts :956 and goaltender :1129: "cannot score off its own play";
  - rules_primer :659: "The other team's only way to score is a puck your own team puts into your net".
- **Summary layers.** Every layer that carried "no **blind** pass" now has a book-neutral instruction that is safe under every book: "make no pass across the front of your own empty net". This covers game_management Key focus, facts, Common Mistakes and Key Takeaway 4; breakouts facts and Key Takeaway 11; goaltender facts; special_teams facts and body; and rules_primer's "What to do".
- **Facts.** Each facts line cites Casebook 409 Situation 2 and ends "CARHA does not say, so assume it counts".
- **Citation runs.** The run in the tactics sections now points to the Rules Primer, as "has each book's rule".
- **Caption.** It is now book-neutral: "The team to be penalised can only score off your own team's play, so the pass that can beat you is a defenceman-to-defenceman pass…". It had cited only the NHL and called a blind pass "the one pass that can beat you", which is false under USA Hockey. The describe field dropped "blind".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (round one) | Claim confirmed in all six books. WORDING: CARHA missing from a facts line; "no empty-net risk"; CARHA "do not count on it" was ambiguous; pronouns. |
| content-reviewer (corpus sweep) | No other carrier of "a deflection doesn't count" anywhere in content/ or the captions. BLOCKING: rules_primer :659 pronoun ("they" = your own team). RECOMMENDED: book-neutral summary instructions; :381; goaltender ordering; caption. |
| rules-verifier (round two) | No FIX in either direction. WORDING: the CARHA scope (stick-check too); pointers overpromised "each book's wording"; facts-line CARHA instruction; :383 lead "D-to-D" narrower than other layers. Applied in the reviewer's wording. |

### C11
- The authoring agents made the edits through SG211c.
- After the round-two rules check, the coordinator applied the reviewer's exact wording to:
  - rules_primer :674 (CARHA "by deflection or by checking your stick");
  - the game_management and goaltender pointers ("has each book's rule");
  - breakouts :944 and game_management :374 ("so assume it counts");
  - game_management :383's lead ("make no pass across the front of your own empty net… D-to-D or otherwise") and its closing ("— and, to be safe, under CARHA —").
- The coordinator also dropped "blind" from the caption's describe field, to match the caption.

### Checks after the last content edit
- check_facts: exit 0, no pipe.
- check_links --quiet: exit 0.
- check_marker_pairs: 0 LOST, 0 SPLIT HALF across the five files.
- build-diagrams: exit 0. check_absolutes: clean.
- Full `npm run build` (absolute binary) after the last content edit: exit 0, including check:links (57 pages, all internal links and anchors resolve).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2, six books plus British layers |
| D2 Exceptions | USA Hockey Casebook 409 Situations 2 and 9; HC Interpretation 11 Examples 1–2 |
| D3 Divergence | USA Hockey against the other books; CARHA silence |
| D4 Citation integrity | every quotation verbatim |
| D5 Provenance | Rulebook quotations and their book attributions checked against sources/ by the round-one and round-two rules-verifiers, and re-derived by the commit gate (NHL/IIHF 78.5(xi)/(XI), PWHL 80.5, HC 4.15(b) Interp. 11, USA Hockey 409(c) and Casebook 409 Sits. 2 and 9, CARHA 39(b) Note 2 and 60(b)). No web source cited; no source-verifier needed |
| D8 Numeric ownership | Not engaged: no figure or owned number changed |
| D6 Negative claims | "CARHA does not say", searched as a whole-book sweep for the act |
| D7 Cardinal rule | instruction first; book-neutral instruction in summary layers |
| D9 Summary layer | content-reviewer layer test across five files |
| D10 Key-facts layer | caps checked; voiced-alone truth |
| D11 Reader safety | not engaged: a goal against, no contact or penalty to a player (declared by the rules-verifier) |
| D13 Folklore | Not engaged: the claims are rulebook rules, not coaching lore |
| D12 Read-aloud | authors rendered every file; changed units read de-tagged |
| D14 Structure, links | check_links; the Rules Primer anchor resolves |
| D15 Rendered site | text-only changes; no site-reviewer (declared) |

## What this method could not have found
- **Whether CARHA reaches the act through a rule not worded in the swept terms.**
- **Whether "the other team" in rules_primer :659 reads clearly aloud** right after "the non-offending team". That needs an ear test.
- **How the changes render on the site.** No browser looked at them.
