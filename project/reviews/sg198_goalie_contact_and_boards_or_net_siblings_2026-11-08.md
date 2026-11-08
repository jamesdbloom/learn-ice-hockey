# SG198: SG197's two corrections carried to the sibling pages — the goalie-contact goal test by book, and "boards or net" on the defenceless-player match (8 November 2026)

**Files:**
- content/technique/shooting.md
- content/positions/center.md
- content/hockey-iq/puck_support_and_spacing.md
- content/hockey-iq/risk_management.md
- content/systems/faceoffs.md
- content/systems/forechecking_systems.md
- project/plans/OPEN_ITEMS.md (SG197 row: new leads, gate notes, brief-source correction)

content/systems/offensive_zone_play.md was judged and left unchanged (see below).

## Source
The SG197 plan row listed sibling pages still carrying the claims SG197 corrected. Three authoring agents worked disjoint file sets.

## What changed

### A. Which goalie contact costs the goal (shooting, center)
- **What was wrong.** HEAD grouped CARHA with Hockey Canada: "contact with the goalie costs the goal wherever it happens". CARHA 66(b) voids the goal only where the attacker *"has physically interfered with the goalkeeper"* (carha_2026.txt:3103-3107), the same test as USA Hockey 617(c)(4) *"interfering with the goalkeeper"*. Only Hockey Canada (Interpretation 1 to 8.5(a), hc.txt:7028-7033) voids it for any contact the attacker starts, in or out of the crease. The error was in the harsher direction.
- **shooting facts :314, body :327, CM :919.**
  - All three sites now group the books correctly.
  - :327 now names the NHL, IIHF and PWHL as the subject of its 69.x sentences. It had cited bare numbers, which a listener heard as an unscoped universal, cheaper under Hockey Canada.
  - It cites the PWHL's own 71.3 and 71.4.
  - It adds 69.4's outside-crease goal limb ("any contact beyond the incidental").
- **center facts :473 and body :501.**
  - The grouping is corrected.
  - A new facts line at :474 prices the lean in the facts layer, which is voiced alone:
    > "Leaning on the goalie as you screen is a penalty in every book: NHL and IIHF 69.2 and PWHL 71.2 a minor or major for deliberate contact, Hockey Canada 8.5(a) and CARHA 66(b) at least a minor, and USA Hockey a charge (607(d) Note 1) — at the net front, at least a minor plus a misconduct (607(c))"
- **Every "leaning" sentence is tied to screening.** A net-front screener is always inside USA Hockey's privileged area (607(d) Note 2), so Casebook 607 Situation 5 does not reach them. No sentence states a six-book "in or out of the crease" universal.

### B. "Into the boards or the net" on a player who cannot protect themselves
The sources are HC 7.5(c) *"into the boards or goal frame"* (hc.txt:6177-6180) and CARHA 53(b) *"into the boards or goal net"* (carha_2026.txt:2621-2625). Both are mandatory.

**Added the net:**
- puck_support_and_spacing facts :588 and body :611. This section covers the below-the-goal-line double team.
- risk_management KT11 :950. This is a general takeaway.
- faceoffs :624. This is the section's general ladder; its own CARHA paragraph at :630 already said "boards or net".
- forechecking_systems facts :326 and :814, body :345 and :828. The carrier is behind their own net, and these units already gave USA Hockey "boards or goal frame".

**Also:** faceoffs facts :607 now says the match is **mandatory**. This closes the SG139–SG140 carry-over that the line never said so.

**Left boards-only as scene-scoped:**
- faceoffs :607 and :1233: a rim retrieval with a player turned toward the wall.
- offensive_zone_play :919 and :969: a winger facing the glass at the half-wall. The same document's general units at :784, :796 and :1151 carry the net.
- risk_management :752: Hockey Canada's own example (iv), pushing into the boards.

Both reviewers upheld these judgements.

