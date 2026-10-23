# SG45: leaning, pinning and hip-shield cues scoped by book; repetition passes on center and breakouts (23 October 2026)

## What changed

**Leaning and pinning, swept across four more pages** (follow-on to SG44)
- **body_contact_and_battles.md**
  - :19 Key focus now says "incidental contact" where it said leaning.
  - :43 Overview: "Leaning on each other is not legal everywhere: not where Hockey Canada bars checking, and not under CARHA's adult rules… In IIHF women's hockey, contact stops at the wall".
  - :73 now names the one exception (CARHA 49(a), all its limbs: bodies, pushes, shoves, stands in front to make contact, does not avert) and the one limit (IIHF 101.1), plus a separate leaning sentence: legal under USA Hockey, the IIHF and the PWHL, but not where Hockey Canada bars checking (7.3(a) "bumps, shoves, or pushes").
  - "sealing a player off along the wall" became "holding the lane along the wall that you reached first".
  - :304 matches the :296 facts line.
- **rules_primer.md :472:** Hockey Canada's low-speed pinning waiver now reads "where checking is allowed" (7.5 Interpretation 3 excludes Rule 7.3 divisions).
- **winger.md :539 and Common Mistakes :799 (net front):** "In a CARHA adult league, and under Hockey Canada at every level, hold your spot without leaning on anyone — Hockey Canada makes impeding a player without the puck interference (8.3), checking game or not."

**Winger puck-protection cue** (a major from before this round, found by the SG45 safety review)
- **The defect:** "hip into the checker" / "backside into them" was unscoped in Key focus, two facts lines, two body sites and KT6, and also in switching_positions :204/:209. Driving a hip into a checker is penalised under CARHA 49(a) (a major ejects, 30(a)), HC 7.3(a) in non-checking divisions, and USAH 604(c) with Note 1 ("overt hip… action").
- **Wording now:** "hip/backside toward the checker", scoped "where checking is barred, hold your position and never bump them; in a CARHA league, avoid the contact".
- **Coverage:** the scope is now in every layer that carries the cue: Key focus, KT6, facts, body, and a new Rule line (:106) citing 7.3(a), 604(c), 49(a) and 30(a).
- **Wall posture:** "forearm and hip into the contact" became "forearm and hip to the wall" (winger :47, :408, :801; breakouts :842), matching puck_handling and body_contact.

**Repetition passes**
- **center.md:** 19,738 → 19,411 prose words, 27 cuts.
  - Hockey Canada checking-from-behind paragraph: duplicated tiers removed; :795 now reads "is still a check from behind under Hockey Canada's rule".
  - "check" became "body check" at four sites.
  - The man-on-man rotation sentence now stands alone.
- **breakouts.md:** 21,238 → 20,854 prose words, 36 cuts.
  - An unsupported "close to four times as likely" was deleted; 89/20 is about 4.5, and the source phrase differs.
  - A false Common Mistakes intro was deleted.
  - The centre-vs-winger ranking is now labelled "coaching emphasis rather than a counted ranking".

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules | rules-verifier (two passes) | **Pass 1:** all nine claims VERIFIED (HC 7.3/7.5/7.6/8.3, USAH 604/640(e)/Glossary/Blind Hockey, IIHF 101.1 and Appendix II, PWHL 52.1(ii), CARHA 49). Notes: center :795 "names" overstated the goal frame (fixed); HC 8.3 reaches net-front leaning in every division (applied). **Pass 2:** all ten new claims VERIFIED. 604(c) is the right minor citation; the "simply maintaining established body position" quote is verbatim. Two incomplete-but-safe items: the body_contact :73 CARHA limb (fixed) and the USAH "contact with the puck" limit (plan row). |
| Safety | safety-reviewer (three passes) | **Pass 1:** CLEAR on the diff. A pre-existing MAJOR: winger "hip into the checker" was unscoped in every layer (fixed). **Pass 2:** one MAJOR (the CARHA avoid-contact limb had not reached Key focus or KT6) and one minor ("forearm and hip into the contact"). Both fixed. **Pass 3:** CLEAR. |
| Content | content-reviewer | CLEAR on both repetition passes. Minors fixed: the body_contact :73 count/order, :43 readability, "body check" in center, the breakouts ranking label, the center man-on-man sentence. |
| Mechanical | coordinator | Full npm build at 12:39, after the last edit at 12:38, exit 0. check-links: 56 pages. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_callout_flow --bare: 0. check_marker_pairs on all 6 content files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the rules-verifier (two passes) |
| D4–D5 citations | Checked: CARHA 49(a), HC 7.3(a) and the USAH 604(c) Note quotations are verbatim |
| D6 negative existence | Checked: Hockey Canada has no "hold your ground" entitlement and never uses "lean" (true negatives, read in context) |
| D7 cardinal rule | Checked: coaching-choice asks kept through both repetition passes; the center man-on-man alternative restored to stand alone |
| D8 numeric ownership | Checked: center faceoff "computed" labels and breakouts sample qualifiers kept |
| D9 summary layer | Checked: the winger cue scope is in Key focus, KT6, facts, body and Rule; the HC lean limb is in body_contact Key focus, Overview, body, facts, Common Mistakes and KT |
| D10 facts | Checked: changed facts lines pass caps (check_facts exit 0); the new winger Rule line is 238/300 |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Partly: center cut 11 measured in the same chunk; breakouts cut 30's own-goal exception is in the preceding chunk (not a safety issue). Other sites not rendered. |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links and check_absolutes |
| D15 rendered site | Build passes. No visual pass. |

## What this method could not have found

- Unscoped hip or wall cues on pages outside this batch (now a plan row).
- How referees call a deliberate lean under Hockey Canada (the book never uses the word).
- USA Hockey Casebook situations on competitive contact (not opened).
- Chunk placement for most new scope clauses (no render).
