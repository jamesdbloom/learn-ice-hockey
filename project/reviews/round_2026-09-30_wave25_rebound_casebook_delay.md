# Wave 25 — the wave-24 follow-ups: rebound framing, Casebook 607 Situations 4/5, 42.1, charging the goaltender, delay of game (30 September 2026)

**Scope.** The wave-24 follow-up rows, worked in five file-disjoint lanes, changed eight documents:
- goaltender
- winger + offensive_zone_play
- scanning_and_anticipation + rules_primer
- neutral_zone_systems + breakouts
- body_contact_and_battles

Authors were briefed with wave 24's four binding rulings:
1. Quote Note 1, or say it "sends/files" accidental contact to interference.
2. Keep the thresholds verbatim: "made a reasonable effort to avoid" and "clearly made every attempt".
3. Never name one book in a "do not carry this permission" warning.
4. Never add a permission to a summary layer.

**Method.** One author per lane. Then:
- an independent `rules-verifier` or `safety-reviewer` read every lane;
- every blocked unit went back to its author, and every repair was re-read;
- a `site-reviewer` checked the 8 pages on the final content.

**What was wrong, in kind.**
- **Rebound carve-out.**
  - It was voiced with no book named, or with only two of the three books that lack it.
  - offensive_zone_play gave it to the IIHF with a 🇬🇧 flag, which told an Elite League reader that incidental crease contact keeps the goal. The EIHL Casebook's Rule 69 addition says contact in the blue paint "calls for disallowing a goal".
  - An offensive_zone_play facts line stated "what the rule forgives" as universal.
- **Casebook 607 Situation 4.**
  - It was missing from winger, which named only HC and CARHA as penalising a pushed-in attacker who makes no effort.
  - It was then introduced as USA Hockey writing the point "in its Casebook rather than its rules". That was false: the rules are the harsher text, and the Casebook is the only relief.
  - Its waiver was added to a Key Takeaway, which was blocked and removed.
  - That Key Takeaway then went through three reads before its book list was right. Final text: "in every book here contact you make no effort to avoid can be penalised on you, and under the IIHF, USA Hockey, Hockey Canada and CARHA it must be". The NHL and PWHL stay under "can", because Table 14 row 3C is discretionary.
- **42.1.** NHL/IIHF/PWHL 42.1's "not fair game… unnecessary contact" sentence and its discretionary incidental permission were unrouted. They are now routed where goalie contact is priced.
- **Charging a goaltender.**
  - HC 8.5(b), a mandatory major plus game misconduct, and CARHA 52(b), mandatory in the crease, were not voiced in scanning.
  - A repair there then wrote "ordinary interference reaches the same act in every book here but USA Hockey". That was false: USAH 625(a)(8) reaches it. The text now reads "…every book here — USA Hockey by a route of its own".
