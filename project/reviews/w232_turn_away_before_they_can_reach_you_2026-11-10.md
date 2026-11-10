# W232: "turn away from pressure" carries its limit — before the defender can reach you, side-on, never your back (10 November 2026)

**Files:**
- content/hockey-iq/time_and_space.md
- content/systems/game_management.md
- content/systems/zone_entries.md
- content/hockey-iq/scanning_and_anticipation.md
- site/src/diagrams/zone_entries.mjs (the `entry-delay-curl` caption)
- site/src/data/diagrams.json (rebuilt)
- project/plans/OPEN_ITEMS.md
- this record

## Source
The W231 commit gate's first follow-up. In W231 a safety-reviewer had BLOCKED puck_handling's "when pressure arrives from one side, turn away from it": voiced alone, it tells a player to show their back to an oncoming checker. The gate found the same instruction, unchanged, in three other documents.

The W232 safety ruling found that open ice alone does not make the turn safe:
- USA Hockey 608 Note (sources/usah.txt:3713-3718): checking from behind "includes body checking or pushing an opponent from behind in open ice or directly into the boards or goal frame".
- The corpus's owner sentence (body_contact_and_battles ~:904): "Never turn your back to anyone coming at you … at any speed and in any league".

What makes the curl safe is turning before the defender can reach you, side-on to them. The wall rule is a second limit on top.

The second follow-up, whether "pressing… high on their shaft" overstates the USA Hockey Casebook, was ruled on by a rules-verifier: **no change**. Standard of Play Situation 3 says a press done "higher up on the stick" is slashing, holding or hooking. The gate had read Situation 4, which is about hard slashes.

## What changed
1. **time_and_space** (HAZARD; no limit in any unit or chunk). Sites: Key focus :14; facts :56, :144, :616; bullets :67, :640; body :141; Common Mistakes :653; KT3 :715. All now carry "before the defender can reach you", side-on, and never your back to anyone coming at you, with "in open ice" for the curl.
   - The Common Mistakes bullet described a back-on pin. It now mirrors puck_handling's W231 fix: hip and backside between the defender and the puck, never your back.
   - "Puck on the outside of the turn" became "puck on the far side of your body from them" (:14, :141). Turning away from a defender who is level with you or closing from the front puts the outside of the turn on their side for the first half of the turn. The new wording is the corpus's own (winger, time_and_space :213).
2. **game_management** (HAZARD; a wall retrieval with a forechecker coming). Sites: facts :547, body :559. They now read "turn up ice side-on to the forecheck — shoulder-check first, and never your back to anyone coming at you".
3. **zone_entries.** The reach limit was added to every site that teaches the delay curl or the drive and delay. The first commit gate BLOCKED because :458 (the crisscross "Delay in open ice" bullet) had been missed: it treated open ice alone as safe and narrowed the hit-from-behind consequence to "at the wall". It now reads "turn away while the defender is still out of reach, never your back to anyone coming at you", with the consequence "in open ice as much as at the wall". A re-grep added the limit at :36 (Overview), :412, :579, :592, :908 and :909 (facts) and the :914 bullet. Sites:
   - in the brief: Key focus, :415, :550, :558, :575, KT7;
   - outside the brief, found by the author: :412, :430, :447, :533, :545, :551, :909, :948, :1156.

   Narrowings of never-your-back to "near the wall" or "there" were removed at :412, :447, :560 (blockquote), :909, :948, :1156 and :1223, and the "at the wall" one at :458. The override now reads "in open ice as much as at the wall". After the second gate, :447 and :586 (facts lines voiced alone) gained the reach limit in the safety-reviewer's wording: "made while the defender is still out of reach" and "Curl at the wall or within a defender's reach — curl in open ice".
