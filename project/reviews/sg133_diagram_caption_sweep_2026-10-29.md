# SG133: diagram caption sweep for the claims corrected in SG120–SG132 (29 October 2026)

**Files:** site/src/diagrams/defensive_zone_coverage.mjs (comment only), project/plans/OPEN_ITEMS.md

## What was done
One agent read all 204 diagrams' `caption` and `describe` fields in site/src/data/diagrams.json, plus the .mjs comments, for five claims corrected in content/ over 28–29 October:
1. CARHA 49(c) stated as a closed list;
2. a USA Hockey check from behind at the boards priced at 608(a)'s minor plus misconduct;
3. the NHL/PWHL intent-to-injure match stated as discretionary;
4. CARHA 66(a) Note 2 read as "defenders";
5. per-line 404(b)/32(d) next-game clauses.

**Result: none appears in any voiced caption or describe text.** The agent read every hit in context and confirmed each against sources:
- breakout-wheel: CARHA 66(e) at carha_2026.txt:3157;
- inside-lane-longer-route: matches content bcb :1502;
- dz-collapse-corner: true in all six books, and offers no USA Hockey minor;
- forecheck-122 and forecheck-131: NHL/IIHF only.

## Edit
The only change is a comment, not voiced. In site/src/diagrams/defensive_zone_coverage.mjs, the dz-collapse-corner source comment quoted 608(a) partially, as "a minor plus a misconduct penalty". It now quotes 608(a) in full, cites Casebook 608 Situation 1 (a forceful check on a player standing along the boards is a major plus a game misconduct, or a match), and says "Do not price this picture at USA Hockey's minor." Sources: usah.txt:3721–3723; usah_casebook.txt:11750–11778.

`build-diagrams.mjs` was re-run (exit 0; 204 diagrams; PNG cache 204 reused). diagrams.json came out byte-identical, so no published caption changed.

## Checks
check_absolutes (41 documents + 408 caption/describe units, no findings), check_geometry (77 assertions), check_caption_pairs (0 violations), check_links --quiet: all exit 0.

## Review
No voiced text changed, so no rules or safety review was required. Dimensions D1–D15 are declared out of scope by the coordinator: no content/ or caption text changed.

## What this method could not have found
- A caption carrying one of the claims in other words ("a light bump in the corner is fine").
- Whether a caption's silence (dz-collapse-corner on USA Hockey) reads as permission. The sweep judged it not permissive; no safety-reviewer has looked.
