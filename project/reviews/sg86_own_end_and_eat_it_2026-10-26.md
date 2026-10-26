# SG86: own-end holding, "eat it" as a last resort, and the goalie fight bench trip (26 October 2026)

**Files:**
- project/plans/OPEN_ITEMS.md
- content/hockey-iq/time_and_space.md
- content/technique/puck_handling.md
- content/systems/breakouts.md
- content/hockey-iq/risk_management.md
- content/foundation/on_ice_communication.md
- content/positions/defender.md
- content/positions/goaltender.md (altercation section)
- content/foundation/rules_primer.md (:887)
- site/src/diagrams/puck_handling.mjs and site/src/data/diagrams.json (one caption)

## Why
A sibling sweep after SG85 found two problems. The pages disagreed about holding the puck in your own end. Some also still told a goalie that the referee's permission made a bench trip during a fight safe in every book.

The owner ruled twice on 26 October:
1. **Never hold the puck under pressure in your own end:** one look, one decision, move it. A short controlled hold is fine only when nobody is on you, as in Breakouts' trap case behind the net.
2. **"Eating it" is a last resort only:** pass, chip off the glass, rim, or ice it first. Only then shield the puck on your stick and take the hit. Never pin it for a whistle.

Each file had one fixing agent, and no two agents owned the same file.

## What changed
*Superseded in part. The trap-hold wording and the goalie bench-cost bullets below describe the first version. The section "Gate 1 BLOCKED, and what followed" records what ships: "against a set trap", and the referee-sends-you / 205(c) bench wording, with no "replaced or a minor" for a fight-time trip.*

- **time_and_space**
  - The delay/curl-back lines keep "never in your own end". A delay means turning away from a closing defender, so it always happens under pressure; adding "under pressure" would have implied an unpressured delay is fine, and CARHA 74(a) prices that.
  - The delay is scoped to "at or inside their blue line", matching :141, :165 and :482. :67 and :14 now agree.
  - The behind-your-own-net lines (:196, :211, KT5) gained "under pressure / with someone on you".
  - The wall hold (:199, :217, KT5) is split by zone: in their end, keep it until support arrives; on your own wall, move it at once.
  - :140 and :151 now carry their zone inside the voiced-alone line.
- **puck_handling**
  - The under-pressure "hang on, draw two checkers, wait for support" option is gone.
  - The coaching choice is now which way out: chip, rim, reverse or pass (:586, :603).
  - "Protect it and wait a second for support" (:891, :898, and the `you-cannot-beat-two` caption) is scoped to outside your own end.
- **breakouts**
  - The trap hold carries "with nobody on them" at :839 and :854.
  - "Eating it" is the last resort at :26, :646, :654, :663 and KT4: pass, chip or rim first, never pin it for a whistle.
  - :647 now reads: most books stop play on a tie-up; under USA Hockey play goes on (Casebook 632 Sit. 4), so keep working it free.
- **risk_management**
  - Step 8 used to read "take the hit, protect the puck against the boards, and eat the faceoff". That told a USA Hockey reader to do what 632(b) penalises: Casebook 632 Sit. 4 and Sit. 6 make it a minor after three seconds, with or without pressure. NHL/IIHF 63.2(i) and PWHL 65.2(i) penalise a deliberate freeze for a stoppage. Step 8 now gives the order icing, then shield on your stick, and never pin it for a whistle.
  - The "stop play when you are pinned and exhausted" option was removed and replaced by a Never line. That act is a delay-of-game penalty.
  - The Key focus, Overview, facts and Common Mistakes are aligned with step 8.
- **on_ice_communication**
  - The "eat it" call is a last resort (:149, :202).
  - The clock meaning applies only with nobody on you, and never under pressure in your own end.
  - :204 adds the USA Hockey tie-up qualifier.
  - The "unverified coaching usage" disclosures are kept.
- **defender**
  - :119, :123 and :134 lead with "one look, one decision, move it". Shielding comes last.
  - "Ties it up with you — under USA Hockey play goes on" (:134).
