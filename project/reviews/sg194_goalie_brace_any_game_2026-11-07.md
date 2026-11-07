# SG194: the goaltender page applies the owner's 7 November ruling — a check in a checking game, the puck played off you in any game, while you have the puck outside the privileged area (7 November 2026)

**Files:**
- content/positions/goaltender.md
- project/plans/OPEN_ITEMS.md

## Source
**The question (SG193b):** the books do not say whether USA Hockey Casebook 607 Situation 5's "physically engage" a goalie who has the puck reaches non-checking games.

**Owner ruling, 7 November 2026 (asked in session, answered "Brace in any game"):** on the goalie page, "in a checking game they may check you; in any game, expect them to play the puck off you"; attacker pages stay checking-game only.

## The rules (verified on disk)
- **Casebook 607 Situation 5:**
  - "Although a goalkeeper can be legally checked when outside the privileged area, they are not considered to be "fair game.""
  - "When the goalkeeper has possession of the puck, the attacking player is permitted to physically engage with the goalkeeper in an effort to gain possession of the puck. However, any check delivered with the intent to intimidate or punish the goalkeeper should be penalized as charging."
- **Glossary, Physical Engagement:** players "allowed to reasonably lean into each other provided that possession of the puck remains the sole objective", under Competitive Contact, "encouraged in all age classifications".
- **604(a):** body checking barred at 12U and below, in Girls'/Women's and in non-check Adult play.
- **607(d) Note 1:** accidental contact is interference (625(a), a minor), deliberate contact is charging.

## What changed (eight goalie-facing sites)
- Sites changed: body :1234, :1259, :1264; facts :1244, :1245, :1285; Common Mistakes :1628; KT9.
- Each now says that outside the privileged area, while you have the puck, a checking game lets an attacker check you, and in any game you should expect them to play it off you.
- The any-game limb is always an expectation, never a permission.
- Each line keeps:
  - the possession condition and the outside-the-area scope;
  - the "never to intimidate or punish (charging)" bound where it carried one;
  - Situation 4's in-area rung at :1245;
  - every price ("an interference minor" restored at :1245).
- "A puck you hold" / "while you hold the puck" became "while you have the puck" ("with the puck" at :1245, for the cap), so a stickhandling goalie is covered.
- :1244's "them" became "an attacker".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (USA Hockey 607/604/625, Glossary, Casebook 607 Sit. 4–5, NHL 69.4, HC 8.5) | All eight PASS. "Check" is faithful (Situation 5's own "can be legally checked" and "any check delivered…"). :1234's comparative is still true. Optional: restore "minor" at :1245 (applied) |
| safety-reviewer, also standing in for content (rendered) | All eight SHIP. Optional: :1244 antecedent (applied). Noted that "a puck you hold" may miss a stickhandling goalie (applied). Eight restatements are needed while each line states Note 1; reduce by merging :1244/:1245 (in the plan) |

### C11
- One authoring agent made every content edit. The coordinator asked the owner, wrote the brief, the plan and this record.
- The post-review edits are the reviewers' own suggestions: the antecedent, the possession wording, and the restored "minor". Each moves the line toward the source, and no price changed.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets and check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier |
| D2 Exceptions | Situation 5 possession and intimidate/punish bound; Situation 4 inside the area |
| D3 Divergence | USA Hockey vs NHL 69.4 and HC 8.5 (the :1234 comparative) |
| D4 Citation integrity | Casebook 607 Sit. 4–5, 607(d) Notes 1–2, 604, 625 |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None new |
| D7 Cardinal rule | The goalie is told what to expect and brace for; the owner's ruling is labelled as the page's guidance, not a rule |
| D8 Numeric ownership | None |
| D9 Summary layer | Common Mistakes :1628 and KT9 changed with their bodies |
| D10 Key-facts layer | :1244, :1245 and :1285 compared limb by limb with HEAD, read voiced alone |
| D11 Reader safety | safety-reviewer (goalie reader braces; nothing licensed for an attacker) |
| D12 Read-aloud | Rendered; chunks 084–090, 121 and 130 read de-tagged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes, markers kept leading. No site-reviewer (declared) |

## What this method could not have found
- Whether "play it off you" makes a listener expect the Glossary's "lean" (body contact) or only stick play.
- Whether a goal is disallowed after a legal Situation 5 engagement (617(c)(4)/625; in the plan).
- "Hold"-type possession wording on other pages and captions.
