# W335: owner decision A — the per-book penalty ladders moved out of seven long Key Takeaways (14 November 2026)

**Files:**
- content/positions/switching_positions.md
- content/positions/center.md
- content/foundation/language_and_glossary.md
- content/hockey-iq/risk_management.md
- content/positions/winger.md
- content/systems/offensive_zone_play.md
- content/systems/zone_entries.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave carries out owner decision A of 14 November 2026, recorded in the plan row "Owner decisions, 14 November 2026". Seven Key Takeaways had grown to 135–150 words while understated USA Hockey hit-from-behind prices were being fixed. The owner ruled:
- keep the instruction and the harshest price in the KT;
- move each book's ladder to What it costs, or to the body section that owns the act, behind a pointer.

Three authors worked on disjoint files:
- **AA:** switching_positions, center.
- **AB:** language_and_glossary, risk_management.
- **AC:** winger, offensive_zone_play, zone_entries.

## What changed
Each KT keeps its instruction and now carries the common cost clause: "In most books a call for checking from behind ends your game every time, and in every book it can". The clause rests on:
- NHL and PWHL 43.2/43.5;
- IIHF 43.2/43.3;
- HC 7.5(a)/(e);
- CARHA 53(a);
- USA Hockey 608(a)'s minor plus misconduct, which is the "can".

Each KT also carries its harshest price, and a pointer where the page has a section to point at.

| KT | Words before → after |
|---|---|
| switching_positions KT8 :674 | 150 → 92 |
| center KT6 :978 (now says "checking from behind", closing a plan note) | 140 → 96 |
| language_and_glossary KT12 :540 (the W327d 620(b) sentence kept word for word) | 146 → 87 |
| risk_management KT11 :991 | 135 → 88 |
| winger KT10 :970 | 139 → 113 |
| offensive_zone_play KT8 :1292 | 140 → 117 |
| zone_entries KT4 :1263 | 140 → 107 |

**Body addition.** winger :854 gains "in the NHL and PWHL it is a major and a game misconduct (43.3, 43.5), and under the IIHF, plan on the same (43.3)". This gives the NHL/PWHL ejection and the IIHF "plan on it" an explicit carrier; the text is copied from sibling text at offensive_zone_play :1174, which has already been reviewed.

**Layer test.** The authors and both reviewers each ran one independently. Every limb removed from a KT has a carrier in the same document:
- each book's tier;
- 608(a);
- Casebook 608 Situation 1;
- 608(b);
- 620(b);
- 602(a)/608(c);
- the Hockey Canada head limb;
- HC 7.5(c) and CARHA 53(b).

## After review (coordinator applied reviewer wordings verbatim)
- **Head-contact ejection restored (safety-reviewer).** winger, offensive_zone_play and zone_entries had lost the head limb, so a USA Hockey listener heard only "can" where 620(b) makes the ejection mandatory. Each now says "plan on being ejected if it reaches their head".
- **"Even if" removed (safety-reviewer).** In center and switching_positions, "even if it reaches their head" became "if it reaches their head, too", because "even if" implied head contact might be cheaper.
- **zone_entries KT4 (safety-reviewer).** The new KT named only Hockey Canada and CARHA for the match. It now adds "under USA Hockey, plan on a match for any reckless hit" (602(a)).
- **offensive_zone_play KT8 (rules-verifier).** The act named, a winger facing the glass, is the exact case where HC 7.5(c) and CARHA 53(b) make the match mandatory. The KT now says so.
- **Re-check fixes (safety-reviewer).**
  - In winger and offensive_zone_play, the spliced head clause could be heard as attaching to the match. Both were split into separate sentences.
  - "Into the glass" became "into the boards": HC 7.5(c) says "boards or goal frame" and CARHA 53(b) says "boards or goal net".
  - In zone_entries, "if it reaches their head" had attached to "any reckless hit", which narrowed 620(b)'s careless limb. It now reads "if any hit from behind reaches their head".
- **Final re-check fix (rules-verifier).** In offensive_zone_play, "make it mandatory" became "make the match mandatory". The coordinator applied it without a further re-check, as a one-word antecedent fix confined to the finding.
- **Length.** The restored limbs put winger (113 words) and offensive_zone_play (117 words) back above the ~90-word aim. Every remaining limb is a mandatory tier. The next cut, winger's Hockey Canada/CARHA "hold your ice" limbs, is logged in the plan.

## Reviews
| Reviewer | Result |
|---|---|
| authors AA, AB, AC | Owner ruling carried out. Layer-test tables given. Renders read voiced alone. |
| rules-verifier | No block; every cost clause verified in all six books; one WORDING item (OZP mandatory match). |
| safety-reviewer | No block; independent layer test; WORDING items on zone_entries and on three lost head limbs; optional fix to "even if". |
| safety-reviewer re-check | center and switching_positions OK; three WORDING items (splits, "boards", "any hit from behind"), applied. |
| rules-verifier re-check | winger and zone_entries OK; one WORDING item on OZP's "it", applied. |

### C11
Authors AA, AB and AC wrote the wave. Every change the coordinator made after review was a reviewer's wording, applied verbatim and re-checked; the last was a one-word antecedent fix confined to its finding. Where the two reviewers' wordings met in the same sentence (OZP), the coordinator applied both, and the later re-check reconciled them. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all seven files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, with re-check |
| D4 Citations | pointers and anchors resolve (check_links) |
| D5–D8 | not engaged |
| D9 Summary layer | seven KTs; layer test by authors and both reviewers |
| D10 Key-facts layer | not changed |
| D11 Reader safety | safety-reviewer, with re-check |
| D12 Read-aloud | renders by the authors and the safety-reviewer (SR, SR2) |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus harness; no site-reviewer (text only) |

## What this method could not have found
- **Other layers.** Layers in these files built on the old KT wording were not reread: Key focus, Overview, Common Mistakes.
- **Other rules.** Rules other than 43, 608 and 620 that price the same act, such as boarding.
- **Listening.** Whether "in every book it can" is heard by a USA Hockey listener as a real ejection risk now that the 608(a) floor has left the KTs. Only the owner's ear test can settle this.
