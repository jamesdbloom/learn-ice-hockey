#!/usr/bin/env bash
#
# git-guard — the mechanical half of the commit gate.
#
# Runs as a PreToolUse hook on every Bash call the agent makes. Commands that
# do not mention git return immediately, so the cost on everything else is one
# string test.
#
# What it enforces, and why each one is here:
#
#   * Secrets, Terraform state and registrant PII never reach a public repo.
#     .gitignore already covers them; this is the second line, because the
#     failure mode of the first is silent and permanent.
#   * Blanket staging is refused — `git add .` / -A / -u / :/ / * and the
#     shorter route, `git commit -a`. More than one agent works in this
#     repository and the tree routinely holds someone else's half-finished
#     edits; commit 239f70d exists to repair exactly that.
#   * `--no-verify` cannot be used to skip the checkers.
#   * History is not rewritten and nothing is force-pushed. The working tree
#     routinely holds unstaged review work, so `reset --hard` and `clean -fd`
#     destroy evidence, not just edits.
#   * A commit staging content/ passes check_links.py, check_facts.py and check_absolutes.py.
#   * Commit messages do not credit Claude, Anthropic or an AI co-author.
#   * Pushing asks first. main deploys to production.
#
# ---------------------------------------------------------------------------
# On matching: scan git invocations, never the raw command line.
#
# Three separate false positives were shipped by regexing $CMD directly, each
# blocking a legitimate command:
#
#   echo "never use git add . here"        → tripped the blanket-add rule
#   git commit -m "...git commit -am..."   → tripped the -a rule
#   [ -n "$out" ] in a test harness        → tripped the --no-verify rule
#
# All three are the same mistake: a command that *mentions* a flag is not a
# command that *passes* one. So the input is tokenised once, split into shell
# segments, and only segments that actually invoke git are matched against —
# with `-m`/`-F` message values pulled out into $GIT_MSG, where the attribution
# rule can scan them without the flag rules seeing them.
#
# A hook that blocks the commit documenting it is a hook people switch off.
# ---------------------------------------------------------------------------
#
# What it CANNOT enforce: whether a review actually happened. No script can.
# That is C3-C8 in project/review_process.md, and it is the agent's job — see
# the `commit-gate` subagent.
#
# To disable: remove the hook entry from .claude/settings.json.

set -uo pipefail

# Exit 2 blocks the tool call and feeds stderr back to the agent.
block() {
  printf 'BLOCKED by .claude/hooks/git-guard.sh\n\n%s\n' "$1" >&2
  exit 2
}

# Exit 0 with this JSON puts the call in front of the user instead.
ask() {
  printf '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"ask","permissionDecisionReason":%s}}\n' \
    "$(printf '%s' "$1" | python3 -c 'import json,sys; print(json.dumps(sys.stdin.read()))')"
  exit 0
}

INPUT="$(cat)"
case "$INPUT" in *git*) ;; *) exit 0 ;; esac

CMD="$(printf '%s' "$INPUT" | python3 -c '
import json, sys
try:
    print(json.load(sys.stdin).get("tool_input", {}).get("command", ""))
except Exception:
    print("")
' 2>/dev/null)"

[ -n "$CMD" ] || exit 0
# Broad enough to catch `.git/` in an rm target, narrow enough to skip "digit".
printf '%s' "$CMD" | grep -Eq '(^|[^[:alnum:]_-])git([^[:alnum:]_-]|$)' || exit 0

# --------------------------------------------------------------- parse
# Emits: GIT_SEGS — one git invocation per line, message values removed
#        GIT_MSG  — concatenated -m / --message / -F heredoc text
eval "$(printf '%s' "$CMD" | python3 -c '
import re, shlex, sys

cmd = sys.stdin.read()
msg = []

# Heredoc bodies are message text, and must not be tokenised as arguments.
for m in re.finditer(r"<<-?[\"\x27]?([A-Za-z_][A-Za-z0-9_]*)[\"\x27]?\n(.*?)\n\s*\1\b", cmd, re.S):
    msg.append(m.group(2))
cmd = re.sub(r"<<-?[\"\x27]?([A-Za-z_][A-Za-z0-9_]*)[\"\x27]?\n.*?\n\s*\1\b", " ", cmd, flags=re.S)

