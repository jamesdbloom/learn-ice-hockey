# SG wave: source gaps found by the Detailed podcast reviews (21 October 2026)

**Origin.** Safety reviews of the first seven Detailed Principles scripts found several defects that came from the corpus pages themselves rather than from the scripts. Each was logged as a row (a)–(l) in OPEN_ITEMS ("Source gaps found by the Detailed reviews"). One agent was assigned per file, with exclusive ownership. Each was told to treat its row as a hypothesis, refute it first, and fix the claim wherever it appears, in every layer.

## Changes by file

| File | Row | What was wrong | Fix (all layers found) |
|---|---|---|---|
| positions/center.md | (a) | The neutral-zone "step up" carried no stick-on-the-puck or arrive-under-control limb | facts :251 and body :261 now carry the limb |
| | (a+) | "A long run at a carrier is a charge" understated the charging threshold, which in Hockey Canada 7.4 is two strides, plus a jump; IIHF says "multiple strides" | "A run-up, even two hard strides, can be charging" at Key focus :17, Overview :46, :261, :400 and KT18 :911 |
| | (d) | Faceoff stick contact was "the stick, never their hands", missing "for an instant", "over or under the blade" and "no hand on their stick" (faceoffs.md :252/:1167) | Key focus :21, facts :533, body :547 and :561 now say stick on stick only, for an instant, never a hand, never hook it or hold it down |
| positions/defender.md | (b) | The pinch "challenge" had no checking gate and no numbers limb | facts :628/:629 and body :639: pressure for the puck, a body check only where your game allows one, never into a back turned to you, play the puck if you see their numbers, and arrive as the puck does |
| | (i) | "Forearm and hip" heard alone can sound like leading with a forearm | changed to "forearm and hip to the wall" at :127 (facts), :144 and :906 |
| positions/goaltender.md | (c) | "Ends the hitter's game in most books" understated the penalty for a hit from behind that sends a player head first into the post. Every book ejects: NHL/PWHL 43.2/43.5, IIHF 43.3 (discretionary, so "plan on"), USAH 608(b), HC 7.5(a), CARHA 53 | CM :1633 and KT12 :1730 now read "…ends the hitter's game in every book — plan on it". This is the fact-first form, so the line no longer opens with "Plan on a hit" |
| positions/switching_positions.md | (g)(i) | :211 "contact on your forearm and hip". :423/:438: the CARHA reception "back to the boards" sat next to "Never turn your back to the checker" with nothing reconciling them. The source is a CrossIceHockey article published with CARHA's permission, not a rulebook (refetched; the quote is exact) | "forearm and hip to the wall". The reception now means "boards behind you, facing the ice — not your back to a checker; if contact is coming, side-on" |
| systems/breakouts.md | (f) | "A penalty kill may ice in most rule sets" had no USA Hockey age floor next to it | :119 and facts :528 now carry "USA Hockey not below Youth 15-Only or Girls 16U" (624(b)(1)) |
| | (f+) | "The exemption ends only if that leaves you level" was a false "only": NHL 81.6 and PWHL 83.6 also end it when a major expires to an empty box | facts :107 and :528, body :129 and :554 corrected |
| | (h) | The faceoff win-and-reverse at :884 had no boards limb | carries the reverse posture inline and links to #reverse |
| systems/defensive_zone_coverage.md | (j) **MAJOR** | "Not holding, hooking or bumping them while they have no puck" was a false limit. NHL/IIHF 54.1 say "whether or not … in possession"; hooking has no possession condition | :493, :512, :632: never hold or hook, puck or no puck; no bump without the puck, and none at all where checking is barred |
| | (e) | The screener walk-out ban was built as "they have no puck, so…", which is the "so" trap | :141, :527, :536, :551, :561, KT6 :932: "can be called interference wherever you play, and where checking is barred an illegal check as well" |
| | (j+) | Box-out and scramble lacked "keep their skates on the ice"; the exit at the wall lacked the fallback | added at :139, :693 and :809 (wording from defender.md) |
| systems/forechecking_systems.md | (k) **MAJOR** | "Arrive at full speed with a head start" (:729 facts, voiced alone, :745) contradicted the page's own speed control and Common Mistake | "get there early, with a head start" |
| | (l) | "The corners are yours / belong to you" tied "keep off the goalie" to the no-trapezoid case only | :850, :866, :887, Overview :55 and KT7 :1106: keep off the goalie in either case; the goalie may still touch a rimmed puck (IIHF Situation 27.9) |

