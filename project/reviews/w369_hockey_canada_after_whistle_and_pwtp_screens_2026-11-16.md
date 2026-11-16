# W369: Hockey Canada's after-the-whistle shoot-out settled, playing_without_the_puck's over-half screens cut, and two slew-foot facts lines that named no act (16 November 2026)

**Files:**
- content/positions/goaltender.md
- content/foundation/on_ice_communication.md
- content/hockey-iq/playing_without_the_puck.md
- site/src/diagrams/playing_without_the_puck.mjs
- site/src/data/diagrams.json (rebuilt; only `loose-puck-who-goes` changed)
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
W368 plan rows (record `w368_puck_at_an_official_and_the_hockey_canada_kick_2026-11-16.md`):
- (1) HC 10.5(d), possibly permissive;
- (3) playing_without_the_puck over half a phone screen;
- (4) the dangling "it" at body_contact_and_battles facts :1841.

## What changed

**A. Hockey Canada after the whistle — research, then wording** (read-only rules-verifier R, then author S).
- **The question.** Does 10.5(d) — "A Misconduct penalty will be assessed to any player who deliberately throws or shoots … any object outside the playing area" — make a plain after-whistle shoot-out a mandatory misconduct?
- **The answer: no, on the best reading.** 11.1 item v, "Shooting the puck out of the playing area, after the whistle", is the rule written for this act. It is unsportsmanlike conduct: 11.1(a) gives a minor, and Notes 1 to 11.1(d) and (e) let the referee go straight to a misconduct or game misconduct.
- **Why 10.5(d) does not apply.** Reading it onto the game puck would turn every deliberate shoot-out in play into a mandatory misconduct. That contradicts 10.1(d) and the Notes that route the act to 10.1(ii). Separately, 6.13 Note 1 sends only a *second* puck to 10.5. The book has no Interpretation on this, so the conclusion is structural, at moderate confidence.
- **So W368(1) is not a permissive defect.** Two wording errors remained, and both are now fixed:
  - **goaltender :750 (facts), :765 and :1693.** These said "usually a minor"; the book says nothing about frequency. They now say "a minor, but the referee may go straight to a misconduct or a game misconduct". :1693 now reads "Hockey Canada prices it as an unsportsmanlike minor, but …".
  - **on_ice_communication :190.** It gave an invented reason ("because its 10.1(d) bars a misconduct for delay of game") and no price. It now reads: "Hockey Canada names it as unsportsmanlike conduct (11.1, item v): a minor, but the referee may go straight to a misconduct or a game misconduct — and putting it out of an official's reach is a misconduct outright (11.1(d)(iii))." The final clause was added at the safety reviewer's request.

**B. playing_without_the_puck over-half screens** (author P). No word was changed.
- **`loose-puck-who-goes` caption.** The glyph moved to the last sentence. Amber went from 511 to 64 characters: "⚠️ Never turn your back to anyone coming at you, and never duck." The two posture dangers and USA Hockey's cervical-spine quotation remain as plain caption text.
- **:846 and :1019 (same claim, now identical).** The first cut moved the closing `**` and left one 166-character run. After the safety Minor, each site now carries three runs:
  - "No book prices a hit from behind at a bare two minutes — under Hockey Canada, only while it stays off the head — and none confines checking from behind to the boards.";
  - "if they cannot protect themselves it is a match";
  - "so plan on at least checking from behind's minor plus game misconduct anyway."

  The citations sit between the runs in plain text. The amber went from 504 characters in one run to about 280 across three.

