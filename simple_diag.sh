#!/bin/bash
git branch -vv > git_Status.txt
git log -n 5 --oneline >> git_Status.txt
git rev-parse HEAD >> git_Status.txt
