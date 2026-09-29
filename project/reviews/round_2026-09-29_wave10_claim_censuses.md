# Round 29 September 2026, wave 10: claim censuses across fourteen documents

**Scope.** This wave was a claim census, not a re-aim. Every claim that waves 8 and 9 had found wrong in one document was hunted in every other document that repeats it. The brief was ten claims, C1–C10: covering the puck, "ask your officials", hips and back, "two routes", CARHA 32(d) "at least", crash the net / duty to avoid, stick-first shot blocking, the freeze in or out of the crease, a deliberate draw out of play, and HC 6.7(d). Each claim was fixed wherever it was permissive, in every layer. The work ran under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible".

**Files (fourteen content documents, three diagram modules and one build product):**

- `on_ice_communication`, `rules_primer`, `playing_without_the_puck`, `risk_management`
- `center`, `defender`, `goaltender`, `switching_positions`, `winger`
- `defensive_zone_coverage`, `faceoffs`, `game_management`
- `body_contact_and_battles`, `puck_handling`
- `site/src/diagrams/body_contact_and_battles.mjs` (the net-front diagram, redrawn), `game_management.mjs` and `rules_primer.mjs` (captions), and the rebuilt `site/src/data/diagrams.json`

**Lane rule:** a rules defect was repaired only if it was permissive and penalty-bearing; everything else was reported and carried.

## Method

1. One author per file, working in parallel.
2. Then readers on each file group and three `rules-verifier` passes (A: the walk-out cluster; B: risk, game management, faceoffs, center and winger; C: rules primer, switching positions, playing without the puck and puck handling).
3. Then fix rounds. Each round was read by a fresh `safety-reviewer`, and the later rounds also by a `rules-verifier`. There were six fix rounds. Rounds 5 and 6 were read in blocking-only mode, with minors carried rather than fixed.
4. A `site-reviewer` read the built pages and the redrawn diagram in a real Chrome engine (headless, driven through the DevTools protocol, because the extension refused localhost).

## The finding that reshaped the wave: the walk-out

**The ruling:** a net-front screener has no puck, so walking them off the spot is interference in every book. The sources are NHL and IIHF 56.2(i)/(iii), PWHL 57.2, USA Hockey 625(a)(4), Hockey Canada 8.3(i) and CARHA 66(a)(1). Nobody walks a screener out, in any game. The instruction is to hold the inside beside them, and to lift their stick low on the shaft, well below the bottom hand, as the puck arrives, then let go.

**How the reader found it:** an early reader found that the owner document, `on_ice_communication`, had been corrected to this, while `body_contact_and_battles`, `defender`, `goaltender` and `defensive_zone_coverage` still taught the walk-out for full-checking games. Those documents had been built on the old answer.

**The fix:** the coordinator ruled to demote the walk-out corpus-wide to "hold the position". It was fixed at more than 40 sites across five documents, plus the diagram.

**The diagram:** the owner chose "Redraw" for `net-front-walk-out-direction`. It now shows no route. Our defender holds the inside beside the screener, and a shaded band covers the crease, the goaltender and the net box, labelled "goal frame". The caption reads *"Your net front; who covers it is your team's call. ⚠️ Never walk a screener out, in any game: they have no puck, so it is interference. Hold the inside beside them, no lean, no push, and lift their stick below their bottom hand as the puck arrives, then let go. Move nobody into or across the shaded goal frame and goalie."* The host lead-ins in `body_contact_and_battles`, `defender` and `goaltender` say the same.

**Where the books differ, and how the text handles it:**

- "No lean, no push" is **coaching** in most books. It is a **rule** under CARHA 49(a): *"stands in front of an opponent for the purpose of making contact, and/or does not avert body contact"*. Every carrier says so.
- USA Hockey's Declaration and Casebook SoP Situation 5 allow leaning or steering without extended arms, so no layer calls "no lean" a USA Hockey rule.

**Interference is not capped at a minor.** The penalty ladder is:

