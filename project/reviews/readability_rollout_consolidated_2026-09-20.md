# Readability rollout — consolidated history, 2026-09-20

**Why this file exists.** `project/plans/READABILITY_AND_DUAL_AUDIENCE.md` had grown to 1,256 lines,
most of it an execution log of waves that had already landed — census tables, wave-by-wave ownership
tables, dated "owner instruction" history, and the full caption-shortening saga. Per this project's own
rule ("No completed items: when work closes it moves out to a review record"), that log is consolidated
here. The plan file itself was trimmed to the current design spec plus genuinely open threads, with a
pointer to this record for full history.

This is not a verbatim transcript. Numbers, commit hashes and file paths that matter for a future audit
are kept exact; narrative has been compressed. Where a figure moved between measurements, both figures
are given with their dates rather than one being silently preferred.

---

## 1. The three owner instructions, 14 September 2026

Given directly by the owner after the first release wave; they override anything in the style guide or
plan that disagreed, and the third reversed the style guide outright.

1. **Most pages open with the high-level principle that frames them**, drawn from
   `content/foundation/core_principles.md` where one fits. Not every page needs one — reference material
   (glossary, rules-primer comparison sections) may have none, and forcing one produces a slogan. The
   rejected-candidate log for this lives in `project/reviews/readability_wave1_findings_and_layer_spec.md`
   and `project/pilots/keyfacts_pilot_defender.md` — **never in `content/`** (a coordinator briefly
   misread "the index's own log" as belonging inside the principles document itself, which would have
   been the corpus narrating its own review process; caught before it shipped).
2. **Cut citation apparatus and low-level rule detail — never a qualifier, scope, counterweight, or
   honest disclosure.** Measured 14 September: `rules_primer.md`'s Key focus carried ~240 words of bold
   citation apparatus before its second question; `defensive_zone_coverage.md` and `breakouts.md` each
   carried duplicate verbatim book quotations for a rule their own prose called universal.
   `neutral_zone_systems.md` was named the standard by two independent reviewers. The corpus's worst
   defects have come from over-compressing under this instruction (round 38's criticals were exactly
   that), so the rule is: if a reader who acts on what remains would do anything differently, or
   differently wrong, the cut removed substance, not apparatus.
3. **A diagram follows the prose that discusses it**, reversing the style guide's prior instruction
   that diagrams open a section. Exception: an overview/orientation diagram (a notation key, a
   whole-ice frame the text then works through) still goes first, because its job is to give the reader
   the frame rather than illustrate a point already made.

## 2. Three modifying rulings, 15 September 2026

The owner relaxed and completed instruction 3 the next day, in the owner's own words: *"we don't want a
diagram too close to the next header... however we can always add a little gap then there is no reason
why a diagram can't proceed the next header, also why must a borrowed caption stand alone, I don't want
long captions unless they are with diagrams after the text describing them."*

1. **Placement relaxed:** a marker may land immediately before a heading or a `---`; the fix for
   "looks like it belongs to the wrong section" is a CSS gap (`site/src/styles/global.css`,
   `:has(+ h2/h3/h4/h5/h6/hr)`), not a placement ban. Verified by ablation in a real browser:
   44px before an `h3`/`hr`, 40px before an `h4`, against a 32px baseline.
2. **Captions target 25–50 words.** Four things must survive any cut: every safety caveat, every rule
   scope, every hedge, and the deixis rule (no "the diagram above," "a beat later," etc. — a caption is
   voiced alone and may be read anywhere). `describe` is exempt from the length target, never from
   deixis.
3. **A formation diagram follows the prose, but only after the shape sentence** — the reader needs the
   shape named in words before the picture means anything.

Full operative detail (the worked examples, the glossary-document special case) lives in
`project/content_style_guide.md`, in the sections titled "THIS RULE IS ABOUT DEIXIS, NOT LENGTH,"
"CAPTION LENGTH — the owner's target," and "Formation diagrams — AFTER THE SHAPE SENTENCE." It was
never duplicated into the plan file, deliberately.

## 3. Census results — what shipped, and what the numbers actually are

All censuses are owned by `python3 scripts/check_readability_census.py <subcommand>` (`openers`,
`markers`, `words`, `summary`, `citations`, `reconcile`, `partition`). Historical figures below are
dated; **re-run the tool for a current number rather than trusting any figure here.**

### Opener census — DONE

