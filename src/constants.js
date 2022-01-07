const ethers = require('ethers');
require('dotenv').config();

// smart contact abi use to call function from your contract
const CONTRACT_PATH = "../solidity-contract/build/contracts"
const ContractABIs = {
    VISTORE: require(CONTRACT_PATH + "/VIStore.json"),
}
module.exports.ContractABIs = ContractABIs;
module.exports.ERC20_ADDRESS = process.env.ERC20_ADDRESS;

module.exports.PROVIDER = new ethers.providers.JsonRpcProvider (
    process.env.BLOCKCHAIN_URL, {chainId: Number(process.env.CHAIN_ID)}
);

module.exports.GASLIMIT = 2000000;
module.exports.GASPRICE = 10000000000;