- NHL 56.4 + 56.5 (game misconduct "shall" on an injury major)
- PWHL 57.4 + 57.5
- IIHF 56.4/56.5
- Hockey Canada 8.3(b): discretionary with nobody hurt, mandatory on injury
- CARHA 66(a), plus 66(e): a mandatory major on injury, which ejects under 30(a)
- USA Hockey 625 is a minor only. But a walk-out that becomes a check can be roughing under 640, a major plus a game misconduct on reckless endangerment via 640(g), which 640(d) reaches even in Adult Male. It can also be a cross-check under 609(b). Casebook 609 Situation 2 is set at the net front and carries its own counterweight: *"if a competitive advantage is gained and there is no puck in the area, an interference penalty may apply"*.

## The recurring defect of this wave: an implied cap by contrast

Four fix rounds running, a new sentence listed several books' tariffs, named the ceiling for some books, and left others unnamed. The unnamed books then read as capped.

- **Round 2:** "where checking is barred it is not capped at two minutes". The contrast implied a cap in checking games.
- **Round 3:** "every book here but USA Hockey, whose Rule 625 writes only a minor". This implied USA Hockey caps the walk-out.
- **Round 4:** "The NHL, IIHF and PWHL can make it a major … Hockey Canada … compulsory if they are hurt". This omitted NHL 56.5 and PWHL 57.5. A `rules-verifier` and a `safety-reviewer` found it independently.
- **Round 5:** `defender` KT3 said "five of the six put a major above the interference minor", and `defensive_zone_coverage` said "three of the four books". Both were pre-existing closed counts.

**What fixed it was fewer enumerations, not a longer list.** The Common Mistakes bullet in `defensive_zone_coverage` now says, in one sentence that names no ladder, that no book caps a walk-out at two minutes and every one can take it to a major and a game misconduct. The full ladder lives in one body paragraph only. This is the style guide's reframe — restatement count, not proportion — applied to a tariff.

## Other permissive, penalty-bearing fixes (every layer)

**Covering the puck (C1).** Split into three cases wherever a document mentions it:

- a caught and held puck is a stoppage (618(a));
- covering a loose puck is a 614(a) minor (Note; Casebook 614 Situation 1);
- in the crease it is a penalty shot or optional minor, and an awarded goal needs an "obvious and imminent goal".

This landed in `risk_management`, `faceoffs`, `center`, `defensive_zone_coverage`, `game_management`, `puck_handling`, `rules_primer` and `playing_without_the_puck`.

**A deliberate draw out of play (C9).** NHL and IIHF 85.1 and PWHL 87.1 exempt a puck off a faceoff "regardless", while 63.2(ii) prices a deliberate out from anywhere. The books do not reconcile the two, so every layer says to never aim one out. USA Hockey 610(c), HC 10.1(ii) and CARHA 75(b) have no draw exemption.

**The goaltender freeze (C8).** A freeze is earned by pressure or by being checked (63.2(vii)), not by wanting a line change.

- USA Hockey 614(c) now has all four limbs in `on_ice_communication`, and "takes that minor" matches its "shall".
- The Hockey Canada Interpretation 3 to 10.1(a) clauses are cited correctly: ii is the cover after a save, iv is jumping on the puck, and v is a freeze outside the crease, a minor with no warning.

**Goaltender contact (C6).**

- The attacker's duty to avoid comes from NHL/IIHF 69.1's effort proviso, the onus in HC 8.5 and CARHA 66(b).
- Charging a goaltender is a mandatory ejection under HC 8.5(b) anywhere, and under CARHA 52(b) in the crease or on injury.
- Every "crash the net" instruction now carries "under control, never into the goaltender".

**CARHA 32(d):** "at least" a one-game suspension.

**The stick lift.**

- Height: "low on the shaft, well below the bottom hand". IIHF 55.1 penalises a stick *"against … or near the opponent's hands"*, so "below the bottom hand" alone was not a clear safe harbour.
- Timing: "as the puck arrives, then let go". A held stick is a penalty (NHL 54.2, IIHF 54).
- `goaltender` "stops the opponent playing the puck" became "impedes", matching HC Interpretation 1 to 8.2(a) and USA Hockey 623.

**`on_ice_communication` :269.** "Two fouls from one act" became "can be called cross-checking instead" (Casebook 609 Situation 2; In-House "call the foul what it is"). The net-front emphasis is now credited to the USA Hockey Standard of Play, not the NHL. The NHL 59.4 match penalty was added by splitting the facts line.

