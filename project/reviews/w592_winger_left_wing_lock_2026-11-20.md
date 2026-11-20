# W592: the left-wing lock on the winger page (20 November 2026)

## Gap

W591 found that winger.md never mentioned the left-wing lock, the system that changes a winger's job most.

## Edit (one agent, winger.md only)

The lock was placed in "Neutral Zone: Pressuring an Opponent with the Puck". The forecheck section's facts block was already full (8/8 coaching lines). The neutral-zone block had room, and that is where the NZ owner puts the lock once possession changes.

**Facts Convention line (~:303):**
- the locking winger drops to the half-boards;
- if the forecheck does not win the puck, they slide into line with the two defencemen as a third player across;
- many teams lock whichever winger is highest, so ask if yours plays it and who locks.

**Body paragraph (~:322):**
- **Who goes where:** two forwards, usually the centre and right wing, forecheck hard. The locking winger, conventionally the left wing, drops to the half-boards and slides into the back three.
- **The backcheck:** "That slide is your backcheck in this system, in place of picking up the late forward." This was added after review.
- **The width:** each of the three covers about a third of the ice.
- **Reading it:** read the transition early; a late lock gives the worst of both systems.
- **The cost:** you are out of the counterattack, you carry less of the attack, and you have one fewer attacker to cycle with.
- **The variant:** lock whichever winger is highest, with a loud, immediate call.
- **Framing:** a coaching choice, so find out whether your team plays it and which winger locks. It links the NZ and forechecking owner sections.

Every claim is backed by an owner line: forechecking :488–:506 and NZ :285–:309. No ⚠️, no rule claims.

**Key focus and Key Takeaways were left alone.** The lock is a team-specific system, not a universal winger point.

## Review

**safety-reviewer: OK.**
- Every claim matches its owner, with the owners quoted.
- It is not a law, and both anchors resolve.
- **The open question:** should the generic "sprint back and pick up the late forward" (Overview, Key focus 6, KT10) gain "unless you are the locking winger"? The answer is no. Those lines are written to the page's stated default, a 2-1-2 with low zone collapse, and stacking a variant's exception into three summary sites is qualification-stacking. Instead, one sentence in the lock paragraph says the slide replaces that backcheck. That sentence was applied.

## Rows

**Closed:** the winger left-wing-lock gap.

**Still open:** the forecheck section still assumes a 2-1-2, and its facts block is full.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w592.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs` on winger: 0 lost.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Audio.** Not rendered, so the distance between KT10 and the lock paragraph for a listener is unmeasured.
- **Errors in the owner sections themselves,** which are now carried here.
