# W572–W573: CARHA and Hockey Canada match limbs where contact ladders stopped at the major (20 November 2026)

## W572 census (rules-verifier, read-only; W571(3) and W513(6))

The census read CARHA 30, 34, 48–56, 59, 62 and Case Situations 49, 85 and 86(b) (carha_2026.txt), plus Hockey Canada 7.3 and IIHF 101.1. Key texts:
- **CARHA 48(a)** (:2446): a mandatory match for anyone who "deliberately injures or attempts to injure… in any manner".
- **CARHA Case Situations, Rule 49** (:4160–4181):
  - Situation 1: "or a Match penalty, if warranted";
  - Situation 2 (boards): "the Referee may impose a Match penalty" if serious.
- **CARHA 54(b):** a major plus game misconduct for a cross-check above the shoulders, "whether or not injury results".
- **Hockey Canada 7.3(c)** (hc.txt :6038): a mandatory match for a body check meant to injure.

**Defects found.** Contact ladders that stopped at the major while siblings gave other books their match:
- body_contact :516, :520 and :686, and facts :533 and :1428;
- dtr :254/:421 (W513(6): Hockey Canada 7.3(c) and CARHA 48(a) were dropped) and :1012;
- defender facts :914;
- puck_handling facts :462;
- rules_primer CM :1196, where CARHA 54(b) was missing beside Hockey Canada's identical rule.

**Filed, not swept.**
- About 13 lower-confidence "avoid contact" units, as W572(2).
- A reading on DZC :783, as W572(1).
- The unread charging subset, as W572(3).

## W573 edits (four agents; brief `scratchpad/w573_common.md`)

**body_contact**
- :516: adds "a match if warranted (Rule 49 Case Situation 1), and a match if meant to injure (48(a))".
- :520: adds "a major if it injures and a match if serious (Situation 2)".
- :686: the late-hit paragraph adds the 48(a) match and the casebook "if warranted".
- Facts :533 and :1428: add "meant to injure, a match (48(a))".

**defending_the_rush**
- :254 and :421: "…and in both a match for one meant to injure (Hockey Canada 7.3(c), CARHA 48(a)); in women's hockey IIHF 101.1 reaches the major and game misconduct too."
- :1012 (clipping): adds Hockey Canada 8.7(c) (found by the agent) and CARHA 48(a).
- :913 and :929: add the intent match.
- Facts :917 was left at 299/300, because the clause cannot fit without dropping a limb; :929 carries it.

**defender**
- Facts :914 (299/300): "a match if meant to injure (48(a))".
- Body :921: the same clause.

**rules_primer CM :1196 and Overview :31:** "So must a cross-check above the shoulders under CARHA (54(b)) and at every Hockey Canada level, injury or not."

**puck_handling facts :462:** "a major ejects (30(a)), and meant to injure is a match (48(a))". "A CARHA adult league" became "a CARHA league", because CARHA is adult-only.

## Review

**safety-reviewer, with rules check:**
- **Finding 1 (minor to major, false for the IIHF).** At dtr :254 and :421, "and in women's hockey so does IIHF 101.1" followed the new match-for-intent clause, so a listener would hear an IIHF match. 101.1 gives a minor, or a major plus automatic game misconduct, and the IIHF writes no match. Repaired to the :913 wording.
- **Confirmed:**
  - 48(a), 7.3(c) and 8.7(c) are stated as mandatory.
  - Case 49 Situations 1 and 2 are stated as discretionary.
  - body_contact :686 may apply Situation 1 to a late hit, because CARHA treats a late hit as a 49(a) body check.
  - CARHA 54(b) is accurate.

## Rows

**Closed:** W513(6), and W571(3) at the census sites.

**New:** W572(1)–(3).

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w573.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 5 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: CARHA 30, 48, 49 with its Case Situations, and 54; Hockey Canada 7.3(c) and 8.7; IIHF 101.1 |
| D9 | Covered: body and facts changed together per section |
| D11 | Covered by the safety-reviewer |
| Others | Not engaged |

## What this method could not have found

- **Units that price CARHA without naming it.**
- **The CARHA charging subset**, not fully read.
- **Audio.** Not rendered.
