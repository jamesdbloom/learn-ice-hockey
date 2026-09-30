# Round 30 September 2026, wave 12: P2 panels, stick-lift harmonisation, and two site fixes

**Scope.** This wave ran under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". It had three parts.

**1. Panels moved inline.** Every remaining amber panel on these wave-10 pages became inline amber on the hazard clause:

| Page | Panels before |
|---|---|
| `defensive_zone_coverage` | 4 |
| `winger` | 4 |
| `game_management` | 5 |
| `puck_handling` | 5 |
| `body_contact_and_battles` | 1 |
| `playing_without_the_puck` | 1 |
| `defender` | 1 |

**2. Stick-lift wording harmonised.** The net-front lifts in this wave's files now read "low on the shaft, well below the bottom hand, as the puck arrives, then let go". A few sites still carry the older wording and are listed under Carried: `defender` :288 (no release), `on_ice_communication` :666, and `rules_primer` :435/:999. The work started from the owner, `body_contact_and_battles`, and covered `defensive_zone_coverage`, `on_ice_communication`, `playing_without_the_puck`, `defender` and the `net-front-walk-out-direction` caption.

**3. Two site fixes, and one permissive rules fix.**
- `.warn-inline` no longer leaves a gap before punctuation (`site/src/styles/global.css`).
- The ⚠️ glyph can no longer wrap alone: a U+00A0 now follows it in `site/src/plugins/remark-corpus.mjs`, in `markInlineWarnings`.
- The permissive, penalty-bearing rules fix is in `puck_handling` (see below).

The shared brief is in Appendix A.

**Files.**
- **Content:** `body_contact_and_battles`, `defensive_zone_coverage`, `winger`, `game_management`, `puck_handling`, `playing_without_the_puck`, `defender`, `on_ice_communication`.
- **Site:** `site/src/diagrams/body_contact_and_battles.mjs` and `site/src/data/diagrams.json`. Also `site/src/styles/global.css` and `site/src/plugins/remark-corpus.mjs`. The rebuilt SVG and PNG in `site/public/diagrams/` are **not committed**: that directory is gitignored (`.gitignore` :82) and the deploy regenerates it.
- `center` was dispatched for the lift wording but had no net-front lift, so it is unchanged in this wave.

## Method

1. Seven authors worked in parallel, one per file group. One diagram agent was the only builder.
2. Two `safety-reviewer`s read every changed unit and checked each against `sources/`.
3. The fixes went out as one batch.
4. Blocking-only line reads followed: one `safety-reviewer` and one `rules-verifier`.
5. After the first `commit-gate` BLOCKED, a `rules-verifier` read the staged bytes of every new rules claim, and a `safety-reviewer` read the staged caption. See "Gate block and repair".
6. A `site-reviewer` ran twice. The Chrome extension blocked localhost, so the first pass checked the HTML only. The second pass drove headless Chrome over the DevTools protocol for the visual checks.

## Rules fixes

**Permissive, penalty-bearing**

- **`puck_handling`, "off the glass and out" → "off it, never over it".**
  - From your own zone, putting the puck over the glass is a delay-of-game minor under NHL/IIHF 63.2(iii) and PWHL 65.2(iii), even by accident, unless it was deflected or there is no glass.
  - A deliberate one is penalised in every book: USA Hockey 610(c), HC 10.1(ii), CARHA 75(b), and 63.2(ii)/65.2(ii).
  - Fixed in the Key focus, facts (a new Rule line), body and KT14.
  - The accidental case names three books. That is a true contrast: under USA Hockey 631(d) an accidental skater clear is a last-play faceoff, and HC and CARHA give an accidental skater clear no penalty.
  - ⚠️ HC 10.1(v) and CARHA 55 DO penalise a **goaltender's** direct clear. Never carry "HC/CARHA no penalty" into goalie text; `goaltender.md` owns that point.

**False and harsher, or false and permissive (fixed)**