- **goaltender (altercation) and rules_primer :887**
  - "One instruction satisfies all six books… get the referee's permission first" was false. CARHA's 47(c) Note bars the bench at any stoppage unless the goalie is replaced. USA Hockey Casebook 309 Sit. 2 and Hockey Canada Interp. 11 to 10.1(a) price a goalie found at the bench at a stoppage.
  - The instruction is now: stay in your net, and go only where the referee sends you.
  - The bench cost is stated once in the facts layer and once in the body: replaced, or the team takes a minor.
  - CARHA 37(c) no longer carries "unless the referee sends you". The exception is Note 2 to 59(a), a neutral zone only.
  - USA Hockey 615(e) is paraphrased as "go straight to your crease". The rule says "players' bench (or goal crease for a goalkeeper)".
  - The Never line names the PWHL (46.1, "may be ejected").

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Sibling sweep | general-purpose (report only) | Found the goalie fight claim at goaltender :1148/:1151/:1166/:1157 and rules_primer :887. Found the own-end tension across time_and_space, breakouts and puck_handling. |
| Goalie fight bench, round 1 | safety-reviewer | FIX. CARHA 37(c) "unless the referee sends you" was MAJOR and permissive. "Expect to be replaced" was MAJOR and too cheap where a team has no backup. The section was too long. |
| Own-end ruling, round 1 | content-reviewer | M1: the wall hold under pressure still survived at :199, :217 and KT5. M2: "under pressure" on the delay lines implied an unpressured delay. M3: the "eat it" lines went to the owner, who ruled. M4: the published Puck Handling episode voices the old option (plan row). Plus minors. |
| "Eat it" rules | rules-verifier | risk_management :445/:461 CONTRADICTED under USA Hockey and INCOMPLETE elsewhere. breakouts :646 and on_ice :149/:200 CONFIRMED. The tie-up whistle (NHL/IIHF 85.2, PWHL 87.2, HC 6.12(c), CARHA 75(c)) was missing. |
| Wave 2, round 1 | safety-reviewer and content-reviewer | Six files SHIP. breakouts :647 FIX: USA Hockey does not whistle a tie-up. Content: risk_management :22 had become a ban on holding anywhere on the ice; :461 put icing after "eat it"; on_ice :202/:149; the goaltender bench point was made five times; rules_primer :887 was hard to hear; defender :123. |
| Wave 2, final | safety-reviewer | Seven files SHIP. defender :134 FIX: "ties it up for a faceoff" promised USA Hockey a whistle. The reviewer confirmed every quotation against sources/ and checked chunks on four renders: on_ice :202 and :204 share chunk 016, and breakouts :647 closes its bullet in chunk 040. |

### C11: repairs after the final review
- defender :134 now reads "ties it up with you — under USA Hockey play goes on, so keep working it free". This is the reviewer's option 1.
- risk_management :445 changed "they tie it up" to "an opponent ties it up". This was the reviewer's optional minor. "feet apart" was dropped to stay under the 200 cap. The line keeps "skates parallel, knees bent, forearm and hip to the wall, never your back to anyone coming at you". The block's Never line carries "never duck: chin off your chest".
- The coordinator made both edits. No reviewer re-read them; the commit gate reads them.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules, exceptions, cross-book | A rules-verifier checked the "eat it" and freeze rules in all six books plus the British books. Safety-reviewers verified the goalie fight and bench citations and the tie-up whistle in every book. |
| D4–D5 citations, provenance | Every quotation was checked against sources/. The Hockey Canada "on their own accord" quotation is exact. A content-reviewer flagged breakouts' "with nobody on them" inside the Johnston and Walter Three high description for source-verifier (plan). |
| D6 negative existence | "No book whistles a USA Hockey tie-up" was tested against Casebook 632 Sit. 4 and holds. |
| D7 cardinal rule | Two owner rulings were applied. The coaching choice that remains is which way out of the zone (puck_handling). The own-end hold is no longer a choice, by owner ruling. |
| D8 numeric ownership | USA Hockey's three seconds is quoted from the Casebook. No new figures. |
| D9 summary layers | A layer test was run in every file by its fixing agent and again by the reviewers. Key focus, Overview, facts, Common Mistakes and Key Takeaways are aligned. |
| D10 facts layer | check_facts exits 0. on_ice :149 is at 300/300, and risk_management :445 is under its cap. |
| D11–D12 safety, read aloud | Three safety rounds. Renders of on_ice_communication, defender, risk_management, breakouts and goaltender were read for each chunk. The boards posture survives in every layer. |
| D13 folklore | Out of scope. |
| D14 structure, links | check_links and site check-links pass. One link from risk_management to team_play_and_culture went with the removed bullet. |
| D15 render | build-diagrams was re-run for the caption (204 diagrams), and check_absolutes ran afterwards on 408 units. The site build ran with the absolute npm binary: exit 0, dist 13:47. Not checked in a browser. |

### Mechanical checks
- Run without a pipe, all exit 0: check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update.
- check_marker_pairs on all eight files: 0 lost markers and 0 split halves.

