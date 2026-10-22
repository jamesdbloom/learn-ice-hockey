# SG32: Finding More Ice ships, the feed is frozen for a 40th document, CARHA major scope, goalie-contact facts (22 October 2026)

## What changed

- **`content/off-the-ice/finding_more_ice.md` (new, the 40th document)**
  - `git mv` from `project/getting_better_drafts/`, R100, so the bytes are identical to the reviewed draft.
  - The page covers:
    - your own club first, then stick-and-puck and drop-in, the rink, public skating, rec teams, learn-to-skate and learn-to-play, and camps;
    - location boxes for England, Scotland, Wales, Northern Ireland, the USA, Canada and anywhere else;
    - British registration-before-the-day, sanctioning, insurance and suspension;
    - Canada's non-member-league rule;
    - junior-to-senior registration;
    - safeguarding questions for parents.
  - This is the first of the owner's two Getting Better pages (owner decisions D1–D6, 22 Oct). It ships text only and has no podcast episode yet.
- **`site/src/data/structure.json`**: the page goes after Practice and Development in Off the Ice, and the section blurb mentions it.
- **`site/src/lib/podcast-feed.ts`, `site/scripts/check-podcast-guids.mjs`**
  - Before the fix, a 40th document broke the feed in two ways:
    - `assertDates()` overflowed into the Basics dates.
    - `principlesInFeed()` (`>= DOCUMENT_COUNT`) would have dropped all 39 live Playing principles episodes.
  - Dates for the 39 published documents are now frozen to their HEAD order (`DATED_DOC_IDS`).
  - Later documents take 20-minute slots after their predecessor's date.
  - The principles gate is sticky, like the Basics gate.
  - `assertFeedDates()` checks the actual items.
  - `check-podcast-guids` now pins every live item's pubDate too.
  - **The built `/feed/podcast.xml` is byte-identical to the live production feed** (91 items).
- **`content/getting-started/getting_started.md`**
  - Related line link to the new page.
  - §4 pointer to its §3.
  - §10: four US/Canada finder rows the new page now owns were replaced by a pointer to its §7. The registration and rulebook rows were kept, along with "rink first, club second" and the IIHF directory.
  - Trailer: the findhockey links, which now supported no body text, were removed.
- **`content/off-the-ice/practice_and_development.md` :362**: one pointer to the new page.
- **"Every CARHA major ejects" scoped to the fouls discussed** (30(a) exempts an accidental high stick):
  - zone_entries :379, :1177 and the trailer;
  - goaltender :1265, :1393;
  - defending_the_rush :436 (facts), :462, :894;
  - rules_primer :479.
  - rules_primer's general statements already carried the exception and were left alone.
- **zone_entries goalie-contact facts :349, :393, :434 and body :406, :453**
  - They now read "can void the goal even when incidental", which is true in every book on disk.
  - The NHL/IIHF/PWHL rebound exception stays in the body at :375, beside its "do not plan around it in the Elite League, USA Hockey, Hockey Canada or CARHA" warning.
  - An interim wording ("unless incidental in a rebound") was caught by review. Voiced alone, it gave Elite League readers a permission their book does not grant.
- **Counts**: `check_counts --update` changed 39 → 40 in CLAUDE.md:3, docs/README.md:47 and project/site_build_specification.md:114.
- **`site/src/data/og.json`**: the build-generated entry for the new page.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Finding More Ice: content | content-reviewer | 10 majors and 11 minors, plus a cut list. All were addressed in revision. |
| Finding More Ice: sources | source-verifier | 24 URLs fetched; 11 of 12 quotations were on the cited page and 1 was on the same site's home page (figure dropped). The Wales, IHNI and Level-5 findings were addressed. |
| Finding More Ice: rules and safety | safety-reviewer ×2 | First pass: 3 majors (registration scope, R&R 14.5 suspension, the Canada insurance limb) plus a junior senior-registration candidate. All were fixed and the re-check was CLEAR against the IHUK RoCs, eih_rr 32.2 and 14.5, and the Hockey Canada FAQ. |
| getting_started §10 and pointers | content-reviewer | CLEAR. Every removed row's substance is on the new page; no disclosure dropped. Two minors (dead trailer link, anchor precision) were fixed. |
| CARHA scope and goalie contact | rules-verifier ×2 | (1) CLEAR, every antecedent checked against 30(a), 32(d), 49, 52, 54, 56 and 66. (2) MAJOR on the interim facts wording (Elite League counterweight lost). Fixed, and the re-check was CLEAR. |
| Safety: CARHA scope and goalie contact (D11) | safety-reviewer ×2 | The first commit-gate blocked on C6 because no safety review covered these hunks. First pass: the "can void the goal even when incidental" wording was UPHELD (the old "incidental or not" overstated NHL and IIHF 69.3 against 69.7), but there was a MAJOR. Rescoping "Each ejects you" at :379 had dropped the ejection for the 66(b) deliberate-contact major, so a deliberate bump on the goalie read as at worst a major. There was also a minor at :1177. Both were fixed: :376 "a minor or a major that ejects you (30(a))", and :1177 "Any CARHA major for contact with the goalie also brings at least a one-game suspension (32(d))". The 69.3 cite was restored on facts :349 and :393. The re-check was CLEAR. |
| Facts layer (D10) | rules-verifier acting as facts-reviewer | Changed facts lines checked for labels, caps (`--near`) and how they read voiced alone. CLEAR after the fix. |
| Feed | coordinator + feed agent | Built feed is byte-identical to production (cmp). The full 11-step npm build exits 0. check-podcast-guids reports 91 items, 39/39 principles and 13/13 Basics frozen. |
| Rendered site (D15) | site-reviewer + coordinator headless screenshots | First run: Chrome refused localhost navigation, so it did static checks of the built HTML. Results: one h1; section ids; the 7 location boxes render as note callouts; 8/8 ⚠ get warn-inline (0 bare); ordering after Practice and Development on the section and home pages; OG image present; anchors resolve. Visual review: see below. |
| Mechanical | coordinator | Run after the last content edit: check_facts, check_links, check_absolutes, check_geometry and check_secrets all exit 0. check_marker_pairs on all 6 edited files: 0 lost. check_callout_flow --bare: 0. check_counts updated. |

