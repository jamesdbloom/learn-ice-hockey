# W630–W631: young people's crisis line, readability rows, renderer voicing, and the PWHL 2026-27 book (23 November 2026)

## Young people's crisis line (mental_game)

**The line.** One plain line was added to the crisis box. Every number was fetched today from the provider's own site and quoted:
- Childline UK: 0800 1111, free, 24 hours, under 19.
- ISPCC Childline, Ireland: 1800 66 66 66, free, 24 hours, up to and including 18.
- Kids Help Phone, Canada: 1-800-668-6868, or text CONNECT to 686868, 24/7, no age limit stated.
- 988 in the US: "anyone who is struggling".

**Source-verifier.** It refetched every page independently and confirmed every fact. It found one defect: an "Under 19" label that capped Kids Help Phone and 988. The label is now "Young people:", and the under-19 limit sits on Childline only. The providers' own "free" quotes were added to the trailer.

**Safety-reviewer, CRITICAL, audio only.** The renderer voiced 0800 1111 as "eight hundred one thousand one hundred and eleven", and three more numbers were also wrong when heard. The cause was the `helpline-number` allow-list in `scripts/md_to_speech.py`. The coordinator added 0800 1111, 1800 66 66 66 and 686868, and widened the 988 look-ahead, with four self-tests. Re-rendered, the line now reads "zero eight zero zero, one one one one…".

## Readability and rule rows (ozp, special_teams, passing)

**ozp :629.** IIHF/NHL 69.1 was stated with only its first limb, so a listener heard that deliberate contact which does not impair the goalie keeps the goal. Both limbs are now in the line (iihf_rules_2026-27.txt:5599-5603).

**ozp :630.** Rewritten around Table 14 situations 5A–5E.

**ozp rebound block @679.** Five lines shortened, each layer-tested.

**ozp "the seal".** It now reads "Never push an opponent off with your skate (627(a))".

**special_teams ~:1128.** One 14-word clause restored: Hockey Canada 7.6(b)/7.7(b) make a cross-check above the shoulders a major and game misconduct. Without it, the sentence was permissive.

**Double ⚠️.** Nine spoken two-glyph units now carry one, on the instruction or the mandatory limb. The special_teams goalie glyph moved onto the 620(b) careless-head limb, at the reviewer's suggestion.

**passing :441.** "minor or female hockey" became "Minor-division or female game". The reviewer noted that "youth" could be heard as including Junior, where the price is higher.

## Renderer voicing (W449 (3), W446 (1), W451 (2), W501 (7), W505 (9))

A read-only agent wrote a patch against the current file and tested it across all 41 documents. The coordinator applied it.

- **Seasons.** A one-year season reads "twenty twenty-six–twenty-seven", where it used to say "twenty twenty-six to twenty twenty-seven". Multi-year spans keep "to".
- **Rule numbers.** After a book name, "Situation" or "Rules", they read as `rule-citation` does: 9.12 is "nine point twelve".
- **Age groups.** "U18AAA" reads as "under eighteen AAA".

**Self-test:** 329 assertions, 0 failures. Corpus-wide there were 1,043 voicing changes, all in these classes; the agent read every rule-number change in context, and no statistic, measurement or price changed. Four documents shift by one chunk, so chunk numbers recorded for rules_primer, switching_positions, winger and faceoffs are stale.

**The remainder is in the plan.** About 66 lead-less rule numbers still read digit by digit, the arrow in "→" is voiced as a comma, and an en-dash season reads oddly. The owner's ear test should confirm that the en-dash form sounds natural.

## The PWHL 2026-27 rulebook (W630 D, W631)

**Source-verifier.** The PWHL Official Rulebook 2026-2027 is now the operative book: announced 5 Nov 2026, CreationDate 23 Oct 2026, sha256 a56e8174…71942d5. It is on disk as `sources/pwhl_rules_2026-27.txt` and `_layout.txt`, with a README entry. The old book is marked superseded.

**EIHL Casebook.** Its v1.1 of 8 Sep 2026 is still current; the copy on disk is byte-identical to the one served.

**W631, the dangerous direction.** Removing an opponent's helmet is now a roughing **major** (9.6, 51.3(iv)), but the corpus said it was a minor. It is now fixed in rules_primer, equipment, team_play and bcb.
- A grab at the facial protection, chin strap or neck guard is a major with a mandatory game misconduct (51.3(iii), 51.5).
- 51.5 names a helmet grab but is silent on whether a removal counts. The reviewer's MAJOR asked for the silence-is-not-a-grant reading, so every site now warns of the ejection. rules_primer and equipment say "plan on the ejection"; team_play :284 and the bcb :2035 facts line say "likely", and neither is permissive.

**Suspensions.** The 72.10 figures are now two games (they were three, and five), and 72.4's is one game where it was three. The book contradicts itself here: 39.5(iv) still says three, the corpus states both and plans on three, and the README records the contradiction.

**Other files.** puck_handling no longer quotes the deleted "minimal degree of violence" wording. The goaltender trailer was re-read, and its 9.6 goalkeeper limbs are unchanged.

**Still open in the plan.** The other 2026-27 changes: 52.1 rewritten (about 50 sites), 82.1 high-sticking the puck now permitted, 65.2(viii) and 1.8 (no trapezoid), the 9.10 neck protector, and 39 trailer citations of the 2025-26 PDF.

## Gates on the final tree

- `check_counts --update`: exit 0.
- `md_to_speech --self-test`: 329 assertions, 0 failures.
- Full `npm run build` (v22.23.4): exit 0, after every edit (`scratchpad/build_w631.log`).
- `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`: exit 0.
- `--bare`: 0.
- `check_marker_pairs`: 0 lost on all 10 files.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record.

## What this method could not have found

- Whether the voice engine reads the new season form naturally. This needs the owner's ear test.
- Other PWHL claims that changed between editions under labels nobody swept.
- Whether a helmet removal draws the PWHL game misconduct in practice. No PWHL casebook is on disk.
