# Two podcast formats per document: design specification

**Status:** the owner decided this on 16 October 2026. It is the standing design. Open work lives in plan row [POD two formats].

## What the owner decided

Each of the 39 documents gets **two episodes**:

| Format | Made by | Label on the site and in the apps |
|---|---|---|
| Style A | NotebookLM, two hosts | **Conversation** |
| Style B | ElevenLabs, one voice | **Playing principles** |

The owner's decisions, in order:

1. **One show, not two.** The owner was asked whether to have one feed or two, and said: *"can we have one show by clearly name each episode as either conversation or playing principles"*. Every episode title names its format.
2. **Episodes are grouped and ordered the way the website is.** Each of the website's seven sections, in `site/src/data/structure.json` order, is an `itunes:season`. Within a section, episodes follow site order. For each document, Conversation comes first and then Playing principles.
3. **The live show is renumbered now, and that includes the dates.** The owner chose to re-date the episodes at once rather than after a test. Every existing **guid stays the same**, so subscribers do not re-download anything.
4. **Playing principles episodes go into the feed only when all 39 exist.** Until then, each one can play on its own document page as soon as it is made, but the feed carries Conversation episodes only.

## The design

### Data

- **Conversation:** `site/src/data/podcast.json` stays as it is. No guid, audio path or track number changes.
- **Playing principles:** a new file, `site/src/data/podcast-principles.json`, with the same shape. Each episode has an explicit guid of the form `learn-ice-hockey:principles:<doc_id>`, written when the episode is first published and never changed.
  - Audio goes under `/audio/principles/<doc_id>-<sha8>.m4a`. The hash in the name means a re-render always gets a new key, which avoids the one-year CloudFront cache.
    - `<doc_id>` keeps its slash, literally: `technique/shooting` is served at `/audio/principles/technique/shooting-<sha8>.m4a`, not `/audio/principles/shooting-<sha8>.m4a`. (Decided 17 October 2026; this line was ambiguous until then, and a local preview used the stem-only form.)
    - `<sha8>` is the first 8 hex digits of the SHA-256 of the **encoded `.m4a` file**, not of the WAV, so any change to the bytes, including a tag change, gets a new key. The encode is deterministic: re-encoding the same WAV gives the same bytes and the same name.
  - Each file is 64k mono AAC, matching the Conversation episodes.
- **`site/src/data/podcast.ts`** is the single place pages read podcast data from. It provides the list of formats, the episodes for a given document, and each document's position (season and order) computed from `structure.json`.

### Feed: `/feed/podcast.xml`, one show

| Field | Value |
|---|---|
| `itunes:type` | `serial` |
| `itunes:season` | the section's position, 1 to 7 |
| `itunes:episode` | a sequential number within the season, counted over the items actually in the feed: for each document in site order, Conversation then Playing principles |
| `itunes:order` | a global sequence in the same order |
| `<title>` | `<Section> <n> · <Document> — Conversation` (or `— Playing principles`) |
| `<itunes:title>` | `<Document> — Conversation` (no numbers, as Apple's guidelines ask) |
| `pubDate` | a synthetic, fixed date that encodes the order. It is never derived from the build time and always lies in the past. |
| guid | never changes |

When the 39 Playing principles episodes are added together, the episode numbers within each season shift. That is a metadata change only.

Because the dates are synthetic, Playing principles episodes added later carry back-dated pubDates. Some apps will therefore not flag them as "new". The owner accepted this by choosing to launch them all at once. Announce the launch in the show description.

### Document page

- There is one sticky player bar with a two-option toggle: **Conversation · N min** and **Playing principles · N min**.
- The toggle uses radio inputs and switches through CSS `:has()`, so it works without JavaScript (the content security policy blocks inline scripts).
- When only one format exists, the page shows a single player labelled with that format.
- `audio-player.js` handles each audio element on its own.
  - Conversation keeps its existing `audio-position:<doc_id>` key, so listeners do not lose their place. Playing principles uses `…:principles`.
  - If one file fails to load, only that option is hidden; the player stays.
- `hasPlayer` must also check that at least one episode exists for the page.

### Downloads page and playlists

- The downloads page has one row per document, with a link for each format that exists.
- There is one feed link.
- There are two sets of m3u playlists: the existing set, plus `principles-all` and `principles-<layer>`.

### Pipeline

- `--style principles` is added to `build_podcast_audio.py`, `podcast_queue.py` and `upload_podcast_audio.sh`. Each Playing principles encode is named by its doc_id and sits in `podcasts_principles/` (gitignored), at the same relative path as its bucket key under `audio/principles/`, e.g. `podcasts_principles/technique/shooting-<sha8>.m4a`, with `podcasts_principles/manifest.json` beside it.
  - The source WAV stays where `synthesize_style_b.py` writes it, `podcast_style_b/<stem>.wav`. It is not copied or renamed. (Decided 17 October 2026: "master" in the line above was read as the encoded file, because the WAVs already have a home.)
  - The build encodes **only the documents named with `--doc`**. A WAV in `podcast_style_b/` is not an approved episode. A document whose `podcast_queue.py --style principles` state is `blocked` is refused.
  - The Playing principles queue is separate: `.podcast_queue/state-principles.json`, with no `getting_started` exclusion.
- The order of operations is: encode, upload to the hashed key first, then commit the JSON, then push.
- `synthesize_style_b.py` gains `--doc-id` and a sidecar file recording the script hash, voice and settings.
- The full design rationale is in the 16 October planning report summarised in [POD two formats].
