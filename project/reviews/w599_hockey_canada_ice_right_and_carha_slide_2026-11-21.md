# W598–W599: Hockey Canada writes no "ice you are standing on", CARHA's slide relief, and USA Hockey icing by level (21 November 2026)

## W598 (read-only)

**Prose chunk-tail grants (safety-reviewer).** `check_chunk_tails --prose` found 274 hits: 0 at Tier 1 and 1 at Tier 2. The Tier 2 is glossary :464: "every book" lets a shorthanded team ice the puck, but USA Hockey 624(b)(1) limits that by level (`usah.txt` ~:4411-4416).

**Correction to the brief:** a chunk is a 300 ms break inside one audio file.

**CARHA (rules-verifier, carha_2026.txt).**
- **Goalie cover:** goaltender is right at every site. CARHA has no save-then-cover exception and no privileged area: 58(b), 61(b), 74(b), 55(a) Note 2. 75(c) (knock it off the netting) was missing.
- **Slide:** this is opposite to USA Hockey.
  - 86(a) names "falls or slides … causing the puck carrier to trip".
  - The Note under 86(b) ignores "the tripping" only where the puck is knocked "from their opponent's stick prior to making actual body contact".
  - The 86(a) Note excuses a hook-check that "obtains possession".
  - There is no shot-block exception, and 49(a) can still price contact that follows.
  - risk_management and dtr were silent on CARHA.

**Hockey Canada (rules-verifier, hc.txt, the current book; hc_2026-08-print.txt is superseded).** Hockey Canada writes **no** right to the ice you are standing on:
- 8.3 interference reaches impeding any opponent "who is not in possession of the puck" (:6785-6789) and bars running "deliberate interference for the puck carrier" (:6811).
- In the non-checking divisions (7.3, :6004-6007: U13 and below, female hockey, others approved), deliberate contact with "opposite-directional force" is a body check (:6020-6023). Incidental contact is excused only "in the same direction".
- On injury, both are a mandatory major plus game misconduct.

time_and_space ("entitled to the ice you are standing on", exempting only CARHA) misled Hockey Canada readers, many of them children. The NHL, IIHF, PWHL (56.1/57.1) and USA Hockey (Preface) do grant it.

## W599 edits (three agents, disjoint files)

**Hockey Canada scope**
- **time_and_space:** body :295 now leads "Under Hockey Canada or CARHA, go round them, and do not wait for them to run into you", then gives the reasons. Also changed: facts :277, CM :665, self-test :694–696.
- **core_principles:** :95, :97, CM :251, KT10 :265: "hold only ice you already have and never lean into anyone to keep it", and find out whether your league plays Hockey Canada rules or is CARHA-affiliated. KT10 was then trimmed to 55 words; CM :251 keeps the full CARHA ladder.
- **body_contact:** Key focus :23 wording. :471 gains 7.3 Interpretation 1's narrow "right to close off the boards" without contact.

**CARHA slide**
- **risk_management:** new paragraph (~:697).
- **dtr:** new Rule facts line :544 (299/300), body :555, carve-outs :1053.
- **body_contact:** :1825 now reads "in CARHA, only one who knocks it off the opponent's stick first". :121 changed too.
- **rules_primer:** :1186 says only the trip is excused and 49(a) still applies. A split put the slew-foot limb into its own continuation (:1188, with a new ⚠️; slew-foot is a match or ejection in four books).
- **defender:** :843.

**USA Hockey**
- **rules_primer :1186:** the puck-first relief is restated to Casebook 639 Situations 2 and 4, matching risk_management :673/:699.

**Other**
- **glossary :464:** "under USA Hockey, only at the levels named below", and "every book that grants it".
- **goaltender :450:** adds CARHA 75(c).

**Citation check.** W597's four Hockey Canada citations from the superseded August print are word-identical in hc.txt.

## Review

**safety-reviewer, three passes.**
1. OK, with one Minor, permissive: body_contact :1825 said "touches the puck" for CARHA, which is too loose. A sweep found the same looseness at body_contact :121 and defender :843. All three were repaired and re-checked: correct for both books.
2. The penalty-shot question: a listener will not infer CARHA removes 86(c), because where the trip is excused there is no foul.
3. The two readability repairs (KT10 trim, rules_primer split): OK. "Can eject you" is the right strength for 49(a).

## Rows

**Closed:** W597(1) and W597(2).

**Filed (From W599):**
- CARHA's 49(a) limb is silent at switching_positions :301 and dtr :544/:555.
- Whether Hockey Canada 8.3 reaches a stationary defender.
- body_contact's narrower-than-Casebook USA Hockey wording (errs safe).

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w599b.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 9 files.
- `check_readability`: 0 long paragraphs; 1 long Key Takeaway (mental_game, by ruling).
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Hockey Canada body position:** a Hockey Canada rule granting position under wording not searched, or Member or officiating guidance not on disk.
- **CARHA league by-laws.**
- **Audio.** Not rendered.
