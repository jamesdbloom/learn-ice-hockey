# W396: getting_started's concussion Key Takeaways brought under half a phone screen of amber with no word changed; the British ban stated in the body where a facts line had no carrier; three DOPS Sources entries added (17 November 2026)

**Files:**
- content/getting-started/getting_started.md
- content/systems/game_management.md
- content/positions/goaltender.md
- content/systems/special_teams.md
- content/hockey-iq/playing_without_the_puck.md
- content/systems/offensive_zone_play.md
- project/plans/OPEN_ITEMS.md
- this record

risk_management.md was edited and then reverted to byte-identical with HEAD (see below), so it is not in this commit. No diagram changed.

## Source
From W395, each item briefed as a hypothesis (scratchpad/w396/brief.md):
- (1) getting_started KT13–KT14 at 56.4% amber
- (2) DOPS facts lines with no body carrier
- (3) DOPS Sources entries missing
- (14) the pwtp :825 join

## What changed

### getting_started KT12–KT14: markup only, no word changed
I diffed HEAD against the tree with every `*` stripped. The only difference is where KT12's ⚠️ sits. The rendered audio is unchanged (chunk 048).

| Takeaway | Before | After |
|---|---|---|
| KT12 | amber on the rationale ("A concussed player will say they are fine, so it is never their call") | amber on the instruction: "⚠️ **the player comes off immediately and does not return that day.**" The rationale stays bold. |
| KT13 | one amber run | amber trimmed to "no driving until a healthcare professional clears the player," and "and no alcohol or recreational drugs" stays plain bold. This matches the body at :581, which escalates driving and not alcohol. |
| KT14 | about 274 chars of amber | amber ends at "⚠️ **call an ambulance immediately for any red flag:**" and the list stays plain bold (the winger KT11 pattern). |

**KT14 red flags.** All ten are kept word for word. They were checked against the owner, conditioning_and_recovery.md :266-283 (CRT6). "Limb weakness or tingling" was already broader than CRT6's "in more than one arm or leg", which is the cautious direction.

### British ban: a body carrier where facts had none
- **offensive_zone_play.** There was no British-ban sentence anywhere in the body. A new paragraph (316 chars, no marker) now sits after the :994 hit-from-behind paragraph in §"The defenceman's pinch". It uses the W395 body form, names only facts :952's acts, and links to [UK and England Rules].
- **goaltender.** §"In front of your own net" had facts :1371 and no British text. A new plain paragraph at :1384 (366 chars, opening 🇬🇧) uses the same form.
  - The bullet it follows was already 1,214 chars, and splitting it would have stripped its ⚠️.
  - This is the only body sentence on the page that carries the boarding limb. The :1631 paragraph concerns hits on the goalie and omits boarding.
- **playing_without_the_puck facts :825.** Changed ". In the Elite League" to "; in the Elite League". It is now byte-identical to the eight sibling folded lines.

### Body copies cut after the safety review (Major)
The authors first added the same sentence to risk_management :860, playing_without_the_puck :846 and the game_management "Chasing the extra body check" continuation.

Safety found that each repeated its facts line word for word in the same chunk. Each section owner on the same page (risk_management :918, pwtp :1019, game_management :1225) then stated the ban a third time in different wording. That is three copies in two wordings, a propagation hazard, and the ban was an added cost that qualified no instruction. All three were cut back to a pointer that names the ban:
- **risk_management :860.** Back to HEAD: "…gives each book's price: the match penalties, head contact, the suspensions and the British ban." The file is byte-identical to HEAD.
- **pwtp :846.** Back to HEAD: "…sets out each book's ladder, the match for a hit meant to injure, and the British ban."
- **game_management :187.** `The full prices, and the British ban, are under [A late hit](#a-late-hit).` :1225 carries the ban, and both safety and the author confirmed it.
  - The author's first report said the page "had no British text at all". A truncated grep had hidden :1225, and the author corrected this itself.

**This tension is left open, not resolved.** The W395 facts-reviewer asked for a body carrier in each facts line's own section. Here safety's restatement finding governs: readable beats defendable, and restatement count is the owner's stated risk. In these three documents the facts line now traces to the owning section on the same page. This is carried as a plan row.

### game_management "Chasing the extra body check": split, readability
- The bullet was 1,219 chars, the page's only paragraph over 1,200. It is now a bullet head (453 chars) plus an indented continuation (834 chars), the same pattern as the page's :647/:649.
- The split left the head without a marker, so check_marker_pairs reported a LOST marker. A ⚠️ now leads the existing strong run "**if they have passed or shot, let them go and get back into position.**". The amber sits on the instruction, and the marked units went from 69 to 70.
- "That is a late hit" had no antecedent once the head stood alone (safety Minor). It became "Hitting them once they have passed or shot is a late hit, and no book caps it at two minutes."
  - Safety's wording, "after they have released it", left "it" with no noun. The author's change was upheld in safety's final read.

