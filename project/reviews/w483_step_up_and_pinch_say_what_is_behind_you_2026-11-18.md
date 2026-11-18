# W483: Defending the Rush says what a step-up and a pinch leave behind, without "behind you" meaning two things (18 November 2026)

**Files changed:** systems/defending_the_rush.md, project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W478 (1), From W482 (2) and From W464 (1). One agent per item.

## What changed (voiced)
| Site | Before | Now |
|---|---|---|
| dtr :796 | "Stepping up is challenging forward in the neutral zone or at your own line with nothing behind you. Pinching is stepping down from the *offensive* blue line with your forwards behind you." | "Stepping up is challenging forward in the neutral zone or at your own line, where a miss leaves only your partner and goalie back. Pinching is stepping down from the *offensive* blue line, where your forwards are still in the zone to help." |

**Why it changed.** "Nothing behind you" could be heard as "no backpressure". But :754 makes backpressure (forwards tracking back behind the play) a *condition* for stepping up. The two senses of "behind you" read as opposites. The new wording matches :751 and defender :491/:499/:614.

## Premises refuted / closed without edit
- **From W482 (2): the goaltender "Putting the puck out of play" section repeats the instruction.** Rendered (chunks 044–045), every prose repeat is one of these: item 4 (the option itself, with reason and tariff), the section's standard "In short" line, or a facts line voiced alone. No plain restatement was found in the prose. The residual repeat is the goalie-safe-outlets **caption**, now the bare slogan. Its source comment's reason ("leads the tariff") is stale since W469/W470. It is filed, not cut, because it is the caption's only ⚠ and removing it would drop a spoken "Important.".
- **From W464 (1): entry-delay-curl at 45.8% amber.** It is at its floor (measured 45.5%). The amber tail is entirely named posture limbs, the "rather than turning away" counterweight, and the shared constant SHOULDER_NOT_THE_SURFACE (three modules). The author's 0.8-point cut ("If you cannot get off the boards" → "Caught on the boards") was **reverted by the coordinator** (`git restore` of that agent's own wave edit). It lost the implication that you tried to curl away first, for no real gain. Closed.

## Reviews
| Reviewer | Result |
|---|---|
| content-reviewer | CLEAR. The step-up clause agrees with :751, :754 (the old tension is resolved), nzs :389/:396/:460 and defender :414/:779. The pinch clause matches defender :491/:499/:614. Optional Minor, filed below. |

No rules or safety review was run: the edit is a tactical definition, and no rule, penalty or contact limb changed.

### C11
The coordinator wrote no content. The coordinator's only file action was restoring zone_entries.mjs to HEAD, undoing one agent's same-wave caption edit.

### D15
No ⚠️ changed. `--bare` = 0, and `--panels --file` = 0. Mechanical only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 20:04:24, later than the content edit.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts: no change. check_marker_pairs: 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6 | not engaged (no rule claim) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | :796 against :751/:754 and defender's pinch layers |
| D10 Key-facts | not engaged |
| D11 Reader safety | not engaged (tactical definition only) |
| D12 Read-aloud | two senses of "behind you" removed |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | "backpressure" sense preserved |
| D15 Rendered site | mechanical only |

## Found, not fixed (plan row From W483)
1. **The pinch clause states the usual case as a guarantee.** Forwards "in the zone" may be deep or mid-change: dtr :817/:825, risk_management :585. The corpus's real test is a forward high enough to cover your point: defender :602/:610, FS :26, risk :572/:585. The sketch is "…provided one is high enough to cover your point". If taken, it must go at dtr :796 **and** defender :491/:499/:614 together, briefed as a claim.
2. **The goalie-safe-outlets caption is now a bare slogan** between item 4 and "In short". Its comment's reason is stale. Decide whether to keep it as the caption's single ⚠ or re-route.
3. **language_and_glossary :505/:540** still say "with nothing behind you if you miss". This is not contradictory.

## What this method could not have found
- Real synthesised audio.
- Other paraphrases of "a pinch is safe because your forwards are there".
