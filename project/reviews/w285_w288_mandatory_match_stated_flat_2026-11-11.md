# W285–W288: mandatory match penalties stated flatly, not under "plan on" (11 November 2026)

**Files:**
- **W285:** content/foundation/language_and_glossary.md, content/foundation/rules_primer.md, content/hockey-iq/playing_without_the_puck.md, content/hockey-iq/risk_management.md, content/technique/passing_and_receiving.md
- **W286:** content/positions/center.md, content/positions/goaltender.md, content/positions/switching_positions.md, content/positions/winger.md
- **W287:** content/systems/faceoffs.md, content/systems/forechecking_systems.md, content/systems/special_teams.md, content/systems/zone_entries.md
- **W288:** content/technique/body_contact_and_battles.md, content/technique/shooting.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This round works through two items from the commit gates on a2303de1 and 719a101a:
- **"Plan on" over a mandatory match.** That gate's note was folded into item (3) of the W281–W284 row.
- **The off-head carve-out still ending its sentence** at shooting :534 and forechecking_systems :223. This was item (6) of the same row.

A read-only rules-verifier census swept every `content/**/*.md` for "plan on" within 95 characters of "match". It found 349 hits and ruled on them. Its census files are in the session scratchpad (`pm/hits.json`).

**The ruling.**
- **When "plan on" is right.** "Plan on" is the house word for advice. It belongs where the *price* is uncertain. It does not belong where the only uncertainty is the *trigger*. The house form is "If [trigger], it is a match ([rule])".
- **Mandatory matches, verified in source.** Each of these says "will be assessed" or "shall be assessed":
  - Hockey Canada 7.4(c), 7.5(c), 7.6(c) and 7.7(c);
  - CARHA 48(a) and 53(b);
  - NHL/PWHL 21.1;
  - USA Hockey 602(a)'s attempt-to-injure limb.
- **The exception: USA Hockey reckless matches.** For a USA Hockey reckless named foul, the foul's own rule makes major plus game misconduct the mandatory reckless price. A later clause says a match "may also be assessed". So "plan on a match (602(a))" stays. About 250 sites use this form, and they are correct.
- **The scale.** About 44 sites undersold the match. Most were the repeated Hockey Canada head-contact sentence.

**The trap.** Last week two reviews blocked "can be called as head contact, a match if…", because "can" governed the match. The brief (MATCH_BRIEF.md) therefore required the match to have its own clause and its own finite verb.

## What changed
**The repeated Hockey Canada head-contact sentence** now reads:
> "…can be called as head contact instead; if they cannot protect themselves it is a match (7.6(c); 7.7(c)), but head contact's lowest rungs can keep you in the game, so plan on at least checking from behind's minor plus game misconduct anyway."

It appears in this form at:
- the glossary
- playing_without_the_puck ×3
- risk_management ×3
- zone_entries ×4
- center
- goaltender
- switching
- winger
- faceoffs
- forechecking ×3
- body_contact ×4
- shooting ×4
- passing_and_receiving

The floor keeps "plan on", and the match is flat.

**Other changes:**
- **Attempt-to-injure limbs, now flat:**
  - USA Hockey 602(a) at center :737 and :864, and forechecking :983. Each is split into "meant to injure: it is a match" and "reckless: plan on a match".
  - CARHA 48(a) at rules_primer :480 and body_contact CM :2069. The Hockey Canada half keeps "plan on", because it rests on the guide's disclosed reading of Appendix D Note 1.
  - Glossary KT11 is split. Its new sentence reads "An attempt to injure is a match in every book that writes one."