**C. body_contact_and_battles slew-footing facts block** (author Q). Each facts line is voiced alone.
- :1841 "Hockey Canada defines it widest" became "defines a slew-foot widest".
- :1840 "Hockey Canada 8.8(a) is a double minor" became "8.8(a) makes slew-footing a double minor".
- No claim changed. `check_facts_antecedents.py` scored 0 on the file both before and after, so it cannot see this shape: a bare pronoun or an unnamed act.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier R (research) | 11.1 item v governs; 10.5(d) does not reach the game puck on the best reading. Verdicts by site: goaltender "usually" is unsupported; on_ice_communication :190 is understated and its stated reason is invented. rules_primer :568, game_management :1116/:1268 and risk_management :352/:381 are OK. Every other HC after-whistle site is OK. |
| safety-reviewer | Caption CLEAR: the chin-down instruction "head up and chin off your chest" is amber at :329, a few lines below. bcb :1840/:1841 CLEAR, checked against HC 8.8 and Interpretation 1. **Minor at :846/:1019:** the amber ended on the permissive exception "only while it stays off the head", with both counterweights plain. The reviewer's three-run fix was applied verbatim. |
| safety-reviewer, addendum | goaltender :750/:765/:1693 CLEAR. **Minor at on_ice_communication :190:** HC 11.1(d)(iii) makes putting the puck out of an official's reach a mandatory misconduct, but the new sentence read it as discretionary. The reviewer's clause was applied verbatim. |

### C11
The coordinator wrote no content. The post-review edits are the safety reviewer's exact text and placement: the three-run amber at :846/:1019, and the on_ice_communication clause. Both are a no-word-change marker move or a verbatim reviewer sentence. The final clause was verified against hc.txt by author S before it was applied.

## Checks after the last content edit
- A full `npm run build` (absolute binary) exited 0 and ran through check-links. `dist/index.html` is 16:57:02, `find content site/src/diagrams site/src/data -newer` returns nothing, and the built on_ice_communication page carries the new clause.
- check_links --quiet, check_facts, check_absolutes (caption layer certified), check_geometry and check_secrets all pass.
- check_counts --update: no change. check_callout_flow --bare: 0. check_caption_pairs: 0 violations.
- check_marker_pairs: 0 LOST and 0 SPLIT on all four content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier R on HC 10.1, 10.5, 6.13 and 11.1 in full, with every HC after-whistle site in content/ |
| D4 Citations | 11.1 item v, 11.1(d)(iii) and the Notes to 11.1(d)/(e), quoted from hc.txt |
| D6 Negative claims | "the book does not say how often" and "10.5(d) does not reach the game puck" — covered under D1–D3 by R, at stated moderate confidence |
| D10 Key-facts layer | goaltender :750 and bcb :1840/:1841, read voiced alone |
| D11 Reader safety | safety-reviewer, and an addendum on the S edits |
| D12 Read-aloud | every changed stem rendered; the caption keeps "Important."; marked units unchanged |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 16:54 build, Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark, 16 loads. Every new run forms span.warn-inline with the glyph leading it: 3 runs at each of :846 and :1019, plus the caption. 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no horizontal scroll, and **no 400px window over 50% on any of the four pages.** The on_ice_communication clause landed after that pass. It is plain text with no glyph or bold boundary moved, and the 16:57 rebuild carries it. |
| D5, D7–D9, D13 | not engaged |

| Site (worst 400px window) | Before | After |
|---|---|---|
| pwtp "Who goes" | 62.3% | 29.9% |
| pwtp "Never finish a backcheck into a player's back" | 57.8% | 39.9% |
| pwtp "A hit from behind" | 56.1% | 39.1% |
| pwtp page worst | 62.3% | 49.7% (Common Mistakes, pre-existing) |

## Found, not fixed (plan rows)
- **playing_without_the_puck Common Mistakes, 49.7% at 400px.** A 306-character run states the same Hockey Canada head-contact claim that :846/:1019 now split into short runs. It is a candidate for the same split.
- **"which is why" in HC Sources trailers.** Five trailers say 10.1(d) is "why" Hockey Canada files the after-whistle act under 11.1: on_ice_communication, playing_without_the_puck, risk_management, goaltender, game_management. The book gives no reason. The trailers are unvoiced and change no price.
- **Bare-pronoun or unnamed-act facts lines may exist in other blocks.** check_facts_antecedents cannot see this shape.
- **HC pricing of a puck shot toward an official or spectator.** It goes through 11.5(c)(i) and 7.1(c); R did not read 11.2 or 11.5, and the W368 reviews covered them.

## What this method could not have found
- A Hockey Canada directive or Member regulation resolving 10.5(d) against 11.1. None is on disk.
- Other layers that paraphrase the HC after-whistle price without "whistle" and "Hockey Canada" on the same line.
- Real devices.
