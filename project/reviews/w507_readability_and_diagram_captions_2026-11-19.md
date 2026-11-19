# W507 — readability and diagram captions (19 November 2026)

This wave turned from the six head-contact and after-icing consistency waves back to the owner's priorities: readability and diagrams. Four editing agents worked in files that did not overlap:

1. **Diagram captions** in `site/src/diagrams/*.mjs`.
2. **offensive_zone_play.**
3. **body_contact_and_battles.**
4. **skating, passing_and_receiving and language_and_glossary.**

The coordinator changed one shared tool between waves: `scripts/check_caption_pairs.py` gained a dependency declaration, described below.

## Review

- **Safety-reviewer.** Read the captions, passing_and_receiving, skating and the body_contact sentence splits. It found no critical or major issue. It upheld the winger-dz-reverse cut (below) and found one minor: the backhand paragraph had lost "never duck". That was repaired.
- **Content-reviewer.** Read all of it. It found one **major**: offensive_zone_play's Common Mistakes still sent readers to "Tips and deflections" for each book's high-stick ceiling after that material had moved. The link still resolved, so no checker could see the problem. It also found these minors, all repaired:
  - the corner caption handed every reader the defenceman's role;
  - the goalie caption dropped "with time";
  - the skating sentence told readers to pick a reverse in advance, when the reverse is only to a teammate who calls it;
  - stale or false module comments;
  - mixed nouns in one drill caption;
  - offensive_zone_play readability nits;
  - an uncited USA Hockey and Hockey Canada stoppage.
- **Site-reviewer.** Ran a structural pass (see D15) after the first commit gate blocked for lack of one. It found no critical or major issue.
- **Rules-verifier.** Read the new offensive_zone_play facts lines. It found the new abandonment line **wrong for USA Hockey**, in the territory direction: Casebook 621 Situation 12 lets the opponent alone stop play by declining the puck, with the faceoff in the offending team's end. USA Hockey now has its own line, citing 621(d) and Situation 12, and the body paragraph carries the same correction. "Only once" became "once".
- **Repairs after the last reviewer read them.** These were:
  - the USA Hockey split and body clauses;
  - the moved body_contact citation;
  - the skating and passing_and_receiving fixes;
  - the caption minors;
  - offensive_zone_play "The crossbar and shoulder tests decide the goal, the whistle and the faceoff" → "The rules above decide…", which the first commit gate found overclaiming.

  Each is confined to its finding, re-derived by its author from primary text or taken from the reviewer's own sketch, and widens no claim. This is the C11 terminating case.

## Changes

### Captions

- **goalie-safe-outlets** (goaltender.mjs; W483(1)).
  - The brief's premise was false: the caption carried no ⚠️.
  - The real defect was an echo. Its slogan repeated the host's "In short" straight after.
  - It now names what is not drawn: "leaving it for a defenceman with time, and clearing along the glass rather than over it".
- **winger-dz-reverse** (positions.mjs; W458(1)).
  - The whole wall limb was cut, taking the caption from 731 to 328 characters. Its only ⚠️ went with it.
  - The safety-reviewer **upheld** the cut for both hosts, winger.md and passing_and_receiving.md. In each, winger-dz-rim's caption, which carries the full limb, is voiced directly before it. The winger.md body carries the prohibitions at :99–100, :125 and :126, and KT6 repeats them. The lost "Important." does not matter because the caption now states no hazard.
  - `check_caption_pairs.py` now declares winger-dz-reverse → winger-dz-rim (every host). It requires the rim caption to keep "never turn your back", "never duck" and "chin off your chest". The check passes.
- **corner-escape-routes** (body_contact_and_battles.mjs; W459(2)).
  - The old "Your defenceman is standing in it" was wrong twice: the drawn defenceman is the reader, and is arriving, not standing.
  - It now reads "You are the player drawn, a defenceman under this guide's default, arriving…".
- **W487 sweep.** All 204 diagrams were dumped and every role word was checked against the glyphs drawn. Seven captions or describes called a drawn forward a "defender", across five modules:
  - playing_without_the_puck;
  - practice_and_development;
  - puck_support_and_spacing;
  - shooting;
  - offensive_zone_play.

  All seven are fixed. No ⚠️ moved.

### offensive_zone_play (W437)

- The eight-paragraph high-stick list item became its own `### When a tip is a high stick` section, with the text moved unchanged. A line-by-line comparison showed no wording removed.
- The 8 high-stick Rule lines moved with it, so each now traces to its own section. There is a new In short, a new Action line and a short pointer bullet.
- The render state is unchanged: 0 panels before and after, and 79 spoken "Important." before and after, paired paragraph by paragraph.
- Two facts lines that pointed back at the line above now name the books.
- Common Mistakes and Check yourself Q5 are retargeted to the new section.

