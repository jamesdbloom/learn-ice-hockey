# SG21–SG24: rules rows, sources, faceoff scope, UK gender rules; drill drafts (22 October 2026)

## What changed and why it was wrong

### SG21: rules rows

- **body_contact:**
  - **Interference facts line.** It lacked the NHL/PWHL 21.1 match and listed USA Hockey as "not capped at a minor", though USAH 625 is a minor only. It is now three Rule lines:
    - NHL/PWHL: 56.4/57.4 major on violence, a game misconduct when that major is for an injury, and the 21.1 match;
    - IIHF/HC/CARHA: CARHA 66(e) is the pair mandatory on injury via 30(a);
    - USAH: 625 minor, but plan on 602(a)'s match if reckless.
  - **Late-hit facts line.** It now says the game misconduct goes with a major for injury, and that IIHF 56.5 is "up to".
  - **Lost "If" restored.**
  - **Five ⚠️ removed** to break "Important." runs of four. The Key Takeaways 8–11 run was kept, because every unit there is a real hazard.
- **winger and center:** the faceoff instruction is now "stay behind your hash mark and off the line". Hockey Canada and CARHA count a skate on the circle as encroachment.
- **zone_entries:**
  - HC 6.11(d)(i) includes an attempt to play, not only a play made.
  - CARHA :826 now says "each of these majors ejects you".
- **language_and_glossary:** separated the CARHA accidental-high-stick game misconduct (it applies on injury, 62(b) Note) from the 32(d) suspension, which never applies to that rule.
- **puck_handling.mjs captions:**
  - Hockey Canada 10.2(a)(v): reading it as player location is now scoped as "can be read".
  - The puck-on-the-far-side caption had been describing its own drawing; that text is cut.

### SG22: sources

- **conditioning_and_recovery:** "skip the ice bath after a lift" is now scoped to lifting for strength and to straight afterwards, matching Yu 2026 and Betz 2025.
- **equipment:**
  - All 33 helmet and certification citations were refetched and every one held.
  - HECC now lists F1045-16/-22/-24, so the claim that it "certifies to F1045-22" was stale.
  - F513 and F1587 editions are now named per row; ISO 10256-5 (published) added.
  - The EC summary list is dated 4 September 2026.
  - BNQ's closure notice points makers to other certifiers.
- **sources/README.md:**
  - Added the UK Sex & Gender Participation Policy and the IHUK/EIH DOPS Rules 2026-27 (files are on disk; only the README is tracked).
  - Recorded what is not obtainable: EIHL roster regulations and the EIHL DOPS document.
  - The PWHL 2025-26 book on disk is byte-identical to the official current one.

### SG23

- **faceoffs.md and the dzone caption:**
  - The skate-on-line and stick-between-hash-marks permissions are now scoped to NHL, IIHF and PWHL. Hockey Canada and CARHA count a skate on the circle as encroachment; Hockey Canada, CARHA and USA Hockey bar the stick between the hash marks.
  - The taker's restraining lines: Hockey Canada says "clear of the face-off restraining lines", USA Hockey "clear of the ice markings".
- **on_ice_communication:** "Under NHL 81.6 only" is now "NHL 81.6 and PWHL 83.6". The PWHL has the same major-penalty icing paragraph.
- **practice_and_development and scanning:** pull-up wording aligned to "see their numbers".
- **rules_primer:**
  - Four ⚠️ removed; no "Important." run is now longer than three.
  - The last long paragraph is split.
  - The dropped-table sentence said every row was voiced in sections 1–8, which was untrue. It now says where each row is covered, and voices the two EIHL overtime details (Casebook 84.1).

### SG24: getting_started

The page quoted EIH R&R 2024-25 "male netminders U16" in the WNIHL. That is superseded by the WNIHL RoC 2026-27 ("No biological male … players/netminders") and the UK Sex & Gender Participation Policy, and the old line was permissive.

The page now says:
- the WNIHL (senior and U16) is for players recorded female at birth, netminders included;
- an adult must not be on masculinising hormone treatment;
- hockey is mixed up to U11;
- the junior rules still expect girls on junior teams;
- the policy sets birth-sex categories from U12 without saying how that fits unisex junior leagues, so ask your club;
- the Girls' U16 competition is credited to the WNIHL.

### Getting Better

- The plan moved to project/plans/ at the owner's request, and CLAUDE.md is updated.
- The owner's drill list was added.
- Draft diagrams for all 39 drills are in project/getting_better_drafts/, with a private preview. They are not on the site and not reviewed as content.

## Reviews

- **SG21:**
  - safety-reviewer: two minors, fixed (the "the pair" antecedent; the :1302 counterweight marker restored).
  - rules-verifier: :1657/:1658 and :639/:1659 minors fixed, re-read CLEAR.
  - site-reviewer (7 pages × 4 cells): PASS.
- **SG22:**
  - safety-reviewer CLEAR on the ice bath (quotations verbatim) and on equipment (counts verified against the saved HECC page).
  - Goalie row aligned on the reviewer's own note.
  - source-verifier passes as above.
- **SG23:**
  - rules-verifier: faceoffs minors fixed (:782 adds USA Hockey; :842; :719/:733 restraining lines), re-read CLEAR.
  - rules_primer safety-reviewer CLEAR, including the EIHL 84.1 sentence.
  - communication 83.6 confirmed.
- **SG24:**
  - content-reviewer found two majors (Girls' U16 credit; adult hormone condition) and four minors, all fixed.
  - Re-read: two last edits applied ("now" removed; long sentence split).
- **site-reviewer (equipment, faceoffs, rules_primer, communication, practice, scanning, getting_started; 4 cells each):** PASS.

## Gates (after the last edit)

- `npm run build` exit 0.
- check_callout_flow --bare: 0.
- check_facts, check_links, check_absolutes, check_geometry and check_secrets pass.
- check_marker_pairs: 13 files, 9 LOST, all intended (body_contact 5, rules_primer 4), each upheld by a safety reviewer.
- check_counts: no change.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifiers |
| D5 | ✓ source-verifier (equipment, PWHL, EIHL/IHUK) |
| D6 | ✓ the WNIHL/policy claims checked against primary text |
| D8, D13 | Out of scope |
| D7 | ✓ |
| D9 | ✓ Layer tests by every agent |
| D10 | ✓ Facts within caps |
| D11 | ✓ safety-reviewers |
| D12 | ✓ Rendered where units moved |
| D14 | ✓ |
| D15 | ✓ two site-reviewer passes |

## What this method could not have found

- Layers built on old wording that no agent touched.
- Other rules that price the same acts under other headings.
- How the policy's U12 categories apply in practice.
- Whether the drill readings match the owner's meaning (owner to confirm).