try:
    lex = shlex.shlex(cmd, posix=True, punctuation_chars=True)
    lex.whitespace_split = True
    toks = list(lex)
except ValueError:
    toks = cmd.split()

SEPS = {";", "&&", "||", "|", "&", "\n"}
segs, cur = [], []
for tok in toks:
    if tok in SEPS:
        segs.append(cur); cur = []
    else:
        cur.append(tok)
segs.append(cur)

git_segs = []
for seg in segs:
    if not seg:
        continue
    head = seg[0]
    if head != "git" and not head.endswith("/git"):
        continue
    args, skip = [], False
    for tok in seg:
        if skip:
            msg.append(tok); skip = False; continue
        if tok in ("-m", "--message", "-F", "--file"):
            skip = True
        elif tok.startswith("--message="):
            msg.append(tok[10:])
        elif tok.startswith("-m") and len(tok) > 2 and not tok.startswith("--"):
            msg.append(tok[2:])
        else:
            args.append(tok)
    git_segs.append(" ".join(args))

def q(s):
    return "\x27" + s.replace("\x27", "\x27\\\x27\x27") + "\x27"

print("GIT_SEGS=" + q("\n".join(git_segs)))
print("GIT_MSG=" + q("\n".join(msg)))
' 2>/dev/null)"

GIT_SEGS="${GIT_SEGS-}"
GIT_MSG="${GIT_MSG-}"

# Match against git invocations only. Every pattern anchors at ^, because each
# line of $GIT_SEGS is exactly one invocation with its message stripped out.
seg() { printf '%s\n' "$GIT_SEGS" | grep -Eq "$1"; }

# Zero or more intervening arguments, then the separator before the one we want.
# Written out rather than as `.*` because POSIX ERE is greedy with no
# backtracking control: `add([[:space:]]|$).*[[:space:]]-A` consumes the space
# after `add` and then has none left to match, so `git add -A` slips through
# while `git add -f -A` is caught. That shipped once.
A='([[:space:]]+[^[:space:]]+)*[[:space:]]+'

REPO="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}"

# ---------------------------------------------------------------- destructive

if seg "^git[[:space:]]+push${A}(--force|--force-with-lease|-f)([[:space:]]|=|\$)"; then
  block 'Force-pushing is not permitted from an agent session.

main deploys to production on push, and a force-push can destroy commits that
are the only record of a review round — review_history.md is partly
reconstructed from git history.

If the remote genuinely needs rewriting, ask the user to do it themselves.'
fi

if seg '^git[[:space:]]+(filter-branch|filter-repo)([[:space:]]|$)' \
  || seg '^git[[:space:]]+rebase([[:space:]]|$)' \
  || seg '^git[[:space:]]+reflog[[:space:]]+expire' \
  || seg '^git[[:space:]]+update-ref[[:space:]]+-d' \
  || seg "^git[[:space:]]+gc${A}--prune" \
  || seg "^git[[:space:]]+branch${A}-[a-zA-Z]*D[a-zA-Z]*([[:space:]]|\$)" \
  || printf '%s' "$CMD" | grep -Eq '(^|[;&|][[:space:]]*)rm[[:space:]]+-[a-zA-Z]+[[:space:]]+[^|;&]*\.git(/|[[:space:]]|$)'; then
  block 'History rewriting is not permitted from an agent session.

filter-branch, filter-repo, rebase, reflog expiry, aggressive gc, force-deleting
a branch and removing anything under .git/ all destroy the defect record this
project depends on — review_history.md is partly reconstructed from it.

If history really must be rewritten, ask the user to do it themselves.'
fi

if seg "^git[[:space:]]+reset${A}(--hard|--merge|--keep)([[:space:]]|\$)" \
  || seg "^git[[:space:]]+clean${A}-[a-zA-Z]*[fd][a-zA-Z]*([[:space:]]|\$)" \
  || seg "^git[[:space:]]+(checkout|restore)${A}\.([[:space:]]|\$)"; then
  block 'This discards uncommitted work in the working tree.

The tree in this project routinely holds review findings, draft corrections and
verification notes that exist nowhere else yet — and another agent'"'"'s
in-progress edits.

If you need a clean tree, stash it (git stash push -u) so it is recoverable, or
name the specific paths to revert rather than using "." or --hard.'
fi

