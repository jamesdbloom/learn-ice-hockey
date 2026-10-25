# SG77: inherited penalty ladders cut, wave 2 (25 October 2026)

## Files

- content/systems/forechecking_systems.md
- content/technique/shooting.md
- content/systems/zone_entries.md
- content/systems/defensive_zone_coverage.md
- content/positions/defender.md
- project/plans/OPEN_ITEMS.md

## What changed and why

This is the second wave of the cross-document census (SG76). These five pages repeated full multi-book tariffs for checking from behind, charging or contact with a goalie, boarding and cross-checking, although none of them is about that contact. Each page now gives an instruction-first line per section and layer. It keeps every ejection or mandatory-match limb that a listener hears alone in that layer, and links to the owner sections in body_contact_and_battles. On forechecking_systems, links go to the page's own home section ("What finishing into that back costs").

Byte-identical duplicate facts lines were removed (each confirmed with cmp before deletion):

- shooting :315 = :535 and :317 = :539
- zone_entries :394 = :435

Net words removed:

| Page | Words removed |
|---|---|
| zone_entries | 2,065 |
| shooting | 516 |
| forechecking_systems | 202 |
| defensive_zone_coverage | 108 |
| defender | 96 |
| **Total** | **about 2,990** |

The briefs carried wave 1's lessons forward, so this wave's first-pass defects were fewer and smaller.

## Reviews

### Rules (C4): two rules-verifiers

**Part A (forechecking, shooting):**

- **WRONG (cheaper), shooting :572.** The merge dropped Hockey Canada's goalie rule: the harsher of 7.5 and 8.5, or of 7.6 and 8.5(b) on the head.
- **Mild, cheaper, shooting :315.** The line implied Hockey Canada was the only book where this is mandatory.
- **Drift, forechecking :876.** The disclosure had lost what it qualified.
- **Gaps:** 32(d) missing at shooting :533, :534/:566 and :569; the 602(a) suspension missing at forechecking :327.
- **VERIFIED, forechecking :655:** "any call for it ejects you", because IIHF 43.3 is the only penalty Rule 43 offers.

**Part B (zone_entries, dzc, defender):**

- **WRONG (cheaper), zone_entries KT11 and facts :416.** "Automatically under Hockey Canada" omitted CARHA 52(b) in the crease.
- **Cheaper by omission:**
  - zone_entries CM :1142 and defender :314: the USA Hockey Casebook 608 Sit. 1 boards limb.
  - dzc :206: the CARHA 53(a) injury major and 32(d).
  - zone_entries: the 66(e) limb, now carried only in CM :1146 (accepted).
- **Harsher-simpler:**
  - dzc :182/:496 attached NHL 43.5 to the IIHF.
  - defender :328 dropped the 43.1 caveat.
  - defender :908's leading "kept off the head" scope.
- **Wording:** zone_entries :774/:801 "outside the crease", where USAH 607(d) says privileged area.

All repaired by the owning agents. Re-checks: every unit VERIFIED in both parts.

### Safety (C6): safety-reviewer

**First pass:** 3 majors and 5 minors, no critical.

- **M1:** CARHA in the crease (KT11, :416, shooting :315).
- **M2:** USAH 607(d) Note 1, "deliberate contact is charging, never a bare minor", gone from every zone_entries layer.
- **M3:** the shooting Hockey Canada harsher-of rule.
- **m1:** "can end your game in every book" understated the cost on pages without their own ladder.
- **m2–m4:** a tariff-first lead, "HC" spoken as letters, and 32(d) handling.

All repaired. **Re-review: CLEAR.**

### C11: coordinator repair after review

zone_entries :774 now reads "…outside the crease, or USA Hockey's privileged area". This is the rules-verifier's open wording item, applied in the verifier's terms. It makes the line stricter, not cheaper, and stays within the facts cap (287 of 300).

### Mechanical checks (coordinator)

- Exit 0: check_facts (no pipe), check_links, check_absolutes, check_geometry, check_secrets, check_counts.
- check_marker_pairs: 0 LOST. Its two SPLIT HALF candidates (zone_entries :238, :822) are facts lines that were unmarked in HEAD; both reviewers read them as false positives.
- Full npm build after the last edit, exit 0. `check_callout_flow --bare`: 0.

## Owner question raised (plan row)

Does the 19 October ruling, "at least a one-game suspension wherever a CARHA major/match/game misconduct is priced", extend to a match?

- **Rule text:** 32(d) covers only a game misconduct "for receiving a Major penalty". A match falls under 34(a), an open bar until the Chairman deals with the case.
- **Reviewers:** all three ruled not to write it.
- **Current state:** the pages put 34(a) on matches and 32(d) on majors only.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1–D3 | Rules-verifiers, two passes each. |
| D4–D5 | No new external citation. |
| D6 | "The IIHF writes no match penalty" was already verified in SG76; nothing new. |
| D7 | Every changed unit leads with the instruction; no coaching choice stated as a rule. |
| D8 | No figures. |
| D9 | Per-limb layer tests by the agents. The safety-reviewer read every Common Mistakes bullet and Key Takeaway in the diff. KTs outside the diff were not re-read; this is declared. |
| D10 | Facts lines changed on all five pages. Each was verified by a rules-verifier, read voiced alone by the safety-reviewer, and checked with `--near` first. No separate facts-reviewer. |
| D11 | Safety-reviewer CLEAR. |
| D12 | All five pages rendered through md_to_speech, both passes. |
| D13 | None. |
| D14 | check_links exit 0, including the new body_contact anchors. |
| D15 | Build exit 0, bare 0, no rendering source changed. |

## What this method could not have found

- KTs and other units outside the diff that were built on the removed ladder text.
- Whether body_contact's owner sections voice every dropped limb in their own summary layers. Only the anchors and facts were sampled.
- PWHL rule numbers, assumed to mirror the NHL.
- Diagram captions hosted on these pages that may still carry a tariff.
- Listener ease of shooting :573, which the safety-reviewer noted is correct but long. This is a plan nit.