- **rules_primer :475** restores 7.5(c)'s condition, "so that they could not protect themselves".
- **The carve-out shape.** Two sentences used to end "…only while it stays off the head." before the head price. Both now say "and on the head plan on … anyway" in the same sentence: shooting :534 and forechecking :223.
- **Sites the census missed, fixed by the authors:**
  - body_contact :1384
  - rules_primer :823
  - shooting :912 (KT) and CM :945, which used the flat "on the head it is head contact" form (the reviewer's ruling)
  - switching :270 ("becomes head contact")
- **rules_primer :1074** (high-sticking table cell). It said "a match if … it was deliberate", but neither book's trigger is "deliberate". The cell now gives CARHA 62(b)/(c) and Hockey Canada 7.6(c)/7.7(c) separately. The speech renderer drops this table both before and after the change.

**No new ⚠️ was added.** Glyphs moved within their paragraphs, and each still leads a `**` run on the hazard:
- glossary :294
- risk_management :910
- center :737, :864 and :879
- switching :272

check_marker_pairs reports 0 LOST on all 15 files.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (read-only census and ruling) | 349 hits. About 44 were undersold (A), about 299 correct (B) and 6 unsure (C: facts lines of the form "plan on it; a match if defenceless", which need an ear test; plan row). |
| authoring agents ×4 | Checked the ruling against source. Rendered each change and confirmed every new match clause shares a chunk with its act and trigger. |
| safety-reviewer W285 | Nothing blocking. **WORDING**, applied verbatim: glossary :402's "at least that" could be heard as the match, so it now reads "otherwise still plan on at least 8.5(b)'s major and game misconduct". **Ruling**, applied verbatim: the rules_primer :1074 cell. KT11's "An attempt to injure is a match in every book that writes one" was verified exact (HC 7.4(c) and 8.5(c), CARHA 48(a), USAH 602(a), NHL/PWHL 21.1; the IIHF writes no match). |
| safety-reviewer W286 | Nothing blocking. **WORDING**, applied verbatim: the center facts :874 semicolon made the match sound universal across books, so it now reads ", and if they cannot protect themselves it is a match (7.6(c))" (298/300). Switching :270 "becomes" is now "can be called as head contact instead; if they cannot protect themselves it is a match". The optional bolding at center :737 was not applied. |
| safety-reviewer W287 | **BLOCKING:** special_teams facts :1107 said "defenceless, it is a match" with no condition, which is false for a defenceless goalie hit in open ice off the head. Fixed verbatim as two Rule lines: "…defenceless into the boards or net, or on the head, it is a match (7.5(c); 7.6(c); 7.7(c))", plus a separate NHL/IIHF/PWHL line. **WORDING**, applied verbatim: forechecking facts :973 ("…, it is a match …; short of that, plan on…"), and zone_entries ×4 "its lowest rungs" became "head contact's lowest rungs". Also flagged that the exception's "may also be assessed" rationale does not hold for 608 (plan row). |
| safety-reviewer W288 | Nothing blocking. **WORDING**, applied verbatim: shooting :534's split half regains "under Hockey Canada"; body_contact CM :2049 "its" became "head contact's"; shooting :912 and CM :945 now read "on the head it can be called as head contact instead, and it is a match if they cannot protect themselves — plan on…". Ruled that the Junior/Senior edge (Interpretation 2) does not make "if they cannot protect themselves it is a match" false: 7.7(c) has no violence qualifier, and the judgement sits in the "if". |

### After the first commit gate
The gate BLOCKED on two items:
- **B1.** The rules_primer :1074 cell kept its old closing sentence after the reviewer's replacement was added, so the cell repeated itself. The coordinator deleted the duplicate.
- **B2.** center :879's last sentence still put 7.5(c)'s mandatory boards match under "plan on". The census missed it because "plan on" sat more than 95 characters from "match". The coordinator rewrote it to the reviewer-approved special_teams :1114 form: "So **plan on checking from behind's price anyway, at least a minor plus a game misconduct; into the boards or goal frame on a player who cannot protect themselves, it is a match** (7.5(a), (c), (e))."

A narrow safety-reviewer re-check confirmed both edits CORRECT against hc.txt 7.5(a)/(c)/(e), 7.6(c) and 7.7(c). The center paragraph renders whole in chunk 062. The gate also noted that body_contact :798's glyph changed neighbours (the dash before it went); it still leads a strong run. The gate's other notes are in the plan row.

### C11
The authors wrote every change. The coordinator applied every reviewer wording verbatim and wrote the plan rows and this record. The two gate fixes (B1, B2) were coordinator-written and were re-checked by a separate safety-reviewer.

### Checks after the last content edit
- check_facts exit 0 (no pipe)
- check_links --quiet exit 0
- check_absolutes passes
- check_marker_pairs: 0 LOST on all 15 files
- check_tables unchanged
- full `npm run build` (absolute binary), started after the final content edit; `--bare` and `--panels` 0 on every changed page; dist has 0 literal `**`

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | the rules-verifier census and ruling, plus four safety-reviewers quoting hc.txt (7.4–7.7, 8.5, 8.8, 9.5, Appendix D), carha_2026.txt (48, 53, 62), usah.txt (602, 604, 607, 608, Standardized Discipline Policy) and NHL/PWHL 21.1 |
| D4 Citations | out of scope: no URL or citation changed |
| D5–D8 | not engaged |
| D9 Summary layer | KTs: glossary 11, shooting :912. Common Mistakes: playing_without_the_puck, zone_entries, body_contact ×2, shooting |
| D10 Key-facts layer | center :874, forechecking :973, special_teams :1107 (now two lines); each voiced alone and within its cap |
| D11 Reader safety | safety-reviewer ×4 |
| D12 Read-aloud | HEAD-against-tree renders on all 15 files; the match, trigger and floor confirmed in the same chunk |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; dist check-links |
| D15 Rendered site | build, plus panel, bare-glyph and literal-`**` scans |

## What this method could not have found
- A mandatory match softened by another verb, such as "expect", "assume", "count on" or "can be". The census swept for "plan on" only. "Expect a match" (7 sites) is unswept (plan row).
- The same fold applied to a mandatory game misconduct ("plan on ejection").
- Whether the 6 C-list facts lines sound as if "plan on" carries over to the match. That needs an ear test.
- Whether Hockey Canada 7.4(c) reaches a goalie charge (plan row).
