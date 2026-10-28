# SG126: next-game suspensions once per page on Defender, Offensive Zone Play, Goaltender and Special Teams (28 October 2026)

**Files:**
- content/positions/defender.md
- content/systems/offensive_zone_play.md
- content/positions/goaltender.md
- content/systems/special_teams.md
- content/systems/forechecking_systems.md (one wording fix only; see C11)
- project/plans/OPEN_ITEMS.md

## Why
On 21 October the owner ruled that USA Hockey's 404(b) next-game suspension is stated once per page: in the rules summary and in the key facts. On 28 October they extended the ruling to CARHA's 32(d). SG125 (10c0ce2) applied it to Forechecking. A census ranked the other pages by next-game lines; these four were the heaviest that no other wave was editing: defender 18, ozp 17, goaltender 16, special_teams 15. Body Contact (37) was held by SG124, and rules_primer (26) is the rules page, where per-rule statements belong.

## What changed
One agent per page followed the Forechecking model. Each page keeps one key-facts line that states both books: "Rule: An ejection can cost the next game too — under USA Hockey 404(b) any game misconduct also suspends you for the team's next game, at least two after a second major in a game (403(b)); CARHA 32(d) adds one game, possibly more, after a major's game misconduct…", plus one body statement per book. Per-line next-game clauses were removed elsewhere, and paired USA Hockey/CARHA clauses were removed together.

- **defender:** facts :280 and body :300 kept; 15 clauses removed; about 77 words saved.
- **offensive_zone_play:** facts :985, body :716 (CARHA, now with the accidental-high-stick exception) and :990 (USA Hockey) kept; 16 edits; about 89 words saved. :536 now reads "if it injures or is intentional, add a game misconduct" (the 62(b) Note). :1057 and :1089 gained "a major and ejection" after "if it injures" (79(a) with 30(a)).
- **goaltender:** facts :740 and body :755 kept; 13 lines; 57 words saved.
- **special_teams:** facts :656 and the body statement kept; 11 clauses removed; 26 words saved.

The following were kept as different facts: every 602(a) "likely multi-game" match suspension, the IHUK DOPS C.1 one-game bans, 30(a) and 32(a) ejections, and the tariffs.

## Reviews
Eight reviewers ran in parallel, a rules-verifier and a safety-reviewer per page.

| Page | rules-verifier (usah.txt 404(b) :2531–2546, 403(b) :2444–2449; carha_2026.txt 30(a) :1364–1372, 32(a), 32(d) :1450–1454, 62(b) + Note :2955–2978, 79(a), 63, 49, 52, 80; word-diffs) | safety-reviewer |
|---|---|---|
| defender | All 4 items CONFIRMED on 13 lines; only next-game clauses went; no cross-book pairing; "an accidental high stick escapes the ejection unless it injures (62(b))" correct | SHIP. Minor wording nit at :280 (see C11) |
| offensive_zone_play | All CONFIRMED. :536 and :1057/:1089 rewordings correct. Note: an asymmetry at :990, which is not a cross-book pairing | SHIP. Every ejection survives at every site |
| goaltender | No WRONG. Once-per-page statements CONFIRMED. Same :740 wording nit | SHIP. :708 "if it injures, a major and ejection" correct |
| special_teams | All four checks correct. The CARHA half of facts :656 leaves out the 32(d) accidental-high-stick exception (harsh direction) | SHIP |

All four authors ran check_marker_pairs with 0 LOST; the safety-reviewers confirmed it.

### C11
Two coordinator edits were made after review:
- **The reviewers' wording nit**, applied identically to all five once-per-page facts lines, including forechecking :582 from SG125. "USA Hockey 404(b) suspends any game misconduct for the team's next game" became "under USA Hockey 404(b) any game misconduct also suspends you for the team's next game". This is the defender safety-reviewer's own fix wording. The claim is unchanged: the rule suspends the player, not the penalty.
- **OZP facts :985**, to fit the 300 cap after that change: "unless the major was an accidental high stick" became "unless for an accidental high stick", which is defender's already-reviewed wording.

check_facts, check_links and check_absolutes pass; check_marker_pairs reports 0 LOST across all five files.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier on each page |
| D2 Rules travelling without exceptions | rules-verifiers word-diffed every changed line; only next-game clauses removed |
| D3 Rule-set divergence | No cross-book pairing on any page; Hockey Canada correctly absent (4.8(c)) |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | Out of scope, declared by the coordinator: no absence claim changed |
| D7 Cardinal rule | safety-reviewers: none |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | safety-reviewers: Common Mistakes and Key Takeaways keep their instructions |
| D10 Key-facts layer | safety-reviewers: each once-per-page facts line is voiced alone and clear |
| D11 Reader safety | safety-reviewer on each page |
| D12 Read-aloud integrity | Every page rendered by its author and its reviewer |
| D13 Folklore | None |
| D14 Structure, style, terminology, cross-links | check_links passes; edited paragraphs under 1,200 characters |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No structure changed, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
- The facts lines on special_teams :656, goaltender :740 and forechecking :582 omit the 32(d) accidental-high-stick exception (harsh; found by the commit gate).
- Next pages for the same trim: winger (14), shooting (13), dzc (12), pwtp (11), then pages with 10 or fewer. Body Contact (37) is free now that SG124 has shipped.

## Accepted by the ruling, not carried
- A listener who starts at a section far from the once-per-page lines no longer hears the next-game cost there.

## What this method could not have found
- Next-game wordings outside the swept set ("miss the following fixture").
- Whether the USA Hockey Casebook narrows 404(b).
