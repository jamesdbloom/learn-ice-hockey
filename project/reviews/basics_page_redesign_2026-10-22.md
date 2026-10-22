# The Basics: page redesign, key points, nav and home placement (22 October 2026)

**Origin.** Owner requests, 22 Oct:
- Put The Basics inside "Where do you want to start?". Then combine it with "My first game is this week", so the count of ways in stays the same.
- Drop the per-page "Short episode for newer or younger players" line and put The Basics in the left-hand nav, **first** under Foundation.
- Give the Basics page the left-hand and right-hand navs like other pages, with the podcasts and a clear list of key points interleaved down the page.
- Call out The Basics clearly at the start of Getting Started Route 1.

## Changes

| File | Change |
|---|---|
| site/src/pages/index.astro, site/src/data/pathways.json | The separate Basics card is removed. The first way in becomes "My first game is this week, or I'm a younger player", and its blurb says to start with The Basics episodes. Still 9 ways in. Dead Basics code and imports are removed. |
| site/src/components/SidebarNav.astro | "The Basics" is the first item under Foundation (when an episode exists). aria-current is set on /the-basics/. |
| site/src/pages/[...slug].astro | The per-page Basics line and its imports are removed. |
| site/src/pages/the-basics/index.astro | Document shell: SidebarNav, an aside TOC with one entry per episode, and an inline TOC on narrow screens. Each episode is an h2 card holding: player (with aria-label), "Key points" list, "Go deeper". The Teamwork card has a crisis signpost linking to Mental Game §13. essentials-view.js is loaded for the rail's current-episode marker; it switches its Essentials half off on a page with no .prose .ess. |
| site/src/data/basics-takeaways.json (new) | 94 key points across 13 episodes, written from the episode scripts and checked against each source page. Kept separate from podcast-basics.json because the publish script rewrites that file. |
| site/src/data/basics-signposts.json (new) | The Teamwork crisis signpost; the numbers come from mental_game.md :11. |
| site/src/styles/global.css | Unused .home-basics and .basics-link styles are removed. Key-points list styled with solid bullets; signpost on an accent tint with a left bar. scroll-margin-top is removed from .basics-ep: it double-offset jumps, so the rail marked the previous episode. |
| content/getting-started/getting_started.md | Route 1 has a "Start with The Basics" call-out after "Roughly an hour". It says to come back to the route, because The Basics does not say whether your games allow checking, and leads with the Basics button. |

## Reviews

