# W636 B: more rule numbers voiced as rule numbers, the renumbering arrow, an en-dash season, and the HC Appendix D note (23 November 2026)

A read-only agent wrote and tested the patch to `scripts/md_to_speech.py` against the current file, and the coordinator applied it.

## What the patch does

- **New leads for `rule-number-list`:**
  - `Casebook` and `Handbook`, with an optional possessive or bracket;
  - `Interpretation(s) [N] to`;
  - `Situation,`;
  - a season placed before a number.
- **New list separators:** " v " and a spaced em dash.
- **Bare bracketed numbers, two narrow shapes only:**
  - a bracket straight after a closing quotation mark, as in `…Game Misconduct" (9.12)`;
  - a bracket that holds two or more numbers and nothing else.
  - A lone bracketed decimal is NOT claimed. Two real statistics in the corpus have exactly that shape: conditioning_and_recovery.md:165 has "(10.10)" and "(3.11)".
- **New rule `rule-renumbering`:** a closed-up decimal→decimal arrow is read as "X becomes Y" (uk_rules :130). A spaced arrow keeps its comma pauses, so stats trends are unchanged.
- **New rule `season-en-dash`:** "2010–11" is read as "twenty ten–eleven". It applies to consecutive years only, and never after `:`, `;`, `/`, `.` or a digit, so citation page ranges are left alone.

## Evidence

- **Self-test:** 351 assertions, 0 failures (329 existing plus 22 new). The new tests pin the shapes that must not change: "(10.10)", "(1.08–1.66)", "(1.50 m)", "(2.55%)", the spaced-arrow trend, and "2013–18".
- **Corpus-wide before/after.** The agent rendered all 41 documents from a frozen copy of content/, stripped the tags, and diffed per document word by word. Chunk counts stayed at 2,682.
  - It found 57 hunks and read each one in context. All are rule numbers, plus one season.
  - No statistic, measurement, price or interval changed.

## Remainder (carried to the plan)

About 45 rule numbers whose shape cannot be told from a statistic are still read digit by digit. The fix for those is in the content. The owner's ear test should cover the new spoken forms.

## Also in this commit

- **sources/README.md (W385 (8)):** the `hc.txt` entry now says Appendix D, the Time Penalty Options Chart, comes out as a single column there. Checked against both extractions: read the chart in `hc_layout.txt:7344`.
- **Plan:** the PWHL trailer row now treats the 2025-26 trailers as accurate provenance, and the speculative "summary layers" sweep is dropped under the owner's 23 Nov bar.

## What this method could not have found

- How a TTS engine actually pronounces the new forms.
- A rule number that already sounded right but means something else.
