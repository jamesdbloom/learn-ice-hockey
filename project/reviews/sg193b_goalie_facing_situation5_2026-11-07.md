# SG193b: goaltender lines that promised more protection than USA Hockey gives now tell the goalie to expect legal engagement for a puck they hold (7 November 2026)

**Files:**
- content/positions/goaltender.md
- project/plans/OPEN_ITEMS.md (SG193b open question added)

## Source
SG192 found that USA Hockey 607(d) Note 1's "deliberate contact is charging" is the cautious reading for an attacker, but over-promises to a goalie reader, who then does not brace. A read-only rules-verifier census (SG193, scratchpad census_sg193/classified.json) checked every goalie-facing unit in the corpus and the diagram captions:
- 3 OVER-PROMISES-GOALIE, all on goaltender.md;
- 26 CORRECT;
- 40 N/A.

No other book has the shape:
- **Hockey Canada 8.5:** "must make an effort to avoid contact in all circumstances… unnecessary contact with the goaltender anywhere on the ice". There is no possession carve-out.
- **CARHA 66(b):** flat on "deliberate contact … whether in or out of the goal crease".
- **NHL/IIHF 69.4 and PWHL 71.4:** incidental contact permitted only while the goalie plays the puck, after a reasonable effort to avoid it.
- **British books:** no change.

## The rules (verified on disk)
- **USA Hockey 607(d) Note 1:** "any accidental or unavoidable contact … shall be penalized under the Interference rule. Any deliberate body contact or check … shall be penalized as charging."
- **Casebook 607 Situation 5:** "Although a goalkeeper can be legally checked when outside the privileged area, they are not considered to be "fair game." … When the goalkeeper has possession of the puck, the attacking player is permitted to physically engage with the goalkeeper in an effort to gain possession of the puck. However, any check delivered with the intent to intimidate or punish the goalkeeper should be penalized as charging."
- **Casebook 607 Situation 4:** inside the crease or privileged area, a hard drive followed by an honest attempt to avoid is a minor plus a misconduct.
- **604(a)–(c):** body checking is barred at 12U and below, in Girls'/Women's and in non-check Adult play.

## What changed
- **body :1234:** "On contact, though, both protect you more than the NHL does — except that in a USA Hockey checking game, outside your privileged area, while you have the puck, an attacker may engage you for it."
- **facts :1245 (297/300):** "USA Hockey 607(d) Note 1: unavoidable contact is an interference minor, deliberate contact charging — but in a checking game attackers may engage you outside your privileged area for a puck you hold (Casebook 607 Sit. 5); in the area, driving hard then pulling out is minor and misconduct (Sit. 4)".
  - The advice-only opener "Do not ask for the top tier on every bump" was dropped to fit the cap; body :1259 keeps it in bold.
- **body :1259:** appends "— though in a checking game, outside your privileged area, while you have the puck, an attacker may engage you for it (Casebook Rule 607, Situation 5)". The limb now reaches the listener in the same chunk as Note 1, where before it waited for the next chunk.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (read-only) | 3 OVER-PROMISES-GOALIE on goaltender.md; the other books checked and clear |
| rules-verifier (USA Hockey 607/604, Casebook 607 Sit. 4–6, HC 8.5 preamble/Interp. 1 and 8.3 Interp. 2, NHL 69.4) | :1234 and :1259 PASS (the comparative is now true for both books); Common Mistakes :1652 PASS; FIX wording at :1245 ("inside it" bound only by inference aloud). Open question: non-checking games (in the plan) |
| safety-reviewer, also standing in for content (rendered) | All four SHIP; each line now tells a goalie to expect legal engagement outside the area, and none licenses contact inside it |

### C11
- One authoring agent made every content edit. The coordinator wrote the brief, the plan and this record.
- The post-review edit at :1245 is the rules-verifier's own measured wording.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets and check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 (census, review) |
| D2 Exceptions | Situation 5 possession permission and its intimidate/punish bound (:1244); Situation 4 inside the area |
| D3 Divergence | Goalie protection compared across six books plus the British layer |
| D4 Citation integrity | 607(d) Notes 1–2, Casebook 607 Sit. 4–5, 604, 8.5, 69.4 |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | No Hockey Canada possession carve-out (flattened search; a true negative, recorded as such) |
| D7 Cardinal rule | Goalie lines give what to expect and brace for |
| D8 Numeric ownership | None |
| D9 Summary layer | Common Mistakes :1652 judged and left |
| D10 Key-facts layer | :1245 compared limb by limb with HEAD |
| D11 Reader safety | safety-reviewer; the goalie-reader direction |
| D12 Read-aloud | Rendered; chunks 084–087 read de-tagged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes, markers unchanged. No site-reviewer (declared) |

## What this method could not have found
- Whether a goalie may be engaged in a USA Hockey non-checking game (Glossary "Physical Engagement" sits in Competitive Contact; in the plan).
- Whether 617(c)(4)/625 still disallow a goal after a legal Situation 5 engagement.
- Goalie-facing promises worded without the census's search terms.
