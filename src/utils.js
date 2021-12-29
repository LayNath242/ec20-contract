const ethers = require('ethers');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const waitForTx = async (provider, hash) => {
    console.log(`Waiting for tx: ${hash}...`)
    while (!await provider.getTransactionReceipt(hash)) {
        sleep(5000)
    }
}

function generateMnemonic() {
    const mnemonic = ethers.Wallet.createRandom().mnemonic;
    console.log(`Mnemonic: ${mnemonic}`);
    return mnemonic
}

function generatePrivateKey(mnemonic) {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    console.log(`Private key is: ${wallet.privateKey}`);
    return wallet.privateKey
}

module.exports = {
    waitForTx,
    generateMnemonic,
    generatePrivateKey
};
