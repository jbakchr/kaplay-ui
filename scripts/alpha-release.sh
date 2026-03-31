#!/bin/bash
set -e

# --- Color definitions ---
GREEN="\033[1;32m"
CYAN="\033[1;36m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
WHITE="\033[1;37m"

BG_BLACK="\033[40m"
BG_RED="\033[41m"
BG_GREEN="\033[42m"
BG_YELLOW="\033[43m"
BG_BLUE="\033[44m"
BG_MAGENTA="\033[45m"
BG_CYAN="\033[46m"
BG_WHITE="\033[47m"

RESET="\033[0m"

echo -e "\nBumping npm alpha version .."
npm version prerelease --preid=alpha

echo -e "\nBuilding ..\n"
npm run build

echo -e "\nPushing to GitHub .. \n"
git push

echo -e "\nPublishing to npm as @next tag .. \n"
npm publish --tag alpha

echo -e "\n${BG_GREEN}${WHITE}Done${RESET}\n"