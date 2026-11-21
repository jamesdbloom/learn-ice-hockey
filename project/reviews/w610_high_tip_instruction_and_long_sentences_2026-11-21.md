# W610: "leave a high-batted puck to an opponent", a false USA Hockey glossary claim, and 78 long sentences split (21 November 2026)

## A: the lost tip instruction (W508(1), (4))

W508 had dropped "play the tip on" (shooting :252) and "follow the tip up" (ozp :579) because they overstated. The agent found they were **false**, not just overstated. In every book with a possession test, your team gaining a puck it batted above the shoulders stops play, even a rebound off a save:
- NHL 80.1, IIHF 80.1, PWHL 82.1: "directly or deflected off any player or official".
- Hockey Canada 6.9(a) Interpretation 1: "a deflection results in possession but not control".
- USA Hockey Casebook 621 Situation 15.

Under USA Hockey the draw is then in your own end. The true instruction runs the other way: **leave it to an opponent**.

**Edits:**
- shooting :252 (300/300: "Leave a puck you tip or bat above your shoulders, even off a save, to an opponent…", adding the PWHL 82.1/74.3 numbers and USA Hockey Situation 5) and :268.
- ozp :577 ("a puck batted above the shoulders") and :595.
- passing :438 (Action), the body at :462, CM :852 and KT16 (57 words).

**rules-verifier.** It confirmed all six books (file:line in its report) and the British layer, which does not amend IIHF 80.1.
- "Otherwise… stop the play" does **not** mean an immediate whistle: IIHF Situations 80.1 and 80.3 settle it, and NHL/IIHF 72.3 would be meaningless otherwise.
- The NHL and PWHL possession timing rests on rule structure; neither has a casebook on disk.
- "Leave it" is never worse than playing it in any book. Under CARHA 62(d) the point is moot, because play is already dead.
- **Scope:** above the shoulders only. In the crossbar–shoulder band a teammate may play on and score: IIHF Situation 80.9(c), USA Hockey 617(b), CARHA 60(d).
- **Its sweep** found no other "chase your own high tip" unit. It found the glossary error below, and the passing CM/KT pair written before the limb existed.

**Glossary :494, contradicted by source and fixed.** The glossary said a high-stick deflection on the way in is "outside [USA Hockey 621(d)'s] reach". USA Hockey Casebook 621 Situations 4 and 5 (`usah_casebook.txt:13938-13966`) disallow a goal deflected in off a defender, and one a teammate shoots after the deflection. The text now says so. "Do not stop playing after a high touch" is now scoped: keep playing between the bar and the shoulders; above the shoulders, leave it to an opponent.

## B: long sentences (W508(6))

78 sentences of 55–102 words in center, special_teams, game_management, defending_the_rush and rules_primer were split by punctuation and added subject nouns. Longest sentence per file is now 55; dtr is 58, a verbatim NHL quotation that was left alone.

**safety-reviewer** found two splits where a pronoun now landed on the wrong thing and said something false:
- **rules_primer 614(c):** "It is also a minor anywhere" now pointed at the privileged area.
- **dtr late hit:** "It need not be reckless" now pointed at the match.

Both were repaired by naming the subject. The agent's own re-read of all five files found four more:
- special_teams: "Wedge+1 creates turnovers".
- game_management: Hockey Canada 7.7(b) lost its Junior/Senior scope.
- rules_primer: a CARHA "The match penalty" read as 53(a).
- rules_primer: "a reckless charge" lost "under USA Hockey".

Optional fix applied: rules_primer CARHA 49(a) now reads "mandatory if intentional contact injures".

Two paragraphs the splits pushed past 1,200 were brought back:
- **rules_primer goalie-freeze:** split, with a new mid-sentence ⚠️ on "Hockey Canada bars freezing outside the crease". This is confirmed by 10.1(a) Interpretation 3, clause v, paired with clause ii.
- **game_management late hit:** tightened.

## Review

- **rules-verifier:** two passes. Every high-tip unit is confirmed.
- **safety-reviewer:** three passes over B, and every repair re-checked OK.

## Rows

**Closed:** W508(1), (4) and (6) for these five files.

**Still open:** W508(3), (5), (7).

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w610b.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 9 files.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **A chase-the-rebound instruction worded without high, shoulder, bat or tip.**
- **NHL and PWHL officiating practice.**
- **Audio.** Not rendered.
