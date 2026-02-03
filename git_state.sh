#!/bin/bash
echo "=== CURRENT BRANCH ==="
git branch --show-current

echo -e "\n=== STATUS ==="
git status

echo -e "\n=== LAST COMMIT ==="
git log -1

echo -e "\n=== PUSH CHECK ==="
git push origin main --dry-run