- **Key points, round 1.**
  - **safety-reviewer**, 2 CRITICAL:
    - the airway exception had been dropped from "don't move them";
    - the goalie concussion point said "come off for the day" with no medical-clearance limb.
  - **safety-reviewer**, 1 MAJOR: the warm-up "never shoot at a goalie who isn't ready" contradicted "shoot before the goalie is set".
  - **content-reviewer**:
    - MAJORs: the own-end exception dropped from playing-without-the-puck; the boards limb repeated in 9 of 13 lists (demoted where the source's Key focus lacks it); "stay high" undefined; a missing defence idea; a coaching choice stated as the only option.
    - Several minors: glosses, near-duplicates, "must fit".
  - All applied.
- **Round 2.**
  - **safety-reviewer**:
    - MAJOR: demoting the boards warning removed it from playing-defence entirely, but the episode calls it its most important safety point. Restored.
    - Minors: the boards warning restored to centre too; the Route 1 call-out must not imply The Basics covers whether checking is allowed.
  - **content-reviewer**:
    - MAJOR: defence[4] turned "off the glass" from the fallback into the instruction. Split into two points in the script's order.
    - Minors: tightened the long points.
  - All applied. **Final safety re-read: CLEAR.**
- **Signpost and Route 1 final wording.** A fresh safety-reviewer returned CLEAR. Numbers match mental_game.md :11, §13 is the right target, and the link resolves.
- **site-reviewer, three passes.**
  - **Pass 1: PASS.** Minors: the rail didn't track the current episode, bullets were hollow, and the players had no names for screen readers. Fixed.
  - **Pass 2:**
    - MAJOR: rail off by one (double scroll offset). Fixed.
    - Safety-visibility: the signpost was the quietest text on its card. Restyled and linked.
    - "Site menu" was misleading on a phone. Reworded.
  - **Pass 3: PASS.**
    - All 13 rail clicks mark the right episode at desktop and 400px.
    - Signpost contrast is 14.71/11.17:1 and its link lands on §13.
    - Route 1 is accurate on a phone.
    - No overflow.
    - Console clean.

## Review timing (C11)

- The last site and content edits (the signpost restyle and link, the rail offset fix, the Route 1 "Basics button" wording) were one coordinator script run at 07:04:26.
- The fresh safety read of the signpost and Route 1, and site-reviewer pass 3, were both dispatched after that write and read the 07:05 build.
- The final safety re-read of the key points ran after the writer's round-2 write at 07:00:07. Round 2 was confined to the reviewers' findings and sketches.
- The offside fix came after all of those. rules-verifier confirmed it, and the build was re-run afterwards.

## Gates (after the final edit, no pipe)

check_facts, check_links, check_absolutes and check_secrets pass. check_marker_pairs on getting_started: 0 LOST. check_counts: no change. `npm run build` exited 0 after the last edit, and check-links is clean.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 Rules / citations | ✓ rules-verifier, after the commit gate blocked on C4 (rule paraphrases with no numbers are still rules claims). About 25 rule-shaped points were checked against NHL, IIHF (2025/26 and 2026/27), USA Hockey plus its Casebook, Hockey Canada, CARHA 2026, PWHL, the In-House Rules, the IHUK RoCs and the EIHL Casebook. None is false or permissive. One wording fix: offside read backwards, now "the puck must cross the blue line into their zone before you do…" (confirmed). The verifier's icing finding, "no book uses another line", was a FALSE NEGATIVE from a capped search: CARHA 65 says "some CARHA Hockey Leagues will use the blue lines instead of the red line" (carha_2026.txt :3033–3045). So "ask which line your league uses" stands, and the verifier withdrew the finding. Optional, not applied: shooting[4]'s screen stick could add "below the crossbar" (a high-stick goal is disallowed), but the script does not say it. |
| D5, D6, D8, D13 | Out of scope: no external source or figure. The emergency numbers are copied from mental_game.md :11 and verified there. |
| D7 Cardinal rule | ✓ Coaching choices are phrased as choices ("ask your coach", "if your team does"). |
| D9 Summary layer | ✓ The key points are a new summary layer over the scripts. Layer-relative demotion of the boards limb followed the 23 Sep owner ruling; restored where the episode is about the boards. |
| D10 Key facts | Out of scope: no facts block changed. |
| D11 Reader safety | ✓ safety-reviewer CLEAR after three rounds. |
| D12 Read-aloud | Route 1 call-out: plain blockquote, no marker. The key points are not voiced. |
| D14 Style | ✓ "they" throughout; owner terms used. |
| D15 Rendered site | ✓ site-reviewer PASS, desktop and 400px, light and dark. |

## Still open

- The playing-wing script omits the weak-side winger collapsing to the slot when the centre goes into the corner. The centre list tells the centre to call a winger in, and the wing list can't add the answer because the script doesn't say it. This is a script issue for a future Basics remake.
- The NotebookLM/ElevenLabs scripts' internal notes cite source line numbers that have drifted by about one line. Cosmetic.

## What this method could not have found

- Real phones, non-Chrome browsers and screen-reader announcement order.
- Whether the audio matches the scripts. The writer checked synthesis-cache hashes and durations, but not the content of the published .m4a files.
- Defects in a script that a faithful key point inherits. Only the wing collapse was found, by reading the sources' Key focus for about 10 of 80 references.