4. **scanning_and_anticipation :53.** "turning away from the pressure" became "turning side-on to the pressure".
5. **The `entry-delay-curl` caption** (voiced alone into zone_entries and time_and_space; coordinator edit). It now reads "before the defender can reach them, they turn away…", and "never turn your back to anyone coming at you near it" lost "near it". The code comment quoting the old blockquote was updated.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (press high on the shaft) | The first reviewer is right (Casebook Standard of Play Situation 3). body_contact ~:453 stays. No other book ties legality to the part of the shaft. |
| safety-reviewer (ruling on the claim, corpus-wide) | HAZARD: time_and_space ×9 and game_management ×2. Minor: zone_entries, including three wall narrowings. OK: offensive_zone_play :779/:789, puck_handling :549, body_contact :904, and the different acts (fight, pivot, flying puck). Gave replacement sketches. |
| authoring agent | Applied in every layer and found 11 more zone_entries copies. Refused two sketches with reasons: (a) "cut away side-on" for a defender LEVEL with you, because a pivot away from someone beside you passes through back-to-them, so the safe condition is distance; (b) game_management "puck away from it", an unchecked geometry claim. It flagged the caption and the "puck on the outside" mechanics. |
| commit-gate (first run) | BLOCK: zone_entries :458 missed (the record's "every site" was false). Every other copy, the caption and diagrams.json were correct. |
| safety-reviewer (narrow, after the :458 repair) | BLOCKING: the author's ":458 … side-on to them" promised a posture the drive-and-delay cannot deliver (a turn away from a level defender passes through back-to-them; distance is the safeguard). Replaced with its wording. :36, :412, :579, :592 and :909 safe. RECOMMENDED: :908 facts gains the reach limit, applied (and the :914 bullet). 43.1 limb re-verified for NHL, PWHL and IIHF. |
| commit-gate (second run) | BLOCK: zone_entries :447, a drive-and-delay facts line in chunk 032 with no reach limit in its unit or chunk; the record's narrowing list named the wrong lines. Both fixed (wording supplied by the safety-reviewer and applied verbatim). |
| safety-reviewer (re-check of the wave, including the caption) | CLEAR, nothing blocking. Every instruction unit carries its limit in its own unit or chunk; the caption reads safely voiced alone. Both refusals upheld. No CARHA line is needed: turning away before the defender can reach you is averting contact, and 49(c) excludes accidental contact. RECOMMENDED R1–R3: side-on and never-your-back into zone_entries :550 and :545; "puck on the far side of your body" for time_and_space; side-on into :616. The :415 note was optional. All applied in its wording. |

### C11
- The coordinator edited the diagram caption (two phrase changes, sketched by the author) and applied the re-check's four wordings verbatim.
- After the first gate, the author repaired :458 and found five more sites; the coordinator applied the narrow safety check's :458, :908 and :914 wordings verbatim.
- Coordinator slips, caught and fixed before staging: a doubled dash at zone_entries :415, and a second "puck on the outside" wording at time_and_space :14 that the first replacement missed.
- The caption edit was read by the re-checking safety-reviewer in the rebuilt diagrams.json and in the rendered audio.

### Checks after the last content edit
- check_facts exit 0, run with no pipe.
- check_links --quiet exit 0.
- check_absolutes exit 0, after build-diagrams.mjs rebuilt the caption layer.
- check_marker_pairs: 0 LOST and 0 SPLIT on the four files; marked units unchanged.
- Full `npm run build` (absolute binary) exit 0 after the final edits.
- check_callout_flow --bare 0.

No site-reviewer ran this wave. These are phrase changes inside existing paragraphs, facts lines and one caption, with no markers, structure or bold changed. The build, the bare-glyph check and the rendered audio cover them.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules, exceptions, divergence, citations | USA Hockey 608 Note; USA Hockey Casebook Standard of Play Situations 1–4; NHL, IIHF, Hockey Canada and CARHA slashing; CARHA 49(a)/(c) |
| D5 Provenance | not engaged |
| D6 Negatives | "no other book ties a press's legality to the part of the shaft", from a sweep |
| D7 Cardinal rule | the tactic is kept everywhere; the limit is added |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | Key focus, Common Mistakes and Key Takeaways corrected in time_and_space and zone_entries |
| D10 Key-facts layer | 11 facts lines changed; each carries its limit standing alone |
| D11 Reader safety | safety-reviewer ×2 (ruling and re-check), rendered |
| D12 Read-aloud | four documents rendered twice; caption verified voiced alone |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build |
| D15 Rendered site | build plus bare-glyph check (see above) |

## What this method could not have found
- The same act described as a pivot, spin, cutback or wheel in documents not opened, and "near the wall" narrowings elsewhere (plan row).
- Whether a correct turn started too late is still dangerous. That is execution, not wording.
- The rendered diagram SVG was not viewed; only the caption text was checked.
