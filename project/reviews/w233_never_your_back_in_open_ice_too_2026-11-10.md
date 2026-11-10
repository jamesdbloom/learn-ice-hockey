# W233: never your back to anyone coming at you, in open ice as much as at the wall — eight more documents and three captions (10 November 2026)

**Files:**
- content/systems/offensive_zone_play.md
- content/technique/body_contact_and_battles.md
- content/technique/skating.md
- content/foundation/on_ice_communication.md
- content/foundation/rules_primer.md
- content/systems/neutral_zone_systems.md
- content/technique/passing_and_receiving.md
- content/technique/puck_handling.md
- site/src/diagrams/puck_handling.mjs (three captions)
- site/src/data/diagrams.json (rebuilt)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave closes the plan row W232 left: the same act in other wordings, and wall-narrowed never-your-back rules, in every other document. The rule comes from W232's ruling:
- a turn away from a checker is safe only before the defender can reach you, never with your back to anyone coming at you;
- this holds "in open ice or directly into the boards" (USA Hockey 608 Note, sources/usah.txt:3713-3718);
- side-on where achievable.

A read-only safety sweep covered all of content/ outside the four W232 files, plus diagrams.json. It searched for: turn away, curl, spin, pivot, cutback, wheel, reverse, escape, seal, back-to, and wall, boards or "there" narrowings.

**The policy question the sweep raised.** The corpus teaches a spin off a checker already leaning on you, and says "mid-spin your back is to them". That does not conflict with the rule, provided the limit is stated: a checker already leaning on you is not "coming at you" and has no run-up for a hit from behind. So the spin is the one stated exception, and it must carry "only off a checker already leaning on you, never one still coming at you" wherever it is taught.

## What changed
1. **offensive_zone_play.**
   - §7 "Buying time" (:775 body, :781 facts, :790 bullet) said never your back "near the wall". These sit in chunk 051 with the open-ice curl, so the only never-your-back a listener heard beside "curl toward the middle into open ice" was wall-only. All three now say "at the wall or in open ice". The :779 facts line gained "before the checker can reach you … never your back to anyone coming at you".
   - §9's delay (:869 facts, :874) and Common Mistakes :1175 gained the reach limit.
2. **body_contact_and_battles.**
   - :990 and :996 taught "a spin off the wall" without the spin limit. Both now say "only off a checker already leaning on you, never one still coming at you".
   - The owner section was widened to "in open ice as much as at the wall": the heading :887, the facts line :892 ("anywhere"), the owner sentence :904, Common Mistakes :2041, the self-test :2101 and KT7 :2155.
   - After the re-check, :904 reads "…in open ice as much as at the wall; at the wall, never turn to face it with them behind you". :2041's posture limb reads "At the wall, get skates parallel to it…".
3. **skating.** Key focus :25, :780, :787 (Options) and :795: "escaping a checker" now carries "before they can reach you". The limit is attached to that item so it does not fall on "dead rush".
4. **on_ice_communication** (Key focus :9, KT2 :707), **rules_primer** (KT6 :1185) and **neutral_zone_systems** (KT9 :928): "at the wall" or "on the boards" became "at the wall or in open ice". Each ⚠️ still leads a bold run; KT2 had none and gained none.
5. **passing_and_receiving** Common Mistakes :836: "Pressure on your back is a hit from behind, on the wall or off it."
6. **puck_handling** :459 and :568 (facts): "facing the wall or in open ice" and "on the wall or off it".
7. **Three diagram captions** (coordinator edit): puck-on-the-far-side, you-cannot-beat-two and the-last-player-back. Each made never-your-back conditional on the play reaching the boards. Each now reads "at the boards or in open ice", and you-cannot-beat-two's posture limb reads "At the wall, skates parallel to it…". WALL_POSTURE_SHORT is location-neutral and was not changed.

8. **After the first commit gate** (BLOCK: two misses):
   - on_ice_communication :94 (facts, voiced alone) and :115 taught "a reverse or a quick turn" against a coming forechecker with no reach limit. Both now read "…a quick turn before they can reach you".
   - body_contact self-test Q9 still pointed at the old heading "…near the boards", a plain-text pointer check_links cannot see. It now names the new heading.
   - The author's re-grep found body_contact :1546/:1550 "turn up ice" on arriving at the wall, with no limit. In the re-check's wording, the limit now governs only the turn: "chip, reverse or protect the puck … — or turn up ice, but only before a checker can reach them". Protecting the puck is what you do once reached.
   - :990's spin limit was reordered to follow the act.