## Wrong premises found
1. **The coordinator's briefs cited the wrong Hockey Canada file.** They named `hc_2026-08-print.txt`, which sources/README.md :2240 marks as the superseded August print. The wording is identical at every site used here. Future briefs cite `hc.txt`; this is recorded in the plan.
2. **The first repair put the lean penalty in center's body but not its facts block.** That reproduced the defect SG197's commit named, "a listener could hear light contact as free". The safety reviewer blocked on it.
3. **The fix cited the wrong rules for a lean.**
   - It cited NHL/IIHF 69.4 and PWHL 71.4. Those are written for a goalie outside the crease and say only "should".
   - The rule for a deliberate lean is 69.2/71.2: *"whether or not the goalkeeper is inside or outside the goal crease … minor or major"*.
4. **shooting :327 attached 69.4's "reasonable effort" proviso to the goal test.** It belongs to the penalty paragraph and applies only to a goalie playing the puck. The error was harsher than the books; the clause was dropped.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (all 14 changed lines; Hockey Canada, CARHA 2026, USA Hockey with Casebook 607/608/625, NHL, IIHF 2026/27 and v1.1, PWHL 43 and 71, EIHL, In-House) | All CORRECT; nothing cheaper. WORDING: shooting :327 reasonable-effort condition; risk_management KT11 "several" |
| safety-reviewer (six rendered) | BLOCKING: center facts carried no lean penalty (fixed). RECOMMENDED: shooting :327 book scope (fixed). Scene judgements upheld; KT11 "several" holds (Hockey Canada, CARHA and USA Hockey 608(c)) |
| rules-verifier (final read of the two rewritten units) | FIX citations: 69.2/71.2 for the lean, and PWHL 71.3/71.4 at :327. WORDING: reasonable effort misplaced. USA Hockey floor and HC/CARHA "at least a minor" CORRECT. Note: HC 8.5(d) bars a misconduct for goalie interference |

### C11
- The authoring agents made every edit except the last three. The coordinator applied those, exactly as the final rules-verifier specified them:
  - the 69.2/71.2 citation swap;
  - the PWHL 71.3/71.4 citations;
  - dropping the reasonable-effort clause, which was the reviewer's stated option.
- The coordinator wrote the briefs, the plan entries and this record.

### Checks after the last content edit
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets, check_tables: exit 0. The new center facts line is 295/300 and the block is at 14/14 total.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF across all six files.
- check_counts --update: all figures match.
- Full `npm run build` with the absolute binary, started after the last content edit: exit 0, including check:links (all internal links and anchors resolve).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 |
| D2 Exceptions | HC 8.5 Interp. 1 (fouled attacker); USA Hockey Casebook 607 Sit. 5; HC 8.5(d) (no misconduct) |
| D3 Divergence | Goalie-contact goal test and penalty across six books, plus EIHL; the defenceless match in HC/CARHA against the other four books |
| D4 Citation integrity | 69.2 vs 69.4 corrected; PWHL 71.x supplied; 617(c)(4), 66(b), 607(c)/(d), 7.5(c), 53(b) |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None |
| D7 Cardinal rule | Units lead with the instruction (screen without touching; never into the goalie; take the puck) |
| D8 Numeric ownership | None |
| D9 Summary layer | risk_management KT11, CMs and KTs of all six layer-tested by authors and the safety reviewer |
| D10 Key-facts layer | The center lean line added and voiced alone; shooting :314, puck_support :588, faceoffs :607, forechecking :326/:814 |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | All six rendered and changed units read de-tagged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes with markers unchanged; no site-reviewer (declared) |

## What this method could not have found
- Other copies of the same claims outside these seven files. Every sweep was lexical. Leads are recorded in the plan: offensive_zone_play :620 (CARHA), shooting :555 (HC "wherever" without "you start"), shooting :557 (CARHA fouled-attacker goal limb missing).
- Whether a referee judges a soft lean "deliberate", which decides the USA Hockey charge reading.
- Other act-rules (holding, cross-checking) that may price a sustained lean higher than goalie interference.
- Other rules pricing a hit from behind into the net, such as boarding or head-contact tiers.
