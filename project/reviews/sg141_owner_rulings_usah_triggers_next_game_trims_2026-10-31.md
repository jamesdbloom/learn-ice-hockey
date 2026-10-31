# SG141: owner rulings of 31 October, USA Hockey hit-from-behind triggers on five more pages, and the Rules Primer next-game trims (31 October 2026)

**Files:**
- content/foundation/rules_primer.md
- content/technique/body_contact_and_battles.md
- content/positions/defender.md
- content/positions/center.md
- content/systems/defensive_zone_coverage.md
- content/off-the-ice/practising_on_your_own.md
- site/src/drills/03_mohawks_starts_two_foot.mjs (drill card source; the card is not published, `build-drills.mjs` says so)
- project/plans/OPEN_ITEMS.md

Not in this commit: `site/src/data/podcast-principles.json` (see "Podcast" below; it is committed only after the upload).

## Owner rulings (31 October, answered in session)
- Defensive Zone Coverage names CARHA 59(d).
- Goaltender's Hockey Canada head-contact lines keep the head as their lead.
- Drill 20 gains the coach's "more backwards than forward" weight cue. Asked again after the safety review: the cue is for the glide.
- "Punch jams" and the "2 or 3 times" label stay.
- Practising on Your Own audio: re-tag and re-upload.
- Body Contact Detailed: re-record (found unnecessary, below).

## Why
- SG140's record said body_contact_and_battles, rules_primer, uk_rules, defender and center were not re-swept for units listing USA Hockey's from-behind ejection as "forceful at the boards" only. Heard alone, such a unit leaves a USA Hockey reader at a minor plus misconduct for a hit that sends someone head first into the boards or goal frame, or a reckless one, both mandatory ejections (608(b); Casebook 608 Situation 1). Permissive direction.
- The owner ruled (21/28 Oct) that next-game suspensions are stated once per page. rules_primer still restated them per foul.

