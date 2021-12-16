const ethers = require('ethers');
const constants = require('./constants');
const {setupParentArgs, waitForTx, log} = require("./utils")

// Blockchain provider thant we want to deploy and use contract
const provider = new ethers.providers.JsonRpcProvider (
    constants.DEFAULT_URL, {chainId: constants.DEFAULT_SOURCE_ID}
);

// Wallet address from our private key and blockchain providef
const wallet = new ethers.Wallet(constants.PrivKey, provider);


// deploy smart contract to block chain
async function deploy(wallet) {
    const factory = new ethers.ContractFactory(
        constants.ContractABIs.DigitalLearning.abi,
        constants.ContractABIs.DigitalLearning.bytecode,
        wallet
    );
    const contract = await factory.deploy(
        { gasPrice: constants.GASPRICE, gasLimit: constants.GASLIMIT}
    );
    await contract.deployed();
    console.log(`✓ ERC20 contract deployed at Address ${contract.address}`)
}

// check balance in your contract
async function checkBalance(address){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.DigitalLearning.abi,
        provider
    );
    const balance = await erc20Instance.balanceOf(address)
    console.log(`Account ${address} has a balance of ${balance}` )
}

// change contract admin
async function changeAdmin(wallet, adminAddress){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.DigitalLearning.abi, 
        wallet
    );
    console.log(`Change ${adminAddress} as a admin on contract ${constants.ERC20_ADDRESS}`);

    const tx = await erc20Instance.updateAdmin(
        adminAddress, 
        { gasPrice: constants.GASPRICE, gasLimit: constants.GASLIMIT }
    );
    await waitForTx(provider, tx.hash)
}

// transfer balance
async function transferBalance(wallet, recipient, amount) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.DigitalLearning.abi, 
        wallet
    );
    console.log(`Transfer balance ${amount} To ${recipient}`);

    const tx = await erc20Instance.transfer(
        recipient,
        amount,
        { gasPrice: constants.GASPRICE, gasLimit: constants.GASLIMIT }
    );
    await waitForTx(provider, tx.hash)
}


// deploy(wallet)
// checkBalance("0x5b3F084Dd296DBda4a655E83Fc84d39C2b5a5C09")
// transferBalance(wallet, "0x5b3F084Dd296DBda4a655E83Fc84d39C2b5a5C09", 200000)