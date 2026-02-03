#!/bin/bash
echo "=== GIT DIAGNOSTICS ==="
echo "Current Branch: $(git branch --show-current)"
echo "Remote URL: $(git remote get-url origin)"
echo "Local HEAD: $(git rev-parse HEAD)"
echo "Local HEAD Message: $(git log -1 --pretty=%s)"

echo -e "\n=== FETCHING ORIGIN ==="
git fetch origin main
echo "Remote Main: $(git rev-parse origin/main)"

echo -e "\n=== COMPARISON ==="
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" == "$REMOTE" ]; then
  echo "STATUS: SYNCHRONIZED (Local matches Remote)"
else
  echo "STATUS: DIVERGED"
  echo "Commits on Local but not Remote:"
  git log origin/main..HEAD --oneline
fi
