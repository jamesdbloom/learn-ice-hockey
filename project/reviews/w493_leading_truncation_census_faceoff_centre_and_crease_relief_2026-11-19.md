# W493: the IIHF 2026/27 faceoff centre is replaced for most violations, not just "ejected" for any or "only" for an encroachment; Shooting voices USA Hockey's crease relief; UK Rules scopes its fight cost to the Elite League (19 November 2026)

**Files changed:**
- **Content:** getting-started/getting_started.md, systems/neutral_zone_systems.md, technique/shooting.md, foundation/uk_rules.md
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan row:** From W492 (1)–(3) and (6).
- **Census:** a read-only rules-verifier census covered leading truncation and next-sentence carve-outs, reading each continuation from the cited book.
- **Authors:** four, one per file.

## Census
- **Coverage:** 9,842 quotations, of which 8,026 were located and 4,287 were matched in the book the sentence names. Candidates: leading conditions (L1) 286 body + 55 facts; scoping subjects (L2) 52 + 12; next-sentence carve-outs (C1) 129 + 20. About 400 were read by hand.
- **Result:** no permissive defect in a voiced layer. Two harsh-direction claims were found:
  1. **IIHF 76.6 lost its encroachment trigger.** The trigger is *"If a Player other than the Player taking the 'face-off' moves into the face-off circle…"*. Without it, getting_started :136/:197 and neutral_zone_systems :787/:816 told a reader the centre is ejected for any violation, when a centre who moves early only gets a re-drop (76.7).
  2. **USA Hockey 625(b)'s next-paragraph relief was not voiced at shooting :502 and :518.** The relief: *"if the attacking player has been physically interfered with by the actions of a defending player that causes them to be in the goal crease, play shall not be stopped and any legal goal scored shall be allowed"*. A facts line at :513 voiced it only partly.

## What changed (voiced)
| Site | Now |
|---|---|
| getting_started :136 | "…the Elite League's IIHF book does the same for most violations, though an early move by the centre only re-drops the puck." |
| getting_started :197 | "…where the centre is also replaced for most violations (76.3), though a centre who moves early only has the puck re-dropped (76.7)." The author cited 76.3, not the brief's 76.6, because 76.6 is one trigger among several. |
| neutral_zone_systems :787 (facts) | "For a teammate's encroachment the IIHF 2025/26 book warned the team and ejected nobody, but its 2026/27 book removes the centre from the draw as the NHL does (IIHF 76.6)". The previous "both editions" was false: 2025/26 76.6 warns. |
| neutral_zone_systems :816 | Heading: "⚠️ **The IIHF no longer spares the centre when a teammate encroaches.**" Close: "…the 2026/27 IIHF book, which replaces the centre for most violations, a teammate's encroachment included (76.3, 76.6), though an early move by the centre only re-drops the puck (76.7)." |
| shooting :518 | "A skate in the crease is the whole test unless a defender's foul put you there, when play goes on and a legal goal counts. The crease lines count as crease." |
| shooting :502 (facts, 299/300) | "…unless the puck beat you in, the goalie is out of it or a defender put you in…" |
| uk_rules :138 | "**So stop when told: in a fight, the 46.5 penalty comes on top of the fight's own penalties, not instead of them** — under this book a major and an automatic game misconduct (46.1); in the Elite League, whose Casebook 46.1 ejects only from a second major, at least a major." |

## A defect the repair created, and how it was caught
The census brief's sketch for neutral_zone_systems :816 said "for an encroachment", and the author first wrote "**only** for a teammate's encroachment". That is false in the **permissive** direction. IIHF 2026/27 **76.3** replaces the offending centre for all six listed violations: (I) not positioned, (II) no stick down, (III) encroaching, (IV) contact, (V) offside, (VI) skate win (*"the Linesperson shall have the offending center(s) replaced"*). An Elite League centre would have been told that a skate win costs him nothing personally.

The getting_started author found 76.3 while refuting the same brief. The coordinator flagged the tension between the two files, and the rules-verifier confirmed it. The census author named its own gap: it had read 76.6 and 76.7 but never opened 76.3.

**Lesson:** a census verdict's fix text is a brief, and this one carried the same one-rule-read shape that CLAUDE.md warns of. Two files repairing one claim from one brief converged only because one author refuted the brief.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (census author) | Census as above. **Confirmation:** getting_started :136/:197, nzs :787, shooting :502/:518 CLEAR; nzs :816 "only" was a FINDING (permissive); fixed with its own text. Both IIHF editions' Rule 76 read in full; 2025/26 warns for everything. |
| rules-verifier (W492, uk_rules) | uk_rules :138: the scope is verified against `eihl_casebook.txt:531-536` and `iihf_rules_2026-27.txt:4139-4145`. The Casebook has no 46.5, so the IIHF's applies. Fixed by its author against the sources; no separate reviewer read. |

**Why no safety review:** all census defects were harsh-direction. The one permissive error the repair introduced (nzs "only") was removed with the reviewer's text. uk_rules :138 now states a lower Elite League first-fight cost, but that is the Casebook's own rule, and the "stop when told / on top of" instruction is unchanged.

### C11
The coordinator wrote no content.

### D15
No marker was added or lost; the nzs :816 ⚠️ still leads its bold heading. `--bare` = 0. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist is 03:42:08; the newest content edit is 03:41:32.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts: no change. check_marker_pairs: 4 files, 0 lost.

## Found, not fixed
- **Attribution census.** attr.py found 186 voiced quotations not found in the book named before them; the two spot-checked were noise. This is a raw worklist.
- **Short generic quotations** ("the goal will be disallowed", "possession of the puck") were matched to the first occurrence in a book, not their real rule, and were not checked against their real source sentence.
- **Distant carve-outs.** A carve-out in a later paragraph, a casebook situation or a different rule is invisible to the method.
- **76.3(V) and 76.7.** IIHF 2026/27 76.3(V) (replace for offside) against 76.7 (late players warned once, centre not ejected) is an internal tension in the book. It has not been reconciled from a Situation Handbook.

## What this method could not have found
- Paraphrased conditions.
- Real synthesised audio.
