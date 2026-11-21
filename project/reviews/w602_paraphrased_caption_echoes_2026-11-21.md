# W601–W602: 44 captions stop retelling the prose beside them (21 November 2026)

## W601 census (diagram-reviewer, read-only)

`check_caption_echo` compares 5-word runs only with the block directly beside a marker, so it misses paraphrase and restatement two blocks away. The census read every caption over 450 characters (151 captions, 255 caption/host pairs), with two blocks either side of each marker in every host.

**Found:** 49 echoes. 45 are CUT (about 6,470 characters) and 4 are HOST (the prose restates a caption another host needs). The tool caught 4 of the 49. Table: `w601_caption_echo_rows_2026-11-21.tsv`.

**Exempt by rule:** region definitions, disclosures, safety limbs, coaching-choice hedges, rule boundaries, and anything another host needs from the caption alone. The held list is in the census report.

## W602 edits

**Captions (two agents, disjoint modules, no build until the coordinator's single rebuild).** 44 CUT rows were applied; breakout-rim was skipped as the vocabulary definition. Every caption carries a dated W602 comment naming where the host says the cut point. Sound departures from the sketches:
- **nz-hinge:** keeps "into mid-ice".
- **six-on-five-shape:** the point and half-wall glosses were cut; the host says them verbatim directly above.
- **rush-2-on-2:** "Neither defenceman is drawn with a route, and that is for safety".
- **nz-regroup-d-to-d:** "The pass across makes the opposing structure slide."
- **show-one-shoulder:** keeps "here", because the mirror is drawn elsewhere.
- **defender-three-depths:** keeps the default-band definition.
- **winger-offensive-zone-patches:** keeps the shaded-high-slot sentence, which is the only explanation of the empty shading.
- **off-wing-open-to-the-ice:** keeps "hips turned out and a step or two off the boards", because the glyph is unlabelled.

One file was corrupted by a scripted edit and restored from HEAD by its agent. A HEAD-versus-tree load of every module confirms that only the intended captions changed, and no describe, players, routes or zones field.

**Host prose (one agent):**
- **center :574:** the third "knock it straight down" is cut.
- **defender :104:** the second sentence is cut. After review, the first is restored as "Key considerations: Don't carry through the slot either.", because every sibling subsection ends with one and :135 is its Under-Pressure twin.
- **body_contact :1287:** the paragraph retelling the caption is deleted.
- **winger :414:** trimmed to its first two sentences.
- **defender:** the defender-two-on-one marker moved after the 2-on-1 item, at column 0 before the 3-on-2 bullet. The speech order was confirmed.

No ⚠️ changes.

## Review

**diagram-reviewer.** It read all 44 changed captions against HEAD, plus the host diffs.
- Every ⚠️ limb, rule clause, disclosure and hedge is verbatim.
- Every multi-host point is still carried by each host's adjacent prose.
- No caption contradicts its drawing.
- The three host-only carriers are next to the marker:
  - deny-the-reception: "a press, not a chop", at time_and_space :431;
  - lane-jump-guess: its condition list follows at :493;
  - oz-five-man-shape: the home-plate rule, at ozp :242 and :255.
- **Two Minors, both repaired:**
  - faceoff-ozone-winger-walkout's "they" had lost its antecedent. It now reads "whether the winger then shoots…".
  - defender's Key considerations line was restored.

## Rows

**Closed:** W595(1), for captions over 450 characters, and W595(3).

**Still open:** captions of 450 characters or fewer were not censused.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary, which rebuilds the diagrams: exit 0, after every edit (`scratchpad/build_w602b.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes` (41 documents and 408 caption/describe units), `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 4 files.
- `check_readability`: 0 long paragraphs.
- `check_caption_echo`: 16 → 9 above-hits.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Whether a shorter caption teaches worse to a first-time reader.**
- **The split 2-on-1/3-on-2 list** has not been seen in a browser.
- **Audio.** Not rendered.
