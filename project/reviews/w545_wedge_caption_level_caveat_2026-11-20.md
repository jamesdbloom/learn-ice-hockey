# W545: the pk-wedge-plus-1 caption gains the body-checking level caveat (20 November 2026)

## Finding (safety-reviewer, major)

In pk-wedge-plus-1, the +1's pressure route ends 5.0 ft from a carrier on the half-wall, with the boards behind him (miss 1.53 ft). `check-arrivals` cannot see pressure routes, so this was measured by hand.

At a no-checking level, a reader can take the picture as licence to pin the carrier on the boards. Nothing in either host says otherwise near the marker: special_teams.md §Wedge+1 (:561–582) and how_to_watch_hockey.md (:208–216). Under USA Hockey 604(a) and Standard of Play Situation 17, Hockey Canada 7.3(a), and CARHA 49(a)/(b), that pin is a penalty; CARHA's boards limb makes it a double minor. Sibling captions already carry the caveat: pinch-centre-high, forecheck-122/131 and deny-the-reception.

## Repair

The caption now reads: "The +1 hurries whoever has the puck, stick on the puck, here straight out from the goal toward the carrier: one of three published routes, and a coaching choice. Whether that pressure may end in a hit depends on whether your game allows body checking."

- The shot-blocking limbs and their single ⚠️ are unchanged; no new glyph was added.
- The alt text "a checking-pressure route" is now "a pressure route".
- The caption grew from 804 to 939 characters. That is accepted, because the caption is the sole carrier of this limb in its hosts.

**Re-read.** The first wording, "pressures whoever has the puck without trying to win it", was flagged as major and permissive on re-read. Heard alone, it names a person as the target and steers away from the puck, which is close to 604 Note 1's "no effort to legally play the puck". The fix names the stick and the puck as the aim point.

That fix was the reviewer's own Option B. The editing agent applied it and re-ran the gates, but no reviewer re-read the final caption (C11 terminating).

## Gates

- `build-diagrams` was rerun after the edit.
- `check_absolutes` (408 units), `check_caption_pairs`, `check_caption_negations` (no pk-wedge entry), `check_diagram_quotes`, `check_geometry` and `check_links` all exit 0.
- The full site build (shared with W546) exits 0.

## Rows

- **Closed:** W541(2)'s safety note.
- **New:** the pressure-route census row under Diagrams and site. Every pressure route near the boards needs checking for the same missing caveat.

## What this method could not have found

- **Other pressure routes without the caveat.** That is the census row.
- **How "stick on the puck" sounds between commas.** No one has listened to it.