## What changed
**USA Hockey triggers (one author per file, each told to refute the brief first):**
- **defender:** two units nobody had censused: facts :863 and body :885, the 2-on-1 slide from behind, gave USA Hockey only the 608(a) floor while every other book in the line ejected. Both now carry the reckless and head-first triggers. :488 and :903 gained "sends them" (bare "head first" reads as the hitter's head).
- **center:** KT6 (voiced alone) gave no USA Hockey ejection. First repair named USA Hockey as the only ejecting book (safety-reviewer: MAJOR, see Reviews); final: "It ends your game in every book but USA Hockey, and there too when the hit is forceful at the boards, sends them head first into the boards or net, or is reckless." Facts :754: "From behind, not on the head," and "sending them head first".
- **rules_primer:** body :527 named only the boards trigger; now all three (608(b); Casebook 608, Situation 1). Overview :35 and CM :1126 reworded so the head-first trigger names the boards or goal frame.
- **body_contact_and_battles:** facts :750 gave USA Hockey "none bare" with no triggers; now "…Hockey Canada always ejects; USA Hockey 608 does if it is forceful at the boards, sends them head first or is reckless" (the HC head limb stays at :751, 7.5(c) at :752). :1203 adds "reckless". :31, :776 and KT6 :2119 get "sends them head first or is reckless".
- **uk_rules:** no edit. No unit prices a USA Hockey hit from behind; UK pricing (IIHF 43, IHUK DOPS one-game ban) is not stated cheaper anywhere.

**Next-game once per page (rules_primer):** per-foul 404(b)/32(d) clauses trimmed at :445, :466, :485, :505, :572, :782, :790, :810, :1089, CM :1124/:1127/:1129. Kept: :29, :376/:378, :463, :612 (the contrast with adult 401(b)), :1062 table, :1072, :1084, CM :1140. KT10 keeps CARHA's ban ("…almost every major ejects you and costs at least your next game"), restored after the safety review found CARHA in no summary layer. :810 reworded ("so an injurious collision with a goalie there costs you the game"). uk_rules has no USA Hockey or CARHA restatements; its British one-game bans are separate tariffs.

**CARHA 59(d) (dzc):** body :209 adds "Any fighting penalty also suspends you automatically until CARHA's Chairman has dealt with it (59(d))." The facts line :184 is unchanged from HEAD: 59(d) is an until-the-Chairman suspension, not a next-game ban, and fitting it cost the line its "next-game" frame (safety-reviewer).

**Drill 20 (practising_on_your_own :310, card step 2):** "As you glide, keep your weight a little more back than forward, on the back half of the blades, chest up; lean back past your heels and you tip over." First placed in step 4, after the one-foot landing (safety-reviewer: FIX; see Reviews); moved to the glide on the owner's answer. Step 4 is back to HEAD. The drawing shows no weight and is unchanged.

## Podcast
- **Body Contact Detailed re-record: not needed.** The published 26 Oct two-voice episode (master sha256 b254b673…) was recorded from `podcast_style_b/detailed/v2/body_contact_and_battles.md` (26 Oct 07:11), whose pin line opens "If losing it here would give them a chance at your net". The plan row had been closed in c012dbf on 26 Oct and re-added later. Checked against the script, not by listening.
- **Practising on Your Own:** re-encoded from the WAV master (`build_podcast_audio.py --style principles --doc practising_on_your_own --force`; principles has no `--retag`, and a WAV re-encode adds no generation loss). New file `practising_on_your_own-fd6928a6.m4a`, title tag "Off the Ice 15 · Practising on Your Own — Playing principles", duration unchanged (3555.8 s). The upload is blocked on an expired AWS login, so `podcast-principles.json` stays uncommitted (upload first, then commit).

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer (Drill 20, first placement) | FIX: after "land on the left foot, knee bent" the cue read as a landing instruction, against the page's own two-foot-jump fault (:235, "landing… on the heels"); aloud it also preceded "Push off… into the jump". Owner then confirmed the glide. |
| rules-verifier (dzc, rules_primer) | All CONFIRMED: 59(d) (carha_2026.txt:2861-2864), 404(b), 403(b), 32(c)/(d), 4.8(c); 608(b) and Casebook Sit. 1 at :35/:527/:1126; each of the 13 trims removed only the next-game limb. Nit: :810 wording. Observations: CARHA "a skater's" accidental high stick narrower than 30(a) (harsh); dzc lacks 34(a). |
| rules-verifier (defender, center) | All CONFIRMED. center :754 "head first" without "into the boards or frame" is harsh. CM :821: silence is defensible; a USA Hockey limb would be charging (607(d) Note 1), not 608. |
| safety-reviewer (dzc, rules_primer, defender, center) | defender SHIP; rules_primer SHIP with two minors (CARHA in no summary layer; :810 wording); dzc FIX (minor: :184 lost its next-game frame); center FIX, MAJOR: KT6 named USA Hockey as the only ejecting book, so an NHL/PWHL/HC/CARHA listener could infer they stay in the game. 0 LOST markers in all four. |
| rules-verifier (bcb) | All CONFIRMED; IIHF "majors eject" holds (43.2 removes the minor, Table 5 lists 43.3 as major + GMP). Nit: :750's USA Hockey clause borrowed its verb. |
| safety-reviewer (bcb, Drill 20 in the glide) | SHIP both. Same :750 verb nit. |
| rules-verifier (narrow, on every repair) | All 7 CONFIRMED (bcb :750/:1203, center KT6/:754, rules_primer KT10/:810, dzc :184 = HEAD). |
| safety-reviewer (narrow, on every repair) | SHIP all four files. Optional: bcb :750 opening parse; rules_primer :810 "costs you the game" (both carried to the plan). |

### C11
Every content edit was made by the authoring agent that owned its file, on reviewers' findings. Repairs after the first reviews: Drill 20 moved to step 2; bcb :31, :750, :1203; center KT6 and :754; dzc :184 reverted; rules_primer KT10 and :810. All were re-reviewed by the narrow pair. The coordinator edited only the plan and this record.

check_facts, check_links (--quiet), check_absolutes, check_geometry and check_secrets exit 0; check_marker_pairs reports 0 LOST and 0 SPLIT HALF on all six content files (rules_primer 190/190, bcb 189/189, center 68/68, defender 66/66, dzc 52/52, practising 0/0). check_counts --update: all figures match. Full site build (`npm run build`, absolute binary) exited 0 after the last content edit, including check:links.

## Dimensions (per review_process.md)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier, four passes |
| D2 Exceptions | 608 Casebook pinch / open-ice push carve-outs; 32(d) accidental high stick; HC 7.5 Interpretations 1 and 3 noted by the narrow verifier |
| D3 Divergence | Each book's limb kept; IIHF discretion discussed (no minor, so any call ejects) |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Rule quotations re-read by each verifier; the Drill 20 cue rests on the owner's hearing of the video (captions unfetchable), and the trailer still credits the video only for the shoulder turn and jump |
| D6 Negative existence claims | uk_rules' "no unit prices it" negative tested by census; no absence claim changed |
| D7 Cardinal rule | Drill cue presented as a drill step, coaching craft |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | Layer tests by every author; KTs read voiced alone by the safety-reviewers; rules_primer summary carriers listed |
| D10 Key-facts layer | Every changed facts line read voiced alone |
| D11 Reader safety | safety-reviewer, three passes |
| D12 Read-aloud integrity | Every edited page rendered and the edited chunks read |
| D13 Folklore | None |
| D14 Structure, links | check_links passes |
| D15 Rendered site | Full build after the last edit. No structure changed and the drill drawing is unchanged, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
The SG141 carry-overs row in OPEN_ITEMS.md: center CM :821; bare "head first" at several lines (harsh); bcb :750 opening; bcb :753; defender :314/:462; rules_primer :810; CARHA "a skater's" accidental high stick (harsh); dzc and CARHA 34(a); the defender ladder row looks stale.

## What this method could not have found
- Units pricing a hit from behind in words none of the searches used (e.g. "finish the check" or "along the wall" without "behind").
- Diagram captions spoken into these pages (check_caption_hosts not run).
- Whether a CARHA roughing minor or peacemaker game misconduct is a "fighting penalty" under 59(d).
- What the source coach actually meant by the weight cue, and whether "back half of the blades" is the right amount for a learner. No ear test of any edited line.
- Sibling pages listing CARHA's automatic bans without 59(d) (bcb, rules_primer); the owner ruling named dzc only.
