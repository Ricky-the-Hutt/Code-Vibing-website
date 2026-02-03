#!/bin/bash
LOGfile="deploy.log"

echo "=== DEPLOYMENT START: $(date) ===" > $LOGfile

# 1. Configure User
echo "Configuring git user..." >> $LOGfile
git config user.email "ricardo@example.com"
git config user.name "Ricky-the-Hutt"

# 2. Add Changes
echo "Adding changes..." >> $LOGfile
git add . >> $LOGfile 2>&1

# 3. Commit
MSG="$1"
if [ -z "$MSG" ]; then
  MSG="Chore: Automated deployment"
fi
echo "Committing with message: $MSG" >> $LOGfile
git commit -m "$MSG" >> $LOGfile 2>&1

# 4. Push
echo "Pushing onto main..." >> $LOGfile
git push origin main >> $LOGfile 2>&1

EXIT_CODE=$?
if [ $EXIT_CODE -eq 0 ]; then
  echo "=== SUCCESS ===" >> $LOGfile
else
  echo "=== FAILED (Exit Code: $EXIT_CODE) ===" >> $LOGfile
fi

cat $LOGfile
