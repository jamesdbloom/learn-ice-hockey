# W633–W634: one warning per spoken unit, the ozp pinch block, and a browser pass (23 November 2026)

## W633 C census → W634: one ⚠️ per spoken unit

**Why.** The owner reported that the warnings "break up the flow of the content too much". md_to_speech speaks "Important." once per unit, so a second glyph adds nothing aloud. It only adds a second amber run on the page.

**The census.** A read-only census (`w633_two_glyph_units_2026-11-23.tsv`) used md_to_speech's own block parser and excluded the Sources trailers. It found **160 spoken units across 24 files carrying 2–4 glyphs (332 glyphs)**. Every glyph had the `⚠️ **run**` shape.

**The edit.** Three agents with disjoint files removed **175 glyphs**, so each unit now carries exactly one.
- The kept glyph sits on the instruction, or on the mandatory, ejection, match or head limb. It never sits on a citation or a permissive limb.
- The agents read every unit and overrode the census's keyword guess in about 70 places. Their reports list the close calls.
- The only edit was deleting `⚠️ `. Stripping `⚠️ ` from HEAD and from the tree gives byte-identical text for every file, so no word or bold run changed.

**Re-run.** The census now reports 0 two-glyph units.

## W633 B: the ozp pinch facts block @968

Three dense multi-book tariff lines were reworded to lead with the act and to read clearly heard alone, and each got shorter:
- **CARHA** (:974);
- **checking a puckless player** (:977);
- **PWHL 52.1** (:979).

Every limb was verified in flattened carha_2026.txt, nhl_rules.txt, iihf_rules_2026-27.txt, hc.txt, usah.txt and pwhl_rules_2026-27.txt, and each removed limb was layer-tested. :973, the 8-copy IHUK DOPS line, was left as it was.

The agent read the rendered speech and smoothed two phrases. Comparing against forechecking's PWHL line showed ozp :979 lacked the "launch" limb (52.1(b)(ii)), which is now added.

The safety-reviewer found the lines OK. Two of its tweaks were applied:
- **:977:** the USA Hockey clause now says "must be that pair or a match". Heard alone, the earlier wording could pick up the Hockey Canada clause's "can".
- **:974:** now reads "two of three penalties that eject".

## W633 A: browser pass on site/dist at abdc0da8

The Chrome extension blocked localhost, so the site-reviewer used Playwright's Chromium instead: headless, a real viewport, both themes, 1440/400/320 px, 11 pages plus the diagram hosts. Nothing critical turned up.

**What passed:**
- Every ⚠️ forms a warn-inline wrapper: 0 bare glyphs, 0 untreated strong runs.
- Nothing overflows.
- There are no console errors and no off-origin requests.
- Contrast is 6.04:1 light and 9.62:1 dark for warnings.
- All pk-box, the-last-player-back, entry-middle-drive and dump-and-the-trapezoid labels sit on the right player.
- Drill labels measure about 12 px at 400 px.

**Carried to the plan:**
- **Crisis-box numbers split across lines on a phone (major).** This is CSS, and the wording is unchanged.
- **puck_support "the carrier" reads as labelling D2 (major).**
- **Full-sheet diagrams open scrolled left at 400 px.**
- **Minor:** label/line crossings and a 7.7 px "D1" were noted and not carried, as cosmetic under the owner's bar.

**One misread corrected.** The reviewer asked whether "under 19" is right for Ireland's Childline. The source-verifier already confirmed ISPCC's own wording, "up to and including the age of 18".

## Gates on the final tree

- check_counts --update: exit 0.
- Full npm run build (v22.23.4): exit 0, after every edit (`scratchpad/build_w634.log`).
- check_facts, check_absolutes, check_geometry, check_secrets, check_caption_pairs and check_tables: all exit 0.
- --bare: 0.
- check_marker_pairs: 0 lost ×25.
- check_readability: 0 long paragraphs.
- Two-glyph census: 0.
- check_links --quiet: run after this record.

## What this method could not have found

- Whether a skim-reader still stops on a mandatory clause that is now plain bold beside a kept amber instruction.
- Safari, iOS and real devices.
- Audio for the ozp lines beyond the agent's text read of the render.
