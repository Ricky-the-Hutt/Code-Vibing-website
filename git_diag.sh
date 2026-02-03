#!/bin/bash
echo "HEAD_COMMIT: $(git rev-parse HEAD)"
echo "REMOTE_URL: $(git remote get-url origin)"