**WNIHL.** `switching_positions` :226 now limits the IIHF 101.1 bodycheck permission in the same sentence that quotes it.

## Coordinator errors, recorded

Four sketches in the coordinator's own briefs were refuted by the agents that had read the text. A sketch is a claim.

1. **C9 "only an accidental out is exempt":** false against 85.1 "regardless". It propagated into seven files before a reader caught it, and was corrected everywhere.
2. **"A crease charge ejects in every book":** false. NHL and PWHL 42.1 are discretionary, IIHF 42.2–42.4 are discretionary, and USA Hockey 607(c) is minor plus misconduct or major plus game misconduct. The agent wrote "can eject in any book, and must under HC 8.5(b) anywhere and CARHA 52(b) in the crease or on injury".
3. **"In any game but USA Hockey's":** this understated USA Hockey where checking is barred (604(d)/(e)).
4. **The rink map "can be legally checked", taken from Casebook 607 Situation 5:** permissive against 607(d) Note 1, *"Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging"*. Fixed.

## Refuted premises

- "PWHL 84.1 is the wrong citation": both 83.4 and 84.1 print the line-change exceptions.
- The quote drift at `playing_without_the_puck` :337.
- The `body_contact_and_battles` :1798 scope.

## Markers

`check_marker_pairs` paired the spoken units against HEAD and reported **0 LOST** in all fourteen documents. Every "no longer present by key" candidate was paired by hand by a reader, and each successor carries its ⚠️.

- `defensive_zone_coverage` rose from 29 to 33 marked units: four new spoken escalations, including the women's-hockey paragraph.

**Post-build checks:**

- `--bare`: 0 on every page.
- Glyphs inside a `<strong>` run that got no treatment: 0 on every page.
- `--panels`: seven pages still carry panels (carried as a P2 row).

## Gates and build

- `check_links`, `check_facts`, `check_absolutes`, `check_geometry` and `check_zones` all exit 0, run without pipes.
- `check-arrivals`: 0 hard failures.
- `check_counts`: every figure matches.
- **Build:** the absolute npm binary ran 21:12:38–21:13:49 BST, exit 0, through the full chain to `check:links` (54 pages, 11,603 links, all resolve; 8 PDFs). The last wave-10 content edit was at 21:06, so the build covers it.
- `diagrams.json` was rewritten by the chain's `build:diagrams` step from the committed-to-be `.mjs` sources.

## Rendered site (`site-reviewer`)

**Result: CLEAR.** No critical or major finding on the 14 pages. The reviewer served the 21:13 `dist` read-only and did not rebuild.

**How it was run.** The Chrome extension refused `localhost` ("Could not verify this site's safety category"), so the reviewer drove a separate headless Chrome 154 through the DevTools protocol with a throwaway profile. The 400 px views are a real layout width (`innerWidth` 400, media queries applied), not a phone.

**What it checked:**

- **The redrawn diagram** on all three host pages, at 1440 and 400 px, in light and dark:
  - the caption matches word for word, and its ⚠️ part is inside `span.warn-inline`;
  - the band geometry was checked against the SVG (x 81.5–92.33, y ±4) and covers the crease, the goaltender and the net box;
  - all three lead-ins agree with the picture.
- **`defensive_zone_coverage`:**
  - `#dealing-with-the-screen` resolves from all four links;
  - there are 0 panels in that section, and the inline amber runs form;
  - both Common Mistakes items render.
- **The `on_ice_communication` facts block:** all 14 lines render as `dd.facts__value`, and the deep link lands below the header. The brief assumed ⚠️ in that block; there is none, so the premise was refuted.
- **All 14 pages:** 0 literal `**`, 0 bare glyphs, 0 untreated glyphs inside a strong run, and no horizontal overflow. There were no console errors and no response of 400 or above.
- **The theme toggle** works and persists across pages.

**Minors carried:**

