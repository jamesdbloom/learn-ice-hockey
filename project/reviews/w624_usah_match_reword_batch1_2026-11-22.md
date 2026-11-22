# W621–W624: owner decisions, the USA Hockey match reword (batch 1), opposition routes, and British scope (22 November 2026)

## Owner decisions (22 Nov 2026, asked and answered in session)

1. **W521(2): REWORD.** Where the act's own USA Hockey rule says a match "may also be assessed", write "a mandatory major and game misconduct (6xx(b)), and it can be a match (6xx(e))". Keep "plan on a match" in these cases:
   - 602(a) attempt to injure;
   - 608(c) under its conditions;
   - 627(b);
   - Casebook-mandated matches;
   - acts with no reckless tier of their own.

   This is recorded in `project/working_guidance.md`, replacing "602(a) 'shall' is unreconciled".
2. **diagram-reviewer facing rule: NOT ADOPTED.** It stays "the boards they face".
3. **Opposition routes: ADOPTED.** It is written into `.claude/agents/diagram-reviewer.md`, arrival rule 4. The drawing standard applies whoever skates the route. The caption duty differs: a caption must never describe the opponent's approach approvingly. Fix the drawing first where the target's facing is fixed.
4. **`.claude/settings.json`:** the check-arrivals allowlist now points at the v22.23.4 node binary.

## W621 (rules-verifier, read-only)

**Verdict (b): silent.** Nothing on disk says whether IHUK DOPS reaches Elite League clubs.
- The EIHL Casebook never mentions IHUK.
- DOPS never names the Elite League. Its only link is :1058, "IHUK/EIHL DOPS", in the NIHL National appendix, and that is ambiguous.

The "Outside the Elite League … plan on the same" wording and the "do not say whether" sentences are therefore right. No site changes.

## W622 B: finding_more_ice :79 and :153

**"In Britain, unsanctioned hockey is uninsured…"** now reads "In Britain, Ice Hockey UK's insurance does not cover…". This is UK-wide, per the IHUK Rules of Competition insurance clause.

**The EIH R&R 14.5 suspension-and-fines half** is now scoped "in England and Wales" (1.1), and to "a player registered with it". The safety-reviewer found this OK.

## W622–W624: USA Hockey match reword, batch 1 (7 files, about 135 sites)

**Files:**
- goaltender, language_and_glossary and scanning_and_anticipation: the pilot, about 30 sites, including the five goalie-charge sites that Casebook 607 Sit. 4 contradicts directly;
- rules_primer: 32 sites;
- defending_the_rush: 34 sites;
- defender and risk_management: about 37 sites.

**Rule letters.** Every one was verified in the flattened `usah.txt` / `usah_casebook.txt`. These carry "may also be assessed": 603(c), 604(e), 606(b), 607(e), 609(c), 611(c), 619(b), 620(c), 621(c), 622(c), 623(c), 628(c), 634(c), 635(b), 639(c), 640(h). 640(h) reaches 640(b)–(f).

**Hits from behind.** 608 has no "may also" clause, so these cite Casebook 608 Sit. 1 for the either/or ("major plus a game misconduct penalty, or match penalty, must be called"). 608(c) stays mandatory.

**Kept mandatory:**
- 602(a) attempt to injure;
- 608(c);
- 627(b) kicking;
- 601(e);
- 615(c);
- Casebook 620 Sit. 4: excessive force *to punish or intimidate* at the head. Excessive force alone is Sit. 3's either/or.
- Casebook 602 Sit. 1 and 3.

Other books' "plan on a match" was not touched.

**Review.** A safety-reviewer covered each batch, plus a second one for rules_primer. All OK. Findings applied:
- The rule letter moved onto the match rather than onto "likely multi-game suspension": 9 sites in the pilot, and rules_primer :497.
- rules_primer :1126 had dropped Sit. 4's purpose condition. Fixed.
- rules_primer :871 restores the reason: the Casebook treats the match as the referee's option.
- risk_management :759 is a facts line heard alone. It gained the 639(b) floor.
- defender :921 names the residual case: "for any other reckless endangerment, plan on a match (602(a))".

**Accepted trade-offs.** In capped facts lines, "likely multi-game ban" was cut where another unit on the page states it: scanning :353, dtr :318, defender :443/:825, risk :759.

## W623: opposition routes redrawn

- **`you-cannot-beat-two` route 0:** miss went from 0.00 to 4.48. The tip moved to the blue-line side; it is still a pressure route.
- **`cross-ice-in-your-own-end` route 1:** miss went from 1.03 to 4.04. It now has `bow: -5` and ends in front of W2 at the pass's arrival point.
- check-arrivals shows 0 [f].
- The diagram-reviewer found both OK and no caption change needed. One cosmetic point is carried: F3's curve hugs the circle line.

## Gates on the final tree

- check_counts --update: exit 0.
- Full npm run build (v22.23.4): exit 0 after every edit (`scratchpad/build_w624.log`).
- Exit 0: check_facts, check_absolutes (captions certified after the rebuild), check_geometry, check_secrets, check_caption_pairs, check_tables, check_zones.
- check-arrivals: 0 hard, 0 [c], 0 [f].
- --bare: 0.
- check_marker_pairs: 0 lost ×8. The one split candidate is defender :937, unmarked in HEAD too, a false positive.
- check_readability: 0 long paragraphs.
- check_links --quiet: run after this record was written.

## What this method could not have found

- A USA Hockey match stated as certain without the words "match", "plan on" or "602(a)".
- Chunk distance in the audio between "can be a match" and its floor. Not rendered.
- The remaining ~25 files are batch 2 and are not yet reworded.