## Dimensions

| Dim | Status |
|---|---|
| D1 rules accuracy, D2 exceptions, D3 divergence | Checked by the rules-verifiers and the safety-reviewers (IHUK RoCs, eih_rr, CARHA, NHL/IIHF/PWHL 69/71, EIHL Casebook, USA Hockey, Hockey Canada) |
| D4 citation integrity, D5 provenance | Checked by the source-verifier (all Finding More Ice URLs) |
| D6 negative existence | Checked: no England/Wales club finder, no Welsh body (thinly tested; the page says so), USA adult finder ("could not be checked"), no national camp finder |
| D7 cardinal rule | Checked by the content-reviewer; coaching advice is framed as advice |
| D8 numeric ownership | Checked: the corpus count changed 39 → 40 via check_counts; no other owned figure changed |
| D9 summary layer | Checked: Key focus, Overview and Key Takeaways were re-aimed in revision; layer tests on the CARHA and goalie-contact claims |
| D10 key-facts layer | Checked (zone_entries, defending_the_rush). The new off-the-ice page has no facts blocks by design. |
| D11 reader safety | Checked by the safety-reviewers: ×2 on Finding More Ice, and ×2 on the CARHA and goalie-contact hunks |
| D12 read-aloud | Checked: the voiced-alone facts defect was found and fixed; the facts lines read cleanly alone |
| D13 folklore | Checked by the content-reviewer (unsourced absolutes softened) |
| D14 structure, style, links | Checked: check_links passes, including the new anchors; house structure; British spelling; "they" |
| D15 rendered site | Checked: static HTML checks and headless screenshots, desktop and 400px, light and dark. Interactive Chrome review was blocked; see below. |

## Visual review

- **Chrome extension: refused.** It would not open localhost in two site-reviewer runs ("Could not verify this site's safety category"), so no interactive review was possible.
- **Headless screenshots instead.** The coordinator rendered `/off-the-ice/finding_more_ice/` with the local chrome-headless-shell at 1280px light, 400px light and 400px dark, and inspected them.
  - Header, Key focus, Overview and §1–§7 render correctly, as do the "In short" boxes and the location-box callouts with their lists.
  - The 8 inline amber warnings render as warn-inline runs in both themes.
  - Common Mistakes, Key Takeaways and the Sources trailer render, with no horizontal overflow at 400px.
- **Not covered:** console and network at runtime, theme-toggle persistence, TOC tracking, real devices. The static HTML checks above cover anchors, ids and ordering.

## What this method could not have found

- Whether the clubs and teams listed are still active (every EIH Rec team shows 0 players).
- Whether the JavaScript finders (Hockey Canada, USA Hockey Find Hockey, the BIS map) return useful results.
- Three domains were blocked by the corporate proxy.
- How podcast apps will treat back-dated 20-minute slots for a future Finding More Ice episode. Publishing it will renumber six live titles, which needs owner sign-off (plan row).
- Optional, not done: facts :434's goal clause has no cite (it is at 298/300), and PWHL 71.3 is not cited on :349 or :393; both are plan rows.
- Other pages still carrying unscoped "CARHA major" wording beyond the four fixed here (plan row: defender :356, body_contact :1699 and others).
