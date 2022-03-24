const ethers = require('ethers');
const constants = require('./constants');
const { waitForTx, expandDecimals, formatDecimals } = require("./utils")

// deploy smart contract to block chain
module.exports.deploy = async function deploy(wallet, name, symbol) {
    const factory = new ethers.ContractFactory(
        constants.ContractABIs.STABLECOIN.abi,
        constants.ContractABIs.STABLECOIN.bytecode,
        wallet
    );
    const contract = await factory.deploy(name, symbol);
    await contract.deployed();
    return contract.address
}

///-------------------------Contract balance info----------------------------------------

// check balance in your contract
module.exports.checkBalance = async function checkBalance(address){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER,
    );
    const balance = await erc20Instance.balanceOf(address)
    return formatDecimals(balance)
}

// check balance in your contract
module.exports.checkTotalSupply = async function checkTotalSupply(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER,
    );
    const supply = await erc20Instance.totalSupply()
    return formatDecimals(supply)
}

// check allowance balance in your contract
module.exports.checkAllowance = async function checkAllowance(owner, spender){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER,
    );
    const allowance = await erc20Instance.allowance(owner, spender)
    return formatDecimals(allowance)
}

///------------------Mint and burn balance---------------------------------------------------

// Minte balance by minter 
module.exports.mint = async function mint(wallet, to, amount){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi, 
        wallet
    );
    console.log(`Balance has mint to ${to} amount: ${amount}`);

    const tx = await erc20Instance.mint(to, expandDecimals(amount));
    await waitForTx(constants.PROVIDER, tx.hash)
}

// Burn your balance
module.exports.burn = async function burn(wallet, amount){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi, 
        wallet
    );
    console.log(`Balance has Burn from ${wallet.address} amount: ${amount}`);

    const tx = await erc20Instance.burn(expandDecimals(amount));
    await waitForTx(constants.PROVIDER, tx.hash)
}

// Burn your from your allowance
module.exports.burnFrom = async function burnFrom(wallet, address, amount){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi, 
        wallet
    );
    console.log(`Balance has Burn from ${address} amount: ${amount}`);

    const tx = await erc20Instance.burnFrom(address, expandDecimals(amount));
    await waitForTx(constants.PROVIDER, tx.hash)
}

///------------------Transfer and allowance------------------------------------------

// transfer balance 
module.exports.transfer = async function transfer(wallet, recipient, amount) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi, 
        wallet
    );
    console.log(`Transfer balance ${amount} To ${recipient}`);

    const tx = await erc20Instance.transfer(recipient, expandDecimals(amount));
    await waitForTx(constants.PROVIDER, tx.hash)
}

// transfer balance from allowance account 
module.exports.transferFrom = async function transferFrom(wallet, sender, recipient, amount) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi, 
        wallet
    );
    console.log(`Transfer balance from ${sender} ${amount} To ${recipient}`);

    const tx = await erc20Instance.transferFrom(sender, recipient, expandDecimals(amount));
    await waitForTx(constants.PROVIDER, tx.hash)
}

// allow other account to spend your balance (Allowance)
module.exports.approve = async function approve(wallet, spender, amount) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi, 
        wallet
    );
    console.log(`Account ${constants.WALLET.address} allow ${spender} To spend ${amount}`);

    const tx = await erc20Instance.approve(spender, expandDecimals(amount));
    await waitForTx(constants.PROVIDER, tx.hash)
}

// increase allowance that you approve
module.exports.increaseAllowance = async function increaseAllowance(wallet, spender, addAmount) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi, 
        wallet
    );
    console.log(`Account ${constants.WALLET.address} increase allowance ${spender} amount ${addAmount}`);

    const tx = await erc20Instance.increaseAllowance(spender, expandDecimals(addAmount));
    await waitForTx(constants.PROVIDER, tx.hash)
}

// decrease allowance that you approve
module.exports.decreaseAllowance = async function decreaseAllowance(wallet, spender, subtractedValue) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi, 
        wallet
    );
    console.log(`Account ${constants.WALLET.address} decrease allowance ${spender} amount ${subtractedValue}`);

    const tx = await erc20Instance.decreaseAllowance(spender, expandDecimals(subtractedValue));
    await waitForTx(constants.PROVIDER, tx.hash)
}