- **`on_ice_communication` :262/:263.** "Three of the four books reach a lift at the hands" was a four-book frame in a six-book corpus. The PWHL, like the NHL, has no sentence about the hands (PWHL 56.1 and 63.1 verified). The line now names the books.
- **`on_ice_communication` :256.** "A stick you keep tied up is a penalty" now reads "can be called holding". NHL/IIHF 54.2 and PWHL 55.2 are about the hands; only CARHA 63(a) writes holding "with the … stick".
- **`defensive_zone_coverage` :523.** PWHL 57.1 is "in the feminine". The USA Hockey Declaration line "A skater is entitled to stand their ground…" is now quoted (`usah.txt:380-382`), and the text reads "That USA Hockey Note is the narrowest".

**Blocking findings the reads caught in this wave's own new text (all fixed)**

1. **`body_contact_and_battles` facts :1238.** Cut to fit its cap, the line read "Hold, never push".
   - "Hold" had no object, so a listener hears "hold the screener", and holding is a minor in every book.
   - Naming "never push" but not "no lean" implies leaning is fine, and under CARHA 49(a) leaning is a penalty.
   - Now reads "Hold your ground, no lean, no push" (199/200), matching `on_ice_communication` :261.
2. **`game_management` :856, first fix.** "Two of these end your game automatically, with nobody hurt" was a false count: CARHA 50(c) (a match penalty for an attempt to injure) was stated in the chunk just before it.
   - The first fix, "…in this book with nobody hurt, whichever limb is called", made the next clause false in turn.
3. **`game_management` :856, second fix.** "53(b) is the one match penalty here that needs neither intent nor injury" now read as covering the whole book. CARHA 48(b) head-butting, 48(e) a helmet used as a weapon, 59(a) the instigator, 81 spitting and 86(b) slew-footing are all match penalties that need neither intent nor injury.
   - Now reads "53(b)'s match penalty is mandatory and needs neither intent nor injury".
   - **A repair to an implied cap can itself create one. Every fix needs a read.**

