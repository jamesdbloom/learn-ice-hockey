# W484: a pinch is justified by someone covering your point, usually a high forward — not by the forwards merely being in the zone (18 November 2026)

**Files changed:** positions/defender.md, systems/defending_the_rush.md, project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W483 (1).
- **Author:** one agent, working in two passes.

## The defect
Defender and Defending the Rush justified a pinch with "your forwards are still in the zone to help" or "you have teammates behind you". That treats the usual case as a guarantee: forwards in the zone may be deep or mid-change (dtr :817/:825; risk_management :585). The corpus's real test is that someone covers the point you leave (defender :602/:610; FS :26; risk_management :572/:585).

**First pass.** It added "provided one / a forward is high enough to cover your point". That made a forward the *only* option. Defender :507 and risk_management :591 make cover a coaching choice: the centre, the highest forward, or the partner sliding across. Two facts lines heard alone then told a partner-slide team its pinch was unsafe. Content review caught this.

**Second pass.** Every site now names the default without excluding the alternative.

## What changed (voiced)
| Site | Now |
|---|---|
| defender :485 (lead), :499 (body) | "…provided someone covers your point, usually a high forward." |
| defender :491 (facts Risk) | "A missed pinch puts the puck behind you going the other way, so pinch only with someone covering your point, usually a high forward" |
| defender :492 (facts Key) | "…safer of the two when someone covers your point" (was "because you have teammates behind you") |
| defender :501 | "because someone can cover your point" (was "teammates behind you") |
| defender :602 (facts Read), :610 | "…and someone, usually a high forward, covers your point / the point you leave" (was "a forward is high enough") |
| defender :614 | "because someone, usually a high forward, can cover for you" (was "your forwards are still in the zone to help") |
| defender :1035 (CM) | "An offensive-zone pinch with someone covering your point is fine" (was "with forwards behind you") |
| dtr :796 | "…where your forwards are still in the zone to help if someone covers your point." |

## Reviews
| Reviewer | Result |
|---|---|
| content-reviewer | **First read:** the register is fine and there is no contradiction with FS or risk. Found that the first pass excluded the partner slide (Major, low side), plus a Minor (":501 'a forward can be behind you' is a hedge"). Both fixed. **Second read:** CLEAR. The rotation is no longer excluded. Agrees with the author's departure at :491, where the sketch "safe only with…" read as calling the missed pinch safe. dtr :807/:817 ("when a forward can cover for you") are not exclusive and are left as is. |

The coordinator checked both pinch captions (pinch-centre-high, pinch-centre-below-the-goal-line). They describe the arrangement drawn and set no requirement.

No rules or safety review was run. These are tactical conditions only: no rule, penalty or contact limb changed, and the edit is not more permissive.

### C11
The coordinator wrote no content.

### D15
No ⚠️ changed. `--bare` = 0, and `--panels --file` = 0 on both files. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 20:11:46, later than both content edits.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
- **check_counts:** no change.
- **check_marker_pairs:** 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6 | not engaged (no rule claim) |
| D7 Cardinal rule | **engaged.** The first pass presented one coaching choice (the high forward) as the only option; it is now the default with the alternative intact (defender :507, risk :591). |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | facts :491/:492/:602, CM :1035, KF :9 and Overview :42 already allow anyone |
| D10 Key-facts | :491, :492, :602 voiced alone |
| D11 Reader safety | not engaged |
| D12 Read-aloud | ":491 'safe only with…' misreading avoided" |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | consistent with FS :26 and risk :572/:585/:591 |
| D15 Rendered site | mechanical only |

## Found, not fixed (plan row From W484)
- **Activation wording.** defender :622/:628/:647 say "activate only when a forward can back-fill". Alternatives are named at :632/:653, so the reviewer judged this not exclusive. Not checked against other pages.
- **Other pages not re-swept.** Pinch-condition wording in winger.md, offensive_zone_play.md and forechecking_systems.md beyond :26 was not checked for the same exclusion.

## What this method could not have found
- Whether a listener hears "usually a high forward" as the default or as the rule.
- Real synthesised audio.
