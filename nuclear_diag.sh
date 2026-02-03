#!/bin/bash
OUTPUT_FILE="nuclear_diag.txt"
echo "=== FILESYSTEM CHECK ===" > $OUTPUT_FILE
ls -R app/projects app/chat components/features >> $OUTPUT_FILE 2>&1

echo -e "\n=== GIT STATUS ===" >> $OUTPUT_FILE
git status >> $OUTPUT_FILE 2>&1

echo -e "\n=== GIT LOG (HEAD) ===" >> $OUTPUT_FILE
git log -n 1 --format="%H %s" >> $OUTPUT_FILE 2>&1

echo -e "\n=== GIT REMOTE HEAD ===" >> $OUTPUT_FILE
git ls-remote origin main >> $OUTPUT_FILE 2>&1

echo -e "\n=== DIFFERENCE ===" >> $OUTPUT_FILE
git diff --stat origin/main..HEAD >> $OUTPUT_FILE 2>&1