15 September 2026: 30 of 39 documents opened on prose in their Overview/Key focus section, 7 opened
straight into a ` ```facts ` block (voiced alone, before the reader has been told what the document is
about), 2 opened on a diagram marker.

**Re-verified 20 September 2026:** `check_readability_census.py openers` returns `Counter({'prose':
39})` — all 39 documents now open on prose. Fully done. (The tool cannot tell whether a prose opener is
the *high-level framing principle* instruction 1 actually asks for, only that it isn't a bare facts
block or marker — that distinction still requires reading, not a census.)

### Marker census — substantially done

15 September 2026, before the positions-page move: 286 markers arrived with zero prose after their
heading ("the old side"), out of a total the plan explicitly said not to trust from the diagram-module
count. Four documents already complied outright: `how_to_watch_hockey.md` (24 markers, 0 old-side),
`practice_and_development.md` (4, 0), `reading_ice_hockey_diagrams.md` (1, 0),
`getting_started.md` (1, 0).

A first marker wave moved the five positions pages (84 markers, 73 moved, 11 left) — commit not
separately recorded here. A second marker wave (four agents, disjoint files, under the relaxed
placement ruling) moved 85 more:

| agent | files | zero-prose markers before → after | moved |
|---|---|---|---|
| M1 | rink_map, on_ice_communication, goaltender, defender | 28 → 5 | 23 |
| M2 | special_teams, offensive_zone_play, zone_entries, neutral_zone_systems, forechecking_systems | 25 → 1 | 24 |
| M3 | breakouts, faceoffs, defensive_zone_coverage, playing_without_the_puck, puck_support_and_spacing | 27 → 2 | 25 |
| M4 | passing_and_receiving, puck_handling, shooting, time_and_space, defending_the_rush | 15 → 2 | 13 |

Landed via commit `d09b318` ("Put diagrams after the prose that explains them, and stop three safety
lines reading as a permitted alternative"). Ten markers were left deliberately with reasons on record
(orientation diagrams whose caption *is* the section's thesis, a rink-map pair that only works
side-by-side, one blockquote-structural case in `goaltender.md` that needs a content change, not a
marker move, to fix).

**Re-verified 20 September 2026:** `check_readability_census.py markers` reports **331 markers across
32 documents; 16 arrive with zero prose after their heading.** That matches the audit's "16 of 331
remain on the old side" — substantially done. The residue is a worklist, not a defect list: an
orientation diagram legitimately goes first, and the tool cannot distinguish that case from a real
miss (`rink_map.md` alone still carries 3 of the 16, all judged likely-correct as-is in round 77).

Two other figures appeared in earlier drafts for *different* definitions of "marker on the old side"
(284, "252 before a facts block / 2 after") and should not be reconciled with the 286/16 figures above —
they measure different things. Only the current tool run is authoritative.

### Caption length target — NOT structurally reachable at 25–50 words; routing, not compression, is what remains

Per `project/reviews/round_77_the_caption_could_not_be_shortened.md` (15 September 2026, seven agents,
~220 captions across 28 diagram modules): the 25–50 word target was tested in three groups first
(D/E/F, 92 captions) and only **one caption of 92** landed in band — a figure that was later copied,
unscoped, into this plan and into a tool docstring, and had to be corrected by a commit gate.

**The corpus-wide outcome that actually shipped** (measured from the build product, HEAD vs. after):

| | before | after |
|---|---:|---:|
| captions | 204 | 204 |
| changed | — | 188 |
| total caption words | 52,136 | 32,902 (−37%) |
| median words | 238.5 | 134.5 |
| longest | 765 | 556 |
| in the 25–50 word band | 11 | 14 |
| still over 50 words | — | 189 of 204 |

**This was accepted as a negative/partial result, not a failure to fix.** Three agents on disjoint
files independently reached the same diagnosis: a caption cannot be cut to 50 words while it is the
*only* place a reader is told something that could hurt them (a duplicated safety tail, a four-book
rule enumeration, a hedge that must travel with its claim). Round 77 named specific blocking blocks —
the receiving-posture tail byte-identical across `forecheck-pinch`/`forecheck-press`; the
604(a)/604(b)/7.3/IIHF 101.1 enumeration identical across four forecheck captions;
`defender-step-up`'s 297-word charging block; the `PINCH_CAVEATS` shared constant (~135 words, docblocked
"THE ORDER OF THESE FOUR SENTENCES IS LOAD-BEARING") — and reframed the remaining work as **routing**
safety/rule material out of captions into the documents that should own it, not compression. One routing
target was completed within round 77 itself (`angle-into-the-corner` → `content/technique/skating.md`
and `body_contact_and_battles.md`, taking a 403-word caption's cuttable remainder from 403 to ~176 words
once its safety half was confirmed already covered by the host body). The round also found, while doing
this, a genuine round-10-shape critical: `skating.md`'s Key Takeaway asserted "never turn your back to
the boards" as a safety instruction the document's body, facts block and Common Mistakes never actually
taught — repaired in all three layers.

**Status of the remaining routing targets (PINCH_CAVEATS, the 604 enumeration, `defender-step-up`'s
charging block, the short scope block shared by four forecheck captions): unclear, and this record says
so rather than guessing.** They are not present as rows in the current `project/plans/OPEN_ITEMS.md`
(checked 20 September 2026 — no hits for any of these identifiers). Two later records dated 19 September
(`boards_limb_and_red_flags_2026-09-19.md`, `shoulder_limb_propagation_2026-09-19.md`) touch several of
the same captions (`forecheck-pinch`, `forecheck-press`, `oz-cycle-rim`, `oz-cycle-reverse`) but for a
**different** defect (tracked there as "D15" — caption amber/warning-block height growing, not
shrinking, as more safety content was found missing and added) — that work explicitly did not close D15
and, if anything, made those captions longer. So caption safety-content is being *added* to some of the
same captions round 77 wanted to shorten, working against the 25–50 word target rather than toward it.
**Treat any remaining caption-routing work as open-ended, not a closable checklist — see the plan file's
open threads.**

### Text-size and citation censuses — historical, all superseded by the tool

The 15 September 2026 census work (words/summary/citations subcommands) established, in kind rather
than by any number recorded here: the corpus's largest documents (`rules_primer.md`, roughly a tenth of
the whole corpus) carry the heaviest concentration of both raw prose weight and rule-citation apparatus;
roughly three-tenths of total corpus prose lives in the Key Takeaways/Common Mistakes summary layers
combined, with wide per-document spread (7.2%–39.4%) that does not by itself indicate which end is
wrong; and the two prose-word bases used by different subcommands differ by exactly the corpus's `##`/
`###` heading text (reconciled by `check_readability_census.py reconcile`, which prints `reconciled: YES`
or tells you to investigate). Every specific number quoted in the plan's original text was flagged there
as stale within the same session it was written (one table went stale three times in one day) — this
record preserves the **method**, not the numbers. Re-run the tool for anything current.

