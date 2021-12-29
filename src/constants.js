/**
 * Copyright 2020 ChainSafe Systems
 * SPDX-License-Identifier: LGPL-3.0-only
*/

const ethers = require('ethers');

// smart contact abi use to call function from your contract
const CONTRACT_PATH = "../solidity-contract/build/contracts"
const ContractABIs = {
    VISTORE: require(CONTRACT_PATH + "/VIStore.json"),
}

const source_id = 97;
const url = "https://data-seed-prebsc-1-s1.binance.org:8545/"
const private_key = "<Your private key>";

// Blockchain provider thant we want to deploy and use contract
const provider = new ethers.providers.JsonRpcProvider (
    url, {chainId: source_id}
);

// Wallet address from our private key and blockchain providef
const wallet = new ethers.Wallet(private_key, provider);

module.exports.ContractABIs = ContractABIs

// private key
module.exports.PrivKey = private_key;
// Contract Address
// module.exports.ERC20_ADDRESS = "<Contract Address>";
module.exports.ERC20_ADDRESS = "0x3ecdc520a9bC37d29b1860D466c33Be3CFCEDEa4";

// binance testnet
module.exports.DEFAULT_SOURCE_ID = source_id;
module.exports.DEFAULT_URL = url;
module.exports.GASLIMIT = 2000000;
module.exports.GASPRICE = 10000000000;

// Wallet
module.exports.WALLET = wallet;



module.exports.PROVIDER = provider;


