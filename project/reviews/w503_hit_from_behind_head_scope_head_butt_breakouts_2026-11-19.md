# W503 — hit-from-behind head scope, the IIHF head-butt in the owner document, and breakouts' after-icing restatement (19 November 2026)

Four editing agents worked in files that did not overlap:
- body_contact_and_battles.md
- defending_the_rush.md
- offensive_zone_play.md
- breakouts.md

There were three review rounds:
1. A rules-verifier, a safety-reviewer and a facts-reviewer read all four files. None found anything critical. The facts-reviewer found one **major**, a traceability gap. The rules-verifier found one point that mattered (below).
2. A safety-reviewer read the repairs and found one **major**. It was in a scope the coordinator's own brief had asked for (below).
3. The last repairs came from that reviewer's own sketches and from one-phrase fixes. No reviewer read them after they landed. Each is confined to its finding, re-derived by its author from the primary text, and errs in the harsh direction. This is the C11 terminating case.

## What was wrong, and what changed

### Hit from behind that reaches the head (W502 row 1, and row 3 in these two files; offensive_zone_play, defending_the_rush)

offensive_zone_play said "on the head it is head contact" flatly, at four sites, plus one site the plan row missed. defending_the_rush gave a Hockey-Canada-only head scope at five sites, plus a facts line and one more body site that the first round found.

The first repair added the IIHF and stated a two-minute floor ("the IIHF's and Hockey Canada's head-contact rules take over, and those can start at two minutes"). **The rules-verifier found that permissive.** The IIHF book conflicts with itself:
- 48.1 "supersedes all similar actions regarding hits to the head and neck".
- 43.1 says a player who hits from behind "in any manner … shall be penalized according to this rule".
- 43.2 says "there is no option to award a minor".
- The Situation Handbook has "No situation" for Rule 43.
- The British In-House Rules tell officials to "call the foul what it is".

The owner document already words this carefully: plan on 43.3's major and game misconduct, head or not; a minor is possible, but do not plan on it.

Every site now says:
- **Hockey Canada:** on the head, its head-contact rule takes over (7.6 and 7.7 supersede). Plan on a game misconduct anyway, and a match if the player cannot protect themselves (7.6(c), 7.7(c)).
- **IIHF:** plan on ejection, head or not. A minor is possible on the head, but do not plan on it.

The two-minute floors are gone. They were also wrong for Hockey Canada Junior and Senior, where 7.7's own floor is a minor plus misconduct.

defending_the_rush's facts line cited "7.5(a), (e)" on the head. 7.6 supersedes there, so it now cites 7.6(b)/(e) and 7.7(b)/(e). Its section body at :404 and :951 now carries the same head limb as the facts line, which repairs the traceability major. defending_the_rush's last-copy Common Mistakes bullet gained the off-head mandatory match: Hockey Canada 7.5(c), and CARHA 53(b), whose Note forbids substituting a lesser penalty.

### IIHF head-butt in the owner document (W502 row 4; body_contact_and_battles)

The facts line and the What it costs bullet priced a head-butt at 47.3's discretionary "may", without Situation 47.1's flat "is assessed". Both now say: plan on a major and game misconduct, injury or not. The Sources trailer cites Situation 47.1 in both editions.

The coordinator's brief asked for an "outside the Elite League" scope. **The safety-reviewer found it permissive.** It implied that four minutes is a price an Elite League player can plan on. In fact the EIHL Casebook gives that price only to a fake and to a forced head-to-head push, so a real head-butt there is still IIHF 47.3 and Situation 47.1. The sentence now says: do not plan on four minutes for a completed one, not even in the Elite League, whose Casebook gives that price only to a fake and a forced head-to-head push.

The `Never:` line had implied four minutes everywhere outside USA Hockey. It now names the books that always eject for a completed head-butt (NHL 47.3/47.5, PWHL 47.2/47.4, USA Hockey 619(a), CARHA 48(b)) and adds "under the IIHF, plan on it". The ⚠️ moved off a rule-number clause and onto the instruction. The built HTML confirms the `warn-inline` wrapper forms.

### breakouts (W501 rows 5 and 6)

The row's restatement premise was only partly right. Each later section's statement of the after-icing rule is what that section's facts lines trace to, so the paragraphs were tightened rather than deleted:
- §3's lead now leads with "The real cost is your legs".
- §6's three hedges became one.
- Two redundant pointers back to §1 were dropped.

