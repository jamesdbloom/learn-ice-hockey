# Site-reviewer pass for the deferred D15 items (21 October 2026)

The pass covered every item in the plan's "Site-reviewer pass due" row: the SG5, SG4, SG2, SG, TM, X, Y, Z, W2, W3, LO and SW waves, the amber bar on `--bg-inset`, and the phone audio bar.

**Method.** Headless Chromium 148 (Playwright), run against the built site/dist from 11:49, which covers every content edit through 728ec8a. Each page was checked at 1440 and at 400 px, using a real 400×860 viewport plus the same-origin iframe check, in both light and dark themes. The run covered:
- all 39 pages: 156 loads, checking overflow, bare glyphs, h1 count, console errors and off-origin requests;
- 1,084 unit-cells built from every line added by these waves;
- four-cell screenshots of the 47 named items.

**Result: PASS.**
- **Callouts:** `check_callout_flow --bare` reports 0 bare glyphs. `--panels` reports 0, and every ⚠️ renders as `warn-inline`. Of 356 glyphs on the added lines, all 356 are wrapped.
- **Overflow:** no page has horizontal scroll at 400 px. Tables scroll inside their containers.
- **Console:** no errors and no off-origin requests on any page.
- **Phone audio bar:** stays in the flow before play and becomes sticky after play. This was tested with a synthetic playing event, because audio is excluded from local dist.
- **Theme toggle:** persists across pages with no flash.
- **Amber bar on `--bg-inset`:** 3.08–3.09:1, above the 3:1 threshold. There are no real instances; the check used an injected sample.

**Minor findings, logged as plan rows sr1–sr5:**
- a desktop table-header overflow on rules_primer §10 and DZC;
- h4 is hard to tell from bold lead text;
- the nz-1-4 caption wording nit;
- a rink_map amber run sitting on a citation;
- rink_map :458's amber run on the softer limb;
- diagram-caption pronouns ("him" in pk-nz-1-1-2), which already sit under the GN row.

**What this method could not have found:**
- other browsers, real phones, screen readers;
- real audio playback;
- production-layer behaviour (CloudFront, CSP, GA);
- the accuracy of any rendered sentence;
- items that rest on DOM checks without a viewed screenshot (about 17 of 47).
