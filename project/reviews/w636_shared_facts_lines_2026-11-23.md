# W636 A: two shared facts lines reworded once, applied identically (23 November 2026)

Two facts lines were copied word for word across many files, so W635 C skipped them: rewording only some copies would have made the copies diverge. One agent reworded each line once and applied it to every copy.

1. **The USA Hockey 620(b) head-contact line, 12 copies in 10 files.**
   - It was "USA Hockey 620(b) must give at least a major and game misconduct for careless or intentional contact with an opponent's head, face or neck — a hit from behind included".
   - It now reads "Under USA Hockey, careless or intentional contact with an opponent's head, face or neck — a hit from behind included — is at least a major and game misconduct (620(b))".
   - It is the same length and now leads with the act.
   - The defender :442 variant's USA Hockey clause got the same rewording.
2. **The next-game line, 16 copies in 16 files.**
   - The cryptic "CARHA 32(d) a major's" became "one with a major".
   - "After a second major" became "for a second major", and "at least the next game" became "at least a game".
   - The line is now 2 characters shorter.
   - The pwtp :524 variant got the same three changes.

**Verified** in flattened usah.txt (620(b)/(c), 404(b), 403(b)), usah_casebook.txt (620 Situations 1, 3 and 4), hc.txt (4.8(c)) and carha_2026.txt (32(d)). `sort | uniq -c` shows every copy is identical.

**Safety-reviewer: OK.** Neither line is cheaper than the old wording.

The reviewer also ruled on "a hit from behind included": keep it. The 620 Note covers contact "with any part of the player's body, equipment or stick", with no limit on direction, and Casebook 620 Situation 1 says "The only thing that matters is whether there was contact made to the head, face or neck". The phrase is only true while it stays attached to the head-contact subject, so its new position, inside dashes within the subject, is the correct one.

**Noted, not changed:**
- The CARHA clause leaves out 32(c)'s last-10-minutes Rule 46 route. This predates the edit, and "can cost" keeps the list open.
- Two separately worded lines (switching_positions :245 and ozp :1038) still use the old phrasing. Both are accurate.

## Gates on the final tree

- check_counts --update: exit 0.
- Full npm run build: exit 0 after the last edit.
- check_facts, check_absolutes, check_geometry, check_secrets, check_caption_pairs and check_tables: exit 0.
- --bare: 0.
- check_marker_pairs: 0 lost on all 21 files.
- check_links --quiet: run after this record.

## What this method could not have found

- Copies of the same claims written in different words.
- The rendered audio.
