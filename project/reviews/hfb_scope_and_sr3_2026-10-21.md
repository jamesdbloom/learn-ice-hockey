# USA Hockey hit-from-behind scope, two facts-line pointers, and the nz-1-4 caption (sr3) (21 October 2026)

**Origin.**
- The hfbCensus rules-verifier read 261 sentence hits for USA Hockey's checking-from-behind rule. None of them claims that every hit from behind is a game misconduct. Four sites overstated the rule (the harsher direction) or gave a trigger the rule does not have.
- The extended `check_facts_antecedents.py` flagged two facts lines in playing_without_the_puck that open on a pointer ("Those two…", "Those four…").
- Plan row sr3: the nz-1-4 caption was carrying four claims in one sentence, with an ambiguous "it".

## Changes

| File | Change |
|---|---|
| technique/body_contact_and_battles.md :1402 | Old: driving a player into the goal frame "is a major plus a game misconduct under 608(b)", with no condition. New: "never cheaper than a minor plus a misconduct (608(a))", and mandatory major + game misconduct where it "recklessly endangers" or sends a player "head first into the boards or goal frame" (608(b)), plus the Casebook forceful-check-along-the-boards limb. |
| technique/shooting.md :926 (CM) | The USA Hockey 608(c) match is now scoped to "wherever it recklessly endangers them with excessive force". |
| systems/forechecking_systems.md :808 (facts) | "Ejects for a hit into the boards on a defenceless player" mixed in 608(c)'s condition. It now reads "a reckless or head-first hit, or a forceful one at the wall, ejects (608(b), Casebook)". No limb was lost; the line is at 300/300. |
| hockey-iq/puck_support_and_spacing.md :611 | "That game misconduct" assumed every push from behind is one. It now reads "a forceful, head-first or reckless one draws a game misconduct", which also costs the next game (404(b)). |
| hockey-iq/playing_without_the_puck.md :547, :228 (facts) | "Those two books" is now "The NHL and IIHF differ here". "Those four non-pressuring players" is now "The four players away from the puck". |
| site/src/diagrams/neutral_zone_systems.mjs (nz-1-4; diagrams.json rebuilt) | The caption is split into separate sentences: the answer (a chip and a race, because nobody in a flat line is deeper), the goalie limb as its own instruction ("If the goalie comes out for the puck, pull up rather than finish on them"), and the offside reason. The two meanings of "it" are gone. |

## Review

**hfbR (rules-verifier with a safety brief): CLEAR.** It checked against usah.txt 608, 602(a) and 404(b); the USAH Casebook 608 Situation 1; CARHA 2026 53; NHL, IIHF and PWHL 43.2 and 56; and the EIHL Casebook.
- Every changed line is true.
- No limb was lost against HEAD.
- No change makes a hit sound cheaper than it is.
- The facts lines make sense when heard alone.
- The caption keeps the goalie limb, and its offside reason is correct.

It also ruled on forechecking :808's unchanged CARHA limb, "match (53(b))", which states the match unconditionally. That overstates in the harsher direction, but it is acceptable: CARHA 53(a) already ejects every intentional hit from behind. The limb is logged for a later tidy-up. Three optional wording sketches were not applied.

**hfbS (safety-reviewer, added after the first commit gate BLOCKED on C6): CLEAR.**
- It read the staged bytes and rendered body_contact, shooting and forechecking.
- In every hunk the "don't hit from behind" instruction is unmistakable.
- Each tariff that is now lower reflects the old text overstating USAH 608. In each case the sentences around it still tell the reader to expect an ejection or a match.
- No layer contradicts another.
- It raised three optional minors, none applied: lead body_contact :1402 with the ejection tier; forechecking :808's pre-existing "No minor … (43.2)" never says what those books charge; shooting "wherever" should be "whenever".

**nzSite (site-reviewer, C10, added after the same BLOCK): PASS.**
- It checked both host pages at 1633 px and in a real 400 px iframe.
- The caption matches diagrams.json exactly (700 characters).
- There is no overflow or horizontal scroll, the figure height is normal for the page, and the console is clean.
- Outside this change, it noted two things:
  - every figcaption is `aria-hidden`, so screen readers never hear caption text;
  - lines run through some labels on the nz-1-4 drawing.

  Both are logged in the plan.

**C11:** hfbR, hfbS and nzSite were all dispatched after the last edit (20:18:07). No edit followed any of them.

## Gates (after the final edit, no pipe)

- check_facts, check_links, check_absolutes (after build-diagrams) and check_secrets pass.
- check_marker_pairs: 5 files, 0 LOST.
- `npm run build` exited 0 after the final edit. The new caption text is present in dist on both host pages (neutral_zone_systems, forechecking_systems).

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ hfbR. |
| D5, D6, D8, D13 | Out of scope: no source, existence claim, figure or folklore changed. |
| D7 | ✓ |
| D9/D10/D12 | ✓ The two facts lines now stand alone. Markers are unchanged. |
| D11 | ✓ hfbS returned CLEAR: nothing is made cheaper than the book. |
| D14 | ✓ |
| D15 | ✓ nzSite returned PASS on both hosts, at desktop and 400 px. |

## What this method could not have found

- Sibling sites in these documents' other layers that still say "608(b) always" or the old "defenceless at the boards" trigger. The check was scoped to the diff.
- Whether "in most books it ends your game" (puck_support) holds for every book.