### Tables near their drop limit — historical snapshot

15 September 2026, `check_tables.py --near`: 3 dropped, 46 read aloud, 9 within one edit of being
dropped (limits: 3 columns, 14 rows, 200 chars/cell). The tightest table in the corpus at that time was
`foundation/rules_primer.md:809` ("Situation | Where the draw goes") at zero rows of headroom — a
different line number than `CLAUDE.md` names, which is itself an example of this project's "a number
copied out of its owner goes stale silently" problem. Re-run `check_tables.py --near` before editing any
table; this snapshot is not current.

## 4. `## Key focus` rollout — broader than the plan's own pilot restriction

Shipped to all 36 remaining documents (the 2 declared pilots and the principles index already had one)
on 17 September 2026, per `project/reviews/readability_keyfocus_rollout_2026-09-17.md`. **All 39 of 39
documents in `content/` now carry exactly one `## Key focus` section**, confirmed by a corpus-wide sweep
immediately before staging.

This is broader than the plan's original Phase 1/Phase 2 language, which restricted "release one" to
"no more than two pilot documents" (`getting_started.md` and `rules_primer.md`) for the *full*
progressive-disclosure rewrite (Key focus, Simple summary, Recognition cues, Understand it, If your team
differs, Go deeper, as a complete layer set). That restriction was about the **full pilot treatment**,
not about the Key focus layer alone, and the 17 September rollout deliberately scoped itself to Key
focus only — "3–5 short, bold-led, self-contained items... a promotion of existing content, not new
authoring of fact" — not the complete seven-layer IA. The plan's pilot-restriction language should not
be read as still governing Key focus, since events have superseded it there; it may still describe the
current state of the *other* six layers, which have not had a corresponding corpus-wide rollout.

Two safety defects and three rules defects were found and fixed during the mandatory review pass for
this wave (details in the source record); house-style review found and fixed one Major (five documents
narrating "why this section runs long," a non-negotiable-6 violation) and two Minors. A coordinator
process failure was also caught and corrected mid-wave: the first dispatch used a read-only reviewer
subagent type for authoring work, which two of eight agents correctly refused and six did not (via
`Bash`, which had no filesystem restriction) — no corruption resulted, but it is recorded as a
transferable lesson (use `general-purpose` for anything that writes to `content/`).

## 5. The elaborate Phase 1 metadata schema — not what shipped

