# W629: readability heard aloud, restatement cuts and diagrams (23 November 2026)

This wave covers plan sections 3–5, worked under the owner's 23 Nov bar: shorter or equal, never longer, and every safety limb still heard somewhere.

Four agents worked on disjoint files: A took ozp; B took goaltender, forechecking, center and winger; C took bcb, dtr, special_teams, zone_entries, risk_management, rink_map and on_ice_communication; D took the diagram and drill modules. Three safety-reviewers each layer-tested every removed limb, and the diagram-reviewer reviewed the diagram work twice. Every finding was applied.

## Plan rows closed

The page-by-page rows in section 4 are closed, together with the cross-document "Checking from behind" row (SG75–SG78). That tariff was cut to one copy on ozp, dtr, zone_entries, special_teams, risk_management and forechecking, each now pointing at bcb or at its own What it costs subsection.

Two gate notes are carried to the plan: the ozp "the seal" antecedent, and the special_teams :1128 Hockey Canada head tier.

## Measured

Prose fell from 769,728 to 767,490 words. There are 0 long paragraphs, and no Key Takeaway is over its cap. Facts lines over 40 words in ozp went from 68 to 59.

## Content

- **ozp:**
  - Split 7 long facts lines, so each half stands alone.
  - Rewrote the goalie-contact line in plain sentences (Casebook 607 Sit. 4).
  - The hit-from-behind tariff was stated about 4 times. The full copy now lives in What it costs; the pinch body went from about 1,260 to 740 characters.
  - Moved the ⚠️ to the mandatory late-hit clause.
  - Review fixes:
    - restored "vulnerable or" in 608(c);
    - restored Hockey Canada's "off the head";
    - the tip line now says "above the crossbar but below your shoulders".
- **goaltender:**
  - The net-front Convention, stated three times, is now one copy.
  - Two Casebook 607 facts lines were removed and one rewritten. Review fix: "any deliberate contact is charging" (607(d) Note 1).
  - "The price." became a pointer.
  - "A player who runs you" went from about 6,100 to about 4,300 characters.
- **forechecking:** the turned-back tariff went from three copies to one.
- **center:** the CARHA 53(a) body copy was dropped, and "intentional" was added.
- **winger:** the net-front and charging passages were cut, and a 608(c) line was reordered.
- **bcb:** the IIHF off-ice discipline, stated three times, is now one copy. The third-man ⚠️ moved to the mandatory 46.7 clause.
- **dtr:**
  - Duplicate 608(c) facts lines were deduped.
  - "Meant to injure" was cut from four body scenes.
  - The carve-outs subsection went from about 2,176 to about 1,273 words.
  - Paired pointers were merged.
  - Review fixes:
    - MAJOR, restored: CARHA 86(b)'s discretionary slew-foot match, which the merge had lost;
    - the 639 reading sentence, de-garbled;
    - 7.11(c) Interpretation 2, named in words;
    - a ⚠️ added on the kick limb.
- **zone_entries:** 608(c) went from 8 copies to 4. Amber moved onto the mandatory clause at three sites, and KT11 was reordered.
- **special_teams:** the head ladder was consolidated.
- **risk_management:** §7 "The price." is now one line, and the two pointer wordings are unified.
- **rink_map :459:** now leads with "play the puck with your stick, never your body".
- **on_ice_communication :591:** reworded at the same length.

## Diagrams

- **entry-middle-drive:** the carrier now has a puck dot.
- **the-last-player-back:** "pressure" now sits level with the forechecker who presses, at [16, −2]. The reviewer's [14, −2] was rejected by the placer.
- **pk-box:**
  - The spoken letter key was cut from the caption.
  - "uncovered" was re-hinted onto B.
  - The opposition glyphs now carry word labels ("point", "half-wall" ×2, "net front"), so P, H and N are explained on the picture.
- **Drill card 07:** "dangle there side to side".
- **Kept:** the trapezoid caption's "whatever its standing" hedge. EIH R&R 22.3 is only on disk in its 2024-25 edition, and nothing settles its current standing, so plain wording would assume the suspension still holds.

## Gates on the final tree

- check_counts --update: exit 0.
- Full npm run build (v22.23.4): exit 0, after every edit (`scratchpad/build_w629b.log`).
- check_facts, check_absolutes, check_geometry, check_secrets, check_caption_pairs, check_tables and check_zones: all exit 0.
- check-arrivals: 0 hard failures.
- --bare: 0.
- check_marker_pairs: 0 lost ×12.
- check_readability: 0 long paragraphs.
- check_links --quiet: run after this record was written.

## Still open (in the plan)

- The remaining near-cap and long facts lines, including the ozp blocks @677 and @966.
- The "608(c) must give" lines in other files.
- The renderer voicing fix.
- The double-glyph units.
- The drill-label size, a format call.
- The browser pass.

## What this method could not have found

- Audio chunk distance for most of the cuts (only ozp was rendered).
- Sibling pages that point at a passage that has now been cut.
- Phone and dark-theme rendering on a real device.
