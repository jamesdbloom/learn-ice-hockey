# W616–W617: long facts lines in goaltender and forechecking (21 November 2026)

## W616 census (facts-reviewer, read-only)

The census read 190 facts values over 40 words: goaltender 141, forechecking 49. Table: `w616_long_facts_rows_2026-11-21.tsv`.

**Result:** A 5, B 16, C 169. Most are multi-book Rule lines where every word is a limb, and five goaltender blocks are at 14.

**Also flagged**
- 5 definite pointers, where the line names nothing on its own.
- 6 lighter pointers.
- 5 buried instructions.
- 1 command-shaped line: forechecking :838, "skate at a goalie who has legally frozen the puck … and you arrive into…".

## W617 edits (two agents, one file each)

### forechecking (9 lines)

- **:579:** now cites "NHL 56.1, quoted; IIHF 56.1 the same but for pronouns", located in both IIHF editions.
- **:565:** leads "Keep the blade down at the blue line".
- **:803:** leads "In any British competition, plan for their goalie to come out".
- **:838:** "skating at a goalie who has legally frozen the puck … takes you into the one player you may not finish a check on".
- **:801:** names the IIHF and the goalie.
- **The head-contact phrase:** "off the head; on the head, plan on it" became "except on a head hit — plan on it even then" at :320, :701, :980 and a fourth copy at :750 that the census missed.

### goaltender (18 lines)

**Tightened (A):** :464, :751, :978, :1209.
- The agent kept "specifically" rather than the sketch's "only", which overstated USA Hockey Casebook 618 Situation 8.

**Pointers named**
- :805 "IIHF 81.4's broken-skate exception"
- :809 Hockey Canada Interpretation 8 to 6.7(c)(iii), scope first
- :1262 607(c) act stated once
- :1517 CARHA writes Hockey Canada's broken-stick bar "word for word" (51(c) / 3.2(c)), keeping the corpus's dominant "CARHA-affiliated adult leagues only"
- :1449 now leads "Wear a neck laceration protector in university hockey too"
- :1263, :1451, :1477, :698, :745, :1524

**Instructions moved to the front:** :623 "Stay inside the old trapezoid until your league says otherwise", :1111 "Take your stick with you".

**:1475:** "The IIHF is the book that writes you a stoppage" became "The IIHF writes you a stoppage". The exclusivity was false, since :1477 gives Hockey Canada 6.18(a) one.

No ⚠️ changes. No B or C rows were touched.

## Review

**safety-reviewer: OK, nothing to fix.**
- Every rewording keeps its claim and every limb, and reads right alone.
- In the head-contact phrase, "it" can only mean the ejection.
- The IIHF 48.2 neck case is priced harsher than the book, never cheaper. That was already the case and stands.
- CARHA 51(c) and Hockey Canada 3.2(c) differ by one noun (goalkeeper/goaltender), which makes no practical difference.

## Rows

**Closed:** W612(4).

**Filed:**
- The B splits.
- Repeated claims within each file.
- A USA Hockey Disabled Hockey facemask-stoppage clause, not yet checked against the corpus.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w617.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on both files.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Audio.** Not rendered.
- **Body, Common Mistakes and Key Takeaway copies of the reworded claims.** Not layer-tested.