The real duplicate was §8's over-the-glass hazard, stated in two adjacent paragraphs. The two were merged; it was one hazard, so no counterweight was fused with a claim. The rules-verifier found that the merge had kept the less careful sentence about the goalie clear ("whatever the intent"). The careful one is restored ("with no intent word in that limb, so do not count on an accident being free"). Hockey Canada 10.1's chapeau and 10.1(a) both say "deliberately".

KT10 and the matching Common Mistakes bullet had left Hockey Canada 6.7(d) out of the books that keep a tired unit on after an icing. They now include U18AAA, Junior and opted-in Senior. Common Mistakes' "Only the shorthanded team is exempt" became "can be exempt", because under USA Hockey below Youth 15 nobody is exempt.

The four "What it costs" labels were kept, each for a stated reason. The page lost 97 prose words. KT10 is back at 60 words.

## Gates on the final tree

- `check_counts --update`: no change.
- `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets` and `check-arrivals`: all exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, 57 pages, 13,069 internal links resolve.
- `check_callout_flow --bare`: 0.
- No `<p>*` in `site/dist`.
- `check_marker_pairs`: 0 lost markers. breakouts went from 56 to 55 marked units because of the deliberate merge; the merged paragraph keeps the marker and the spoken "Important."

## Plan rows narrowed, not closed

- **W502 row 3** asked for a sibling sweep. This wave repaired only defending_the_rush and offensive_zone_play. The commit gate listed nine more candidate sites in six documents. They have not been read in context, so the row stays open with that list.
- **W502 row 5**, the flat USA Hockey "however little force" claim: a corpus grep for "however little" found it only in winger, center and faceoffs, which were rescoped in W502, and in defender :291. That line is in a body-check context, where Casebook 620 Situation 1 governs. It is probably not the defect, but it is unreviewed, so the row stays open, narrowed to that line.
- **W501 row 5:** breakouts' restatement was tightened. The untested remainder, a sweep of Special Teams, Game Management and DZC, stays open.

## New plan rows

From W503:
1. body_contact_and_battles ~:796 cites 7.5 for on-the-head advice.
2. The IIHF 43.1 versus 48.1 conflict is unsettled on disk.
3. No other document was swept for an "outside the Elite League" head-butt carve-out or a "7.5 on the head" citation.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: rules-verifier, then two safety rounds that re-derived the repairs. CARHA was re-checked in carha_2026.txt; one editor had read the 2020 book, and 53 is identical. Hockey Canada 6.7(d) was re-checked in hc.txt; one editor had read the superseded August print, and it is identical. |
| D2 exceptions | Covered: Hockey Canada 7.6(a)/(d) and 7.7 minimal violence, IIHF 48.2, the two EIHL Casebook Rule 47 examples, and the CARHA 55(a) Note 1 exceptions. |
| D3 cross-book divergence | Covered: the head scope by book, head-butt ejection by book, and the icing change bar by book. |
| D4/D5 citations and provenance | Covered by the rules-verifier. The one new Sources entry (IIHF Situation 47.1) was checked verbatim in both editions. No URL was added. |
| D6 negative existence | Covered: "no other book writes a supersede clause" and "USA Hockey and CARHA bar no change" are true negatives from word searches, recorded as such. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered: the head scope at every layer in both documents, KT10 and Common Mistakes in breakouts, and the head-butt in the owner's facts, What it costs and `Never:` lines. Sibling documents are plan row W503(3). |
| D10 facts layer | Covered: the facts-reviewer read every changed block. The traceability major was repaired. |
| D11 reader safety | Covered: safety-reviewer, twice. Both majors were repaired. |
| D12 read-aloud integrity | Partly covered: renders in rounds 1 and 2 put each qualifier in the same chunk as its claim. The round-3 repairs were not re-rendered, and there was no ear test. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: check_links, and the reviewers' wording notes. |
| D15 rendered site | Structural only: the Chrome extension was unavailable. In the built HTML there are 0 bare glyphs and 0 stray asterisks, and the moved glyph in body_contact_and_battles forms `warn-inline`. The visual pass is plan row W501(14). |

## What this method could not have found

- **Which IIHF rule wins.** Nothing on disk says which applies to a hit from behind that reaches the head: 43 or 48. The corpus plans on the harsher reading.
- **Whether the EIHL Casebook's two examples outrank Situation 47.1 in an Elite League game.** No source ranks them.
- **Audio of the round-3 repairs** (the Elite League sentence, the `Never:` line, the citation swap, "head or not"). These were not re-rendered.
- **Other documents.** None was swept for the same head-scope and head-butt wordings in other phrasing.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
