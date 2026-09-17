# Back-of-net freeze rule-conflict, and the lateral-throw interpretive caveat — 17 September 2026

Two Workstream 1J residual rows closed, one investigated and left open on the
record because the primary sources genuinely do not settle it.

## 1. `content/systems/faceoffs.md` and `content/positions/goaltender.md` — the four-book back-of-net comparison

**Fix applied:** `faceoffs.md:183` (the back-of-net freezing bullet) now carries
*"⚠️ That draw-only answer is the NHL's and the IIHF's — USA Hockey and Hockey
Canada both add a minor penalty on top of it, so do not read 'just a faceoff'
as the price in every book; Goaltender has the full four-book comparison."*
`goaltender.md`'s lateral-throw passage (body prose and the matching Common
Mistakes bullet) now carries the caveat that the IIHF's minor-penalty ruling on
a lateral/along-the-boards throw comes from the Situation Handbook, not the
bare Rule 67.3(III) text, and that the Handbook itself ranks below the
Rulebook in any conflict.

**Verified by:** an independent `rules-verifier` review (agent, this session),
not self-certified. Re-grepped, itself, in this session:

- NHL Rule 85.2 (`sources/nhl_rules.txt:9205-9221`) — no penalty named.
- USA Hockey Casebook Rule 610, Situation 8 (`sources/usah_casebook.txt:11973-11983`)
  — minor for delay of game.
- Hockey Canada Rule 6.12(b) / 10.1(a) (`sources/hc.txt:5565-5584`, `:7453`) —
  minor for delay of game.
- IIHF Rule 67.3(III) (`sources/iihf_rules_v1.1.txt:5398-5406`) — "forward
  towards the opponent's net", no lateral/boards language.
- IIHF Situation Handbook, Situation 67.2, word-for-word identical across the
  v1.1, v1.0 and 2026/27 editions (`sources/iihf_situations_v1.1.txt:5165-5171`,
  `sources/iihf_situations.txt:5168-5174`, `sources/iihf_situations_2026-27.txt:5212-5218`)
  — rules the lateral throw a minor under 67.3(III).
- IIHF Situation Handbook Foreword (`sources/iihf_situations_v1.1.txt:19-20`)
  — "in case of any contradictions, the valid IIHF Rulebook is always the
  basis", confirming the "ranks below the Rulebook" characterization.

Mechanical gates: `check_links.py`, `check_facts.py`, `check_absolutes.py` all
clean on the staged diff. No contradiction found in either document's
surrounding prose; `git diff` confirmed no other lines moved.

**Verdict: GO.** Committed.

**What this method could not have found:** any error in the unchanged
surrounding text of either document; site-rendering correctness; whether the
2026/27 IIHF Rulebook's reported Rule-46 renumbering shifts Rule 67 itself
(flagged as a latent question, out of scope for this fix, not yet checked).

## 2. NHL 63.2(i) vs 85.2 on a goaltender freezing the puck outside the crease at the back of the net — investigated, left genuinely unresolved

**The question:** the back of the net is outside the crease. NHL/IIHF 85.2
names a faceoff and no penalty for a goaltender who freezes a puck there with
stick or glove. NHL/IIHF 63.2(i) reaches "any player, including the
goalkeeper... who holds, freezes or plays the puck... to deliberately cause a
stoppage of play" outside the crease. Which governs — does 85.2's silence on
penalty mean none applies, or does 63.2(i)'s general language reach the same
act anyway?

**Investigated by:** an independent `rules-verifier` agent, this session,
searching both full rulebooks for any interpretive-hierarchy statement
(`notwithstanding`, `supersede`, `precedence`, `govern`/`governs`/`governed`)
and finding none bearing on this rule pair. No NHL casebook exists on disk at
all — `sources/README.md` lists only `nhl_rules.txt` and its layout/superseded
variants, no NHL interpretive volume — so there is no NHL-side interpretation
to check. The IIHF Situation Handbook has no entry on point: Situations
85.16/85.17 cover the puck going under the net, not a stick/glove freeze on
the back of it, and Situation 63.1 (a goaltender falling on a puck outside the
crease, ruled a 63.2 penalty) and Situation 63.33 (a goaltender freezing a
dumped-in puck, no penalty mentioned) are both close analogues that cut in
different directions without matching the exact fact pattern.

**Suggestive but not dispositive:** elsewhere in Rule 85 the drafters do
cross-reference a penalty when they intend one to attach to a Rule 85 fact
pattern (85.6 → 67.3 for a goaltender who deliberately drops the puck on the
netting; IIHF 85.5 → Rule 63 for an attacking player's stoppage). 85.2's
back-of-net clause does neither. That is a pattern in the document's own
drafting, not a stated rule of interpretation.

**Conclusion: genuinely unresolved from primary sources on disk.** What would
resolve it: an NHL officiating memo/casebook entry (none exists in this
corpus) or an IIHF Situation Handbook entry naming this exact fact pattern and
stating whether 63.2(i) is assessed alongside the 85.2 faceoff.

**No corpus change made.** `goaltender.md:388` already reads "NHL and IIHF
85.2 name no penalty for smothering it" — a description of 85.2's own text —
and does not claim 63.2(i) is thereby excluded. That framing was checked
against this finding and found already accurate; asserting exclusion, or
asserting inclusion, would both be unsupported. Recorded here so a future
reviewer does not have to re-derive the same search.

**What this method could not have found:** an NHL interpretation that exists
outside this corpus's source set (no NHL casebook is on disk to search);
whether an EIHA/BUIHA/SIHA in-house ruling addresses this fact pattern
(out of scope — those bodies do not publish a casebook this corpus has
acquired).
