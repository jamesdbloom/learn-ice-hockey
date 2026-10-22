# SG31: unisex context, eiha.co.uk links, breakouts CARHA scope, entry-wide rebound scope (22 October 2026)

## What changed

- **`content/foundation/uk_rules.md` :373** (owner ruling 22 Oct: add one line of context)
  - "The 2026-27 junior rules still expect girls on junior teams. A separate UK sex and gender policy sets male and female categories by sex recorded at birth from U12, with some exceptions, and does not say how that fits unisex junior teams, so ask your club."
  - Sources entries were added and extended: the policy (undated; the PDF is dated 7 March 2025), plus Junior RoC §7 and the WNIHL-priority dispensation.
- **`content/technique/body_contact_and_battles.md` :154**
  - "A girl on a junior team plays its format — checking from U14 — while the WNIHL's U16 is non-checking."
  - The first draft put the policy sentence here. Review found it read as a contradiction of "no British boys' checking division" and was off-topic for a page about checking formats, so it was replaced.
- **`content/getting-started/getting_started.md`**
  - **eiha.co.uk removed.** Every citation of the old domain was re-sourced to englandicehockey.com (/play/, /get-involved/, /manage/, /gameday/), eiharec.co.uk (/info/, /team_list.php), the IHUK Coaching Regulations, or November 2019 Wayback copies of the quiz pages. The old site is not England Ice Hockey's current site, and on 22 October its club page carried a gambling link.
  - **Pathway claim corrected.** ":242 EIH publishes no 'how to start playing' pathway" was false: the Play page gives learn to skate, then learn to play. §2 and §3 now give that route, and §3's parents' paragraph was shortened to about 95 words. The honest disclosure stays: neither the page nor the rules say what a first session contains.
  - **Club finder.** §10 now says England Ice Hockey's site has no club finder, and that the rec section lists its teams by home rink.
  - **Coach DBS.** Every coach now needs an Enhanced DBS check (Coaching Regs §1.1/§7). The previous text said only coaches working with under-18s needed one.
  - **Rec registration.** It now reads as a fixed 1 October to 30 September period with "no pro-rata option".
  - **Trailer.** The "two credited below" wording is fixed.
- **`content/systems/breakouts.md`**
  - **CARHA 30(a) scope.** "Every CARHA major ends your game" is now scoped to interference and body-contact majors, at :188, :213, :215 and in the trailer. The 30(a) Note exempts an accidental high-stick major.
  - **Duplicate removed.** The :213/:215 30(a) duplication is gone.
  - **Wheel facts :328.** New line: "Hockey Canada 8.3 and CARHA 66(a) bar the side with the puck from running "deliberate interference for the puck carrier", so do not build on a net-front screen; CARHA 49(a) adds a minor, or a major that ejects and suspends, for not averting contact". The block is at 14/14.
- **`site/src/diagrams/zone_entries.mjs` (entry-wide caption)**
  - Adds "though the NHL, IIHF and PWHL allow incidental contact in a rebound scramble" (69.7, PWHL 71.7).
  - No other book on disk has a rebound exception: USA Hockey, Hockey Canada, CARHA and the EIHL were all checked.
