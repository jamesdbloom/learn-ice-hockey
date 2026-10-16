# Two podcast formats on the site (16 October 2026): player toggle, section-ordered feed, downloads

## Owner decisions implemented

The spec is `project/podcast_two_formats.md`, recording the owner's decisions of 16 October 2026:

- **One show.** Every episode is titled either Conversation or Playing principles.
- **Website order.** Episodes are grouped and ordered as the website is, with seasons equal to site sections.
- **Renumbered now.** The live feed was renumbered, dates included.
- **Playing principles waits.** Those episodes join the feed only when all 39 exist.

## What changed (site/ only; no content, no audio, no infra)

- **New `site/src/data/podcast.ts`** is the one place pages read podcast data from. It defines the formats, `episodesFor(docId)`, and `position(docId)` computed from `structure.json`.
- **New `site/src/lib/podcast-feed.ts` and an updated `feed/podcast.xml.ts`:**

  | Field | Value |
  |---|---|
  | `itunes:season` | section 1–7 |
  | `itunes:episode` | sequential within the season |
  | `itunes:order` | global |
  | `<title>` | "<Section> <n> · <Document> — Conversation"; the prefix is dropped when the section name equals the document |
  | `<itunes:title>` | without numbers |
  | pubDate | synthetic fixed dates in site order (1 June 2026 + position), never derived from the build time |

  Playing principles is gated out of the feed until there is one episode per document.
- **New `site/src/data/podcast-principles.json`**, which is empty.
- **New `site/scripts/check-podcast-guids.mjs`**, wired into `npm run build`. It fails the build if any published guid or enclosure URL differs from the pre-renumbering set, including the pinned `rink_map` legacy guid. It also checks the "all 39" gate. It restates the old guid rule instead of importing it, so it does not merely agree with the code it checks.
- **Player.** `AudioPlayer.astro`, `audio-player.js` and `global.css` now give:
  - a single bar labelled "Conversation · N min", with the label on its own row below 40rem;
  - a two-format radio toggle switched by CSS `:has()` with no JavaScript, so it works under the CSP;
  - per-format resume keys, with Conversation keeping `audio-position:<doc_id>`;
  - a remembered format choice;
  - when one file fails, only that option is hidden and the other stays wide;
  - `--player-h` measured by a ResizeObserver;
  - `hasPlayer` set only when an episode exists, so core_principles and language_and_glossary lose the stray padding.
- **Downloads page.** One row per document with a link for each format that exists, accessible names such as "Defender, Conversation", honest counts, and the ".m4a container" spacing fixed.
- **m3u playlists.** Playing principles playlists are emitted only when episodes exist, with a check against name collisions. The existing playlists are byte-identical.

## Reviews

1. **Implementation** in an isolated worktree. Step 1 was a refactor with no change to output, diffed against main: only the `hasPlayer` fix differed.
2. **First `site-reviewer`** (worktree build, Chrome). It found 0 BLOCKER and 3 MAJOR:
   - the single bar's scrubber was squeezed on phones (294 → 196px at 375);
   - a failed file collapsed the other control to 0px at ≥40rem;
   - the two-format bar squeezed to about 199px at 960.

   It also found minors: duplicate "Getting Started — Getting Started" on downloads; 37 identical "Conversation" link names; a self-contradicting downloads intro; ".m4acontainer".

   The feed, guids, enclosures and m3u playlists were all confirmed.
3. **Fix round.** All three majors and the minors were fixed.
4. **Second, independent `site-reviewer`** on the main-checkout build (headless Chrome through playwright-core with real viewports): **CLEAR on all six checks.**
   - Single bar control: 346px at 375 and 291px at 320.
   - Two-format bar: 561px at 960.
   - With one format failed, the other stays at 671px at 700.
   - Deep links clear the bar by 15–17px at every width, with and without JavaScript, and there is no horizontal scroll.
   - The downloads accessible names are 37 of 37.
   - The feed's guid, enclosure and byte-length set is identical to HEAD's, and the console is clean.
   - Its one MINOR (the guid checker resolving its argument against `site/` rather than the cwd) is fixed. The checker now resolves a given path against the cwd and passes both from the repository root and from `site/`.

## What this method could not have found

- How Apple Podcasts and Spotify actually react to the renumbering, the new seasons and the re-dated items, including whether any client re-flags episodes as new.
- The two-format bar as Astro emits it with a real Playing principles episode. It was tested on injected markup, because none exists yet.
- Safari and Firefox native audio controls, real phones, screen readers, and the production CSP as a response header.