**Demotion (the owner's document-relative ruling).** In `game_management`, inherited board-posture advice was cut from KT17 and from the facts Technique line :222. The per-limb layer test showed every limb is still carried in body :232 and CM :1119, and the "Never" kernel stays at facts :221. CM was kept because it cannot be a demotion target.

## Markers

- `check_marker_pairs` found **0 LOST** in all eight files.
- Every "no longer present by key" hit was paired by hand, and each successor still carries its ⚠️.
- **Moved without word changes:** the winger crease blockquote (:485–495), `puck_handling` :328/:335 and `game_management` :855.
- **Removed:** `puck_handling` :513's leading glyph, which was reassurance. The paragraph keeps four inline markers, so it still voices "Important.".

## Gates and build

- **Checkers:** `check_links`, `check_facts`, `check_absolutes`, `check_geometry`, `check_zones`, `check-arrivals` and `check_counts` all exit 0.
- **Diagrams:** `build-diagrams` exit 0, with one PNG re-rendered.
- **Build:** absolute npm, 04:33–04:40 on 30 September, exit 0, full chain to `check:links` (54 pages, all links resolve). Every wave-12 edit predates it; the newest content edit was 04:28, and CSS and the plugin were 04:30 and 04:32.
- **URLs:** no external URL was added. Two appear in the changed lines, but their per-file counts are unchanged from HEAD.

## Rendered site (`site-reviewer`)

**Pass 1: HTML only, CLEAR.**
- 0 panels, bare glyphs, untreated glyphs and literal `**` on all eight pages.
- U+00A0 after every inline glyph site-wide. Figcaption spans are `display:block`, so they are unaffected.
- 504 punctuation-adjacent amber runs, none with whitespace before the punctuation.
- The new caption appears on all three hosts.
- Regression pages (`rules_primer`, `goaltender`, `faceoffs`, `uk_rules`, `equipment`) still form their amber runs.
- Only 2 amber panels remain site-wide, on `conditioning_and_recovery` and `mental_game`, both outside this wave.

**Pass 2: visual (headless Chrome 154 over CDP), CLEAR.**
- 11 pages × 1440/400/320 px × light/dark, 66 runs.
- Punctuation sits attached to the tint, with padding-right now 0.77–0.85 px.
- The left bar and tint still mark each run: 5.71:1 in light and 8.29:1 in dark for text on the tint.
- No horizontal overflow anywhere, no console errors, no failed requests.

**Minors carried:**
- A mid-caption ⚠️ can strand at 320 px (`site/src/diagrams/defensive_zone_coverage.mjs` :398; `faceoffs.mjs` :298 has the same shape). Captions get no U+00A0.
- The net-front and DZC leader lines cross their labels.
- The winger crease note is about 9,460 px tall at 400 px, which is a length question.
- The warn-inline left bar measures 2.03:1 (light) and 2.67:1 (dark) against the page, below 3:1. Other signals carry the warning too.

## Gate block and repair

The first `commit-gate` BLOCKED on evidence, not content. It re-derived every new rule from `sources/` and all of them held. It blocked for three reasons:

- **C8:** the D1 row said the `sources/` line refs were in the OPEN_ITEMS log, and they were not. The record also miscited PWHL holding as 54.2; it is 55.2 (`pwhl_rules.txt:5217-5226`).
- **C4:** a `rules-verifier` had covered only `game_management` :856.
- **C6/C11:** no reviewer had read the changed caption at its staged text.

Repairs:

**`rules-verifier`, run on the staged bytes (`git show :`).** Nothing false, and nothing cheaper than the book. Greps:

- **`puck_handling`, glass (KF :20, facts :771-772, body :777, KT14 :1045)**
  - NHL 63.2(ii)/(iii) at `nhl_rules.txt:6671/6678-6691`.
  - IIHF 63.2(II)/(III) at `iihf_rules_v1.1.txt:5134/5140-5152`, identical at `iihf_rules_2026-27.txt:5226/5235-5244`.
  - PWHL 65.2(ii)/(iii) at `pwhl_rules.txt:5650/5658-5671`.
  - USA Hockey 610(c) at `usah.txt:3772-3774`.
  - HC 10.1(ii) at `hc.txt:7408/7415-7416`, with 10.1(a) at :7453 and 6.3(e)(i) Note 1 at :4755-4757.
  - CARHA 75(b) at `carha.txt:3471-3473`.
  - Skater accidental clear, not penalised: USA Hockey 631(d) at `usah.txt:4758-4760` and USA Hockey Casebook 610 Situation 5 at `usah_casebook.txt:11917-11932`; HC 6.3(e)(i) at `hc.txt:4750-4754`; CARHA 75(a) at `carha.txt:3463-3468`.
  - Goalie limb, NOT carried into this file: HC 10.1(v) at `hc.txt:7422-7423` and CARHA 55(a) at `carha.txt:2622-2630`.
  - British layer: no amendment to 63.2.
- **`on_ice_communication` :256/:262/:263/:277/:279**
  - IIHF 55.1 (hands sentence plus the stick-to-stick exemption) at `iihf_rules_v1.1.txt:4625-4628` and `iihf_rules_2026-27.txt:4713-4716`.
  - USA Hockey 623 Note at `usah.txt:4360-4379`; HC 8.2 Interpretation 1 at `hc.txt:6770-6775`.
  - NHL 55.1 at `nhl_rules.txt:6204-6208` and PWHL 56.1 at `pwhl_rules.txt:5238-5243`, neither with a hands sentence.
  - NHL 61.1 at `nhl_rules.txt:6597-6603` and PWHL 63.1 at `pwhl_rules.txt:5578-5583`.
  - Hooking majors: NHL 55.3 at :6214-6215, HC 8.2(b) at `hc.txt:6764-6766`, IIHF 55.3 at `iihf_rules_v1.1.txt:4636-4639`, USA Hockey 623(b) at `usah.txt:4381-4383`.
  - Holding the stick: NHL 54.2 at `nhl_rules.txt:6193-6198`, IIHF 54.2 at `iihf_rules_v1.1.txt:4603-4605`, PWHL 55.2 at `pwhl_rules.txt:5225-5228`, HC 8.1 at `hc.txt:6721-6732`, CARHA 63(a) at `carha.txt:3007-3011`, USA Hockey 622 Note at `usah.txt:4344-4346`.
  - Note: USA Hockey's holding names only a free hand on the stick. It reaches a stick tie-up through the 623 Note (:4371-4373) and Casebook Standard of Play Situation 5 (`usah_casebook.txt:18420-18422`), so "can be called" is the correct hedge.
  - CARHA limbs at `carha.txt:3106-3125`, :2449-2469, :1417-1426, :1515-1519, :3006-3019.
- **`defensive_zone_coverage` :523**
  - USA Hockey Declaration at `usah.txt:380-382`, verbatim.
  - NHL 56.1 at `nhl_rules.txt:6250-6252`; IIHF 56.1 at `iihf_rules_v1.1.txt:4683-4684`; PWHL 57.1 at `pwhl_rules.txt:5279-5280` ("she").
  - USA Hockey 604(c) and Note at `usah.txt:3583-3595`; 625 Note at :4448-4452.
  - HC "body position" appears once (8.1, `hc.txt:6714-6722`), found by a flattened search.
  - CARHA at `carha.txt:3120-3122`, :2450-2456, :1417-1421.
- **`game_management` :854/:856** — CARHA 49 at `carha.txt:2449-2472`, 50 at :2476-2502, 52(a) Note at :2550-2556, 53 at :2571-2594, 27(b) at :1302-1324, 30(a) at :1417-1421, 32(d) at :1515-1519.

Carried from this read (the harsher direction):
- IIHF 56.1's "in the plural" is loose: it is singular "they".
- `game_management` :856's "a hit from behind on open ice" drops 53(a)'s "intentionally".

**`safety-reviewer`, on the staged caption** (`git show :site/src/data/diagrams.json` and the `.mjs`): **NOT BLOCKING.**
- The new stick-lift wording is safer: it moves contact away from IIHF 55.1's "near the hands" and away from HC 7.7's ride-up risk.
- Cutting "beside them" loses no qualifier. "Hold the inside" names a position, and all three hosts' prose says "beside" next to the figure.
- Rendered on all three hosts: `body_contact_and_battles` chunk 167, `defender` 033, `goaltender` 177.
- Carried: "then let go" voiced alone has no object. This was in HEAD, unchanged.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `safety-reviewer` ×3 with source checks; a `rules-verifier` line read (`game_management` :856); after the gate block, a `rules-verifier` on the staged bytes of every new rules claim | The operative greps are recorded in "Gate block and repair" below. The first version of this row said they were in the OPEN_ITEMS log. They were not, apart from `usah.txt:380-382` and CARHA :2501-2503. |
| D2 | Exceptions | Yes | same | Glass: deflected or no glass; the goalie-clear limb (HC 10.1(v)/CARHA 55). |
| D3 | Rule-set divergence | Yes | same | The hands sentence (IIHF location vs USA Hockey/HC effect vs NHL/PWHL none); holding the stick. |
| D4 | Citation integrity | Yes | readers | New quotations checked verbatim. |
| D5 | Provenance | Partly | readers, coordinator | No external URL added (per-file counts match HEAD). No `source-verifier` refetch; **declared out of scope** because no citation was added from outside `sources/`. |
| D6 | Negative existence claims | Yes | readers | "No hands sentence" in the NHL/PWHL verified; "only 53(b)…" exclusivity refuted and removed. |
| D7 | Cardinal rule | Yes | readers | The stick-lift technique is presented as craft ("no lean, no push" is coaching except under CARHA 49(a)). |
| D8 | Numeric ownership | Partly | readers | No new figures; **declared out of scope**. |
| D9 | Summary layer | Yes | readers | Lift wording at every layer, including KF/KT voiced alone; posture demoted with a layer test. |
| D10 | Key-facts layer | Yes | readers | Changed facts lines read voiced alone; caps checked with `--near`. |
| D11 | Reader safety | Yes | `safety-reviewer` ×3 | |
| D12 | Read-aloud integrity | Yes | readers rendered `md_to_speech` | |
| D13 | Folklore | Partly | readers | None introduced; the body was not swept; **declared out of scope**. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | CSS and plugin changes verified visually; body prose outside the changed units was not style-reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` ×2 | CLEAR. |

## Carried (not blocking)

**Minors**
- `on_ice_communication` :263 voiced alone drops :262's "only on effect", which reads harsher.
- `defender` :288 has no release (its sibling :291 carries it).
- `rules_primer` :435/:999 still say "below their bottom hand". That file was not in this wave.
- `puck_handling`: the CARHA 49(a) scope at :280/:302/:483/:492 and CM :953; the pinning count at :513 omits CARHA.
- Remaining amber panels on `conditioning_and_recovery` and `mental_game`.

**Caption diagram code (owner decision)**
- A U+00A0 is needed after mid-caption glyphs.
- The dark-theme rink outline is hard-coded as `PALETTE.boards '#1b1c1e'` in `scripts/lib/rink.mjs`.
- The `game_management`-hosted caption (`forechecking_systems.mjs` :918/:1299) still voices the demoted posture limb.

## What this method could not have found

- **A stick instruction in words none of the sweeps used**, such as "take away their blade".
- **Whether "low on the shaft, well below the bottom hand" is outside "near the hands" in the way an IIHF referee calls it.**
- **Real devices and other browsers**, and screen-reader output for "⚠️" followed by U+00A0.
- **Defects in unchanged body text of these files.**

## Appendix A — the shared author brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. You are one of nine parallel authors, wave 12. You own EXCLUSIVELY the one file named in your task. Never touch project/, scripts/, site/ or git. Other agents are editing sibling files; ignore checker failures in files you do not own.
READ FIRST: CLAUDE.md ("READABLE BEATS DEFENDABLE", the rendering-states and marker sections, "THE CORPUS TEACHES TACTICS", the non-negotiables).
TASK A — P2 panels. `python3 scripts/check_callout_flow.py --panels --file <path>` (reads site/dist, built 23:40 and current for your file). For each panel: move the ⚠️ off the paragraph opening onto a **strong** run of the hazard/instruction clause (bold the instruction, never a citation) — "⚠️ **instruction**" mid-paragraph. A glyph INSIDE a strong run after other characters gets nothing: split `**head, ⚠️ hazard**` → `**head,** ⚠️ **hazard**`. Never strip a unit's LAST marker (md_to_speech sets "Important." per paragraph/list item/facts line). Merging two paragraphs that state ONE hazard is allowed; never merge a claim with its counterweight. The listing slices at 40 rows: repair, re-run, repeat until the header reaches 0 or the listing stops changing. You cannot rebuild — predict the render from remark-corpus.mjs rules: WARNING_RE anchored at paragraph start = panel; ⚠ followed within 48 chars (no `— : ; ! ?` or `. `) by a strong run = warn-inline; `**⚠️ …**` (glyph LEADING the strong run) = warn-inline.
TASK B — stick-lift harmonisation (only where your file states a net-front stick lift). The adopted wording: lift their stick "low on the shaft, well below the bottom hand", "as the puck arrives, then let go" (IIHF 55.1 penalises a stick "against … or near the opponent's hands"; a held stick is a penalty, NHL 54.2 / IIHF 54). Apply it to every such lift sentence in every layer, including Key focus and Key Takeaways (voiced alone). Facts caps: run `python3 scripts/check_facts.py --near <path>` first (300 Rule/Convention, 200 else); fit by substitution, never by trading a caveat. Do not touch lifts that are not about tying up a stick (e.g. a lift pass).
LANE RULE: this is not a rules wave. If you meet a rules defect, repair it ONLY if permissive and penalty-bearing (verify in sources/*.txt, flattened); report everything else. Watch the wave-10 defect: a sentence enumerating several books' tariffs that names some ceilings and not others (implied cap by contrast) — never write one.
GATES (no pipes): check_links.py --quiet; check_facts.py; check_absolutes.py; check_marker_pairs.py <path> (0 LOST, or justify each). Render `python3 scripts/md_to_speech.py --only <stem> --out <SCRATCH>/w12_<stem>` (SCRATCH = /private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad) and read changed units voiced alone.
REPORT: panels before→after (and the predicted after), marked units before→after, every lift site old→new, any rules defect repaired (source quote + direction) or reported, and "what this method could not have found".