# ------------------------------------------------------------------ --no-verify
if seg "^git[[:space:]]+(commit|push)${A}(--no-verify|-n)([[:space:]]|\$)"; then
  block 'The verification checks are not optional.

If check_links.py or check_facts.py is failing, that is the finding — fix it.
If the checker itself is wrong, fix the checker in its own commit and say so.'
fi

# ------------------------------------------------------------ blanket staging
if seg "^git[[:space:]]+add${A}(\.|-A|--all|-u|--update|:/|\*)([[:space:]]|\$)"; then
  block 'Blanket staging is not permitted in this repository.

More than one agent works here, and the working tree routinely holds another
agent'"'"'s in-progress edits plus unstaged review findings. `git add .` and
`git add -A` sweep all of it into your commit under your message.

Name the files you actually changed:

    git add path/one.md path/two.md

Then check what you staged before committing:

    git diff --cached --name-only'
fi

# `tfplan` and `.*\.tfplan` were anchored to the end, so a plan saved as
# `tfplan.www301` matched neither and the hook would have allowed `git add` on
# it. A plan file carries resource attributes and account identifiers in the
# clear, and this repository is public. Both now accept a suffix.
SENSITIVE_RE='(^|/)(\.env(\..*)?|.*\.tfvars|.*\.tfstate(\..*)?|backend\.hcl|tfplan(\..*)?|.*\.tfplan(\..*)?|domain-registration\.json|id_rsa.*|.*\.pem|.*\.p12|credentials)$'

# Known over-block, accepted deliberately: the trailing `[^[:space:]]*` also
# catches the tracked `*.example` templates — infra/backend.hcl.example,
# terraform.tfvars.example, domain-registration.json.example. Adding a negative
# case for `.example` cannot be written in ERE without lookahead, and every
# workaround tried here fails open when a real secret is staged alongside an
# example file. Over-blocking is an annoyance; under-blocking publishes a
# credential from a public repository. If you hit it, stage the example file in
# its own command.
if seg "^git[[:space:]]+add${A}[^[:space:]]*(\.env|\.tfvars|\.tfstate|backend\.hcl|tfplan|domain-registration\.json|id_rsa|\.pem)[^[:space:]]*([[:space:]]|\$)"; then
  block 'That path holds a credential, Terraform state, or registrant PII.

This repository is public. .gitignore covers these deliberately — see the
comments in it. Nothing here is committable, and .gitignore is not to be
weakened to make it so.'
fi

# -------------------------------------------------------------- git commit
if seg '^git[[:space:]]+commit([[:space:]]|$)'; then

  # `git commit -a` is blanket staging by a shorter route: it sweeps every
  # modified tracked file in without ever calling `git add`. Blocking
  # `git add -A` and leaving this open would be theatre.
  if seg "^git[[:space:]]+commit${A}(-[a-zA-Z]*a[a-zA-Z]*|--all)([[:space:]]|\$)"; then
    block 'git commit -a / -am stages every modified tracked file.

More than one agent works in this repository, and the tree routinely holds
another agent'"'"'s in-progress edits. `-a` sweeps all of them into your commit
without you ever seeing what you staged.

Stage the files you changed by name, check the result, then commit:

    git add path/one.md path/two.md
    git diff --cached --name-only
    git commit -m "..."'
  fi

  # Strip `.claude/…` before scanning. This repository has a .claude/
  # directory, so a message naming a file inside it — which any commit touching
  # the agent configuration must — is describing a path, not crediting an
  # author. The rule is about attribution.
  MSG_SCAN="$(printf '%s' "$GIT_MSG" \
    | sed -e 's#\.[Cc][Ll][Aa][Uu][Dd][Ee]/[^[:space:]]*##g' \
          -e 's#\.[Cc][Ll][Aa][Uu][Dd][Ee]##g')"

  if printf '%s' "$MSG_SCAN" | grep -Eqi 'claude|anthropic|co-authored-by|generated with|🤖'; then
    block 'Commit messages in this repository never mention Claude, Anthropic, an AI
assistant, or a co-author trailer.

