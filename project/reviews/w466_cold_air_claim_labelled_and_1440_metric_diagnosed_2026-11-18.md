# W466: the cold-rink muscle-pull claim is labelled as coaching caution, and the 1440 amber readings are shown to be a metric artefact (18 November 2026)

**Files changed**
- Content: off-the-ice/practice_and_development.md
- Diagrams: site/src/diagrams/practice_and_development.mjs, site/src/data/diagrams.json (rebuilt)
- Also: project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan rows:** From W465 (1) and (2). The W465 commit-gate advised diagnosing the 1440 readings before any further caption batch.

## The cold-air claim (voiced)
**HEAD stated as fact, with no source and no label:** "Standing still in cold air is how you pull something on the next hard rep."

**What the owner supports.** The owner is conditioning_and_recovery.md, § Warm-Up (:349).
- It gives a general mechanism at :353.
- Its only measured evidence is for structured warm-ups in general, and the review behind it rates that evidence low quality.
- Nothing on disk measures "stand in a cold queue, sprint, strain".
- The "coaching observation" at :370 qualifies a different claim: how often warm-ups are skipped.

**Now, with one qualification at each site and the instruction kept:**
- **:391:** "**Keep your feet moving.** Going flat out on muscles that cooled while you stood in the line is a common way to pull something — a coaching caution, not a measured finding." The link now points to `conditioning_and_recovery.md#warm-up`.
- **:582:** "**Warm up before hard skating**… Standing still in a queue and then sprinting is the same risk on a small scale, by common coaching caution."
- **Caption practice-the-line-and-one-rep:** "Keep your feet moving: coaches warn that going flat out after standing still in a cold rink is how people pull something." The ⚠️ head-up limb stays last and is unchanged. The caption is 126 words.

**Other copies.** A coordinator grep for "pull something", "cold air", "cold muscle" and "cold rink" across content/ and the diagram modules found no other copy of the claim.

## The 1440 readings (read-only diagnosis, site-reviewer)
Six readings were checked: winger Faceoffs 76.1, faceoffs Defensive-zone draws 80.5, game_management 80.7, offensive_zone_play 93.1, forechecking_systems 66.9 and playing_without_the_puck Drive the net 75.0. **All six are artefacts of the metric, not content problems.**

**Why the metric misreads at 1440.**
- At 1440 the article column is 792 px, and one diagram fills about 80% of the 844 px window.
- The metric counts amber *text* over all *text* and excludes diagrams, so the window is about 96% picture.
- It then slides to frame only one caption's amber tail.
- A caption trim shortens the non-amber lead while the tail stays, so the 1440 figure *rises when a caption improves*. That explains every 1440 rise recorded in W457–W465.

**Evidence.**
- At 400 the same pages read 39–49%.
- At 400, faceoff-dzone-alignment is 20.5% amber and forecheck-212 is 15.2%.

**Decisions.**
- Gate amber at 400.
- Do not cut a caption to move a 1440 number.
- A 1440 gate needs the metric fixed first: count diagram area as non-amber, or skip windows where text is under about 20%.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | CLEAR. Each label is honest and matches what the owner actually supports, no instruction is weakened, and each site carries exactly one qualification. check_marker_pairs: 8 = 8, 0 lost. |
| site-reviewer | 1440 diagnosis as above, with screenshots in the scratchpad. practice_and_development at 400 light/dark, on the 15:59:16 build: 0 bare, untreated or panels; ⚠️ 11 = 11; 0 console errors; worst window 33.5 (unchanged); the #warm-up anchor lands on the h2; the caption is 20.4% amber. |

### C11
The coordinator wrote no content.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 15:59:16.
- **Gates:** check_links --quiet, check_facts, check_absolutes (certifies), check_geometry and check_secrets pass. check_counts: no change. check_callout_flow --bare = 0, and `--panels --file` = 0.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 | not engaged (no rule claim) |
| D5 Provenance | owner located: conditioning_and_recovery § Warm-Up |
| D6 Negative existence | "not a measured finding": sources/README and the owner's Sources were searched for a measurement |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | swept: KT8 carries only the instruction |
| D10 Key-facts | no facts line carries the claim |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | not re-rendered (wording-only change) |
| D13 Folklore | an unsourced injury claim is now labelled |
| D14 Structure, terminology, cross-links | check_links; anchor checked in the browser |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan row From W466)
1. **The 1440 metric.** It needs diagram-aware windows before any 1440 gate. This is the site-reviewer's script, run by the coordinator between waves.
2. **The sticky audio player** covers part of the viewport at 1440. Whether it hides text a reader needs has not been checked.
3. **conditioning_and_recovery :353.** The warm-up physiology ("increases the speed of contraction… nerve conduction speed…") is stated as fact with no source.

## What this method could not have found
- Literature outside the repository that might measure the cold-queue strain risk.
- Real synthesised audio.
