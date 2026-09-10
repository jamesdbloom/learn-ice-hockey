# Findings — boards and contact safety

⚠️ **Moved out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, VERBATIM and unedited.** The plan had grown to
17,632 lines and 633 sections, which the owner called *"too long and out of control … hard for you and me to
understand"*. These sections are finished work: round narrative, censuses of closed rows, retractions and
post-mortems. **Nothing here was summarised or rewritten** — a tidying pass in this repository once removed a
correct fact, so the content was relocated by line range rather than retyped.

**The plan keeps a one-line index pointing here.** 6 section(s).

---

### ✅ CLOSED — the two body ✓ / summary ✗ documents, and ⚠️ MY BRIEF NAMED THE WRONG LAYER IN BOTH

⚠️ **Both closed. `playing_without_the_puck.md` reached six layers; `offensive_zone_play.md` reached four.
But read item 1 below for what it says about briefs, not about these two documents** — the row's own
location claim was wrong in both, and in one of them the gap was in the very layers this row credited as
carrying the limb. **Full account: the round-71 record, "The second wave".** The tally divergence in
item 4 is still open and is being worked.

---

### T0-P5 The corpus now contradicts itself on this play, and says so out loud

`offensive_zone_play.md` was repaired to make the wall the object at `:817`, `:828`, `:867`.
`forechecking_systems.md:511`/`:521` still makes the winger the object — and `:521` explicitly says
the coaching test is *"used identically in Offensive Zone Play."* **Same play, same test, opposite
grammatical objects, with a cross-reference pointing at the disagreement.**

⚠️ **This divergence is CREATED by the commit that ships the offensive_zone_play repair.** Accepted
deliberately: before it, both documents were wrong; after it, one is right. Shipping one correct
document beats shipping two incorrect ones, and the forechecking repair is new text that has not been
reviewed. **It is the first item of the next wave.**

**Proposed wording is a HYPOTHESIS** (`rules-verifier`'s own label; `:511` has ~116 chars of headroom
against the 300 cap, `:966` ~149):
- `:511` → *"…so you can play the puck or seal the wall, not the winger; all four books let you
  lengthen their path, none lets you pin a player who has not got the puck"*
- `:544` → make it **four** things, adding checking from behind.

---

### T0-P4/T0-P5 — CLOSED. Imported, not pointed, and the agent refuted its own draft

`forechecking_systems.md`: the `Read:` line **de-granted** — no longer *"legally seal the winger"*, now
*"seal the wall rather than the winger's body"* (194/200). Two new `Rule:` facts (294, 293). Body object
changed to the wall with the 622/54.2 counterweight **inside the same bullet**; the enumeration went
from three deciding factors to four.

⚠️ **My "import or point" premise was half wrong.** `:627` does **not** hold most of what the pinch
section needed — HC Interpretation 3, USA Hockey 622, the 54.2 strength move, the competitive-contact
bullet and the vulnerable/defenceless clause were **new to the document entirely**. A pointer was never
viable for the facts layer.

⚠️ **THE AGENT'S OWN FIRST DRAFT WAS WRONG AND THREE BOOKS REFUTED IT.** It wrote *"Arms are the half
every book refuses."* **NHL 54.2, IIHF 54.2 and Hockey Canada 8.1 all carry, near-verbatim:** *"A player
is permitted to use their arm in a strength move, by blocking their opponent, provided they have body
position and are not using their hands in a holding manner."*

⚠️ **And it resolved a contradiction it created itself** — its new paragraph said USA Hockey's
competitive contact survives where checking does not, while the existing *"First:"* paragraph said
flatly *"the seal against the boards is not available to you."* **Found by diffing the rendered chunks,
not by trusting its own hunks.**

**New:** `hc_layout.txt:4887` permits the low-speed boards pin from behind; **USA Hockey Casebook 608
Sit 1(2) penalises the same fact pattern.** Same act, opposite answers. Neither the document nor my
brief had this. **IIHF Situation Handbook prints "RULE 43 CHECKING FROM BEHIND — No situation."**

---

### T0-40 — CLOSED, and the row was wrong in BOTH directions

⚠️ **Eight sites, not three — and ZERO in the two files the row named.** `risk_management.md` and
`forechecking_systems.md` return **0** on four independent patterns. The claim lives in `center.md`
(`:266` facts, `:281` body, `:671` Common Mistakes, `:742` Key Takeaway 4) and **`neutral_zone_systems.md`**
(`:642` facts, `:651`, `:771`, `:826`) — the latter in **different wording** (*"the middle is where the
contact comes from"*), which is why a phrase-grep missed it. ⚠️ **The row's own note said a claim-read
finds four where a grep finds two; it still under-counted by half, because it claim-read one document.**

**Unsourced, attacked three ways.** Own Sources lists: nothing locates contact by zone.
`sources/ibc.txt` has an *"Open Ice Confrontation"* section that **never names a zone**; its only
*"neutral zone"* hit is a drill setup. ⚠️ **Decisive:** `body_contact_and_battles.md` — the contact
owner — contains *"neutral zone"* **zero times** and states at `:671` that *"nothing in the safety
material held here ranks game situations against one another by danger."* **The document the claim
defers to disclaims the class of claim.**

**Fixed at all eight, not deleted.** The instruction stays absolute; the hedge attaches only to the
locational claim, **with the unconditional reason FIRST so the hedge cannot be heard as permission** —
e.g. `:266` → *"…you cannot brace for a hit you cannot see, and the middle third is where coaching
material puts open-ice contact"* (196/200). All eight verified through the renderer.

**Also fixed:** `center.md:281` said *"**the one lane** where open-ice contact happens"* — a false
superlative; open-ice contact happens in all three zones and the outside lanes.

---

### T0-P101 The brief I wrote quoted `defender.md` one clause short

⚠️ **I told the repairing agent to match `defender.md`'s floor wording and gave it two limbs. The real
line at `:224` carries THREE** — *"and its Blind Hockey rules bar it at every age"*. Verified at
`sources/usah.txt:6461`: *"Body checking is prohibited during all Blind Hockey games. Body checking shall
be penalized under the guidelines within Rule 604"* — **no age qualifier.** The agent caught it and added
it. **Twenty-first refuted brief claim this round, and the second where I truncated a quotation and
shipped the truncation into a brief.**

---

### T0-P113 The counterweight census was LARGER than reported, and the conclusion stronger

⚠️ **Reported as seven lines across six blocks; extracting all 211 facts lines programmatically gives
ELEVEN** — `:19, :173, :268, :433, :514, :620, :621, :622, :623, :675, :676` — plus the body at `:29` and
`:635`. **So the 714–726 block was the only place in the entire document where the back-turned image ran
naked.** The finding was under-stated, not over-stated.