No ⚠️ marker was added or removed. `check_marker_pairs` reports 0 LOST and 0 SPLIT across all seven files.

## Reviews

- **sgS** (safety-reviewer) reviewed all seven files and rendered each one with md_to_speech.
  - It found 1 MAJOR: the pinch now opened a body check with no from-behind limb. Fixed.
  - It found 6 MINORs:
    - the goaltender garden-path wording;
    - the center :547 tie-up had lost "never hook or hold it down";
    - the forecheck KT7 and Overview limbs;
    - the forecheck :866 antecedent;
    - the "so" shape in sibling pages (deferred, row (m));
    - naming F3 (declined: undefined on that page).
  - Its **final read** covered every follow-up, re-rendered six files and came back **CLEAR**. Its optional MINOR on center :261/:400 ("as little as two strides" heard as a floor) was applied by the coordinator, using KT18's reviewed form, "a run-up, even two hard strides, can be charging".
- **sgR** (rules-verifier) reviewed all seven files and confirmed every key claim against the primary text:
  - holding and hooking with no possession condition, across six books;
  - the every-book ejection;
  - USAH 624(b)(1);
  - the faceoff stick-on-stick rule;
  - the pinch gate;
  - IIHF Situation 27.9.

  It found 4 MINORs: the charge threshold, "is interference" overstating the label (reverted to "can be called"), the false "only", and "pre-drop" as optional (not applied). All the others were fixed.
- **Coordinator post-review edit (C11):** center :261 and :400 were changed to the KT18 wording the reviewers had already passed. No other text was changed.

## Gates (after the final content edit)

All run without a pipe:
- check_facts: pass
- check_links: pass
- check_absolutes: pass
- check_geometry: pass
- check_secrets: pass
- check_marker_pairs: 0 LOST and 0 SPLIT across the 7 files
- check_counts: no change
- `npm run build`: exit 0; check-links clean

## Dimensions

| Dim | Status |
|---|---|
| D1 rules | ✓ sgR, primary text in 13 source files |
| D2 sources | ✓ CARHA article refetched; owner pages (faceoffs.md, defender.md) matched |
| D3 cardinal | ✓ "your league's call" gates; no coaching choice stated as law |
| D4 propagation | ✓ claim-wide sweeps with a layer table per file. Row (m) ("so" shape in siblings) is deferred with a written decision request |
| D5 numbers | ✓ no new figures |
| D6 negative existence | Out of scope |
| D7 folklore | Out of scope |
| D8 qualifications | ✓ IIHF discretion kept as "plan on" |
| D9 facts | ✓ caps checked with --near; every changed facts line reviewed voiced alone |
| D10 safety | ✓ sgS, two passes plus a final read |
| D11 layer test | ✓ per file |
| D12 spoken | ✓ sgS rendered every file; same-chunk checked |
| D13 site | Build passed. No browser pass: prose-only changes, deferred to the "Site-reviewer pass due" row |
| D14 style | ✓ plain register; no new markers |
| D15 consistency | ✓ the charge and stick wording now match across center, and the faceoff wording matches faceoffs.md |

## What this method could not have found

- The same defects in sibling pages that the wave did not own. The "so" shape stands at goaltender, defender, on_ice_communication and a body_contact caption (row (m)).
- Charging thresholds in the EIHL Casebook and the IHUK ROCs, which were not swept.
- How the new limbs sound aloud. Text and SSML were checked; nobody listened.
- A legal technique done badly.
