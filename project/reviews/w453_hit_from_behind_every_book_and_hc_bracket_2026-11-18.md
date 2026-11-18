# W453: a hit from behind no longer "ejects in every book", and the Hockey Canada bracket no longer scopes its ejection to the head (18 November 2026)

**Content file changed:** systems/special_teams.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W452 (1).
- **Brief:** scratchpad/w453/brief.md. It carries the W446 brief text; the author worked from the dispatch message.
- **Authors:** one agent, over three rounds.
- **Brief premise refuted:** the brief cited Hockey Canada 7.3. The rule is 7.5.

## What changed (voiced: two facts lines, each voiced alone)
- **:659 (Rule:, 297/300).**
  - Before: "a hit from behind ejects in every book (IIHF, and Hockey Canada on the head: plan on it); USA Hockey if forceful…".
  - After: "a hit from behind ejects (Hockey Canada always; IIHF and head contact: plan on it); USA Hockey only if forceful at the boards, head first or reckless, else at least minor and misconduct; …".
- **:1114 (goalie, 298/300).** The same bracket was repaired.
  - To fit the cap, the clause numbers 7.5(c) and 53(b) were dropped. 7.5(c) is still at :1115, and 53(b) at :817 and :1121.

**Why each round happened:**
1. **"Every book" was false.** USA Hockey 608(a)'s lowest call is a minor plus a misconduct, and the line's own USA Hockey clause already said so.
2. **The first repair, "in most books", was WRONG on wording (rules).** The bracket then sounded like the list of which books, and so dropped NHL, PWHL and CARHA, which eject unconditionally.
3. **The second repair (the rules text, a bare "ejects") drew a safety MAJOR.** "Hockey Canada on the head: plan on it" told a Hockey Canada listener the ejection needed a head hit. In fact HC 7.5(e) is mandatory on every checking-from-behind call.
   - Rules had kept "on the head" for a real reason: the HC 7.6 preamble says "any foul that results in contact to the head must be penalized as Head Contact", and 7.6(a) is a minor in minor and female hockey.
   - The final bracket carries both points.

**Unchanged after reading:** the other layers already agreed with the books. These are :666, :816, :825, :1109, :1127, CM :1242 and :1273, KT :1337, and the British summary :1214.

## Book text (read this wave)
| Book | Rule | Hit from behind |
|---|---|---|
| NHL | 43.2/43.5 | no minor; game misconduct on any major |
| PWHL | 43.2/43.5 | same as NHL |
| IIHF v1.1 and 2026/27 | 43.2/43.3 | no minor; major + automatic game misconduct at discretion, where the hit recklessly endangers |
| USA Hockey | 608(a)–(c) | minor + misconduct or major + game misconduct; (b) reckless or head first; (c) match |
| Hockey Canada | 7.5(a)/(c)/(e), Interpretations 1–4; 7.6 preamble and (a); 7.7(a)/(b) | 7.5(e) game misconduct on every call; a head hit is called under 7.6/7.7 |
| CARHA | 53(a)/(b) | minor + game misconduct or major + game misconduct; (b) match |
| EIHL Casebook, In-House | — | no Rule 43 entry, so the IIHF applies |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **Round 1:** "most books" true, bracket WRONG (text supplied). **Round 3:** both lines OK. "Head contact: plan on it" holds in every book. Optional nit: :1114 lacks "only". |
| safety-reviewer | **Round 1:** CLEAR on "most books", plus an optional bracket point. **Round 2:** MAJOR, the HC ejection was scoped to the head. **Round 3:** CLEAR. |
| site-reviewer | special_teams at 400×812 DPR 2 light/dark and 1440 light, on the 12:29:25 build. Worst window unchanged. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ 89 = HEAD. Both built facts values carry the new bracket. |

### C11
The coordinator wrote no content. The final bracket is the author's reconciliation of the two reviewers' texts, and both reviewers confirmed it.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 12:29:25; special_teams.md is 12:27:32.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0, and `--panels --file` reports 0.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | as tabulated above, plus USAH 620(a)/(b) and IIHF 48.2 for head contact |
| D2 Exceptions | HC 7.6 supersedes 7.5; HC Interpretations 1 and 3 |
| D3 Cross-book divergence | USA Hockey is the only book whose lowest call does not eject |
| D4 Citation integrity | HC 7.5, not 7.3; dropped numbers still carried elsewhere in the file |
| D5 Provenance | not engaged |
| D6 Negative existence | no Rule 43 in the EIHL Casebook or In-House Rules (searched) |
| D7 Cardinal rule | "plan on it" where the book is discretionary |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | every special_teams layer of the claim read |
| D10 Key-facts | both lines voiced alone (chunks 035, 069) |
| D11 Reader safety | safety-reviewer, three rounds |
| D12 Read-aloud | bracket position heard as a scope; resolved |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed
- **Rules nit:** :1114 says "USA Hockey if…" where :659 says "only if". There are 2 characters of headroom.
- **switching_positions facts :244:** "checking from behind ejects (IIHF or Hockey Canada head hits: plan on it)". This is the same shape of bracket, but it names the case. It needs a reviewer's read.
- **Not searched:** other rules that price a hit from behind, such as boarding or cross-checking.

## What this method could not have found
- How HC referees call a head-reaching hit from behind in practice.
- Real synthesised audio.