- **Delay of game.** Patience advice against a trap said "do the waiting" and "punishes you very little for waiting". Every rulebook lets the referee penalise a team for delaying the game, and HC 10.1(a) and CARHA 55(a) make deliberate team delay a bench minor. It now reads "patience means moving the puck, not standing on it".
- **Wording that made a rule look narrower than it is.**
  - goaltender :1118 read "a defender" at HEAD; the wave first changed it to "a teammate", which a reader flagged as ambiguous (the attacker's teammate?), and it now reads "one of yours".
  - The `rules_primer` "do not carry it into its game" warning named only USA Hockey; it now names USA Hockey, Hockey Canada and CARHA.

**The lesson, again.** Wave 23's contrast shape recurred in every lane, even though each author was briefed on it. A book list that is correct for its own sentence still implies something about the books it leaves out. The Key Takeaway above needed three reads because each fix corrected one book and left another implied.

**Gates, after the last content edit (23:44, scanning_and_anticipation):**
- `check_links` 0, `check_facts` conform, `check_absolutes` 0, `check_geometry` 0, `check_secrets` 0.
- `check_marker_pairs`: 0 lost in all 8 files.
- Clean `npm run build` (absolute binary) at 23:45, exit 0; check-links resolves all 54 pages.
- `check_callout_flow --panels` 0 and `--bare` 0.
- The new "⚠️ Never charge one" run is confirmed wrapped in `span.warn-inline` in the built HTML.
- A grep of the 8 files' working copies for "tried to avoid" and "penalises even accidental" returns 0. It was run on the working tree, not `git diff --name-only`; see wave 24's correction.

## Rendered site (D15)

`site-reviewer` ran on the 23:34 build, which contained every content edit except the final one-glyph placement. That placement was verified afterwards in the 23:45 build's HTML.
- **Result:** all 8 pages pass in all four cells (400/1440 × light/dark). 0 panels, 0 bare or untreated glyphs, and 0 `<strong>…⚠…</strong>` runs without a wrapper in the built HTML. Facts values render and both glyph-bearing facts lines are wrapped. Key Takeaways are continuous. No horizontal scroll; console clean; no HTTP errors or off-origin requests.
- **Eye check:** it found "Never charge one" rendering as plain bold among five amber runs, and it was fixed. "Patience means moving the puck" in NZS is also unmarked. It sits beside the paragraph's amber CARHA instruction, so it was left as a row.
- **Not reached:** the theme toggle, real devices, 320 px, search.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×6, `safety-reviewer` ×5 | NHL/IIHF/PWHL 42.1, 63.1/65.1, 69.1–69.7 + Table 14/Appendix IV 3B/3C; USAH 607(d) + Notes, 610(g), 625 + (a)(8), 632(a), Casebook 607 Sits. 4/5, 625 Sits. 7–13; HC 7.4 Interps., 8.3, 8.5 + (a) Interps. 1–2 + (b), 10.1(a) + Interp. 1; CARHA 30(a), 49(a)–(c), 52(b) + Note, 55(a) + Note 2, 66(a) + Notes, 66(b), 66(e), 74(a), 86; EIHL Casebook Rule 69 + preamble. |
| D2 | Exceptions | Yes | same | Rebound carve-out scoped to three books; Situation 4's three rungs; 42.1's discretion; 74(a)'s "unless prevented". |
| D3 | Rule-set divergence | Yes | same | "Every book but USA Hockey" and "two books" frames repaired; "must"/"can" split by book, verified against each. |
| D4 | Citation integrity | Yes | readers | Casebook quotations verified across page-furniture splices; EIHL Casebook quoted verbatim. |
| D5 | Provenance | Yes (one citation) | commit gate, coordinator | One citation added to the scanning_and_anticipation trailer: the CARHA Official Rule Book URL, already cited by 10+ documents and provenance-tested on 24 Sep per `sources/README.md`; every CARHA quotation in the diff was located in `carha.txt`. No new source; no `source-verifier`. |
| D6 | Negative existence claims | Yes | readers | "No rebound carve-out in USAH/HC/CARHA", searched by the act ("simultaneously", "loose puck"); "no other own-zone advance duty than CARHA 74(a)"; whether CARHA 49(c)'s general body-contact waiver reaches a goalkeeper is **unresolved** and carried as a row; the corpus's "CARHA writes no incidental-contact permission" claims err harsher if it does. |
| D7 | Cardinal rule | Partly | readers | Not the wave's subject. |
| D8 | Numeric ownership / restatement | Partly | readers | Book lists named, not counted. **Otherwise declared out of scope.** |
| D9 | Summary layer | Yes | readers | A permission was removed from winger KT8, not added; KT5 and KT8 lead with instructions. |
| D10 | Key-facts layer | Yes | readers | Several lines at 298–300/300; HARD_MAX blocks edited by substitution. |
| D11 | Reader safety | Yes | a reader on every lane and repair | |
| D12 | Read-aloud integrity | Yes | every author and reader rendered `md_to_speech` | 0 lost markers ×8; units read with their chunk neighbours. |
| D13 | Folklore | No | | **Declared out of scope.** |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | **Declared out of scope** beyond changed units. |
| D15 | Rendered site | Yes | `site-reviewer` + coordinator HTML check | See above. |

**What this wave could not have found.** Book lists were checked where the wave's words reached: "must", "can", "two books", "every book but", "rebound", "incidental". A list that implies something about an unnamed book in other words would pass. Sibling documents outside these eight were not swept for the same Key Takeaway shape. The follow-up rows in OPEN_ITEMS.md name the known remainders.

**Correction from the first commit gate:** the closed-rows list below first included the `[HC 8.5(b)] shooting KT6` row. shooting.md is not in this diff, and KT6 still lacks HC 8.5(b)'s injury limb. The row is restored to OPEN_ITEMS.md. The same key also swept up the `[HC 8.5(b)] center :474` row. It is **not** closed: center.md :474 still calls HC 8.5(b)'s interference-injury limb Hockey Canada's injury limb, where the charging-injury limb is 7.4(b). That row is restored to OPEN_ITEMS.md too. Only its pointer half also appears in the new [HC 7.4 pointer] row. A second gate caught this, after the first correction had wrongly called the row superseded.

## Plan rows closed by this wave (verbatim from OPEN_ITEMS.md at dae9a78)

- [rebound 69.7 framing] goaltender, winger, offensive_zone_play and any other rebound carrier — the "EIHL doesn't allow it; elsewhere don't lean" contrast implies rebound contact is fine outside the EIHL; only NHL/IIHF 69.7 and PWHL 71.7 carve it out (HC 8.5(a) Interp. 1, USAH Note 1 + Casebook 607 Sit. 4, CARHA none). center.md is fixed and is the model (direction: permissive)
- [42.1 route] NHL/IIHF/PWHL 42.1 repeats "not fair game… unnecessary contact in every case" and carries its own discretionary incidental permission — unrouted wherever goalie contact is priced via 69.2/69.4 alone (direction: completeness; check for an unscoped permission)
- [HC 8.5(b)] Hockey Canada's mandatory major+GM for charging the goaltender (no location) is not voiced in scanning_and_anticipation and possibly in siblings (direction: completeness)
- [USAH Casebook 607 Sits. 4/5] the corpus now states Note 1 in its both-readings form; Sit. 4 (pushed-in attacker who made every attempt: no penalty; "going hard to the goal" then an honest attempt: minor+misconduct) and Sit. 5 (goalie with the puck may be engaged outside the privileged area; 604 scope) are carried unevenly — winger lacks Sit. 4; goaltender never states Sit. 5's "can be legally checked" (a goalie may overestimate protection) (direction: completeness/harsher)
- [CARHA 55(a)] bench minor for a team "deliberately delaying the game in any manner" vs NZS "do the waiting in the neutral zone" and breakouts KT7 "you have time — use it"; NZS :131/:150 patience lines vs 74(a) (candidates; direction: possibly permissive for CARHA)
- [scanning CARHA] scanning_and_anticipation :371 — add CARHA 52(b) Note + 66(b) to the new "not fair game" sentence (optional completeness)
- [goaltender wording] goaltender facts :1118 "a defender forced them into you" → "a teammate" (same length; the book means any defending player) (readability)