Describe what changed and why it was wrong. review_history.md is partly
reconstructed from git history, so the message is part of the defect record.'
  fi

  STAGED="$(git -C "$REPO" diff --cached --name-only 2>/dev/null)"

  if [ -z "$STAGED" ] && ! seg "^git[[:space:]]+commit${A}--amend([[:space:]]|\$)"; then
    block 'Nothing is staged. Stage the specific files you intend to commit — a blanket
"git add ." is how build output, .DS_Store and half-finished edits get shipped.'
  fi

  if [ -n "$STAGED" ]; then
    OFFENDERS="$(printf '%s\n' "$STAGED" | grep -Ei "$SENSITIVE_RE" || true)"
    if [ -n "$OFFENDERS" ]; then
      block "These staged files hold credentials, Terraform state, or registrant PII, and
this repository is public:

$OFFENDERS

Unstage them (git restore --staged <path>) and check why .gitignore did not
catch them."
    fi
  fi

  # Removing a .gitignore line is how a secret becomes committable later.
  if printf '%s\n' "$STAGED" | grep -qx '.gitignore'; then
    if git -C "$REPO" diff --cached -- .gitignore 2>/dev/null | grep -Eq '^-[^-].*(tfvars|tfstate|backend\.hcl|tfplan|domain-registration|\.env)'; then
      block 'This diff removes a secret-excluding line from .gitignore.

Every entry in that file has a comment explaining what it keeps out of a public
repository. If an exclusion is genuinely wrong, say so explicitly and get the
user to confirm it.'
    fi
  fi

  # The repository's own secret scanner, where it exists. It knows about
  # account-id shapes this hook deliberately does not carry — a scanner holding
  # the secret is the leak it is trying to prevent. Exit 2 means it could not
  # run, which is not a finding.
  if [ -f "$REPO/scripts/check_secrets.py" ]; then
    SECRETS_OUT="$(cd "$REPO" && python3 scripts/check_secrets.py 2>&1)"
    if [ $? -eq 1 ]; then
      block "scripts/check_secrets.py found account-identifying or credential-shaped
strings in tracked files. This repository is public.

${SECRETS_OUT}"
    fi
  fi

  # Content changes must pass the mechanical checkers before they are committed.
  #
  # Scope note: this keys on the index. A pathspec commit that excludes
  # content/ is still gated by whatever else is staged, which is deliberately
  # the conservative reading — but it means a green run here is not a statement
  # about the paths you are committing. commit-gate checks that properly.
  if printf '%s\n' "$STAGED" | grep -q '^content/'; then
    FAILURES=""

    if [ -f "$REPO/scripts/check_links.py" ]; then
      if ! LINKS_OUT="$(cd "$REPO" && python3 scripts/check_links.py --quiet 2>&1)"; then
        FAILURES="${FAILURES}
--- scripts/check_links.py ---
${LINKS_OUT}
"
      fi
    fi

    if [ -f "$REPO/scripts/check_facts.py" ]; then
      if ! FACTS_OUT="$(cd "$REPO" && python3 scripts/check_facts.py 2>&1)"; then
        FAILURES="${FAILURES}
--- scripts/check_facts.py ---
${FACTS_OUT}
"
      fi
    fi

    # check_absolutes.py was written after twenty instances of one defect and was
    # wired into nothing — not this hook, not CI. A checker nobody runs decays: its
    # own docstring records that its instance count "had shipped stale twice", and
    # its second rule shipped inert at the wrong indent and reported clean for a
    # whole gate cycle. It runs here now, with the other two.
    if [ -f "$REPO/scripts/check_absolutes.py" ]; then
      if ! ABS_OUT="$(cd "$REPO" && python3 scripts/check_absolutes.py 2>&1)"; then
        FAILURES="${FAILURES}
--- scripts/check_absolutes.py ---
${ABS_OUT}
"
      fi
    fi

    if [ -n "$FAILURES" ]; then
      block "A commit touching content/ must pass the checkers first (C1, C2).
${FAILURES}
Fix these, then commit. Do not use --no-verify."
    fi
  fi
fi

# --------------------------------------------------------------- git push
if seg '^git[[:space:]]+push([[:space:]]|$)'; then
  ask 'This pushes to a remote. Pushing to main deploys the site to production
(.github/workflows/deploy.yml).

Confirm the change has been through the review gate in
project/review_process.md before allowing this.'
fi

exit 0
