# W399: "bail‑out" no longer wraps on a phone, the renderer reads the non-breaking hyphen as a hyphen, and "swing breakout" gets a glossary entry naming both alternatives (17 November 2026)

**Files:**
- scripts/md_to_speech.py
- content/hockey-iq/risk_management.md
- content/foundation/language_and_glossary.md
- project/plans/OPEN_ITEMS.md
- this record

No diagram changed.

## Source
From W398: (1) the U+2011 SYMBOLS row, then the risk_management hyphen; (5) "swing breakout" has no glossary entry.

## What changed

### scripts/md_to_speech.py (coordinator, between waves)
**The change.** A SYMBOLS row `("‑", "-")` was added after the en-dash row, with a comment.

**Why.** In W398 the U+2011 non-breaking hyphen reached the SSML unhandled. `--report` listed it under "UNRECOGNISED CONSTRUCTS". So the W398 author reverted the risk_management edit that would have stopped "bail-out" wrapping at 400px.

**Reviewed by the content-reviewer, not the coordinator:**
- SYMBOLS is applied as a plain loop at :2720, so the row's position does not matter.
- `--report` now counts it as `symbol.NON-BREAKING HYPHEN 1`, i.e. handled.
- The de-tagged SSML reads "as the bail-out: when the wall is sealed".

**Scope.** The only other U+2011 in content/ is in the team_play_and_culture :739 Sources trailer, which is not voiced. No other document's audio changes. The coordinator's run of `--report` on team_play_and_culture gave "UNRECOGNISED CONSTRUCTS (none)".

### risk_management "Up" item (:451)
**The change.** "**the bail-out**" now uses U+2011. The diff is one character.

**Site-reviewer checks:**
- The built code points are `…6c 2011 6f…`.
- At 400px the run now breaks only at the space before "bail‑out". W397 had measured "bail-" / "out".
- The glyph is indistinguishable from an ASCII hyphen in both themes.
- Pagefind still finds the line for `bail-out`, `bail‑out`, `bailout` and `bail`.

### Glossary "Swing breakout" (:462, between Stretch pass and Tag up)
> "**Swing breakout** — the conventional breakout, and the one this guide assumes: the centre swings low in the middle, below the hash marks and underneath the puck, as the **bail-out**, and the strong-side winger comes down the wall to the outlet spot. The alternatives you will meet are the **centre fly**, where the centre leaves early up the middle and the weak-side winger drops in low, and a flat or spread breakout, where both wingers hold near the blue line and the exit uses longer passes — ask which your team plays. See [Swing low](../../content/foundation/language_and_glossary.md#swing-low) and [Breakouts](../../content/systems/breakouts.md#5-the-centre)."

The links above are retargeted so they resolve from this record. In the glossary they read `#swing-low` and `../systems/breakouts.md#5-the-centre`.

- **Owner.** breakouts.md says "What's described above is the conventional **swing breakout**, and the one assumed throughout this document". It gives "The two alternatives you will actually meet" as the centre fly (the weak-side winger drops in low) and flat or spread, and tells the reader "Ask your coach which one you play".
- **Glossary's own sections.** "Below the hash marks" matches Swing low (:65), and "holding near the blue line" matches :72.
- **Content-reviewer Minor.** The author's first entry said "The common alternative is the **centre fly**". That ranked the fly, which the owner does not do, and omitted flat/spread, the system the owner ties to "most weekend breakdowns". The reviewer's text replaced the sentence.
- **Duplication.** The centre-fly clause also appears in the Bail-out entry (:274). The reviewer accepted this because each glossary entry is voiced alone. A future correction to the fly definition must reach both.

## Reviews
| Reviewer | Result |
|---|---|
| content-reviewer | No Major. Swing breakout: cardinal rule met, "underneath the puck" is owner wording, anchors resolve. Minor ("common alternative"), applied with the reviewer's text. risk_management U+2011: CLEAR. md_to_speech SYMBOLS row: CLEAR (rendered with `--report`). |

The rules-verifier and safety-reviewer were not dispatched, because no rule, contact or safety claim changed.

### C11
- The coordinator wrote only the scripts/ row, and the content-reviewer reviewed it.
- The post-review content edit is the reviewer's own text. The author verified it against breakouts' flat/spread description.

## Checks after the last edit
- **Build.** A full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 04:55:13, and no content, site/src or scripts file is newer.
- **Checkers.**
  - check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets: pass.
  - check_counts --update: no change.
  - check_callout_flow --bare: 0.
  - check_marker_pairs: 0 LOST and 0 SPLIT on both content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6, D8, D10, D11 | not engaged: no rule, citation, provenance, negative-existence, numeric, facts or safety claim changed |
| D7 Cardinal rule | content-reviewer: Swing breakout names the default, both alternatives and "ask which your team plays" |
| D9 Summary layer | glossary :18 Key focus, :74, :274 and :374 agree with the new entry |
| D12 Read-aloud | the renderer row reviewed and rendered; risk_management `--report` |
| D13 Folklore / terminology | "swing breakout", "centre fly", "flat or spread" checked against breakouts and the glossary's own sections |
| D14 Structure, terminology, cross-links | check_links and the build; both new anchors resolve |
| D15 Rendered site | site-reviewer on the 04:55:13 build (below) |

**D15.** site-reviewer, two pages, Playwright Chromium at 400×812 DPR 2 (light and dark) and 1440×900 light.
- "bail‑out" no longer wraps, and its glyph matches the hyphen.
- The Swing breakout entry renders with no amber (densest window 4.2).
- Pagefind finds the line under every spelling.
- Worst 400px windows: risk_management 43.8, glossary 34.3.
- 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll.

## Found, not fixed (plan rows)
1. **"(IHUK DOPS C.1, s.11)" reaches the SSML as unhandled DIGIT ONE constructs** (risk_management facts :850 `--report`: 3 entries). The same citation sits in the folded DOPS Rule: line on about 8 documents since W395. A listener may hear "C.1" and "s.11" read oddly. This needs a renderer rule (for example "C point 1" / "section 11"), or a content form such as "Appendix C.1, Section 11". This is a coordinator scripts/ change between waves, or a corpus-wide claim-briefed edit.
2. **The glossary Swing breakout entry's in-sentence `**bail-out**` uses an ASCII hyphen.** It does not wrap at 400px now, but only because of where it falls. U+2011 would make it consistent with risk_management.
3. **The centre-fly clause is restated in two glossary entries** (Bail-out :274, Swing breakout :462). A correction must reach both.
4. **U+2011 rendering was checked only with the macOS system font in Chromium.** Screen-reader pronunciation was not tested.

## What this method could not have found
- U+2011 in a diagram caption (only content/ was searched).
- How a real TTS voice says the converted hyphen.
- Real devices, and a screen reader.