### body_contact_and_battles

- **W497 premise.** The record's "~66 words" was stale, measured by an older splitter. That item's longest sentence is 54 words, 39 of them a verbatim quotation, so it was left alone.
- **New long sentences from this session's waves.** The three longest in the file were the Hockey Canada head-contact ladder that W503–W506 wrote: :799 at 82 words, :1391 at 62 and :2069 at 61.
  - All three are split into sentences of 35 words or fewer.
  - Every limb and citation is kept, and the :799 citation now closes its run.
  - The ⚠️ still leads one strong run, and every paragraph still says "Important."
  - The file's longest sentence is now 60 words.

### skating, passing_and_receiving, language_and_glossary

- **skating** (W459(1)) gained one sentence: "a chip or rim picked before you arrive, or a reverse to a teammate who has called for it, moves the puck on as you get there".
- **passing_and_receiving :134** (W459(3)). The third, inherited copy of the wall warning became the hit-from-behind reason plus "keep your head up and never duck".
- **language_and_glossary :458, :505 and :540** (W483(2)). "Nothing behind you if you miss" became "a miss leaves only your partner and goalie back", matching the owner defending_the_rush :796.

## Gates on the final tree

- `check_counts --update`: no change.
- `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs` (5 dependencies, 8 phrases, 0 missing) and `check-arrivals`: all exit 0.
- `build-diagrams`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, with 57 pages and 13,069+ links resolving.
- `check_callout_flow --bare`: 0.
- No `<p>*` in dist.
- `check_marker_pairs`: 0 lost.

## New plan rows (From W507)

| Row | Subject |
|---|---|
| (1) | Re-measure sentence length across the W504–W506 files. |
| (2) | defending_the_rush :752 contradicts its own :796 ("nothing behind you"). |
| (3) | The angle-into-the-corner caption may overstate: "takes you out of the collision". |
| (4) | offensive_zone_play "follow the tip up" for a USA Hockey tipper's own team. |
| (5) | Sweep shooting for the corrected USA Hockey Situation 12 claim. |
| (6) | The offensive_zone_play :580 quotation cut. |
| (7) | No browser look at the changed captions. |
| (8) | positions.mjs stale comments. |
| (9) | support-triangle's generic "defender". |
| (10) | Four diagram-legibility minors from the site review. |

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. The rules-verifier read NHL/IIHF/PWHL 72.3/74.3, 80.1–80.3/82.1–82.3, 60/61, USA Hockey 621 and its Casebook Situations 7, 10, 12 and 15, HC 6.9 and its interpretations, HC 7.6/7.7, and CARHA 62. The safety-reviewer read HC 7.6/7.7. |
| D2 exceptions | Covered: Situation 12 (opponent declines); the 80.1 washout. |
| D3 cross-book divergence | Covered: the high-tip goal test, the whistle and the faceoff by book. |
| D4/D5 citations | Covered by the rules-verifier for the new facts citations. No URL was added. |
| D6 negative existence | Covered: "USA Hockey writes no crossbar test" was verified by flattened search. |
| D7 cardinal rule | Covered: the corner caption now names the defenceman role as this guide's default. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered: the Common Mistakes and Check yourself retargets in offensive_zone_play. |
| D10 facts layer | Covered: the new block traces to its own section, with antecedents at 0. |
| D11 reader safety | Covered: the safety-reviewer upheld the caption cut and the minor was repaired. |
| D12 read-aloud integrity | Partly covered. The agents rendered their files, and the safety-reviewer rendered winger and passing_and_receiving. The repairs were not re-rendered. No ear test. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: check_links; the stale link found by the content-reviewer. |
| D15 rendered site | Covered structurally by a **site-reviewer**, which the first commit gate required. Chrome was not connected after 3 tries. On 11 built pages it found every changed caption byte-identical to diagrams.json; warn-inline forming where intended and absent where intended; winger-dz-rim directly followed by winger-dz-reverse on both hosts; the new OZP section, its facts panel and its anchor all resolving; 0 bare and 0 untreated glyphs; and the body_contact_and_battles :799 ⚠️ forming one wrapper across four sentences. It **viewed all 9 regenerated PNGs** plus winger-dz-rim, and each drawing matches its caption by pixel geometry. It found no critical or major issue; its four legibility minors are plan row W507(10). Not covered: themes, 400px layout and the console. |

## What this method could not have found

- **Visual-only readers.** A reader of the winger-dz-reverse picture outside its two hosts loses the wall limb. Only the adjacency check guards a future host.
- **Pronoun and spatial role errors.** The role-word sweep keyed on nouns, so a caption naming a glyph by pronoun or by "the checker" would pass. It also cannot test spatial claims.
- **The British Elite League reading of 72.3 and 80.1.** The EIHL Casebook was not read for the high-stick changes.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
