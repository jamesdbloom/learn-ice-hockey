# W603–W604: short captions that retold their prose, a site check of W602, and one ordering fix (21 November 2026)

## W603

**Short-caption census (diagram-reviewer, read-only).** It covered 67 captions of 450 characters or fewer (89 caption/host pairs), using W601's method and exemptions. Result: 27 rows, 22 CUT (about 2,300 characters) and 5 HOST. Table: `w603_short_caption_echo_rows_2026-11-21.tsv`.
- `check_caption_echo` caught none of the 27.
- Two of the rows are echoes that W602's own replacement wording kept.

**Site check of W602 (site-reviewer, headless Chromium; the Chrome extension was not connected).** Desktop and 400 px, light and dark.
- **Defender list split:** OK. There are two bulleted lists with the same bullet and indent, 32 px either side of the full-width figure, and the 3-on-2 item does not look orphaned.
- **Trimmed captions:** a sample of 10 was read for sense. All 44 were checked statically on every host: each rendered once with the new text, and every ⚠️ was inside warn-inline.
- **Console and network:** no errors against the finished build.
- **The build raced the check:** the coordinator's W604 build ran while the reviewer was reading `dist`. Its first pass saw sw.js 404s mid-build; the second pass was clean.
- **One Minor:** rush-3-on-2-default said "the third own player" before naming the two defencemen. The sentence was moved after them, words unchanged.

## W604 edits

**Captions (one agent, 11 modules, exact-match count-asserted replaces, no build until the coordinator's).** All 22 CUT rows were applied. Rule added to the brief: every caption stays at least one complete sentence saying what is drawn. Sketches that had reduced a caption to a bare label were recast as sentences:
- **pp-walk-down:** "the half-wall player carries the puck down toward the goal line and inside, forcing a decision on the kill's low defender".
- **pp-backdoor:** recast as a sentence describing the drawn backdoor.
- **entry-high-triangle and defend-squash-and-slide:** keep the drawn movement.
- **dump-soft-area:** "A soft area dump:".
- **goalie-breakaway-retreat:** "meets the shooter well out and retreats in front of them on C-cuts", so "Well out" keeps its antecedent.

**Host prose (one agent):**
- risk_management :144, ozp :794, rink_map :151 (two picture descriptions merged; the neutral-zone gloss stays in its caption and the glossary), passing :213.

No ⚠️ changes.

## Review

**diagram-reviewer: OK, with one Minor.**
- Only the 22 caption fields changed; no describe, title or id moved.
- Every host keeps every safety limb, hedge and disclosure.
- pp-walk-down and pp-backdoor match their drawn routes.
- **Judged acceptable:**
  - dz-collapsing-box: its "a state rather than a full system" does the old "not to defend a whole game" job.
  - faceoff-ozone-d-one-timer: losing "inner hash marks" is fine.
  - bank-pass-angle: the reason to call it is carried by the host.
- **Minor, repaired:** entry-drop-pass "Dropped blind, it leaves…" had no antecedent. It now reads "A drop made blind leaves a stationary puck facing your own net."

## Rows

**Closed:** W595(1) for all captions, and W603.

**Still open:** paraphrase beyond two blocks, and across documents, is not censused.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary, which rebuilds the diagrams: exit 0, after every edit (`scratchpad/build_w604b.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 4 files.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Whether a shorter caption teaches worse to a sighted skimmer.**
- **Audio.** Not rendered.
- **Real devices and screen readers.**
