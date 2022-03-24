const ethers = require('ethers');
require('dotenv').config();

// smart contact abi use to call function from your contract
const CONTRACT_PATH = "../solidity-contract/build/contracts"
const ContractABIs = {
    STABLECOIN: require(CONTRACT_PATH + "/STABLECOIN.json"),
}
module.exports.ContractABIs = ContractABIs;
module.exports.ERC20_ADDRESS = "0x209373B5047f1F8a619977D3C9bCB0A6b10126c1";

module.exports.privateKey = process.env.PRIVATEKEY;

module.exports.PROVIDER = new ethers.providers.JsonRpcProvider (
    "https://indranet-rpc.selendra.org", {chainId: 222}
);

module.exports.GASLIMIT = 2000000;
module.exports.GASPRICE = 10000000000;

