# SG93: British cues restored, IIHF majors for British women and juniors, EIHL warm-up and fighting (27 October 2026)

**Files:**
- content/hockey-iq/risk_management.md
- content/systems/defensive_zone_coverage.md
- content/systems/special_teams.md
- content/technique/shooting.md
- content/foundation/on_ice_communication.md
- content/foundation/rules_primer.md
- content/off-the-ice/team_play_and_culture.md
- content/positions/goaltender.md
- content/technique/body_contact_and_battles.md

## What changed and why

### 1. British cues (from the plan row "Sentences that lost their only spoken British cue")
In SG84, mid-prose 🇬🇧 flags were removed, because the owner ruled they go only at block starts. md_to_speech had voiced each one as "For British readers". These sentences lost that cue, and each now carries a plain-prose one:
- on_ice_communication :190, :194, :392;
- rules_primer :385, :767, :773;
- risk_management :414;
- team_play :318;
- goaltender :749, :1031;
- dzc :151;
- special_teams :947, :1023;
- shooting :888, scoped "Outside the Elite League".

Before each cue was added, the agents checked that neither the In-House Rules 2026-27 nor the EIHL Casebook amends the rule involved. Left alone, with reasons:
- rules_primer :378, :388 and :800 (the EIHL amends 42);
- pwtp :731;
- game_management :1023 (already carries a British sentence);
- goaltender :700 (already says "in Britain").

### 2. risk_management: the IIHF tripping major in British women's and junior hockey
IIHF 57.3 is a bare major. In-House Rule 101 says any major ejects in women's hockey "in all cases", and IIHF 201.1, applied through In-House Rule 201, does the same for juniors. Added:
- a new facts line (:665);
- a body limb (:693).

Hooking (55.3) already carries an automatic game misconduct, so it was left as it was.

### 3. EIHL warm-up and fighting (SG84 sibling tensions)
- **goaltender :1427:** now gives all three parts of EIHL 86.6: the standby referee handles contact and the red line, a referee who sees an offence can call it, and what officials miss is reviewed after the game. This matches bcb :200/:213 and team_play :335.
- **goaltender facts :1411:** restructured to add the Elite League's suspension or fine (300/300).
- **bcb :200 and :211:** "reverses IIHF 5.6" became "goes further". IIHF 5.6's no-penalty clause is scoped to its own subject.
- **bcb :1852:** the 2025/26 IIHF 46.1 says "may be ejected", but its own Table 6 makes the game misconduct automatic. The line now says "so plan on it", matching team_play :358.

### 4. dzc facts :177
Now reads "a minor by three seconds", consistent with the six SG92 sites.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules (all 9 files) | rules-verifier | **18 SHIP, 1 FIX** (goaltender :1427 had dropped the "a referee who sees it can call it" limb). Checked across both IIHF editions, In-House 2026-27 and the EIHL Casebook in full: 19.1, 22.1, 46.1 with Table 6, 46.8/46.9, 55.3, 57.3/57.4, 63.2, 63.8, 69.1, 69.4, 75.2(II), 81.4, 82.1, 82.2(V), 84.4(VI), 86.6, 5.6 and 201.1, plus USA Hockey 632(b) and Casebook Situation 6. |
| Safety (all 9 files) | safety-reviewer | **18 SHIP, 1 minor FIX** (the same goaltender :1427). Every cue holds across all British hockey, the Elite League included, because neither overlay amends the rules cited. Rendered goaltender and rules_primer. 0 lost markers in all 9 files. |

### C11
The fixing agent applied the goaltender :1427 repair after both reviews; the gate reads it. It follows the reviewers' sketch, except that it cites "(86.6)" because the sentence draws on three limbs of 86.6.

### Notes carried to the plan
- risk_management states the junior ejection flatly, while uk_rules :377 and bcb :1856 call it an inference from In-House 201. This errs harsh.
- dzc :177 "is a minor by three seconds" reads awkwardly.
- on_ice_communication facts :145 and :370 give the IIHF broken-skate exception with no British cue.
- goaltender facts :1024 is the facts-layer twin of :1032 and has no British cue.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules | rules-verifier, as above. |
| D4–D5 citations | All quoted from sources/. |
| D6 negative existence | "Neither British book amends X": In-House read in full; EIHL Casebook read in full by the rules-verifier. |
| D7 cardinal rule | n/a |
| D8 numeric ownership | n/a |
| D9 summary layers | Layer tests by the agents; goaltender CM and KT12 do not carry the warm-up referee claim. |
| D10 facts layer | risk :665 is new (block 14/14); goaltender :1411 is 300/300; bcb :200 is 292/300. check_facts exits 0. |
| D11–D12 read aloud | goaltender, rules_primer and risk_management rendered. |
| D13 folklore | Out of scope. |
| D14 links | check_links passes. |
| D15 render | Site build after the last edit. |

## What this method could not have found
- IIHF sentences elsewhere in these files that need a British cue but were not on the list.
- IHUK competition regulations (NIHL, WNIHL, junior) that amend the cited rules.
- A newer EIHL Casebook 86.6.