- **`sources/`**
  - New: `eih_code_of_conduct_2026` (committed in SG30's README), and `eih_web_{play,clubs,gameday,manage,get-involved}_2026-10-22.txt`. Both are covered by README entries.
  - The README's eiha.co.uk wording was corrected: its news is not frozen at 2019-20, so the entry now says only that the domain is not EIH's current site.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Sources: unisex lines | source-verifier | First pass found 2 majors: the counterweight lost when the sentence was copied, and the body_contact contradiction. Both were fixed and the re-check was CLEAR: policy §10.1, the parties, the PDF date, Junior RoC :141-145, :647 and :2416, and WNIHL U16 at :173 were all verified. |
| Sources: getting_started | source-verifier | First pass verified 24 quotations live and returned 2 medium and 3 minor findings plus nits (the eiha "news stops" reason, the club-finder breadth, Learn-to-Play contradiction, age-4 qualifier, rec-period meaning). All were fixed and the re-check was CLEAR. The DBS change was checked against the Coaching Regs text. |
| Rules: breakouts + caption | rules-verifier | CLEAR. 30(a), 32(d), 66(a)/(e), 49(a) and HC 8.3 verified. The rebound exception exists only in NHL/IIHF/PWHL across nine books swept. One minor (the 49(a) line lacked the suspension) is fixed. |
| Facts layer (D10) | facts-reviewer | CLEAR on breakouts :328: traceable to :350 and §2, `Rule:` label correct, reads correctly voiced alone, no contradiction with the scoped body. |
| Safety (D11) | rules-verifier, acting as safety eye, plus the source-verifier's safety read of the unisex and girls-checking lines | Nothing reads cheaper than it is. The "checking from U14" line errs safe. |
| Rendered site (D15) | site-reviewer | CLEAR on all five targets: desktop and a 400px iframe, light and dark, no overflow, no console errors, no off-origin requests. The entry-wide ⚠️ gets warn-inline. The only eiha.co.uk links left are the two archived quiz snapshots. |
| Mechanical | coordinator | Run after the last edit: check_facts, check_links, check_absolutes, check_geometry and check_secrets all exit 0. check_marker_pairs found 0 lost on all four content files. check_callout_flow --bare found 0. check_counts shows no drift. npm build (22:32) exited 0, including check-links. |

## Dimensions

| Dim | Status |
|---|---|
| D1 rules accuracy, D2 exceptions, D3 divergence | Checked by the rules-verifier (breakouts, caption) and the source-verifier (RoC lines) |
| D4 citation integrity, D5 provenance | Checked by the source-verifiers: every new URL refetched, quotations located live, Wayback snapshots read |
| D6 negative existence | Checked: "no pathway" was found FALSE and corrected; "no club finder" was narrowed to EIH's site; "no rebound exception elsewhere" was swept across nine books |
| D7 cardinal rule | Checked: no coaching choice stated as law |
| D8 numeric ownership | Out of scope: no owned figure changed |
| D9 summary layer | Checked by layer tests in each agent report. The breakouts "every major" claim was swept across all layers. The unisex claim is in the body only (the facts :135 Rule 200 line was judged accurate voiced alone). |
| D10 key-facts layer | Checked by the facts-reviewer |
| D11 reader safety | Checked, as above |
| D12 read-aloud | Checked: the entry-wide caption chunk was traced by md_to_speech (026, with 69.7 in 027); the facts line has no antecedent |
| D13 folklore | Out of scope: no technique claim changed |
| D14 structure, style, links | Checked: check_links passes; British spelling; "they" |
| D15 rendered site | Checked by the site-reviewer |

## Plan files in this commit

- **`project/plans/OPEN_ITEMS.md`**
  - Removes the rows this commit closes: the SG30 rules-verifier notes, the eiha.co.uk links, getting_started:240, the breakouts Wheel "a major" row, and two of the SG30 echoes.
  - Adds new rows: other pages' "every CARHA major", HC 7.3, the zone_entries 69.7 layers, and the NotebookLM batch 6 instruction.
  - Restores and updates the Getting Better section, which an earlier coordinator edit had deleted by accident. The first commit-gate caught that.
- **`project/plans/getting_better_plan.md`**
  - Records the owner's drill feedback round 1 (22 Oct), verbatim in substance, and the no-publish-until-approved ruling.

## Tooling and state

- No script changed in this round.
- The drill drafts, `preview.mjs` and `finding_more_ice.md` in `project/getting_better_drafts/` are not part of this commit.

## What this method could not have found

- How IHUK applies §10.1 to girls U12+ on junior teams; only an IHUK clarification settles that.
- Whether the eiharec team list is current: every team shows 0 players.
- Whether the EIH Play page reflects the route after the merger: its age table is labelled 2023/2024.
- A pick priced under charging (CARHA 52(a)) or Hockey Canada 7.3 in non-checking divisions; this is now a plan row.
- The same "every CARHA major" wording on five other pages; this is now a plan row.
