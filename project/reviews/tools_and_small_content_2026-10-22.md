# Checker, renderer and podcast tooling fixes; two small content rows (22 October 2026)

## Tools (scripts/; no content effect except the read-aloud capitals)

- **Unknown options.** 11 scripts now reject an unknown option with a message and exit 2: check_absolutes, caption_negations, chunk_splits, chunk_tails, diagram_quotes, geometry, marker_pairs, plan_rows, secrets, leaders, quote_drift.
  - Before, 9 of them silently exited 0. check_marker_pairs read `--bogus` as a file and reported "0 LOST".
  - Proof: 25 valid invocations give byte-identical exit codes before and after, and 24 of 25 give byte-identical output. The one difference (chunk_tails --prose) was traced to the concurrent md_to_speech edit, not this one.
  - git-guard calls check_secrets and check_absolutes with no arguments, so it is unaffected.
- **check_facts.py.**
  - `--near` gains a section for blocks at or within one of HARD_MAX 14. 42 blocks are at HARD_MAX; before this change only 4 of them were visible.
  - Unknown options now exit 2. `--quiet` used to raise a ValueError while the pipe exited 0.
  - Gate output is byte-identical.
- **check_readability.py.**
  - `> - ` blockquote list items are separate units. This removes the false 70-word sentence in breakouts.
  - Key Takeaways are the first top-level list under the heading, including wrapped lines.
  - Effect: scanning's disclosure bullets are no longer counted as KTs (20 → 12). reading_ice_hockey_diagrams' two long KTs became visible.
- **check_callout_flow.py classify().**
  - A `**`-opening line counts as "own paragraph" only if it starts with ⚠️.
  - `--panels` and `--markers` are byte-identical, and the full panel_rows() list is identical against HEAD.
  - The default count fell from 848 to 32, and `--stacks` from 172 to 4, with no content change. The CLAUDE.md passage is updated to say so and why.
- **md_to_speech.py.** Sentence-start capitals: about 650 lower-case starts fixed (headings, formations, list numerals, "Section", after 🇬🇧).
  - Proof: a full corpus render before and after gives the same 39 documents, 2,550 chunks and 5,757,280 billed characters. index.json is byte-identical.
  - 285 SSML files changed (plus 38 manifest.json hash lines), 654 characters, every one a lower→upper change at the same position. Files are identical ignoring case. (Billed-character figure measured before the PWHL edit; the corpus now renders 5,757,297.)
  - Self-test: 300 assertions, 0 failures. Two old assertions that expected lower case were deliberately reversed; two pre-existing failures were updated to the renderer's current full stop.
- **podcast_queue.py.**
  - Gains `--style basics`, built from site/src/data/podcast-basics.json `planned`. build_podcast_audio.py's check of state-basics.json now has a writer, so a Basics episode can be blocked.
  - Tested read-only, plus an end-to-end block test in a scratch queue directory. No upload or network call was made.
- **upload_podcast_audio.sh.** The comment now matches the documented order (encode → upload → commit → push).

## Content

- **reading_ice_hockey_diagrams:**
  - KT2 and KT10 shortened. KT10 is at 64 words, kept for the ask-before-the-drill limb.
  - The IIHF key warning, "until you know, hit nobody", and the penalty-where-banned limb are all kept.
- **on_ice_communication:**
  - PWHL 83.6 added beside NHL and IIHF 81.6 for the shorthanded icing exemption in KT13, the CM bullet, the facts Read line and the body.
  - The rules-verifier confirmed PWHL 83.6 matches NHL 81.6 word for word, and that the IIHF lacks the major-penalty paragraph.

## Reviews

- **Content:** rules-verifier (with a safety eye): CLEAR on both files.
  - Optional, recorded in the plan: KT13 and CM omit the NHL/PWHL major-penalty exception. The body carries it.
- **Tools:** each agent proved before/after equivalence for valid use (evidence in scratchpad tools_a/b/c).
- **Coordinator re-run after all edits:**
  - every gate passes;
  - `--bogus-x` exits 2 on absolutes, geometry, secrets, marker_pairs and facts;
  - md_to_speech self-test: 300/300.

## Gates (after the last edit)

- `npm run build` exit 0.
- check_callout_flow --bare: 0.
- check_facts, check_links, check_absolutes, check_geometry and check_secrets pass.
- check_marker_pairs: 2 content files, 0 LOST.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier (PWHL 83.6) |
| D5, D6, D8, D13 | Out of scope |
| D7, D9 | ✓ PWHL added in all four layers that state the exemption |
| D10 | ✓ Facts line 193/200 |
| D11 | ✓ |
| D12 | ✓ Renderer change proven case-only across the whole corpus |
| D14 | ✓ |
| D15 | Text-only edits within existing units; build passes; --bare 0 |

## What this method could not have found

- A tool behaviour exercised only by an invocation nobody tested.
- How the newly capitalised headings sound to a listener; the change is case only.
- Sibling documents still saying "NHL and IIHF" about the exemption (plan row).