**Left as they are, by ruling:**
- facts lines tied to an act that happens only at the wall (neutral_zone_systems :747, on_ice_communication :148, puck_handling :872);
- passing_and_receiving :554, a factual wall sentence followed by an unscoped prohibition.
- skating :37 (Overview), :188 and KT4 :1026 describe what outside edges are for ("cut back, slip a checker"). They are not in-game timing instructions, and the timing limit lives at :25, :780, :787, :795, :812 and :825.
- A final sweep of the eight files found no other unlimited turn under oncoming pressure. It searched: turn up ice, wheel, pivot, peel off, roll off, escape, spin, cut back, turn away, tight turn and slip a checker.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer (read-only sweep) | Five HAZARD documents plus minor wall narrowings and three captions; gave replacement sketches. OK: winger :125/:127, center, defender and defending_the_rush pivots (a different act), breakouts, forechecking, DZC, special_teams. Raised the spin policy question. |
| authoring agent | Applied in all eight documents, plus four copies outside the brief (body_contact :2101, :2155, :904; puck_handling :568). Adjusted with reasons: the skating limit's placement, "anywhere" at the cap, no new ⚠️ on KT2. Kept side-on at offensive_zone_play :779, where the turn happens before reach rather than against a level defender. |
| commit-gate (first run) | BLOCK: on_ice_communication :94/:115 (unlimited quick turn, and not named in the ruled-OK list); body_contact Q9 stale heading pointer. Every other condition passed, including a full-unit sweep of all eight files. |
| safety-reviewer (narrow, after the repairs) | Nothing blocking. Repairs upheld. RECOMMENDED: body_contact :1546/:1550 attached the reach limit to "protect" as well (applied verbatim). Final sweep found no other hazard. skating KT4: no change. |
| safety-reviewer (re-check, rendered) | Nothing blocking; every changed unit carries its own limit. Every adjustment upheld. Rulings: the act-tied facts lines and :554 stay. RECOMMENDED: :904 wording (no "face the wall" in open ice), "At the wall" before the posture limb in :2041 and the you-cannot-beat-two caption, and dropping a redundant "anywhere on the ice" in two captions. All applied in its wording. |

### C11
The coordinator edited the three captions (from the sweep's sketch) and applied the re-check's four clarity wordings verbatim. The re-check read the captions in diagrams.json and in the rendered audio. The coordinator then ran the re-check's suggested follow-up grep over the eight files for "back" near "near, on or at the wall/boards". The remaining hits are factual wall statements, the checker's own duty, or lines already ruled OK.

### Checks after the last content edit
- check_facts exit 0, run with no pipe.
- check_links --quiet exit 0. One heading was renamed (body_contact :887); nothing linked to the old anchor.
- check_absolutes exit 0, after build-diagrams.mjs.
- check_marker_pairs: 0 LOST and 0 SPLIT on the eight files. neutral_zone_systems KT9 is "no longer present by key" because its opening was rewritten; its ⚠️ is kept.
- Full `npm run build` (absolute binary) exit 0 after the final edits.
- check_callout_flow --bare 0.

No site-reviewer ran. These are phrase edits inside existing units, with no new marker, bold or structure. The one heading rename is covered by check_links.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | USA Hockey 608 Note only; this is a posture rule, with no tariff added |
| D5–D8 | not engaged |
| D9 Summary layer | Key focus, Key Takeaways and Common Mistakes corrected in six documents |
| D10 Key-facts layer | facts lines changed in offensive_zone_play, body_contact, skating and puck_handling; each carries its limit standing alone |
| D11 Reader safety | safety-reviewer ×2 (sweep and re-check), rendered |
| D12 Read-aloud | eight documents rendered; the captions were verified voiced alone |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build |
| D15 Rendered site | build plus bare-glyph check |

## What this method could not have found
- The act described in words that were not searched (roll off, peel off, shield and turn).
- Turns implied only by diagram routes.
- Whether the other books' checking-from-behind rules also reach open ice. The edits state a posture, not a tariff.
- A correct turn executed too late.
