# SG200: disputing and protest banging priced book by book, and Hockey Canada head contact on the draw by division (8 November 2026)

**Files:**
- content/off-the-ice/mental_game.md
- content/positions/winger.md
- project/plans/OPEN_ITEMS.md (SG200 closure, notes, SG199 gate notes)

## Source
The SG199d read-only census swept the corpus for three claims: USA Hockey swearing, Hockey Canada 7.7 minimal head contact, and "most books" for disputing a call. It found two cheaper sites, one per file.

It also corrected the coordinator's premise. USA Hockey's own text does not settle whether profanity during a dispute is on the minor-first ladder: 601(c)(2) points one way, Casebook 601 Situations 3 and 9 ("verbal abuse") the other. The corpus keeps the conservative split, and no sentence was made more absolute.

## What changed

### mental_game.md :573 and :574 (§ Frustration has a price on the scoreboard)

**The defect.** The disputing bullet put USA Hockey's and CARHA's profanity, USA Hockey's obscene gesture and USA Hockey's protest board-banging on the NHL's minor ladder: "the IIHF, PWHL, USA Hockey, Hockey Canada and CARHA books write the same ladder". The correction sat in the next spoken chunk, so a listener heard the cheaper version first.

**Disputing (:573).** The ladder is now scoped to disputing a call, and adds: "except that USA Hockey starts a dispute after the game at a misconduct" (601(a) Note, usah.txt:3334-3335).

**Protest banging (:574)** is a new bullet that leads with "Keep your stick down".
- **USA Hockey:** a game misconduct (601(d)(3)), plus the Casebook's unsportsmanlike minor (601 Situation 15).
- **NHL, PWHL and IIHF:** a minor that climbs (39.2/39.4).
- **Hockey Canada:** a stick on the glass is a minor, but the referee can go straight to a misconduct or game misconduct (Interpretation 2 to 11.1(a); 11.1(d) and (e) Note 1).
- **CARHA:** an unsportsmanlike minor (87(b), 46). Disrespect for a ruling can be a misconduct outright (46(b)(2)).
- **Injury exception:** attributed to the NHL, PWHL and IIHF books.

**:576.** The duplicated USA Hockey banging limb was removed from this bullet; it now leads :574. The swearing split is unchanged.

### winger.md :622 (§ Faceoffs, "What it costs")

**The defect.** "In Junior and Senior: a minimal one is still a minor" omitted Interpretation 1 to 7.7(a): "Notwithstanding degree of violence … a minimum of a Minor penalty and a Misconduct Penalty" for a stick, hands, forearm, shoulder or elbow raised or driven into the head (cheaper).

**After five review passes, the bullet now:**
- **Leads with the instruction:** keep your shoulder, elbow, forearm, hands and stick below an opponent's shoulders on the draw. Head Contact reaches the head, face or neck.
- **States the cross-check once, for every division:** a cross-check above the shoulders is a major and game misconduct, whether or not it injures (7.6(b), 7.7(b)).
- **Minor and female hockey (7.6):** a minor if accidental, a double minor if intentional, a game ejection for a third such penalty (7.6(a)); a major and game misconduct on violence, mandatory for an injury from what would otherwise be a minor (7.6(b)).
- **Junior and Senior (7.7 and its Interpretation 1):** a minimal touch is a minor; a raised or driven arm or stick is at least a minor plus a misconduct; high violence is a major and game misconduct.
- **Match:** in either division, a match for a defenceless player or intent to injure.
- **Head-butting:** a deliberate head push is 7.1 head-butting (a double minor; a match with force or if it injures), "and Head Contact can apply as well".
- **Game ejection:** "a third such penalty in one game" (4.8(b)(ii) "in the same game").
- **:536 (net front):** a cross-check "above the shoulders" (was "toward the head") ends your game in several books with no intent needed.

## Defects found by review
1. **winger, first pass (BLOCKING).** The new floor had no division scope. It is Junior/Senior only, and in minor and female hockey 7.6(d) bars a misconduct for head contact. Also fixed in this pass: "forearm" was missing, "In either" had lost its antecedent, and "his head" broke the file's gender-neutral prose.
2. **winger, second pass (BLOCKING, cheaper).** "A double minor with no misconduct in minor and female hockey" read as a ceiling. 7.6(b) (hc.txt:6271-6273) makes a cross-check above the shoulders a major and game misconduct "whether or not injury results". winger's own facts line :521 already said so, so the sentence contradicted its own block.
3. **mental_game (RECOMMENDED, cheaper or omission):**
   - CARHA was dropped from the banging bullet.
   - "Hockey Canada prices protest banging the same way" missed the referee's power to go straight to a misconduct.
   - USA Hockey's Casebook minor was missing.
   - The after-game misconduct start was missing.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (mental_game, winger) | 1b and 1e cheaper (fixed); 1f CARHA gap (fixed); the winger sentence correct but needing "forearm" and a division scope; 7.1 vs 7.6 unreconciled in the book, and 7.1 not cheaper |
