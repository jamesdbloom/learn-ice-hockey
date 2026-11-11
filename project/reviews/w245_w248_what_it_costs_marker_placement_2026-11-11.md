# W245–W248: amber placement on eight "What it costs" sections (10–11 November 2026)

**Files:**
- content/positions/goaltender.md, content/positions/switching_positions.md (W245)
- content/technique/shooting.md, content/hockey-iq/playing_without_the_puck.md (W246)
- content/systems/zone_entries.md, content/hockey-iq/risk_management.md (W247)
- content/systems/game_management.md, content/systems/offensive_zone_play.md (W248)
- project/plans/OPEN_ITEMS.md
- this record

## Source
Every site review of W237–W244 found the same defect. In the new "What it costs" sections the amber warn-inline run sat on one of these:
- a scope clause ("USA Hockey's contact rule reaches only the two players in the dot (613(e))");
- a citation that leads the run ("NHL 51.3 allows…", "USA Hockey 603(a) writes no bare minor");
- an abstraction ("That list is a floor, not a ceiling.", "the presumption runs the other way.").

Meanwhile a MANDATORY ejection or match in the same paragraph sat in plain bold or plain prose, so a reader skimming the page stopped on the amber and skated past the price.

The owner set two rules on 9 November:
- every What it costs subsection opens with the instruction, then the price;
- the work is placement, not words (22 September, "readable not defendable").

Four agents worked in parallel, two pages each, from a shared brief (MARKER_BRIEF.md). They were allowed to move `⚠️` and `**` only, inside What it costs only, and to change no words.

## What changed
- **Placement.** In each paragraph, the amber now sits on the harshest mandatory tier the paragraph states: an ejection, a mandatory match, or a mandatory major and game misconduct. It no longer sits on a scope clause, a citation or an abstraction. Where two books' equal ejections sat side by side, they now share one amber run (for example, risk_management's slew-foot NHL/PWHL match with the IIHF major and automatic game misconduct).
- **New amber.** Paragraphs that stated a price with no marker gained one. Marked units rose as follows: goaltender 107 → 114, switching_positions 28 → 32, shooting 63 → 65, playing_without_the_puck 46 → 47. Most gains are on a mandatory ejection, match, or major and game misconduct. Four on switching_positions are not: :545, :555 and :559 are faceoff replacements or ejections from the draw, and :593 is a penalty shot. The safety review ruled all four KEEP. "Ejected from the face-off" is the books' own term (CARHA, Hockey Canada, NHL, IIHF), and it is heard in one sentence with "from the draw".
- **One demotion the first draft of this record missed.** risk_management :900 lost the bold on "Hockey Canada 8.8 starts at a double minor, but 8.8(c) reaches a match", which left Hockey Canada's slew-foot match invisible to a skimmer. Safety R1 restored it as amber.
- **switching_positions.** Every subsection now has amber on its first price, in the paragraph straight after its instruction. Before, none did, and "Fouling a breakaway from behind" had none. The instruction and the price cannot share a paragraph there without merging paragraphs, which the brief did not allow (plan row).
- **Density trims (site review, applied by the coordinator).** These moved bold and markers only:
  - playing_without_the_puck "A hit from behind" P3: the middle of three ambers (608(b), already named by the first run) went back to plain bold.
  - risk_management "A hit from behind" P1: the 375-character amber now ends at "A hit from behind ends your game in every book here except USA Hockey". The Hockey Canada and IIHF aside is plain, and ", so never price it at USA Hockey's minor plus misconduct" stays bold.
  - game_management "Over the glass" P1: the amber ends at the minor. The carve-out list is plain.
  - game_management "A late hit" P22: the second amber, a test rather than a price, went back to plain bold.
- **Trims declined** because they would have turned an ejection or match plain:
  - playing_without_the_puck P1 and zone_entries P1 (the IIHF limb), where the site reviewer offered them with that trade-off;
  - game_management late-hit P30, goaltender net-front P4 and offensive_zone_play hit-from-behind P1, which the reviewer itself left alone.

## Verified
- **Words unchanged.** For all eight files, stripping `⚠️`, `*` and whitespace from HEAD and from the result gives identical text. The coordinator re-ran this after the trims: WORDS IDENTICAL on all eight.
- **check_marker_pairs.** 0 LOST and 0 SPLIT HALF across all eight files, so no paragraph or list item lost its spoken "Important.".
- **Rendering.**
  - **Before the build:** two authors ran their sections through `remark-corpus.mjs` itself, and every glyph formed `warn-inline`.
  - **Built site, all 32 page × viewport × theme runs:** 0 panels, 0 bare glyphs, 0 glyphs inside a strong run, 0 literal `**`, and 112 glyphs to 112 `span.warn-inline`.
  - **After the trims:** the coordinator rebuilt and confirmed 0 literal `**` on the three trimmed pages. The risk_management split renders as amber "…except USA Hockey", then the aside in plain text, then bold ", so never price it…".