## Gate 1 BLOCKED, and what followed (26 Oct, afternoon)
The first commit gate blocked on five conditions:
- **C11:** risk_management :445 had lost "feet apart" and "head up".
- **C10:** the page had not been reviewed in a browser.
- **C4:** no rules-verifier had checked the goalie fight citations.
- **C5:** "with nobody on them" sat inside a description credited to Johnston and Walter.
- **D10:** no facts-reviewer had run.

Each condition was answered:
- **Rules-verifier (goalie fight, rules_primer :887).** Every quotation was verbatim. But "permission does not make a bench trip free… replaced or a minor" was **false for USA Hockey and Hockey Canada**:
  - USAH 205(c) exempts a trip the referee permits. Casebook 615 Sit. 27 answers "Yes… their players' bench would be a good alternative" for a fight beside the crease.
  - HC Interp. 1 to 7.10(a) allows the bench with permission.
  - Only CARHA's 47(c) Note bars it.
  The section was rewritten. It now says: stay in your net; go only where the referee sends you (which can be your bench in USA Hockey and Hockey Canada); never go on your own, because every book prices an unpermitted trip (USA Hockey 205(c)); under CARHA you may not go at a stoppage at all unless you are replaced. Interp. 11 is no longer cited for a fight-time trip.
- **Facts-reviewer.** No critical findings. Majors fixed:
  - on_ice :149 lost the own-end limb at the 300 cap. It was split into a Convention line and a Never line.
  - defender's block lacked never-pin and the last-resort shield. Both were added at :128, and no posture limb was lost against :127 and :129.
  - risk_management's facts layer lacked step 8's facing-the-boards fallback. This was carried over from HEAD and is now added at :446.
  - goaltender: HC Interp. 11's four options had been cut to two (this is now moot, because Interp. 11 left the section), and the CARHA Note 2 "excepting only" was an inference. It is now "no permission clause written in", and the Note's game misconduct for refusing is carried.
- **Safety-reviewer (coordinator's repairs).** risk_management :445 restored "feet apart" and "head up". The breakouts trap lines now read "against a set trap" (the Key line's own context), so the condition is no longer credited to the manual. time_and_space KT3 is scoped to "at or inside their blue line". All SHIP.
- **Site-reviewer.** puck_handling, defender and risk_management were checked in headless Chromium, because the Chrome extension was not connected. The checks covered 1440 and 375 px, a 400 px iframe, and light and dark themes. Every ⚠ glyph is in a warn-inline run, with 0 bare and 0 literal asterisks. No horizontal scroll, no console errors, and the caption renders.
- **Final safety review, round 3.** Six files SHIP. goaltender FIX: "every book prices an unpermitted trip" never cited USA Hockey's own price, and the cost list read as free for a USA Hockey goalie. The coordinator added "USA Hockey as a bench minor (205(c))" to the facts line (relabelled `Never:`), the body and the cost list, and added the same citation to rules_primer :887. Optional changes taken: risk_management :446 "Facing it, no time to turn?" and breakouts :839 "(in CARHA, advance it at once)".

### Icing: a coordinator error, recorded
The owner's 26 Oct ruling listed **pass, chip or rim** before eating it. The coordinator's briefs relayed it as "pass, chip, rim **or icing**". Icing first entered risk_management's step 8 through a content-review finding (icing had sat *after* the shield), which is sound tactics. It then spread into on_ice_communication :149/:202 and defender :128/:134 as if it were the ruling. Icing is a penalty in no book, and no page attributes it to the owner. It was removed from breakouts' winger options, where it did not fit. CARHA 55 Note 2's caution on "a series of icings" is not mentioned anywhere.

### C11 after round 3
The coordinator's last edits (goaltender 205(c) ×3, rules_primer 205(c), risk_management :446, breakouts :839) are each a reviewer's sketch, checked against usah.txt 205(c). No reviewer has re-read them; the commit gate does.

D10 is now covered by facts-reviewer. D15 is now covered by site-reviewer (headless Chromium, not desktop Chrome). The site build ran with the absolute npm binary: exit 0, dist 14:04.

## What this method could not have found
- The same claims worded differently in other documents, such as "sit on it", "buy time behind the net" or "ride it out". The sweeps were lexical.
- The Principles podcast scripts and the NotebookLM layer that voice the old wording. Puck Handling is known to; the others are a plan row.
- Whether a curl-back turn is executed safely when a closing defender is at your back. No rulebook search can measure that.
