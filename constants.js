/**
 * Copyright 2020 ChainSafe Systems
 * SPDX-License-Identifier: LGPL-3.0-only
*/

// smart contact abi use to call function from your contract
const CONTRACT_PATH = "./solidity-contract/build/contracts"
const ContractABIs = {
    DigitalLearning: require(CONTRACT_PATH + "/DigitalLearning.json"),
}

module.exports.ContractABIs = ContractABIs

// private key
module.exports.PrivKey = "<Your private key>";

// Contract Address
module.exports.ERC20_ADDRESS = "<Contract Address>";


// binance testnet
module.exports.DEFAULT_SOURCE_ID = 97;
module.exports.DEFAULT_DEST_ID = 1;
module.exports.DEFAULT_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/"
module.exports.GASLIMIT = 2000000;
module.exports.GASPRICE = 10000000000;
