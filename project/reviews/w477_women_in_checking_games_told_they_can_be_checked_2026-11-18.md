# W477: Body Contact and Battles stops telling women in checking games that the legal-check section is not theirs (18 November 2026)

**Files changed:** content/technique/body_contact_and_battles.md, project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W476 (2).
- **Census:** a read-only rules-verifier census of British women's and girls' competitions outside the WNIHL Rules of Competition, covering 125 hits in 20 files.
- **Author:** one agent.

## Census result (rules-verifier)
- **Harsh direction: no wrong site.** Every claim that the WNIHL is non-checking is tied to the WNIHL, with "elsewhere, ask your league" where needed.
- **Permissive direction: no unit grants a check where a book bars it.** The owner principle is already stated in two places:
  - uk_rules :33: "The line goes with the game you are dressed for"
  - bcb :160: "A girl on a junior team plays its format — checking from U14"
- **The gap (a safety risk to the player herself).** bcb :511 said "**Women's hockey in Britain runs IIHF Rule 101.1**, so … this section is not yours", where "this section" is §5, delivering a legal check.
  - That is false for a woman in NIHL Division 1 or 2. ihuk_nihl_roc :99 gives the format as "Full ice, checking", and :300 says "Senior women may register WNIHL + NIHL in different clubs".
  - It is also false for a girl on a junior team from U14. ihuk_junior_roc :141–145 gives U14/U16/U19 as "Full ice, checking", and In-House says "Junior age categories are unisex".
  - Each can legally be checked, but was told the section was not hers.
- **Sources checked:**
  - ihuk_wnihl_roc :173–174, :394–400, :596
  - ihuk_junior_roc :141–145, :647, :971–978, :2416
  - ihuk_u10_roc (U10 non-checking)
  - IHUK Sex & Gender Policy §10.1, which says nothing on checking
  - In-House Section 11
  - IIHF 101.1, which is scoped to women's hockey as a competition
- **Already-disclosed owner contradiction (eligibility, not checking):** the Sex & Gender Policy and the WNIHL say competition is sex-segregated from U12, while In-House says junior is "unisex".

## What changed (voiced)
| Site | Before | Now |
|---|---|---|
| :511 | "**Women's hockey in Britain runs IIHF Rule 101.1**, so … this section is not yours." | "**In a women's game in Britain, IIHF Rule 101.1 governs**, so …" + the WNIHL sentence (unchanged) + "**But a woman in NIHL Division 1 or 2, or a girl on a junior team from U14, plays that game's checking format — this section is hers, and she can be checked.** Plan on any major ending her game there too." |
| :191 | "**In Britain, Rule 101.1 is your rule as written**" | "**In a women's game in Britain, …**" |
| facts :530 (voiced alone) | "women's hockey runs IIHF Rule 101.1" | "a women's game runs IIHF Rule 101.1" (~264/300) |

**Left alone:**
- **:109 (table row).** It is voiced in the same chunk as the "British hockey" row, which carries the NIHL and U14+ checking lines.
- **:185.** It is scoped to the rule-book layer. Safety: "a woman in an NIHL game is playing men's or mixed hockey, not 'women's hockey'".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | Census as above, with no site wrong. Sketch text for :511. |
| safety-reviewer | CLEAR. Each change is a narrowing in the safe direction: she is now told she can be checked. HEAD left her unprepared to receive a check. "Important." counts are equal. On whether In-House Rule 101 ("any major ejects") reaches a woman in an NIHL game: its heading reads most naturally as women's competitions only, but silence is not a grant, so the conservative sentence "Plan on any major ending her game there too" was taken. :185 left as is. |
| site-reviewer | 400 light on the 18:26:20 build: 0 bare/untreated/panels; ⚠️ 232 = HEAD; 0 console errors; worst window 46.0 (unchanged). |

### C11
The coordinator wrote no content.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 18:26:20; the content file is 18:25:48.
- **Gates:** check_links --quiet, check_facts, check_absolutes and check_secrets pass. check_counts: no change. check_callout_flow --bare = 0; `--panels --file` = 0.
- **Marker pairs:** 203 = 203, 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | IHUK Junior / U10 / NIHL / WNIHL RoC; In-House Section 11 and :473; IIHF 101.1; Sex & Gender Policy §10.1 |
| D2 Exceptions | — |
| D3 Cross-book divergence | competition decides, not sex |
| D4–D8 | not engaged |
| D9 Summary layer | facts :530 voiced alone |
| D10 Key-facts | :530 |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | :511's new sentence is in chunk 042, after the WNIHL sentence |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan row From W477)
1. **Lower-risk instances in other documents** read as "women's competitions" and are correct as such: pwtp :201, conditioning :240, dtr :927, plus uk_rules and getting_started :365. They were not changed, following the "one sentence in the owner, no sweep" recommendation.
2. **Gaps in what is on disk:**
   - BUIHA women's hockey, Scottish, Northern Irish and unaffiliated recreational leagues have no regulations on disk.
   - NIHL National's Rules of Competition were not read; hence "NIHL Division 1 or 2".
3. **Unchecked claim.** Whether a major ends a junior girl's game (In-House Rule 201) has not been checked. "Plan on" errs on the strict side.

## What this method could not have found
- How IHUK actually applies Rule 101 to women in mixed fixtures.
- An in-season bulletin.
