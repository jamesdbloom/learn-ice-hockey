# SG13: rules-accuracy rows from the 22 Oct re-triage (22 October 2026)

**Origin.** The "Content — rules accuracy" group of the re-triaged plan. Eight agents each owned a file set (scratchpad sg13_brief.md) and were told to refute each row before acting.

## Outcome per row

| Row | Verdict | Change |
|---|---|---|
| NHL/PWHL late hit (forechecking, rules_primer, body_contact) | Refuted as written: none of the units concerns a turned player, and 56.4/56.5 is right. A related real gap was found: each named Hockey Canada's deliberate-injury match but not NHL/PWHL 21.1, and two omitted the PWHL. | forechecking facts :626 (297/300) and body :671; rules_primer :492; body_contact :1671. Each adds PWHL 57.4/57.5 and 21.1 ("Rule 21.1 in both makes a deliberate attempt to injure a match"). |
| OIC :279 "anywhere" | Confirmed | Facts: "…interference anywhere and an illegal check in non-checking play… lift the stick below the hands, let go" (200/200). |
| OIC :307 56.5 | Confirmed (it erred strict) | 56.5 scoped by book: discretionary GM in the IIHF; in the NHL/PWHL only where it injures. |
| OIC :309 640(d) | Confirmed | "As roughing under 640(d) — a body check with no effort at the puck and the stick blade above the knees — it is a minor". |
| NHL 21.1 in OIC / time_and_space | OIC refuted (no deliberate-injury unit); T&S confirmed | T&S :295: NHL/PWHL 21.1 match; HC 8.3(b),(e) major *with* game misconduct, 8.3(c) match. The self-contradicting "With nobody hurt" is removed. |
| DZC HC crease test | Already fixed (the next facts line and body bullet carry it) | none |
| DZC IIHF 101.1 | Confirmed (stricter) | :577 now quotes the opening "'bodychecking' is allowed when there is a clear intention of playing the puck". |
| puck_handling "penalty shot in all six books" | Confirmed | Facts :340: five books give the shot; under USAH 614(b)/406(a) the other team picks the shot or a minor. A duplicate line was merged in (6213→6212 facts). |
| puck_handling 63.2(v) Note vs 67.4 | Already correct | none |
| goaltender :643 double negative | Confirmed | "Hockey Canada draws no trapezoid, but…" (270/300). |
| goaltender :388 soft-stick "cover it" | Confirmed | "…where you can play it — or, in your crease with an attacker on you, cover it." |
| goaltender "10.1(i)" | Refuted: precise form | none. Siblings citing bare "10.1" could become "10.1(i)" (optional). |
| goaltender :1622 limb | Verified true | none |
| CARHA 62(b) (faceoffs, special_teams, NZ) | Premise refuted (no high-stick comparison sites); real gap confirmed: the slap-shot advice never said a follow-through above the shoulders is a separate major | Per page, one body sentence and one new Rule line: a major even by accident and with nobody hurt; ejection only if deliberate or injuring (62(b) Note; 30(a) Note). Trailers cite 62(b) (special_teams also 79(a)). |
| special_teams :776 63.2(vi) without PWHL | Confirmed, wider (65.2(v) too) | Facts names PWHL 65.2(v)/(vi). The quoted phrase (NHL/IIHF/PWHL wording, not USAH's) is now paraphrased. |
| PWTP USAH spectator limb | Confirmed (permissive) | Facts :355 and body :373 add 601(d)(9), a game misconduct for shooting toward an official or spectator; the trailer quotes it. |
| PWTP facing-the-wall fallback | Confirmed (CM :1017) | "If you are already facing the wall with no time to turn, get your stick and gloves up and spread on the glass, head off it." |
| PWTP :1124 broken text | Confirmed | Punctuation only. |
| passing HC crease test in CM/KT | Refuted: no summary layer discusses covering the puck | none |

## Reviews

- **rules-verifier (fresh, all hunks):** no contradiction. Two fixes were made before the gate:
  - T&S HC understated: "the same major" read as the NHL/PWHL major, but 8.3(b)/(e) always pairs it with a GM. Permissive, major.
  - rules_primer "allow … a match", but 21.1 is "shall". Minor.
  - Also fixed: special_teams quote attribution; CARHA body sentence implying an accidental high stick ejects.
- **safety-reviewer (fresh, rendered OIC/PWTP/goaltender):** nothing blocking. Fixed:
  - MAJOR: the CARHA follow-through limb was body-only (now in facts).
  - Minors: PWTP fallback scope, PWTP "official", T&S HC GM, OIC "and".
  - **Re-read of the repairs: CLEAR.** Its 200-char OIC wording was applied.

## Gates (after the final edit, no pipe)

check_facts, check_links, check_absolutes and check_secrets pass. check_marker_pairs: 12 files, 0 LOST. check_counts: no change. `npm run build` exited 0 after the final edit.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier; every new quotation verbatim (check_quote_drift clean on changed lines). |
| D5, D6, D8, D13 | Out of scope. |
| D7 | ✓ Rule text only. |
| D9 | ✓ Each agent ran a layer test; safety-reviewer checked layers that echo the edits. |
| D10 | ✓ Caps respected (several lines at or near cap, listed above). New CARHA Rule lines do not count to MAX_COACHING_FACTS. |
| D11 | ✓ safety-reviewer CLEAR after repair. |
| D12 | ✓ Three files rendered; the others' edits sit inside existing paragraphs or single facts lines. |
| D14 | ✓ |
| D15 | Prose and facts text only. Build passed. No site-reviewer pass. |

## Still open (into the plan)

- body_contact :1651 facts (at 300/300) names HC 8.3(c) but not NHL/PWHL 21.1; body_contact :637/:655 give no NHL/PWHL late-hit price.
- time_and_space goalie contact :556–562 has no NHL 21.1 limb.
- defender :244 "can be a shot too" (lying in the paint, puck just outside) is an inference against HC Interpretation 5. Needs a rules-verifier.
- Sibling "10.1" citations (breakouts :657, DZC :178, body_contact :1148) could become "10.1(i)" (optional).
- CARHA follow-through limb: check shooting.md (the likelier owner). CM/KT of the three pages deliberately don't carry it.

## What this method could not have found

- Layers built on the old answers that share no wording with the edits. Each agent tested its own file, and reviewers read only the hunks and their neighbours.
- Other rules in each book that price the same acts, beyond those named.
