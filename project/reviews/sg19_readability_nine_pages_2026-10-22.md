# SG19: readability on nine pages (22 October 2026)

## Scope

Readability brief (scratchpad z/brief.md): KTs to kernels ≤ ~60 words, sentences > 60 split, paragraphs > 1,200 chars split, ⚠️ kept on its hazard. Pages:
- body_contact_and_battles
- center
- team_play_and_culture
- defending_the_rush
- conditioning_and_recovery
- rink_map
- language_and_glossary
- puck_handling
- zone_entries

**Corpus-wide after this round** (check_readability, tree that also holds the in-flight SG20 edits): long paragraphs 1 and long KTs 47, from 20 and 78 before SG19.

## Changes per page

- **body_contact:**
  - 6 long paragraphs → 0; longest sentence 107 → 81 (the remaining > 60 are single quotations).
  - Barred-checking regrouped by book.
  - KT6, KT8, KT11 shortened; KT11 is 68, all mandatory limbs.
- **center:** 3 long paragraphs → 0; three CM bullets split into bullet plus continuation.
- **team_play:**
  - KTs over 60: 4 → 2.
  - :283 PWHL rewritten: a helmet/cage/chin-strap grab is a major plus game misconduct (51.3, 51.5), and a match for deliberate injury or an attempt at it (21.1). The NHL/IIHF limb is separated.
- **defending_the_rush:**
  - Long paragraphs: 2 → 0.
  - "Important." runs of 5–6 → max 4. Five ⚠️ were removed, each on a permission, contrast or procedure unit whose hazard is voiced by an adjacent marked unit.
  - KT9 kept at 89: every limb is a mandatory tariff.
- **conditioning:** 1 long paragraph → 0; KTs 4 → 2. Every red-flag and return-to-play limb is kept.
- **rink_map / glossary:** KTs 4 → 2 and 4 → 1. Region and vocabulary definitions are untouched.
- **puck_handling / zone_entries:** KTs shortened; the remaining over-60 KTs each carry book tariffs.

## Reviews

- **safety-reviewer, body_contact: CLEAR, three minors, all fixed.**
  - KT11 "a charge on a goalie": HC 8.5(b) mandatory only for the goalie.
  - :616 "it" antecedent restored as "a hit from behind".
  - :782 Casebook quotation re-attributed ("It adds that…").
  - Trivial: "Hockey Canada 9.3".
- **safety-reviewer, other eight pages: three MAJORS and three minors, all fixed.**
  - MAJOR, center KT6: the find-out-if-your-division-allows-checking limb had been dropped, so the KT read as permission. Restored.
  - MAJOR, puck_handling KT3: dropped USA Hockey's next-game ban beside a CARHA-only clause. Restored.
  - MAJOR, zone_entries KT9: dropped the CARHA 79(a) backswing limb while telling the reader to rim hard. Restored.
  - Minors:
    - team_play KT17 "not the player" restored;
    - DTR permission/counterweight rejoined in one chunk;
    - rink_map "Outside the privileged area".
- **rules-verifier: four findings, fixed, re-read CLEAR.**
  - zone_entries KT11, facts :395 and CM :1177 said "any penalised contact that injures" → "interference" (HC 8.5(b), CARHA 66(e); HC 9.5 counter-example).
  - glossary :403 and :433 overstated the CARHA high-stick exception (62(b) Note: injury → GM).
  - rink_map KT10 restores "unless a skate stays on the crease" (NHL 27.8, IIHF 27.7).
  - puck_handling KT10 "which adds your next game" no longer reads onto the PWHL (51.6 no suspension).
  - body_contact :254 "It sets conditions".
- **safety re-read of repairs: CLEAR**, with two minors fixed:
  - center KT9 "charging a goalie";
  - body_contact :616 NHL/PWHL 43.4 discretionary, 21.1 mandatory (nhl_rules.txt:5479, pwhl_rules.txt:4518).
- **site-reviewer (headless Chromium, 9 pages × 4 widths × 2 themes): PASS.**
  - Continuation paragraphs render inside their list items; 0 bare glyphs, 0 panels, no overflow, console clean.
  - The later repairs were text-only edits inside existing units.

## Gates (after the final edit, no pipe)

- `npm run build` exit 0.
- check_callout_flow --bare: 0.
- check_facts, check_links, check_absolutes, check_geometry and check_secrets pass.
- check_marker_pairs on the 9 files: 5 LOST, the five deliberate DTR removals, each upheld by the safety reviewer; 0 SPLIT HALF.

**Note:** the tree also held uncommitted SG20 edits to other files during this build. They are not in this commit.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier and re-read |
| D5, D6, D8, D13 | Out of scope |
| D7 | ✓ |
| D9 | ✓ Layer tests by each agent; zone_entries "interference" propagated to facts and CM |
| D10 | ✓ Facts within caps |
| D11 | ✓ Two safety reviewers plus re-read |
| D12 | ✓ KTs and split halves rendered |
| D14 | ✓ |
| D15 | ✓ site-reviewer PASS |

## Still open

- **KTs over 60 kept for mandatory limbs:**
  - body_contact KT11 (68)
  - DTR KT9 (89)
  - puck_handling KT3 (71) and KT10 (68)
  - center KT6 (66) and KT9 (62)
  - team_play KT12 (69) and KT17 (65)
  - rink_map KT10 (66) and KT11 (63)
  - zone_entries KT9–11 (62–63)
  - conditioning KT11 (61) and KT14 (64)
- **glossary :403:** "with at least a one-game suspension" over-reaches for an injuring accidental high-stick major; CARHA 32(d) excludes the accidental high stick. Harsher direction, optional.
- **No general repetition pass** was made on these pages.

## What this method could not have found

- Summary layers in these files built on old wording that the diff did not touch.
- How the compressed KTs sound to a listener, beyond rendering and reading them.
