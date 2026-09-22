# The passer's duty reached four layers before anyone looked — 22 September 2026

## The brief was wrong, and being wrong was the useful part

The coordinator's brief asserted that `passing_and_receiving.md`'s Common Mistakes (`:765`) and
Key Takeaways (`:833`) *"frame the cost as purely tactical"* and that *"neither appears to say it
puts their head down."*

**Both already said it.** The agent refuted it with the rendered text:

- `:765` (Common Mistakes, chunk `051.ssml`): *"…And in traffic it costs more than the rush: a puck
  behind them or in their feet puts their head down to find it, which is the posture that gets a
  player driven head-first into the boards. See Body Contact and Battles."*
- `:833` (Key Takeaways 3, chunk `057.ssml`): *"…In traffic that lead is also a safety duty, because
  a puck behind them or in their feet puts their head down at the moment a checker arrives."*
- `:301` (body): the full ⚠️ paragraph, citing the owner.
- `:203`: the fuller rim treatment with Hockey Canada 7.5.

⚠️ **Propagation was FOUR layers deep before the agent arrived. Acting on the brief would have
duplicated two safety limbs** — which is not a harmless error: a third restatement is one more
place for a correction to fail to reach.

**Brief error 26, and it has the same shape as most of the others: a layer test asserted from a
grep rather than run.**

## The one layer genuinely missing — and the agent found it by reading the spec, not the brief

`## Key focus` is defined in `project/readability_and_dual_audience.md:166` as **"the instruction —
what to do, plus the condition that makes it safe or legal"**, and `:173` makes a safety condition
mandatory **"in every layer that carries the instruction."**

Key focus carried the instruction **stripped of the condition**. The wall-posture limb above it is
the **receiver's** duty; nothing told the **passer** that their placement decides where their
teammate's head is — in the one layer whose defined job is exactly that pairing.

⚠️ **The fix was appended to the SAME PARAGRAPH, not added as a new one**, so the condition lands in
the same spoken `<p>` as the instruction rather than merely near it. Verified in the re-render.
The added sentence carries the consequence, **cites the owner, states no rule number and no book**,
and says nothing about what any book permits or penalises — the constraint that exists because the
opposite sentence shape produced this session's worst defect in this same file.

## Two rows closed on measurement

- **`:183` — the `Never:` line that could invert.** 183/200 characters. Rendered as its own `<p>`
  in chunk `011.ssml`: *"Never — Square up to the boards and drop your head… **Rim with your skates
  parallel to the wall instead**…"* ⚠️ **The inversion risk is gone**, and the reason is structural,
  not just lexical: *"instead"* sits **after a sentence boundary**, so the prohibition closes before
  the correction opens and a listener cannot parse the second sentence as continuing the `Never`.
- **`:290` — the passer's duty in the facts layer.** `Risk:` line present, 169/200, own `<p>` in
  `019.ssml`.

`check_facts.py --near` lists **no line from this document at all** — it has headroom throughout.

## A judgement deliberately left visible for the owner to overrule

`## Overview` was judged **not** a gap. Its defined job is *"the map, not the trip… and the hedges
and alternatives that qualify the instruction"*; its relevant paragraph maps the lead question by
pointing at the section that carries the duty in two layers, and does not issue the instruction in
the imperative. **A safety duty is not a hedge or an alternative.** The agent's reasoning: adding it
there would be restatement, which `check_layer_echo.py` exists to find.

⚠️ **The agent declared what that judgement rests on: the layer-job definitions, not a measurement.**
It ran no `check_layer_echo.py` and has no score before or after. **Recorded so it can be overruled
on evidence rather than rediscovered.**

## ⚠️ The `--only` false pass fired for real, against the coordinator's own wrong warning

The brief warned that a wrong `--only` id is a silent false pass — **and then gave the wrong id.**
`--only technique-passing_and_receiving` printed *"no markdown found under …/content"* and **exited
0**. `--only` is a plain substring match on `doc_id` (`md_to_speech.py:4657`); the working id is the
**bare stem** `passing_and_receiving`, and the rendered directory uses a **double underscore**.

⚠️ **Any brief carrying the hyphen spelling instructed an agent to run a verification that verified
nothing and reported success.** The live agent was messaged mid-task with the correction.

## What this method could not have found

1. ⚠️ **Whether the owner's wording is itself right.** The agent verified that this document
   *defers* to `body_contact_and_battles.md` and states no rule of its own. It did **not** open the
   owner, read Hockey Canada 7.5, USA Hockey 608 or NHL/IIHF 43, or check `:203` is verbatim.
   **If the owner is wrong, five layers here now propagate it faithfully.** → Dispatched to
   `rules-verifier`.
2. **`check_quote_drift.py` was not run** — `:203` contains a quotation and the brief did not list
   that tool. (The corpus-wide census reports 7 flagged in this file.)
3. **Whether the corpus now says this too many times.** No `check_layer_echo.py` score, before or
   after.
4. **The site.** Speech render only. On the page the reader sees the whole section at once and
   repetition is visible in a way it is not in audio.
5. ⚠️ **The cross-document layer test.** `puck_support_and_spacing.md`, `breakouts.md` and
   `center.md` all teach lead passes. **The layer test run was WITHIN-document; the cross-document
   one has not been done.**
