#!/usr/bin/env bash
#
# Test suite for .claude/hooks/git-guard.sh. Run from the repository root:
#
#     bash .claude/hooks/git-guard.test.sh
#
# Exits non-zero on any failure. Read-only — it drives the hook with synthetic
# PreToolUse JSON and never runs a git command.
#
# The "mention is not invocation" section is not padding. Three separate false
# positives shipped in this hook, each blocking a legitimate command, and each
# was a regex scanning the raw command line instead of the parsed git
# invocation. Add a case there whenever a new flag rule goes in.
GUARD=./.claude/hooks/git-guard.sh
fail=0; n=0

t() { # t <BLOCK|allow|ASK> <command>
  n=$((n+1))
  out="$(printf '{"tool_name":"Bash","tool_input":{"command":%s}}' \
      "$(python3 -c 'import json,sys;print(json.dumps(sys.argv[1]))' "$2")" \
    | "$GUARD" 2>&1)"
  code=$?
  case $code in
    0) got=$( [ "x$out" != "x" ] && echo "ASK" || echo "allow" ) ;;
    2) got="BLOCK" ;;
    *) got="ERR($code)" ;;
  esac
  if [ "$got" = "$1" ]; then m="  ok "; else m="FAIL"; fail=$((fail+1)); fi
  printf '%s %-6s(want %-6s) %s\n' "$m" "$got" "$1" "$(printf '%s' "$2" | head -1 | cut -c1-92)"
}

echo "── allowed: ordinary work ──"
t allow 'ls -la'
t allow 'python3 scripts/check_facts.py'
t allow 'git status --porcelain'
t allow 'git diff --cached --name-only'
t allow 'git log --grep=claude --oneline'
t allow 'git stash push -u -m wip'
t allow 'git add CLAUDE.md project/review_process.md'
t allow 'git add ./content/systems/breakouts.md'
t allow 'git add -p content/systems/faceoffs.md'
t allow 'git commit --amend --no-edit'
t allow 'git restore --staged content/systems/faceoffs.md'

echo
echo "── blocked: destructive ──"
t BLOCK 'git push --force origin main'
t BLOCK 'git push -f'
t BLOCK 'git push --force-with-lease origin main'
t BLOCK 'git reset --hard HEAD~1'
t BLOCK 'git clean -fd'
t BLOCK 'git checkout .'
t BLOCK 'git restore .'
t BLOCK 'git filter-branch --tree-filter true HEAD'
t BLOCK 'git rebase -i HEAD~3'
t BLOCK 'git reflog expire --expire=now --all'
t BLOCK 'git branch -D main'
t BLOCK 'rm -rf .git/refs/original'

echo
echo "── blocked: skipping checks / secrets ──"
t BLOCK 'git commit --no-verify -m "x"'
t BLOCK 'git commit -n -m "x"'
t BLOCK 'git add infra/terraform.tfvars'
t BLOCK 'git add .env'

# A plan saved as `tfplan.www301` matched neither `tfplan` nor `*.tfplan` in
# .gitignore, and the guard's own patterns were anchored the same way, so it sat
# untracked and unignored in a public repository's working tree. The suite that
# exists to catch exactly this carried no tfplan case at all — which is why it
# escaped. These are those cases.
t BLOCK 'git add infra/tfplan'
t BLOCK 'git add infra/tfplan.www301'
t BLOCK 'git add infra/my.tfplan'
t BLOCK 'git add infra/my.tfplan.bak'

echo
echo "── blocked: blanket staging (both routes) ──"
t BLOCK 'git add .'
t BLOCK 'git add -A'
t BLOCK 'git add --all'
t BLOCK 'git add -u'
t BLOCK 'git add :/'
t BLOCK 'git add *'
t BLOCK 'git add -f .'
t BLOCK 'git add file.md && git add .'
t BLOCK 'git commit -am "sweep"'
t BLOCK 'git commit -a -m "sweep"'
t BLOCK 'git commit --all -m "sweep"'

echo
echo "── blocked: AI attribution in the message ──"
t BLOCK 'git commit -m "tidy

Co-Authored-By: Claude <n@a.com>"'
t BLOCK 'git commit -m "generated with an AI assistant"'
t BLOCK 'git commit -m "tidy up, thanks Claude"'
t BLOCK "$(printf 'git commit -F - <<EOF\nfix\n\nCo-Authored-By: Claude <x@y>\nEOF')"

echo
echo "── mention is not invocation (the three shipped false positives) ──"
t allow 'echo "never use git add . in this repo" >> notes.md'
t allow 'grep -rn "git add -A" project/'
t allow 'git commit -m "Block blanket staging: git add -A and git commit -am both sweep other agents work"'
t allow 'git commit -m "note -a and --all are now refused"'
t allow 'git commit -m "add .claude/agents/safety-reviewer.md"'
t allow 'git commit -m "wire .claude/hooks/git-guard.sh into .claude/settings.json"'
t allow 'out=$(git status); [ -n "$out" ] && echo dirty'
t allow "$(printf 'git commit -F - <<EOF\ndocument that git add -A is blocked\nEOF')"
t allow 'git commit --only -m "gate the corpus" -- CLAUDE.md project/review_process.md'

echo
echo "── ask ──"
t ASK 'git push origin main'

echo
echo "$n cases; $fail failure(s)"
[ $fail -eq 0 ] && echo "ALL PASS"
exit $fail
