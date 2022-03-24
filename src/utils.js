const ethers = require('ethers');
const constants = require('./constants');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const waitForTx = async (provider, hash) => {
    console.log(`Waiting for tx: ${hash}...`)
    while (!await provider.getTransactionReceipt(hash)) {
        sleep(5000)
    }
}

const expandDecimals = (amount, decimals = 18) => {
    return ethers.utils.parseUnits(String(amount), decimals);
}

const formatDecimals = (amount, decimals = 18) => {
    return ethers.utils.formatEther(amount);
}

function generateMnemonic() {
    const mnemonic = ethers.Wallet.createRandom().mnemonic;
    return mnemonic
}

function generatePrivateKey(mnemonic) {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    return wallet.privateKey
}

function wallet(private_key){
    const wallet = new ethers.Wallet(private_key, constants.PROVIDER);
    return wallet
}

module.exports = {
    waitForTx,
    generateMnemonic,
    generatePrivateKey,
    wallet,
    expandDecimals,
    formatDecimals
};
