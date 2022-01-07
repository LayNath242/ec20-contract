#!/usr/bin/env bash

echo "*** Initializing smart contract environment"

npm install
cd solidity-contract && npm install && npx truffle compile
