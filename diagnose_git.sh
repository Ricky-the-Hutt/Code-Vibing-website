#!/bin/bash
echo "--- GIT STATUS ---" > git_debug.log
git status >> git_debug.log 2>&1

echo "--- GIT ADD ---" >> git_debug.log
git add . >> git_debug.log 2>&1

echo "--- GIT COMMIT ---" >> git_debug.log
git commit -m "Refactor: Migrate to Next.js App Router" >> git_debug.log 2>&1

echo "--- GIT PUSH ---" >> git_debug.log
git push >> git_debug.log 2>&1