### DOPS Sources entries
New trailer entries were added to game_management (:1378), special_teams (:1367) and offensive_zone_play (:1331). Each is adapted from goaltender :1803 and cut to what that page prices. special_teams carries the C.2 late-fight row. Each keeps "Whether it reaches Elite League fixtures is not stated; the Elite League's Casebook names its own Department of Player Safety", which the rules reviewer read in context at eihl_casebook.txt :201, :216 and :415-416. Nothing was fetched. A render confirmed the trailers are unvoiced.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All OK. Every body sentence names its facts line's acts, and each anchor's target (uk_rules :397/:413) covers the claim. All three Sources entries match §5, C.1, C.2 and §11. KT12–14 confirmed word-identical. Notes (not defects): under-16s (App J) are not in the body sentences, which is the harsh direction; two paragraphs are near 1,200. |
| safety-reviewer | **First read:** no Critical. KT12–14 upheld: audio is byte-identical and all ten red flags are present. Major: the restatements in risk_management, pwtp and game_management, with pointer text supplied. Minors: game_management's "That" antecedent; the optional KT13 sibling parity. **Final read:** CLEAR. |

### C11
The coordinator wrote no content. Post-review edits are:
- safety's own text (the three pointers);
- an author antecedent fix (game_management :185), which safety upheld in its final read;
- reverts to HEAD.

The rules reviewer did not re-read the final game_management wording. It changes no rule claim: "no book caps it at two minutes" is unchanged from HEAD.

## Checks after the last content edit
- **Build.** A full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 04:11:57, and no content or site/src file is newer.
- **Checkers.**
  - check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets: pass.
  - check_counts --update: no change.
  - check_callout_flow --bare: 0.
- **check_marker_pairs.** 0 LOST on all six files. 0 SPLIT on five. goaltender reports 1 SPLIT HALF candidate at :1384: a false positive, since the new paragraph shares wording with :1633 and nothing was split.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: DOPS §5, C.1, C.2 (both extractions), §11, App J, :1236; EIHL Casebook :197-220, :412-419; uk_rules :397-417 |
| D4 Citations | three new DOPS Sources entries checked against the extraction. No URL was refetched; the URL is the one hash-matched in W393. |
| D8 Counts | "at least a one-game ban", "every league or age group", ten red flags |
| D9 Summary layer | getting_started KT12–14 read voiced alone; no British ban in any CM or KT of the six files |
| D10 Key-facts | pwtp :825 byte-identical to siblings; facts-to-body traceability discussed above |
| D11 Reader safety | safety-reviewer, two reads (concussion and discipline) |
| D12 Read-aloud | each author rendered; safety rendered six documents |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 04:11:57 build (below) |
| D5–D7, D13 | not engaged |

**D15.** site-reviewer, six pages, Playwright Chromium at 400×812 DPR 2 (light and dark) and 1440×900 light.

- **getting_started: 56.4 → 41.4** (KT12–13 is now the page's worst; KT14 is 35.6).
  - Amber followed by plain bold reads as instruction then detail in both themes.
  - In dark mode the amber, rgb(240,176,112), is distinct from the near-white bold.
- **game_management continuation.** It renders as a second `<p>` in the same `<li>`, with a window of 9.9.
- **goaltender :1384.** It renders as a plain `<p>`, not a panel, with a window of 29.7.
- **Other pages unchanged:** pwtp 40.2, goaltender 46.7, game_management 39.2, ozp 47.9, special_teams 48.4.
- **No 400px window is over 50%.** There were 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, and no horizontal scroll.
- The 1440 windows over 50% are the known full-width-SVG artefact.

## Found, not fixed (plan rows)
1. **Facts-to-body traceability vs restatement.** In risk_management :850, pwtp :825 and game_management :178, the DOPS facts line now traces to the owning section on the same page (:918, :1019 and :1225), not to its own section. One option is to move each facts line into the owning section's block, if that block has room.
2. **Loose-list continuation spacing.** At game_management "Chasing the extra body check" (and dtr "Angle them wide", W392), the paragraph gap inside the item (17.6px) equals the gap between items. A site-wide CSS change to `li > p + p` would fix it.
3. **KT13 sibling parity (safety, optional).** "No driving" is amber and "no alcohol or recreational drugs" is plain bold. The owner treats them as siblings (:615, :695), but the body at :581 splits them the same way.
4. **KT14 "Leave the injured player's helmet on; move them only to clear their airway"** gets no visual escalation (pre-existing). It is covered by the paragraph's spoken "Important.".
5. **Under-16 written warning (DOPS App J)** is absent from the new body sentences (goaltender :1384, ozp :996). This is the harsh direction, and uk_rules :415 carries it.
6. **goaltender :1631 omits the boarding limb.** That paragraph is about hits on the goalie, so the omission may be deliberate.
7. **game_management :185 "USA Hockey makes a reckless one a mandatory major and ejection" is unscoped against 640(g)'s adult-men silence** (pre-existing; harsh). Facts :182 records it.

## What this method could not have found
- A copy of the ban worded without "one-game ban" or "plan on the same".
- The CRT6 PDF itself, which is image-only. The red flags were checked against the owner's transcription.
- Real devices, and a screen reader.
