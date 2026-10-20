# Goalie freeze and USAH 608(c) (20 October 2026): goaltender, forechecking_systems, puck_support_and_spacing

This round covers two pieces of work:
- **goaltender (s1):** held back from the SW sweep commit (244ea01) because each review round found another copy of the save-then-cover claim.
- **forechecking and puck_support (t1):** closes the last open rows on those pages so they can be frozen for the NotebookLM remake.

## goaltender.md: five review rounds (s1R, s1R2, s1R3, s1R4, s1R5)

The claim was repaired across every layer: covering the puck outside the crease after a save.

| Book | Rule as now stated |
|---|---|
| In the crease (all books) | Cover a puck you had to save with an attacker on you, on the ice, not pinned against the post. HC permits the in-crease freeze under pressure (clause i of Interpretation 3 to 10.1(a)). Pinning to the frame is barred by USAH 614(c)(4), and by HC 10.1(i), CARHA 74(b) and 63.2(vii) unless checked |
| NHL, IIHF, PWHL | Outside the crease, only a cover straight off a cut-down-the-angle save out in front (Note to 63.2(vi) / PWHL 65.2(vi); IIHF Situation 63.1 penalises catch, drop, then fall on) |
| Hockey Canada | Clause ii permits the cover. Clause v and the goaltender paragraph of Rule 10.2 bar freezing outside the crease. The book never says which governs, so out of your crease, play it |
| CARHA | 58(b), 61(b), 74(b) and 55(a) Note 2; no save-then-cover exception. Whether 58(b) displaces 74(b) is disclosed as unsettled |
| USA Hockey | In front of the goal line, inside the privileged area only |

Corrections by round:
- **s1R and s1R2 (MAJOR).**
  - "only 61(b)" for CARHA was false: 74(b) also applies.
  - The HC Common Mistakes instruction was built on a one-clause premise and has been rewritten.
- **s1R3 and s1R4 (MAJOR).** The "In short" line, :428, :629, the 6-on-5 paragraph and facts :763 all stated the permission without the crease or out-front limit.
- **s1R5: CLEAR, "ready to commit".**
  - Its whole-file layer test searched several wordings (smother, fall on, hold onto, under your glove, freeze, cover). It found no permissive, unscoped cover outside the crease in any layer.
  - Optional minors are recorded in the plan: :1098 attacker condition; :643 double negative; :388; :1622 614(c)(4).

## forechecking_systems.md and puck_support_and_spacing.md: t1, then t1R

- **forechecking.** The USAH 608(c) mandatory match ("in all instances when a player recklessly endangers an opponent from behind with excessive force while the opponent is in a vulnerable or defenseless position", usah.txt:3723) is now carried at facts :327, :583, :620, :735 and :807, and in the body at :652, :760 and :764.
  - Several units had priced the hit only at ejection.
  - t1R found no CRITICAL or MAJOR. Its minors were applied:
    - :760 "both books take the choice away" (it had read "can");
    - :620 restores HC Interpretation 3's "playing the puck" condition;
    - :807 restores the 602(a) limb.
  - KT9 was deliberately left at the ejection floor. t1R agreed, because a summary layer should not carry another tariff.
- **puck_support :491.** "the standard five-man setup" now reads "the standard setup of an attack triangle with both defencemen on the blue line", matching Offensive Zone Play, where the five-man rotation is an alternative.
- **Rows closed without an edit:**
  - getting_started has no medical-cover rule to scope.
  - The puck_support :587 slash was already fixed.

## Files

| File | Lines |
|---|---|
| content/positions/goaltender.md | +26/−26 |
| content/systems/forechecking_systems.md | +8/−8 |
| content/hockey-iq/puck_support_and_spacing.md | +1/−1 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules-verifier s1R2 on goaltender; safety-reviewers with source reads on every round; t1R on forechecking against usah.txt 608, 602(a), Casebook 608 Sit 1 and HC 7.5 |
| D2 exceptions | 63.2(vii) "being checked"; HC clause ii vs v; USAH Casebook 614 Situations 5, 6, 9 and 12; 608(c) conditions |
| D3 divergence | per-book cover rules stated in the table above |
| D4/D5 citations | reviewers checked every quotation verbatim; the :764 quotation ends outside its quote marks where the source continues |
| D6 negatives | CARHA "no save-then-cover exception" and "no privileged area" swept flattened (0 hits) |
| D7 cardinal rule | the instruction leads in each unit; "ask your league" kept for HC |
| D8 numeric | no figures |
| D9 summary layer | whole-file layer tests (s1R5; t1R) |
| D10 facts | check_facts passes; :583 is at its cap, and :620 and :807 are within 2 characters |
| D11 safety | every round's final pass CLEAR |
| D12 read-aloud | every changed unit rendered and heard alone |
| D13 folklore | out of scope |
| D14 structure | no headings changed |
| D15 site | full build after the final edit; --bare 0 |

## What this method could not have found

- **Sibling pages.** The same claims on other pages are the FZ wave, dispatched 20 Oct.
- **Unusual wordings.** A cover permission phrased in words no reviewer searched for could have been missed.
- **NHL practice.** Whether NHL referees apply IIHF Situation 63.1's "direct result" test.
