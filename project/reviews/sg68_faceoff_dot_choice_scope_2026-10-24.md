# SG68: who picks the faceoff dot, by book; a delayed-penalty tactic; stale comments (24 October 2026)

## What changed

**Claim:** "the team going on the power play, or the attackers after an icing / frozen shoot-in / dislodged net, picks the dot." This was stated with no book named on four pages.
- **Who grants the choice:** only NHL 76.2/81.2/63.8, IIHF (both editions) and PWHL 78.2/83.2/65.8.
- **Hockey Canada 6.4(b):** Junior and Senior only, only after an icing or a time penalty in the end zone, and only if the team names the dot before the line change.
- **USA Hockey and CARHA:** no choice.
- **CARHA 39(a):** a power-play draw goes to the dot nearest the incident, toward the offending zone, and never in the power-play team's own zone. So it can be in the neutral zone.

**rules_primer**
- :907 rewritten to lead with the reward. It scopes the choice to NHL/IIHF/PWHL and adds the HC condition and "USA Hockey and CARHA give none".
- :903 "usually"; :124 "under the NHL and IIHF".
- Table rows :912, :913, :917 and :918 scoped, plus CARHA's penalty location. The table is still voiced (check_tables passes).

**faceoffs**
- :151 (facts) scoped with HC restored. An interim version dropped HC, which made "NHL, IIHF and PWHL only" false by omission for HC readers; the verifier caught it.
- :169 scoped, and the unsourced "since 2019-20" date dropped.
- :170 "(CARHA differs, below)".
- :186–:190 CARHA bullet; :984/:985 facts; :993 now leads with the instruction; :1069, :1083 and the CARHA icing bullet.
- **New tactic paragraph** after :993: "**On a delayed penalty against them, keep the puck and don't hand the referee a whistle of your own.** Ice it and, under USA Hockey, Hockey Canada and CARHA, the power-play draw leaves their end for a neutral-zone dot outside your own blue line (612(b)(4); 6.3(c)(iv); 39(b)). Under USA Hockey any whistle you cause costs you their end (612(b)(4)); under CARHA so does a puck you put out of play from your own zone, or an offside pass over the red line."

**special_teams**
- :1012 (facts) scoped.
- :1013 "USA Hockey and CARHA impose none".
- :1031 shortened and scoped.

**goaltender**
- :488 scoped to NHL/IIHF/PWHL (63.8, PWHL 65.8).

**Code comments only** (captions byte-identical; `git diff site/src/data/diagrams.json` was empty after a rebuild):
- body_contact_and_battles.mjs and risk_management.mjs: stale notes about the SG67 trims corrected.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules (C4) | rules-verifier ×3 | **Pass 1:** all dot-choice claims verified, with two fixes: HC must declare before the line change, and the :912 penalty location is wrong for CARHA. It also listed the sibling sites, now fixed. **Pass 2:** verified, except faceoffs :151 (HC dropped; fixed) and the "since 2019-20" date (unconfirmed on disk; dropped). Trim sketches applied. The British overlay (EIHL Casebook, In-House 2026-27) does not amend 76.2/81.2, so "everywhere in Britain" holds. **Pass 3:** seven of eight verified. The new tactic was incomplete for USA Hockey, where 612(b)(4) covers any violation and Casebook 612 Situations 11–13 confirm it. The coordinator applied the verifier's sentence. |
| Gate BLOCK and repair | commit-gate, owning agent, rules-verifier pass 4 | The gate blocked on a sentence the coordinator added after pass 3: "USA Hockey does the same for any whistle you cause…". It implied "outside your own blue line", which is false for a carried-in offside (630(c)) and an attacking-zone hand pass (612(c)); both go outside the opponents' line. The owning agent rewrote it against the books, and HC 6.3(d) was checked (no gap; HC moves the draw only for icing). Pass 4 VERIFIED every clause, confirmed that 612(b)(4) plus Casebook 612 Situation 12 support "any whistle you cause costs you their end", and supplied a shorter verified paragraph. That paragraph replaced the longer one. |
| Safety (C6) | not dispatched | No contact, equipment or penalty-exposure claim. These are faceoff locations and choice. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_geometry, check_secrets, check_counts, check_links and check_tables all exit 0. check_marker_pairs on 4 files: 0 lost. |

## Dimensions

D1–D3 covered by the rules-verifier. D4–D5: rule numbers verified. D6: "give none" swept in USAH and CARHA, flattened. D7, D8 and D13 out of scope. D9: claim layer-tested across facts, table, body and Common Mistakes. D10: facts caps checked with `--near`. D11: no safety change. D12: not rendered. D14–D15: check_links, check_tables and the build.

## What this method could not have found

- Whether the NHL, IIHF or PWHL write a delayed-penalty draw rule. "Delayed" has many hits in those books, but NHL 76.2 lists no delayed-penalty location exception. That was checked; the other hits were not each read.
- When the NHL introduced the dot choice (no change log on disk).
- How far apart the facts lines and body qualifiers fall in audio chunks (not rendered).
- In-season EIHL Casebook updates.
