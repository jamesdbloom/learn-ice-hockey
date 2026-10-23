# SG47: puck_handling contact wording and the spin-off; running interference; the breakouts ladder pilot (23 October 2026)

## What changed

**`content/technique/puck_handling.md`**
- **"Into" replaced with "to":** "hip and backside into" became "to" at :34, In short :445, :461 ("face the pressure"), :1084 and KT3 :1128. "Into" is now used only for the penalised act. "Side-on" was restored at :34 and KT3 so the line cannot be heard as "back to them". The heading and its anchor are kept.
- **Spin-off (:548, plus the Technique facts line ~:539):** now "Spin only off a checker already leaning on you, never off one still coming at you, whatever their speed: mid-spin your back is to them."
  - The first draft used speed as the test ("only in a low-speed battle"). That contradicted the page's own absolute "never turn your back… however slowly they come" (:16, :469, :1048, quiz Q3), and review caught it.

**`content/technique/body_contact_and_battles.md` :73**
- **Holding your lane:** "holding the lane along the wall that you reached first" now adds "for your own run at the puck".
- **Running interference:** new sentence: "Moving into an opponent's path to screen them off a teammate who has the puck is running interference, and every book penalises it."
  - The first draft ("Holding a lane to screen… is interference in every book") was wrong. NHL/IIHF 56.1 and PWHL 57.1 let a player block the path from established position, and the page's own :242 says so.
- **USA Hockey leaning:** new sentence: "USA Hockey also takes leaning off a player who has merely touched the puck: one who has just passed, shot or tipped it is not eligible for that contact." Source: USAH Glossary, Contact with the Puck.

**`content/systems/breakouts.md`: restated-ladder pilot**
- The full no-change/time-out/shorthanded ladder is kept once, in §1 (:127-131, facts :105-110).
- **Restatements shortened:** §3 :547 and :551, §6 press :828, §8 power play :927-931, and 6-on-5 :998. Each is cut to its instruction plus a pointer to §1, but only where a layer test (rendered SSML, chunk numbers in the agent report) showed the nearby facts block still carries every tier.
- **Kept where penalty-bearing:** the ⚠️ 68.2/PWHL 70.2 empty-box bench minor, the USA Hockey classification limit, "a hurt teammate can still come off", and the over-the-glass minors.
- **Restored after review:** the injury exception at §3 :547.
- **Result:** about 230 prose words saved; rule references 179 → about 165.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules | rules-verifier | Every shortened breakouts sentence VERIFIED: NHL/IIHF/PWHL 81.4, 87.1, 81.2 and 81.6/20.3 (the major case NHL and PWHL only); USAH 624(b)(1) and 204(a); HC 6.7(b)/(d) incl. (i) and (iii); CARHA 65. "So Britain" holds for the EIHL (no 81/82/87 Casebook entry). The USAH contact-with-puck clause VERIFIED. The first interference sentence WRONG (overstated: block-the-path is legal) → fixed. |
| Safety | safety-reviewer (two passes) | **Pass 1:** one MAJOR (the spin-off speed test) and two minors (side-on dropped; the breakouts injury exception left chunk 035). The breakouts ladder otherwise passes tier by tier in rendered chunks 035, 049, 057–058 and 061–062. **Pass 2:** CLEAR, including the new interference wording checked against the IIHF, PWHL, USAH, HC and CARHA texts. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_callout_flow --bare: 0. check_marker_pairs on all 3 files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the rules-verifier |
| D4–D5 citations | Checked: the USAH Glossary and interference quotations are verbatim |
| D6 negative existence | Checked: no other book has the NHL/PWHL major-case icing clause; USAH and CARHA have no change bar |
| D7 cardinal rule | Out of scope |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Checked: puck_handling KT3 and Overview; breakouts Common Mistakes and Key Takeaways untouched; facts blocks are the ladder carriers |
| D10 facts | Checked: the spin-off facts line works voiced alone (about 189/200) |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Checked for breakouts (rendered, chunk-level layer test); puck_handling not rendered |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links and check_absolutes |
| D15 rendered site | Build passes. No visual pass. |

## What this method could not have found

- Spin or pivot advice on other pages that uses a speed test (plan row).
- Whether the IHUK In-House Rules amend the post-icing change for EIH/SIHA, making "(so Britain)" a scope collision (plan row).
- How a listener who joins mid-section hears a pointer to §1. A pointer is not a correction; the layer test kept penalty-bearing tiers local.
