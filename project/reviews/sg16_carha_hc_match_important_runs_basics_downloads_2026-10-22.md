# SG16: CARHA 48(a), the HC "plan on the match" claim, spoken "Important." runs, PWTP Notes, Basics downloads (22 October 2026)

## Changes

**Rules**
- **CARHA 48(a)**, the general match for deliberately injuring or attempting to injure, is now cited where a unit prices another book's deliberate-injury match:
  - goaltender :1265, :1272 ("can be a match, which it must be if meant to injure"), :1309 ("as is CARHA 80(d)"), :1311;
  - goaltender :1393, rewritten: 49(a) intentional contact or failing to avert it, a minor or a major, the major mandatory if intentional contact injures; every CARHA major ejects (30(a)); any attempt to injure is a match (48(a));
  - switching :300; breakouts :205; faceoffs facts :605 and body :623.

  Each has a dated trailer note. passing and puck_support needed nothing, because they already give CARHA's own rule.
- **CARHA 32(d) once per page** was already done on all six pages checked.
- **Hockey Canada, a hold or hook meant to injure**:
  - The issue: 8.1(c) and 8.2(c) bar a match inside those rules, but Appendix D Note 1 says a match "shall be assessed for any deliberate attempt to injure". The corpus's reading is "plan on the match", as in defending_the_rush and risk_management, and HC's own Interpretation 2 to 7.11(c) routes past a no-match clause.
  - Changed sites: body_contact :396 (hook), :1686 (facts, 297/300; the plain-hold scope was restored after review) and :1699 ("In five books", which replaces the permissive "8.1(c) closes it"); rules_primer :408 (hook) and :439 (hold; also adds CARHA 48(a)).
- **rules_primer :934**: the faceoff-table fact the audio dropped is now voiced inline. HC 6.2(d) and CARHA 57(a) eject the taker; HC 6.5(a) gives a warning first on a Junior draw after an icing.
- **rules_primer :175 and :1038**: "CARHA does not settle it (72(c))".
- **goaltender :1406 (facts) and :1422**: HC 10.5(a)(ii) makes a penalty shot instead of the minor for throwing, shooting or kicking a stick at the puck in the defending zone ("will be awarded … in lieu of a Minor"). Sliding is only "may" (Interp 1 to 3.2(c)).

**Spoken "Important." runs**
- **rules_primer** stick fouls: a run of 19 is now at most 3. 9 markers were removed and no words changed: 8 units fell silent (the 8 LOST), and the 9th was a hedge marker in :411, a unit that keeps its other ⚠️. Each lost unit's hazard is still voiced with "Important." next to it.
- **body_contact**:
  - Runs in §5, §9 and §12 went from 11, 7 and 7 to at most 3–4. Across the file, runs of 4 or more fell from 16 to 7.
  - Changes: 15 markers removed, 2 merges (same hazard, same direction), 1 marker moved onto "one thrown punch is an ejection".
- `check_callout_flow --bare` on the built site: 0 bare glyphs.

**PWTP Notes**: three paragraphs over 1,200 chars were split, with no words changed. The longest is now 1,137. They are not voiced (SSML byte-identical). A first split created 2 amber panels; the split points were moved and there are now 0 panels.

**Basics downloads**
- downloads.astro now lists three kinds of episode, adds a Basics playlist `/audio/basics.m3u` (13 entries in series order) and per-episode links, and drops "so far" when a format is complete.
- The `[playlist].m3u.ts` generator emits basics.
- A stale "nine .m3u" comment was fixed in build_podcast_cover.py.

## Reviews

- **rules-verifier, two rounds:**
  - Round 1: all additions hold. F1: goaltender :1393 CARHA understated → fixed. F2: "possible penalty shot" softened 10.5(a)(ii) → fixed. Switching trailer list → fixed.
  - Round 2: CLEAR, except that :1686 lost "plain hold" → fixed.
- **safety-reviewer, two rounds:**
  - Round 1: marker removals safe and merges sound. MAJOR: rules_primer :408 still said HC bars a hook match → fixed. Also goaltender :1393, :1686 ambiguity and PWTP panels → all fixed. Accepted: the rules_primer :436 USAH "shaft off the head" unit lost its marker, with the hazard voiced two units earlier.
  - Round 2: CLEAR, with the same :1686 plain-hold point → fixed.
- **site-reviewer (headless Chrome): PASS.** Downloads page, basics.m3u, merged paragraphs and amber runs; 0 bare glyphs; console clean.
- **HC republication (rules-verifier, report only):**
  - 4.7(a) Interp 2, 7.1(f), 10.4 and the end-of-period change have no stale site.
  - 10.6(a) Interp 5 is consistent with the 3.2(c) Interp the corpus cites.
  - 7.1(c) vs Appendix D Note 1 produced the hold/hook fix above.

## Gates (after the final edit, no pipe)

- check_facts, check_links, check_absolutes, check_secrets: pass. check_counts: no change.
- check_marker_pairs: 26 LOST in total, all accounted for: 15 intended (body_contact), 8 intended (rules_primer), 3 key-only (PWTP unvoiced Notes splits).
- `npm run build` exited 0 after the final edit.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier ×2 |
| D5, D6, D8, D13 | Out of scope |
| D7 | ✓ |
| D9 | ✓ The HC hold/hook claim was repaired as one claim across body_contact and rules_primer layers |
| D10 | ✓ Caps respected |
| D11 | ✓ safety-reviewer CLEAR after two rounds |
| D12 | ✓ Run lengths re-rendered; PWTP SSML unchanged |
| D14 | ✓ |
| D15 | ✓ site-reviewer PASS |

## Still open

- rules_primer: other "Important." runs (11 in body fouls, several 8s). body_contact: 4-runs in §1, §3, Common Mistakes and Key Takeaways.
- defending_the_rush :734/:751 could cite HC Interp 2 to 7.11(c) as the book's own example (strengthening, optional).
- IIHF "no match tier on the ice" lines (rules_primer :437/:451/:476/:477) — check whether an IIHF general route applies.
- downloads page wording: "spoken editions of the documents" and "each document's own page carries its player" fit The Basics loosely.

## What this method could not have found

- Hazards in units whose markers didn't change. Lost units were identified by their opening key.
- A Hockey Canada or CARHA no-match claim worded differently from the patterns searched.
- Real devices; synthesised audio.
