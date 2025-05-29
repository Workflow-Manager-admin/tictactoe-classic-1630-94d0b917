#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tictactoe-classic-1630-94d0b917/tictactoe_container
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

