# W338: CARHA "any kick" in body_contact_and_battles, CARHA's puck-first Note reasoned from its own facts, and Hockey Canada's head limb in defensive_zone_coverage (14 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/hockey-iq/risk_management.md
- content/systems/defensive_zone_coverage.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave works three items W337 deferred. Three authors worked disjoint files:
- **I:** body_contact_and_battles.
- **J:** risk_management.
- **K:** defensive_zone_coverage.

The coordinator renamed one heading and routed a sibling finding.

## What changed
- **CARHA kick (I).** body_contact_and_battles still kept CARHA 48(c)'s match to a kick "from the side or front", at facts :1830/:1840 and Common Mistakes :2075. Each now says "plan on a match for any kick (48(c))", and :1855 now says the same. Every site discloses that CARHA's own Case Situations rule a kicking slew-foot from behind as a discretionary match (86(b)). A leg drag from behind with no kick "leaves the match to the referee under 86(b), and short of it is still a trip (86(a))". This matches risk_management and defending_the_rush.
- **CARHA puck-first relief (J, I).** risk_management's Slew-footing section said "no puck-first relief reaches it" and "CARHA does not say so". body_contact_and_battles said "Every puck-first relief in the six books sits inside a *tripping* rule and stops there" at :1844, and the same at :1786, :1838, :1839 and :1855.
  - Those claims were false for CARHA. CARHA prints its Note under 86(b), its slew-footing clause. Its glossary calls slew footing "tripping", and the Note says "the tripping shall be ignored". Its only slew-foot ruling repeats the Note.
  - Every site now keeps the instruction, "do not count on it", and gives the reason the book's own facts support. The Note covers only a player "in the process of falling or sliding along the ice" who knocks the puck "from their opponent's stick prior to making actual body contact", and "a leg put through somebody's skates while you are on your feet is not that".
  - The other five books are unchanged and verified: USA Hockey 639(a) "except slew footing" with Casebook 639 Situation 5; Hockey Canada 8.6, which "does not apply to" 8.8; and NHL/IIHF 52 and PWHL 53, which write no relief.
  - The coordinator renamed risk_management's heading from "Slew-footing: the one the carve-outs never reach" to "Slew-footing: do not count on a carve-out", and author I retargeted the one inbound link at body_contact :1844.
- **Hockey Canada head limb (K).** defensive_zone_coverage :180, :488 and Common Mistakes :859 said a hit on the head "is head contact, a match if they cannot protect themselves". That is flat for 7.6(a)'s accidental minor and for 7.7 at minimal violence.
  - :180 and :859 now read: "On the head, Hockey Canada's head-contact rule takes over. Plan on the game misconduct anyway, because that rule can start at two minutes, and on a match if they cannot protect themselves." This rests on 7.6's "must be penalized as Head Contact", 7.6(a), the 7.7 preamble and 7.6(c)/7.7(c).
  - :488's restated five-book ladder became the cost clause plus "Under USA Hockey it must if you hit them hard at the boards or send them head first into the boards or net", plus the head limb, the match, and pointers. :180, KT4's pointer target, stays complete.
  - At :488, :751 and :859, USA Hockey 608(c) now stands in its own sentence, "boards or not", because 608(c) has no board condition.

## After review
- **Reconciled wordings.** The rules-verifier and safety-reviewer gave conflicting wordings, so the coordinator sent both findings back to the owning authors. Each author wrote one reconciled wording per unit, and both reviewers re-checked it.
  - The rules-verifier ruled that "CARHA does not say / does not settle whether the relief reaches a slew-foot" was inaccurate (the three attachments above). It also found "knocks the puck away/clear" looser than "from their opponent's stick".
  - The safety-reviewer required the instruction first. :1839, voiced alone, had no instruction. :1855's amber run sat on "It files the foul inside its tripping rule". Its last sentence, "stays at the referee's discretion", could be heard as "the call is optional". risk_management :763's "whether it reaches one is this guide's reading" did not parse.
  - The rules-verifier also found that "Hockey Canada can call it head contact" understated 7.6's "must" (:180, :859). Both reviewers found that :488 had dropped USA Hockey's mandatory ejection for the exact play it describes, a forceful check on a player at the boards (Casebook 608 Situation 1, "must be called… In every instance").
  - Both reviewers' re-checks: every unit OK. The safety-reviewer's re-render found 0 LOST in all three files.
- **dzc :751 (rules-verifier re-check WORDING).** Splitting the 608(c) sentence had dropped "on a vulnerable or defenceless player". The coordinator applied the reviewer's sentence verbatim, which matches :488 and :859, without a further re-check. The change restores the rule's own condition and is confined to the finding.
- **Checker race, not a finding.** Author K reported a broken link to the old anchor. It came from a check_links run while author I was mid-edit; the re-run was clean.
- **Not applied, logged in the plan:**
  - rules_primer :424, "none reaches slew-footing", now inconsistent for CARHA (harsher);
  - the summaries that say a CARHA slew-foot "can" eject;
  - other documents that may carry the boards-frame 608(c) phrasing;
  - body_contact :1840 restating :1830 (D8).

## Reviews
| Reviewer | Result |
|---|---|
| authors I, J, K | Premises re-tested in sources. I found the false relief claim in four more units than briefed. Layer tests and renders given. |
| rules-verifier | No BLOCK. A (CARHA kick) OK. B: WORDING on the relief's stated reason, for accuracy. C: WORDING on "can call" and the :488 USA Hockey limb. Re-check: all OK but :751, applied. |
| safety-reviewer | No BLOCK. WORDING on instruction-first at :1839/:1855/:763; :488 limb. Re-check after reconciliation: every unit OK; 0 LOST. |

### C11
The wave was written by authors I, J and K. Post-review text came from those authors, reconciling both reviewers' wordings, and both reviewers re-checked it. The coordinator's own content changes were:
- the heading rename (proposed by author J, reviewed by both);
- the rules-verifier's :751 sentence, applied verbatim.

The coordinator wrote the plan rows and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all three files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0);
- check_tables --near (the body_contact :1719 table is unchanged at 1 character of headroom).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, with re-check |
| D4 Citations | quotations made verbatim ("in the process of falling or sliding along the ice"); CARHA "Case Situations", not "casebook" |
| D5–D8 | not engaged |
| D9 Summary layer | dzc Common Mistakes :859; KTs checked by grep (no relief claim) |
| D10 Key-facts layer | body_contact :1786, :1830, :1838–:1840; risk_management :753; each voiced alone |
| D11 Reader safety | safety-reviewer, with re-check |
| D12 Read-aloud | renders by the authors and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | heading renamed, inbound link retargeted; check_links |
| D15 Rendered site | build plus checks; no site-reviewer (text only) |

## What this method could not have found
- **Referee practice.** Whether a CARHA referee applies the 86(b) Note to a player who slew-foots while falling or sliding. No ruling covers that edge.
- **Missed wordings.** Puck-first or kick wordings that use none of the searched words.
- **Other documents.** Copies of these claims in documents outside the three files, beyond rules_primer :424, which was found and logged.
- **Hockey Canada practice.** No Hockey Canada casebook is on disk, so how referees combine 7.7's minimal-violence route with 7.5 is guidance ("plan on"), not a ruling.
