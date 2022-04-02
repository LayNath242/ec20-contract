const ethers = require('ethers');
require('dotenv').config();

// smart contact abi use to call function from your contract
const CONTRACT_PATH = "../solidity-contract/build/contracts"
const ContractABIs = {
    STABLECOIN: require(CONTRACT_PATH + "/STABLECOIN.json"),
}
module.exports.ContractABIs = ContractABIs;
module.exports.ERC20_ADDRESS = "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B";

module.exports.privateKey = process.env.PRIVATEKEY;

module.exports.PROVIDER = new ethers.providers.JsonRpcProvider (
    "https://indranet-rpc.selendra.org", {chainId: 222}
);

module.exports.GASLIMIT = 2000000;
module.exports.GASPRICE = 10000000000;