- **Mandatory or discretionary.** Where an author's placement depended on whether a tier was mandatory, it read the rule text. Examples: NHL 60.4 "shall assess" against IIHF 60.4 "at their discretion, may assess"; CARHA 48(a), 49(a), 50(c) and 62 "shall"; Hockey Canada 7.4(c), 7.5(c), 7.6(c) and 7.7(c) "will be assessed"; USA Hockey 602(a) and 604(e).

- **Safety-review fixes (applied verbatim by the coordinator, placement only).** The commit gate blocked under C6 because no safety reviewer had read a pass that moves amber off clauses that limit a permission and adds spoken "Important." units. The safety review found nothing blocking. Its fixes added a second marker that restores the amber on each such limit:
  - switching_positions :559 "does not free your hands", :573 "a game between a Competitive Contact team and a Body Checking team is not a checking game", :577 "You may hold your ground, but only by standing in it", :583 "and it does not lift because the carrier saw you coming", :575 "and must if the player is injured" (Hockey Canada 7.3(b));
  - goaltender :1649, the 604(b) game-decides limit;
  - zone_entries :1165 "An ordinary hard chase can be a charge";
  - offensive_zone_play :1179 and :1180, the women's step-or-glide limits;
  - game_management :1250, the IIHF 101.1 limit, and :1211, "head contact is its own rule, which is where 49(c) stops helping";
  - risk_management :900, the Hockey Canada 8.8(c) match (R1), and USA Hockey 639's minimum major and game misconduct;
  - offensive_zone_play :1189 "makes it mandatory where a late hit injures".

  Every fix only adds `⚠️` and `**`, and no paragraph lost a marker.

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×4 | Placement-only edits. Each ran the word check (WORDS IDENTICAL), check_marker_pairs (0 LOST), `--panels` (0), check_facts and check_links. Each listed the prices it could not reach without a word change. |
| site-reviewer (all eight pages; Playwright Chromium at 400 and 1440, light and dark) | Nothing blocking. Mechanics and page health were clean in all 32 runs. Density: the problem is a few very long amber runs (a Hockey Canada head aside inside the bold), not the number of runs. goaltender "A hit on your back" is not a wall: six short per-book ceilings. playing_without_the_puck "A hit from behind" was a wall. Seven trims were recommended; the four that cost no ejection were applied. Remaining non-price ambers and three discretionary-over-mandatory paragraphs are in the plan row. |

| commit-gate (first run) | BLOCK under C6: no safety reviewer had read a pass that changes which penalty clauses a reader sees in amber and a listener hears as "Important.". The first draft of this record argued "no word changed, so no claim changed". The gate overruled that: the audio changed, limits lost their amber, and this repository ran safety reviews on earlier placement passes (s3, sg189). Mechanics passed: words identical, every change inside What it costs, 0 LOST, dist clean, timing. C4 not engaged. |
| safety-reviewer (the staged eight sections, HEAD and staged both rendered) | Nothing blocking. The spoken text differs only by "Important." on the 14 new units. Every new escalation was ruled KEEP. Ten placement fixes were recommended to restore amber on limits to a permission, plus R1 (the 8.8(c) demotion). All were applied. The three discretionary-over-mandatory paragraphs are not unsafe; one optional fix was applied. Citations inside the :571/:573 runs stay. |

No rules-verifier ran. No rules claim was added or changed, and the commit gate ruled C4 not engaged. The authors' mandatory-or-discretionary readings decided placement only, and they are the authors checking their own work, not rules-verifier evidence.

### C11
The authors made the placement edits. The coordinator applied four of the site reviewer's trims and fourteen of the safety review's fixes, all given as exact markdown. Each fix only moved or added `⚠️` and `**`, with no word change. The coordinator then re-verified the words (WORDS IDENTICAL on all eight) and the markers (0 LOST), rebuilt, and wrote the plan row and this record.

### Checks after the last content edit
- check_facts: exit 0.
- check_links --quiet: exit 0.
- check_marker_pairs: 0 LOST on all eight files.
- Word check: WORDS IDENTICAL on all eight files.
- Full `npm run build` (absolute binary): exit 0 after the final edit.
- check_callout_flow --bare: 0 on the trimmed pages.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | not engaged (no word changed); mandatory-versus-discretionary read in the source where placement depended on it |
| D5–D8 | not engaged |
| D9 Summary layer | out of scope (What it costs sections only) |
| D10 Key-facts layer | not engaged |
| D11 Reader safety | safety-reviewer on the staged eight sections, rendered against HEAD; fixes applied |
| D12 Read-aloud | check_marker_pairs: 0 LOST; new units only on mandatory tiers |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | site-reviewer ×32 runs; coordinator rebuild after the trims |

## What this method could not have found
- Whether a mandatory tier stated in a sentence is in fact mandatory in its book, where no author read the rule. Amber now points at those sentences harder.
- How "wall of amber" feels to a real reader. The density judgement comes from screenshots and line share.
- The listener's experience of the added "Important." units. The audio has not been rebuilt.