1. The diagram labels "has the spot" and "holds the inside" cross the faceoff circle lines, and at 400 px the half-rink net-front scene is small. Owner: `body_contact_and_battles.mjs`.
2. `.warn-inline` has `padding-right: .3em`, which leaves a visible gap before punctuation that follows an amber run. This is corpus-wide (491 instances) and is a `global.css` fix.
3. In dark theme the rink's outer outline (`#1b1c1e`) almost disappears. This affects every diagram.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` A/B/C (round 1), a `rules-verifier` on rounds 2–4, a line-scoped `rules-verifier` on round 6, plus a `safety-reviewer` every round | Operative wording is quoted with `sources/` line refs in the OPEN_ITEMS "WAVE 10" log. |
| D2 | Exceptions | Yes | same | CRT6 airway; 85.1 "regardless" vs 63.2(ii); 614(c) four limbs; 640(b) Adult Male; the 609 Sit. 2 counterweight; the 625(b) pushed-in carve-out. |
| D3 | Rule-set divergence | Yes | same | Six books plus the British layer where a claim named it; USAH Declaration/Casebook vs "no lean"; CARHA 49(a) as a rule. |
| D4 | Citation integrity | Yes | readers and `rules-verifier`s | Every new quotation was checked verbatim against `sources/*.txt`, read past the closing mark. |
| D5 | Provenance | Partly | readers; `commit-gate` | ONE external URL was added: the WNIHL Rules of Competition PDF in the `switching_positions` trailer (:571). It is already cited elsewhere in the corpus, and the source is on disk as `sources/ihuk_wnihl_roc.txt` (`sources/README.md` :1611/:1626). The `commit-gate` re-verified the quoted *"Full ice, non-checking, stop clock"* (`:152-153`) and the trailer's negative that the document uses "checking" nowhere else (0 `body check` hits; the only other `check` is "eligibility checks"). The other trailer additions (pinning citations, the 32(d) quote, the 618 Situations) cite on-disk primary texts. **No `source-verifier` refetch was done**; declared out of scope on that basis. |
| D6 | Negative existence claims | Yes | readers and `rules-verifier`s | "No draw exemption" (USAH/HC/CARHA) was verified; "625 writes only a minor" was verified and then re-scoped; closed counts ("three of the four", "five of the six") were refuted and replaced. "No situation defines 'near'" is stated as a limit of method, not in content. |
| D7 | Cardinal rule | Yes | every reader | "No lean, no push" is coaching except under CARHA 49(a); who covers the net front is the team's call (the diagram caption says so). |
| D8 | Numeric ownership | Partly | readers | No new figures entered the corpus beyond rule numbers and tariffs; the diagram band geometry was checked against `check_geometry` and `check_zones`. Other figures were not re-derived; **declared out of scope**. |
| D9 | Summary layer | Yes | every reader | Layer tests for every claim, "this claim wherever it appears". The walk-out cluster was found as a layer built on an old answer. |
| D10 | Key-facts layer | Yes | readers | Each changed facts line was read voiced alone in rendered SSML; `check_facts` passed; caps were checked with `--near` before edits. No dedicated `facts-reviewer`; the readers covered it. |
| D11 | Reader safety | Yes | `safety-reviewer` on every round, including the round-5 blocking-only final read | |
| D12 | Read-aloud integrity | Yes | readers rendered with `md_to_speech` into their own `--out` directories | The Roman numerals were fixed after a reader found them voiced literally. |
| D13 | Folklore | Partly | readers | No new folklore-class claims were introduced; the existing craft labels were kept. The body was not swept for folklore; **declared out of scope**. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | The renamed headings/anchors (defender; DZC "Dealing with the screen") resolve from every link, on the tree and on an exported index snapshot. Body prose outside the changed units was not style-reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` | CLEAR. |

## Round-6 timing (C11)

The round-6 content edits were the last content writes of the wave, made by the two round-6 agents:

- `defensive_zone_coverage.md` at 21:05:55, by the DZC + on_ice agent;
- `on_ice_communication.md` at 21:06:14, by the same agent;
- `defender.md` at 21:06:14, by the defender agent.

Both agents reported finishing before the line-scoped `rules-verifier` was dispatched. That read covered exactly those edits and returned NOT BLOCKING. No content file among the staged paths was written after it. The equal 21:06:14 mtimes are the two agents' own final writes, landing in the same second.

## Weighed and judged minor: "below the bottom hand"

The bare "below the bottom hand" still stands in `body_contact_and_battles`, `defensive_zone_coverage`, `winger`, `center` and parts of `on_ice_communication`.

⚠️ **It does not always carry the release timing.** The `commit-gate` grepped each line in the staged bytes and found no "let go" or arrival timing at:

- `defensive_zone_coverage` :24 (Key focus), :133 and :819 (a Key Takeaway, voiced alone);
- `body_contact_and_battles` :39 and :1892 (a Key Takeaway, voiced alone);
- `on_ice_communication` :235/:256/:569/KT14 and DZC CM A, which were already carried.

**The MINOR rating is the round-5 final `safety-reviewer`'s** (its report listed the missing "then let go" as a carried minor and upheld the lift height and timing where it was stated). **The reasons below are the coordinator's, not that reviewer's:**

- neither line licenses holding the stick, and neither names a place at the hands;
- IIHF 55.1's "near the hands" has no defined distance;
- a held stick is priced separately (NHL 54.2, IIHF 54).

The five lines the `commit-gate` found were not named by any reviewer. The gate confirmed the lift clause in each is unchanged from HEAD, so this commit introduces none of them.

The coordinator accepted that rating to avoid a seventh fix round in files this commit ships. Both gaps are carried together as one corpus-wide row, to be done from the owner `body_contact_and_battles` outward: height ("low on the shaft, well below the bottom hand") plus timing ("as the puck arrives, then let go").

## Carried (not blocking)

- **The USA Hockey interference census.** About 15 documents present "625 is a minor" as the whole price of interference on a player without the puck. Do this as a claim census once a `rules-verifier` has settled the 640 hook. The trigger is "not in control of the puck"; the Glossary defines a body check as contact on the player in control of the puck.
- **The owner of the stick-lift height and timing.** `body_contact_and_battles`, `defensive_zone_coverage`, `winger`, `center`, `uk_rules` and parts of `on_ice_communication` still say "below the bottom hand" without "well" or "low on the shaft". "Then let go" is missing at:
  - `on_ice_communication` :235/:256/:569/KT14;
  - `defensive_zone_coverage` CM A, :24, :133 and KT :819;
  - `body_contact_and_battles` :39 and KT :1892.

  See "Weighed and judged minor" above.
- **NHL/IIHF interference ladders.** Search the corpus for "56.4 … a major" written without 56.5.
- **Other 625(b) carriers.** Brief it as "the IIHF can stop play too (Rule 69); HC and CARHA void the goal", never as USA Hockey-only.
- **Remaining panels (P2)** on `playing_without_the_puck` (1), `defender` (1), `winger` (4), `defensive_zone_coverage` (4), `game_management` (5), `body_contact_and_battles` (1) and `puck_handling` (5).
- **`on_ice_communication` :262/:277.** "Three of the four books reach a stick lift at the hands" uses a four-book frame in a six-book corpus. PWHL 56.1 and CARHA 64 carry no sentence about the hands, so this is not permissive.
- **`defensive_zone_coverage` :523.** "Narrowest of those" sits against the USA Hockey Declaration's "stand their ground" (the cautious direction). PWHL 57.1 is "in the feminine", not "in the same words".
- **HC Interpretation 3 clause iii,** the in-crease freeze with no pressure, after one warning, is not stated in `on_ice_communication`.
- **The CARHA lone-goalie Rule 16(i) Note 1** is an owner question (harsher).

## What this method could not have found

- **A permissive claim in wording none of the sweeps used.** Every census was lexical and started from a brief. The walk-out cluster was found only because a reader compared the owner document with its siblings. The "implied cap by contrast" shape leaves no lexical trace, and was found each time only by a reader who read the unnamed books.
- **Whether "low on the shaft, well below the bottom hand" is actually outside the IIHF's "near the hands" in the way a referee calls it.** No situation defines "near".
- **British competition regulations** (EIHL, NIHL, In-House) were checked only where a claim named them. No interference or roughing variation was searched for independently.
- **How a real TTS engine voices the new text.** The SSML was read de-tagged; no audio was synthesised.
- **Execution.** A correctly worded box-out or stick lift can still be done dangerously at speed beside a goaltender who is down.
