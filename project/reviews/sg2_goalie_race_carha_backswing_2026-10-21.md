# SG2: goalie-race limb and CARHA backswing, on neutral zone, forechecking and zone entries (21 October 2026)

**Origin.** The safety review of the Detailed Neutral Zone Systems script (dR-nz) found two gaps on the page itself:
- **Goalie-race limb, CRITICAL by the D11 definition.** The facts line teaching "chip past a one-four and race for it" carried no goalie limb.
- **CARHA 79 backswing, MAJOR.** The slap-shot warning lived only in the body.

Separately, the trigger "if the goalie gets there first" left the tie case uncovered. That is when both players arrive together at speed. The two sibling sweeps (sgS-nz, then sgS2) found the same two gaps on forechecking_systems and zone_entries.

## Changes

| File | What changed |
|---|---|
| systems/neutral_zone_systems.md | **Goalie limb on every chip-and-race site:** facts :271, :737; body :284, :650, :828. Trigger "gets there first" → "comes out for it" at :752, CM :855 and KT8 :916. **CARHA 79 backswing limb:** facts :599 and :735 ("under fifteen inches"), CM :857. |
| site/src/diagrams/neutral_zone_systems.mjs (+ diagrams.json) | The nz-1-4 caption gains "pulling up if the goalie comes out for it". The caption is hosted on neutral_zone_systems and forechecking_systems. It is not a shared constant (grep). build-diagrams was run. |
| systems/forechecking_systems.md | Goalie limb on the 1-4 race: facts :469, :1012; body :483, :1019; KT10 :1109. :398 "nobody at all in behind it" → "nobody but the goalie" (the old wording was false). |
| systems/zone_entries.md | **CARHA 79 limb:** facts :672 ("under fifteen inches"), body :679, KT9 :1236. **Trigger "comes out for it":** CM :1171 ("Chase the puck, not the man; …"), body :821, KT10 :1237. The last two are claim-wide: they now say "peel off into the lane they want to pass into", matching NZ and forechecking KT8 and CM. |

Rule basis, verified against `sources/`:
- CARHA 2026 Rule 79(a) and its Note: a wind-up more than fifteen inches behind the puck is a minor, and a major on injury. Rule 30(a): a major ends the game.
- "Not fair game": NHL, IIHF, PWHL, USAH 607(d), HC 8.5 and CARHA 52(b) Note. The USAH Casebook 607 Situation 5 permission is stricter in the script's "pull up" direction, so it is safe.

## Reviews

- **dR-nz** (on the Detailed script) found the source gaps. They were logged as row (o).
- **sgS-nz** reviewed the neutral_zone_systems diff. All 11 units are accurate, and each limb is in the same spoken paragraph as its act; it rendered the page to check. It found no new permission. It found two sibling MAJORs (forechecking goalie race, zone_entries backswing) and three MINORs: the :735 threshold, the nz-1-4 caption, and the zone_entries :1171 trigger. All were fixed.
- **sgS2** reviewed all three pages plus the caption, rendering all three.
  - No CRITICAL, no new permission. Marker counts unchanged: 88, 24, 47.
  - It upheld the zone_entries tactic change at :821 and KT10. "Comes out for it" is a stride earlier than "gets there first", and it is consistent with the siblings.
  - MINORs:
    - zone_entries :1171 "Take the puck…peel off" read as self-contradictory → "Chase the puck". Fixed.
    - zone_entries :672 needed the threshold → "under fifteen inches". Fixed.
    - The glossary :27 sibling is now the outlier. Logged as row (s).
    - Row (o)'s KT half was judged not needed for neutral_zone_systems KT8 and KT9 (neither teaches a wind-up). zone_entries KT9 does teach the hard rim, so it carries the limb. The plan records this.
- **The two follow-up fixes** (zone_entries :1171 and :672) are the reviewer's own sketches. The author applied them and checked them against the source. The commit gate is the remaining reader.

## Gates (after the final content edit, no pipe)

- check_facts, check_links, check_absolutes (408 caption units, from the rebuilt json), check_geometry and check_secrets all pass.
- check_marker_pairs: 0 LOST, 0 SPLIT across the 3 files.
- check_counts: no change.
- `npm run build`: exit 0, check-links clean.

## Dimensions (D1–D15 per project/reviews/TEMPLATE.md)

| Dim | Status |
|---|---|
| D1 Rules accuracy | ✓ CARHA 79/30(a) and "not fair game" in NHL, IIHF, PWHL, USAH 607(d), HC 8.5 and CARHA 52(b) were quoted from sources/ by the reviewers. sg3R later re-verified CARHA 79/30(a) with grep lines |
| D2 Rules travelling without exceptions | ✓ The CARHA backswing is scoped to CARHA |
| D3 Rule-set divergence | ✓ CARHA-only, as scoped |
| D4 Citation integrity | ✓ No new citation |
| D5 Provenance | Out of scope |
| D6 Negative existence claims | Out of scope |
| D7 The cardinal rule | ✓ "Pull up" is coaching caution, not law (sgS2: no book requires it) |
| D8 Numeric ownership | ✓ Fifteen inches comes from the rule Note |
| D9 The summary layer | ✓ KT8/KT9/KT10 and CM align with the body |
| D10 The key-facts layer | ✓ Caps checked; facts lines read voiced alone |
| D11 Reader safety | ✓ sgS-nz, sgS2 |
| D12 Read-aloud integrity | ✓ Rendered; each limb in the same paragraph as its act |
| D13 Folklore | Out of scope |
| D14 Structure, style, terminology, cross-links | ✓ |
| D15 The rendered site | Build passed; the caption string changed. Browser pass deferred to the Site-reviewer row (sg3W later rendered the walk-out and one-timer captions only) |

## What this method could not have found

- A goalie race or hard dump phrased in words the regex sweeps did not use, on pages not opened. Row (r) covers the rest, in SG3.
- How "pull up" is heard aloud: as stopping short of the goalie, or as giving up the chase.
- The physical risk of a late, hard stop beside a goalie.
