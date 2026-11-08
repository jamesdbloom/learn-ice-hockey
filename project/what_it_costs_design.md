# One "What it costs" section per page — design (owner decision, 8 November 2026)

**Status:** owner-chosen direction, being piloted on `systems/defensive_zone_coverage.md`. Open work is tracked as rows in [`plans/OPEN_ITEMS.md`](plans/OPEN_ITEMS.md). This file is the standing design; it is not a dispatch queue.

## Why

The owner made readability the top priority. A per-page trim of the restated checking-from-behind ladder saved 55 of 19,064 words (0.3%) on the pilot page. Each copy was the only local carrier of some safety limb, and the facts blocks were at their caps. The tariff text is spread across a page's body sections, mostly as a "**What it costs.**" paragraph in almost every section, so the same ladder is restated in each one.

The owner chose a structural fix: keep the rules, but gather them in one place per page, and let the coaching prose read as coaching.

## The shape

1. **One `## What it costs` section per page.** It goes after the last body section and before `## Common Mistakes`.
   - Inside it, put one short subsection per hazard the page teaches. Examples: a hit from behind, contact with the goalie, contact to the head, interference.
   - Each subsection opens with the instruction ("Pull up when you can see their numbers"), then gives the full per-book ladder once.
   - That ladder carries every limb the page voiced before: each book's tier, the mandatory and match limbs, the exceptions, the British limb, the next-game ladder. It links to the owner page (for example, Body Contact and Battles for checking from behind) rather than reproducing it, wherever the owner already carries a limb and this page does not need it.
2. **Each body section keeps its instruction and ONE consequence, in the same sentence or the next.**
   - That consequence is the scene's top tier in plain words. Examples: "in most books that ends your game"; "under Hockey Canada and CARHA, driving them into the boards is a mandatory match".
   - It is followed by an in-page link to the matching `What it costs` subsection.
   - The body never ends on a permission. If the scene has one, its limit stays next to it, as the style guide's "fold a limit into the same sentence as its permission" requires.
3. **Facts blocks.** A section's facts block extracts its own section, so penalty-ladder facts lines move with the ladder into a facts block under `What it costs`.
   - Each body section keeps one facts line carrying its instruction and its scene tier, so a listener who hears only the facts still gets the warning.
   - This also relieves the facts-block caps.
4. **Common Mistakes and Key Takeaways keep their role.**
   - Each still leads with the instruction and states the one tier a reader acts on.
   - A Key Takeaway must stay true when voiced alone.
   - Common Mistakes may point to `What it costs` but must keep any tariff it is the only local carrier of.
5. **Markers.** A ⚠️ that is a paragraph's last marker must stay with that paragraph, or the spoken "Important." is lost (`check_marker_pairs.py` must show 0 LOST). A marker moves into the new section only together with the claim it marks.

## Keep the section tight (owner, 8 November 2026)

On the pilot, the first version of the section voiced as one unbroken run of penalty detail: about 38% of the episode, 28 of 73 spoken chunks. The owner chose to keep the section in the audio but tighter.

1. **Each subsection opens with one short spoken lead.** The lead is the instruction plus the top tier that changes what a player does, in one or two sentences.
2. **A ladder the owner page already carries becomes a pointer to that page.** Examples: checking from behind (Body Contact and Battles) and rule wording (Rules Primer). Keep only what is specific to this page's scenes:
   - each scene's mandatory or ejecting tier;
   - any exception or permission and its limit;
   - any book's divergence that changes what a reader does here;
   - the British limb where the scene needs it.
3. **What stays on this page is decided by the body tier.** Because every body section already states its consequence, the section's job is the detail a reader acts on *at this scene*, not the whole book.
4. **The facts lines under the section follow the same rule.** Where a facts line carries a limb no other unit on this page voices, keep it. Do not use it to carry a full ladder the owner page holds.
5. **The per-limb layer test changes accordingly.** A limb may leave this page only if both of these hold:
   - the owner page voices it;
   - this page's body still states the scene's consequence.

   Record in the per-limb table which limbs went to the owner.

## What must not happen

- **Never drop a limb.** Every limb voiced before must still be voiced on the page, by the per-limb layer test the census used.
- **No pointer without the consequence.** The listener hears the box later in the same episode. Until then, the body sentence's one tier is the only warning they have.
- **No cheaper quantifier.** Never change "most books", "five of six" or "every book but…" without naming the books, and never make an act sound cheaper.
- **No rewording of a rule while moving it.** A move is a move. A rule claim reworded in transit is new text and needs a rules-verifier.

## How it is checked, per page

- **Measure before and after:** `check_readability.py` (words, sentence length, long paragraphs, KT length).
- **Per-limb layer test:** every limb, and which unit carries it, before and after.
- **Checkers:** check_facts (no pipe), check_links, check_absolutes, check_marker_pairs, check_layer_echo.
- **Render and read every moved unit de-tagged, measuring chunk distance.** The body's one tier must be heard with its instruction.
- **Review:** a rules-verifier on anything reworded, a safety-reviewer on the whole page, and a site-reviewer on the first pilot page (the new section, in-page anchors, amber runs).

## Which pages, and what to move (owner, 8 November 2026)

The second page, `forechecking_systems.md`, showed that the census order is the wrong way to choose pages. Moving its scattered "What it costs" paragraphs gained little:

- prose words went **up** 0.8%;
- spoken length fell 3.9%, and only because facts lines were deleted;
- warning markers rose from 101 to 107.

That page's coaching sections already led with coaching. Its heavy rules region is a whole section of book-by-book rules ("What your book allows when you get there"). The owner chose to go further on that page: fold that rules section into What it costs, and keep only its coaching in the body.

So:

1. **Choose pages by measured gain, not census order.** Before restructuring a page:
   - measure where its rule-bearing units sit: `check_tactics_ratio.py --file <stem> --by-layer`, plus a read of its section list;
   - restructure only where tariff is spread through coaching sections, as on the pilot, or where a rules section can move whole.
2. **A whole rules section is in scope.** Its coaching sentences stay in the body. Its book-by-book tiers move into What it costs as subsections.
3. **Watch the alarm density.** Each subsection lead keeps its ⚠️. A book bullet beneath it needs its own ⚠️ only if that bullet holds a paragraph's last marker, or states a mandatory or ejecting tier the lead does not.

## Pilot

`systems/defensive_zone_coverage.md` comes first. It has nine "What it costs" paragraphs and the census mapped its 18 checking-from-behind sites (`reviews/census_restated_ladders_2026-11-08.md`). If the pilot reads better and loses no limb, `forechecking_systems.md` is next, then pages in the census order.