| safety-reviewer (both rendered) | BLOCKING: winger division scope (fixed). RECOMMENDED: "In either", "his", CARHA banging (fixed) |
| safety-reviewer, final read | BLOCKING: winger 7.6(b) cross-check (fixed). mental_game clear |
| commit-gate (first run) | BLOCK: winger :622 had never been cleared by a safety reviewer (C6/C11) |
| safety-reviewer on the staged third pass | BLOCKING: the line was set at "the head" where Hockey Canada reaches head, face or neck and the cross-check trigger is "above the shoulders" (permissive). Fourth pass: instruction and cross-check at the shoulders, "head, face or neck", the 7.6(a) three-penalty game ejection added, Junior/Senior split; :536 "toward the head" changed to "above the shoulders" (matches facts :521, CM :799) |
| safety-reviewer on the staged fourth pass (:622 and :536) | CLEAR. RECOMMENDED: "the referee may call it Head Contact instead" understated 7.6's "must be penalized as Head Contact"; the coordinator applied the reviewer's wording, "and if it lands on the head, Head Contact governs instead". :536 verified against HC 7.6(b)/7.7(b), CARHA 54(b), USA Hockey 620(b) |
| commit-gate (second run) | BLOCK: the rules-verifier row covered the third pass, not the staged fourth (C4) |
| rules-verifier on the staged fourth pass (:622, :536) | :536 CORRECT. :622 limbs CORRECT except: FIX-cheaper, "Head Contact governs instead" erased 7.1's price (Junior/Senior minimal head-butt → roughing minor; minor/female forceful head-butt → discretionary major); FIX-harsher, the ejection lacked "in one game"; WORDING, the match sentence lacked a verb. The coordinator applied all three as specified |
| safety-reviewer on the three final clauses | CLEAR; none cheaper heard alone. Note: "can apply as well" is softer than 7.6's "must" but harsher in effect |
| rules-verifier, third-pass check of winger :622 | Every limb confirmed against hc.txt. "In every division" holds: Minor, Female, Junior and Senior, with adult recreational filed under Senior at :2225. Nothing cheaper |

### C11
- The authoring agents made every edit except the last four, which the coordinator applied: first the fourth-pass safety reviewer's head-butt wording, which the next rules-verifier ruled cheaper; then that verifier's three fixes (head-butt clause, "in one game", the match verb), which a safety read cleared.
- The coordinator wrote the briefs, the plan entries and this record.

### Checks after the last content edit
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes: exit 0.
- check_marker_pairs: mental_game 4 → 4, winger 56 → 56; 0 LOST.
- Full `npm run build` with the absolute binary, started after the last content edit: exit 0, including check:links (all internal links and anchors resolve).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3 (the last on the staged fourth pass) |
| D2 Exceptions | 601(a) after-game Note; 11.1 Notes; CARHA 46(b)(2); 7.6(d); Interp. 2 to 7.6(b); the injury exception in the NHL, PWHL and IIHF |
| D3 Divergence | Disputing and banging across six books; head contact across Hockey Canada divisions |
| D4 Citation integrity | 601(a)/(c)/(d), Casebook 601 Sit. 15, 39.2/39.4, 11.1, 87, 46, 7.1, 7.6, 7.7 and Interps. CARHA's own "46(g)" misprint is not followed |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | None |
| D7 Cardinal rule | Units lead with the instruction (let it go; keep your stick down; keep it below an opponent's shoulders) |
| D8 Numeric ownership | None |
| D9 Summary layer | mental_game CM :693/:695 and KT11; winger CM :791 and KTs. Layer-tested; none built on the old answers |
| D10 Key-facts layer | winger facts :521 agrees; mental_game has no carrier |
| D11 Reader safety | safety-reviewer ×5 (two first-pass and final reads, then three reads of winger :622) |
| D12 Read-aloud | Both rendered; the changed units read in their chunks (mental_game 027/028, winger 047) |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes; no site-reviewer (declared) |

## What this method could not have found
- Sibling pages carrying the same faceoff head-contact or banging tariffs, for example center and faceoffs. The census excluded five files, among them body_contact_and_battles, the head-contact owner.
- Hockey Canada rulings outside the playing rules: a case book or officiating bulletins that would settle 7.1 against 7.6.
- How a CARHA referee applies 87(b)'s misprinted cross-reference.
- The winger bullet is about 1,100 characters spoken and was not split; that is a readability call.