The plan's Phase 1 section specifies a metadata schema with fields including `readerAudience`,
`skillLevel`, `contentType`, `prerequisites`, `readingMinutes`, `audioMinutes`, `ageApplicability`,
`leagueApplicability`, `contactScope`, `supervisionRequired`, `parentRequired`, `safetyCritical`,
`audioMode`, plus per-field `owner`/`reviewer`/`status`/`evidence`/`revalidateAfter`, and a separate
`scopeClass`.

**Checked 20 September 2026: none of these fields appear in `site/src/content.config.ts`.** What
actually shipped is simpler and lives in `site/src/data/pathways.json`: each pathway entry carries `id`,
`title`, `blurb`, `effort`, a `readerAudience` array using controlled values (`u10-parent`,
`youth-player`, `adult-beginner`, `adult-rec`, `coach`, `all-players`), `prerequisites`, an `entry`
object (`doc` + `anchor`), a `docs` list, an `owner` (the content file), a `status` of `draft` or
`reviewed` (a `draft` pathway **must not render** — enforced, not just documented, per the file's own
`policy.statusGate`), and a per-entry `evidence` note explaining what was and wasn't reviewed. No
`scopeClass`, no per-field reviewer/revalidateAfter metadata, no reading/audio-minute fields.

A principles index does exist at `content/foundation/core_principles.md` and has a `core-principles`
pathway entry in `pathways.json`, currently `status: "draft"` — per its own `evidence` field, it has not
yet been cleared by content-reviewer, facts-reviewer, and safety-reviewer, and has no podcast episode
(its `effort` line says so explicitly, per the plan's own rule against implying a listener can hear a
reading-only document).

**Whether the `parent-of-a-new-player` pathway entry (or any other pathway) is currently blocked on
review is tracked in `project/plans/OPEN_ITEMS.md`, not here — do not duplicate that row.**

## 6. Other historical notes preserved for audit

- **Partition tooling.** `check_readability_census.py partition --groups N` computes (not asserts) a
  disjoint file-ownership partition for parallel dispatch, and refuses to print if any file appears
  twice. Two partition tables were staged into the plan mid-round and went stale within the same commit
  because they were generated before an in-flight marker move finished — the tool must be re-run at
  dispatch time, never quoted into a plan file.
- **Coordinator's own defects, round 77.** A coordinator-run comment-stripping regex was lifted out of
  `check_caption_negations.py` and run standalone, producing an artefact report ("408 units, 22 seen at
  0%...") that evaporated once run through the tool's actual pipeline (the real number: zero truncated
  units). Two further truncation classes in the same function (interpolated constants/double-quoted
  strings, then raw `\uXXXX` escapes) were found and fixed in the same round by different agents, each
  by comparing against the build product rather than by inspecting the regex.
- **Rules verification on the caption layer (round 77).** Every specific rule claim tested (604(a)/(b),
  HC 7.3, IIHF 101.1, the checking-tariffs, "two strides is a safe harbour in no book," the privileged-
  area negative-existence claim) held against primary text. Five *completeness* gaps were found beside
  the confirmations — none false, several under-scoped for one rulebook (Hockey Canada's opposite ruling
  on timeouts after icing; IIHF 81.4's fourth substitution exception; the caption layer's zero mentions
  of IHUK/NIHL/EIHA despite the British answer being on disk). Handed to the relevant document owners.
- **Browser verification (round 77).** All 49 pages, 331 figures, four viewport/theme cells confirmed
  the CSS gap rule works and is causally responsible (verified by ablating the four `margin-bottom`
  declarations and re-measuring), and that a heading immediately after a caption is never mistaken for
  caption continuation (contrast, weight, and asymmetric spacing all support it). The coordinator's own
  first pass under-counted the affected figures by nine (19 vs. the real 28) because it scanned a
  hardcoded file list rather than the corpus.

## 7. Provenance

Compiled 20 September 2026 while trimming `project/plans/READABILITY_AND_DUAL_AUDIENCE.md` to comply
with this project's "no completed items" rule for plan files. Source material: the plan file's own prior
text (git history), `project/reviews/round_77_the_caption_could_not_be_shortened.md`,
`project/reviews/readability_keyfocus_rollout_2026-09-17.md`, `project/reviews/boards_limb_and_red_flags_2026-09-19.md`,
`project/reviews/shoulder_limb_propagation_2026-09-19.md`, `project/plans/OPEN_ITEMS.md` (current, as of
commit `734d8b0` plus this session's in-progress edits), `site/src/content.config.ts`,
`site/src/data/pathways.json`, and fresh runs of `python3 scripts/check_readability_census.py openers`
and `... markers` on 20 September 2026.
