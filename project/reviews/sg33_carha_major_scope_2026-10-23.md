# SG33: general "every CARHA major" claims scoped, plus the Practising on Your Own draft (23 October 2026)

## What changed

CARHA 30(a) makes every major a game misconduct except a major for an accidental high stick. The 62(b) Note narrows that exception: an accidental high stick escapes the game misconduct only when it injures nobody. 32(d) adds a one-game suspension, again except under the Accidental High Stick Rule. General "every CARHA major ejects" statements were scoped as follows:

- **`content/foundation/rink_map.md:529`** (49(a) paragraph): "any CARHA major ends your game" → "either way a major there ends your game and brings at least a one-game suspension (30(a), 32(d))".
- **`content/technique/body_contact_and_battles.md:499`**: "the CARHA ladder, where every major ejects you" → "the CARHA body-contact ladder, where every major ejects you". Stick fouls go to Rule 62 in the same paragraph.
- **`content/technique/body_contact_and_battles.md:1979`** (Common Mistakes): "a major there ends your game" → "a major for a hit ends your game".
- **`content/systems/defensive_zone_coverage.md:597`**: kept wide, with the exception named. It reads "CARHA puts a game misconduct on every major except an accidental high stick that injures nobody (30(a), 62(b)) and at least a one-game suspension on that (32(d))". An interim narrowing to "a slashing major" was caught by review: it dropped the CARHA pricing of the hooking (:596) and high cross-check (:601) majors in the same list.
- **`content/positions/defender.md:356`**: "a CARHA major for a hook, slash or cross-check, reckless or not, ends your game".
- **`content/positions/defender.md:889`**: "its tripping and kneeing rules reach a major that ejects you".

Sites whose context already scopes them to a named contact or stick foul were left as written. The author's report lists them.

Also in this commit, not on the site: **`project/getting_better_drafts/practising_on_your_own.md`**, the first draft of the owner's second Getting Better page. It is held for the owner's drill review; see the OPEN_ITEMS row.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety + rules (D1–D3, D11) | safety-reviewer ×2, reading carha_2026 30(a), 32(d), 49, 54, 56, 62(b) Note, 64, 80, 86 | First pass: 4 of 6 edits CLEAR. One MAJOR (the dzc :597 over-narrowing) and one minor (rink_map :529, where "that major" read as the injury-mandatory major only). Both were fixed and the re-check was CLEAR. One optional minor remains: the dzc :597 suspension clause also covers an injuring accidental high stick, which 32(d) exempts. It errs harsher and is a plan row. |
| Mechanical | coordinator | Run after the last content edit: check_facts, check_links, check_absolutes, check_geometry and check_secrets all exit 0. check_marker_pairs on the 4 files: 0 lost. check_callout_flow --bare: 0. check_counts: no drift. npm build exited 0 at 23:59, after the last edit at 23:58, and check-links passed. The feed is byte-identical to production. |

## Dimensions

| Dim | Status |
|---|---|
| D1 rules accuracy, D2 exceptions, D3 divergence | Checked by the safety-reviewer against CARHA 2026 |
| D4 citation integrity, D5 provenance | Out of scope: no new citation or quotation |
| D6 negative existence | Out of scope |
| D7 cardinal rule | Out of scope: penalty wording only |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Checked: the author swept facts, Common Mistakes and Key Takeaways in all four files. The only general claim in a summary layer was body_contact CM :1979, which is fixed. |
| D10 key-facts layer | Out of scope: no facts line changed |
| D11 reader safety | Checked by the safety-reviewer ×2, including the drop-a-neighbouring-tariff shape that bit zone_entries in SG32 |
| D12 read-aloud | Checked by reading: antecedents are clear when voiced alone (CM :1979 "a major for a hit") |
| D13 folklore | Out of scope |
| D14 structure, style, links | Checked: check_links passes |
| D15 rendered site | The build includes check-links, and check_callout_flow --bare is 0. Six one-clause wording changes inside existing paragraphs, with no structural change, so no browser pass was run. |

## What this method could not have found

- A neighbouring foul priced only by a general sentence in a different paragraph or document.
- General CARHA claims worded without "major" or "30(a)".
- Audio chunk boundaries, since nothing was rendered.
