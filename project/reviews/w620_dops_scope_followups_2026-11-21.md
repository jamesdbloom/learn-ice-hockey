# W620: follow-ups to the "Outside the Elite League" DOPS scope (21 November 2026)

The commit gate on f264d4c5 noted that getting_started :193 had no carve-out for the Elite League. One agent scoped it, and it ran a corpus census of DOPS claims that are scoped by a place word. A second agent applied what the census found.

## Edits

- **getting_started :193:** "Outside the Elite League, at a club in England or Wales, bans … come from IHUK's Department of Player Safety rules; the Elite League has its own. There, and in Scotland or Northern Ireland, plan on the same bans…". The agent checked this against `eih_dops_2026-27_layout.txt:119-121`, and against `eihl_casebook.txt` :544/:555/:575 for the EIHL DOPS.
- **getting_started :641 (FAQ 12):** now reads "at a club in England or Wales outside the Elite League".
- **team_play :660:** this was in the old form. The sentence is now split and scoped, and it keeps the Elite League "plan on the same".
- **uk_rules :306:** gained the "Outside the Elite League," prefix.
- **"the British ban" → "IHUK's ban"** at risk_management :864, playing_without_the_puck :851 and game_management :187. These are pointer sentences, and each target section is the scoped IHUK DOPS sentence. "British ban" now appears nowhere in content/.

## Census: left as fine

- getting_started :199, which hedges with "plan on".
- EIH R&R suspension lines.
- Sources trailers.
- Playing-rule and Rules of Competition lines.
- Trapezoid "suspension" lines.
- uk_rules :417 and rules_primer :404, which are scoped by the paragraph above them.

## Carried to the plan

These go to a rules-verifier:
- uk_rules :415/:419 and rules_primer :402 say IHUK's rules "do not say whether they reach Elite League games", while §5's "club based in England or Wales" literally includes those clubs.
- finding_more_ice :79/:153: "In Britain" carries an England Ice Hockey R&R suspension clause.

## Gates on the final tree

- check_counts --update: exit 0.
- Full npm run build (v22.23.4): exit 0, after every edit (`scratchpad/build_w620.log`).
- check_facts, check_absolutes, check_geometry, check_secrets, check_caption_pairs, check_tables: exit 0.
- check_callout_flow --bare: 0.
- check_marker_pairs: 0 lost ×6.
- check_readability: 0 long paragraphs.
- check_links --quiet: run after this record.
- No ⚠️ was changed. The edits only add scope and rename one label, so no claim is newly harsher or softer.

## What this method could not have found

- DOPS claims scoped by place words outside the census list, or scoped only by a heading.
- How "IHUK's" is voiced. md_to_speech has IHUK handling, but this wave did not render it.
- Diagram captions.
