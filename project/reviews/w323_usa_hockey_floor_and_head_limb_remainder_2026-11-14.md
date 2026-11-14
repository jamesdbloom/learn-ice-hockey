# W323: USA Hockey's ejecting tiers and head-contact limb in game_management and special_teams, and 620(b) in the facts layer (14 November 2026)

**Files:**
- content/systems/game_management.md
- content/systems/special_teams.md
- content/systems/offensive_zone_play.md
- content/systems/zone_entries.md
- content/positions/winger.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The W322 plan row, items (1) and (2). W322's ruling and canonical wording (project/reviews/w322_usa_hockey_hit_from_behind_tiers_2026-11-14.md) carried over unchanged.

## What changed
- **Floor-only USA Hockey prices** now use W322's shipped form: "even a light one is at least a minor plus a misconduct; it ends your game if it is forceful at the boards, drives them head first into the boards or net, or is reckless, and so does careless contact with their head or neck".
  - game_management :1176.
  - special_teams :664 and :820. These two were found by claim; they were not in the brief.
  - special_teams Common Mistakes :1262 / :1264. HEAD's spoken chunk 081 ended on "Under USA Hockey it starts at a minor and a misconduct", with the tiers in 082. The tiers and the head limb now sit in :1262, so chunk 081 ends on "If it is reckless, plan on a match and a likely multi-game suspension". :1264 keeps the three-book mandatory match.
- **The 620(b) head limb** was added beside a Hockey Canada head limb at:
  - game_management :1223, Common Mistakes :1284 and KT14;
  - special_teams :1102, :1119 and KT8;
  - winger Common Mistakes :900.
- **Facts layer, edited in place** (each at or under 300 characters):
  - game_management :1188, a block at HARD_MAX;
  - special_teams :1105 and :1107;
  - zone_entries :795.
- **Facts layer, new line.** Where the line was full but its block had room, the author added a Rule line after the 608(c) line: "Rule: USA Hockey 620(b) must give at least a major and game misconduct for careless or intentional contact with an opponent's head, face or neck — a hit from behind included". It sits at special_teams :659, zone_entries :242 and :848, winger :703 and offensive_zone_play :1171.
- **Could not take the limb:** offensive_zone_play :949. It is at 297/300 and its block is at HARD_MAX. Its "IIHF or head hits: plan on it" is not cheaper than the book (plan row).

## After review (coordinator applied reviewer wordings verbatim)
- **special_teams :1107 (safety-reviewer, recommended).** "head first, reckless or careless to the head" could be heard as one limb, so a reckless hit that misses the head would sound as if it does not eject. That is cheaper than 608(b) and Casebook 608 Situation 1(3). The line now reads "head first, careless to the head or reckless", at the same length.
- **game_management :1188 (rules-verifier).** "reckless, head first into boards or net, or forceful at the boards" could be heard as one condition. It now reads "reckless, forceful at the boards, or head first into boards or net".
- **special_teams :1262 (rules-verifier).** "even a light one" reached back about seven sentences. It now reads "even a light hit from behind".
- **The 620(b) Rule line, all five sites (rules-verifier).** "must give a major and game misconduct" became "must give at least a major and game misconduct". Casebook 620 Situation 3 allows a match, and Situation 4 requires one for an excessive-force check to the head.
- **zone_entries :795 (safety-reviewer, optional).** "careless on the head" became "careless contact with the head", to keep it apart from "head first".
- **Not applied:** restoring "and" at special_teams :1107 (optional, no change of meaning, line at the cap).

## Reviews
| Reviewer | Result |
|---|---|
| author | Brief premises verified in usah.txt and the Casebook. Harness on all 12 changed ⚠️ units: 14 glyphs, 14 warn-inline, 0 asides. Renders: each changed sentence is whole in its chunk. |
| rules-verifier | Nothing blocking. Re-read 608, 620, 602(a), Casebook 608 Situation 1 and 620 Situations 1–4, NHL and PWHL 43.4, both IIHF 43s (a flattened sweep finds no match tier), HC 7.5, CARHA 53, and the EIHL and In-House books. "Every book but the IIHF can make it a match penalty" is true of the five others. The :1262/:1264 reorder loses nothing but a "(608(a))" citation. Four WORDING items, three applied. |
| safety-reviewer | Nothing blocking. 0 LOST; harness 1:1, 0 asides; 0 panels. :1262/:1264 diffed against HEAD paragraph by paragraph: no limb lost, and chunk 081 ends safely. "Head first" beside "careless head contact" is not confusable at :701/:703 or :1188. W1 (:1107) recommended and W2 (:795) optional, both applied. Residual gaps R1 (offensive_zone_play :949) and R2 (offensive_zone_play :1174) logged. |

No narrow re-check was run on the five applied wordings. Each is a reviewer's exact text, confined to its finding: a reorder or a substitution inside one line or sentence. check_facts, check_marker_pairs and the build were re-run on the final bytes.

### C11
The W323 author wrote the wave. The coordinator applied the reviewers' wordings verbatim and wrote the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary, exit 0) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all five files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, as above |
| D4 Citations | 620(b) and 608 citations added, verified in the book |
| D5–D8 | not engaged; the wording follows W322's verified form |
| D9 Summary layer | KTs and Common Mistakes in game_management and special_teams; winger Common Mistakes |
| D10 Key-facts layer | eight facts lines, each voiced alone, checked by both reviewers |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | author and both reviewers rendered the changed files |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every changed marked unit; no site-reviewer (text only) |

## What this method could not have found
- **Other documents.** Every search was confined to these five files. Other documents may carry the floor-only USA Hockey shape (plan row). So may a unit that prices the act in words that avoid "minor and a misconduct".
- **Concurrent assessment.** Whether 608 and 620 are assessed together is not settled on disk.
- **Compressed facts lines.** Whether :1188, :1105 and :1107 can be followed by ear needs a listening pass.
- **Duplicated line.** The same 620(b) Rule line now appears twice in zone_entries, in different sections. check_layer_echo was not run.
