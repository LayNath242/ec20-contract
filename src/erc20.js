const ethers = require('ethers');
const constants = require('./constants');
const { waitForTx } = require("./utils")

// deploy smart contract to block chain
module.exports.deploy = async function deploy(wallet, name, symbol) {
    const factory = new ethers.ContractFactory(
        constants.ContractABIs.VISTORE.abi,
        constants.ContractABIs.VISTORE.bytecode,
        wallet
    );
    const contract = await factory.deploy(name, symbol);
    await contract.deployed();
    return contract.address
}

///-----------------Contract detail info----------------------------------------------

// check contract decimal
module.exports.decimal = async function decimal(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const decimal = await erc20Instance.decimals();
    return decimal;
}

// check contract name
module.exports.name =  async function name(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const name = await erc20Instance.name();
    return name;
}

// check contract symbol
module.exports.symbol = async function symbol(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const symbol = await erc20Instance.symbol();
    return symbol;
}

// check contract status pause or not
module.exports.pauseStatus = async function pauseStatus(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const pause = await erc20Instance.paused();
    return pause;
}

///-------------------------Contract role info----------------------------------------

// check contract admin role in byte
module.exports.defaultAdminRole = async function defaultAdminRole(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const adminRole = await erc20Instance.DEFAULT_ADMIN_ROLE();
    return adminRole;
}

// check contract minter role in byte
module.exports.minterRole = async function minterRole(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const minterRole = await erc20Instance.MINTER_ROLE()
    return minterRole;
}

// check contract paused role in byte 
module.exports.pausedRole =async function pausedRole(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const pauseRole = await erc20Instance.PAUSER_ROLE()
    return pauseRole;
}

// count role member for each role
module.exports.roleMemberCount = async function roleMemberCount(role){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const roleMember = await erc20Instance.getRoleMemberCount(role)
    return roleMember;
}

// check you are member of role or not
module.exports.hasRole = async function hasRole(role, address){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const isMember = await erc20Instance.hasRole(role, address)
    return isMember;
}

///-------------------------Contract balance info----------------------------------------

// check balance in your contract
module.exports.checkBalance = async function checkBalance(address){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER,
    );
    const balance = await erc20Instance.balanceOf(address)
    return balance
}

// check balance in your contract
module.exports.checkTotalSupply = async function checkTotalSupply(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER,
    );
    const supply = await erc20Instance.totalSupply()
    return supply
}

// check allowance balance in your contract
module.exports.checkAllowance = async function checkAllowance(owner, spender){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER,
    );
    const allowance = await erc20Instance.allowance(owner, spender)
    return allowance
}

///------------------Mint and burn balance---------------------------------------------------

// Minte balance by minter 
module.exports.mint = async function mint(wallet, to, amount){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Balance has mint to ${to} amount: ${amount}`);

    const tx = await erc20Instance.mint(to, amount);
    await waitForTx(constants.PROVIDER, tx.hash)
}

// Burn your balance
module.exports.burn = async function burn(wallet, amount){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Balance has Burn from ${wallet.address} amount: ${amount}`);

    const tx = await erc20Instance.burn(amount);
    await waitForTx(constants.PROVIDER, tx.hash)
}

// Burn your from your allowance
module.exports.burnFrom = async function burnFrom(wallet, address, amount){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Balance has Burn from ${address} amount: ${amount}`);

    const tx = await erc20Instance.burnFrom(address, amount);
    await waitForTx(constants.PROVIDER, tx.hash)
}

///------------------Transfer and allowance------------------------------------------

// transfer balance 
module.exports.transfer = async function transfer(wallet, recipient, amount) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Transfer balance ${amount} To ${recipient}`);

    const tx = await erc20Instance.transfer(recipient, amount);
    await waitForTx(constants.PROVIDER, tx.hash)
}

// transfer balance from allowance account 
module.exports.transferFrom = async function transferFrom(wallet, sender, recipient, amount) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Transfer balance from ${sender} ${amount} To ${recipient}`);

    const tx = await erc20Instance.transferFrom(sender, recipient, amount);
    await waitForTx(constants.PROVIDER, tx.hash)
}

// allow other account to spend your balance (Allowance)
module.exports.approve = async function approve(wallet, spender, amount) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Account ${constants.WALLET.address} allow ${spender} To spend ${amount}`);

    const tx = await erc20Instance.approve(spender, amount);
    await waitForTx(constants.PROVIDER, tx.hash)
}

// increase allowance that you approve
module.exports.increaseAllowance = async function increaseAllowance(wallet, spender, addAmount) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Account ${constants.WALLET.address} increase allowance ${spender} amount ${addAmount}`);

    const tx = await erc20Instance.increaseAllowance(spender, addAmount);
    await waitForTx(constants.PROVIDER, tx.hash)
}

// decrease allowance that you approve
module.exports.decreaseAllowance = async function decreaseAllowance(wallet, spender, subtractedValue) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Account ${constants.WALLET.address} decrease allowance ${spender} amount ${subtractedValue}`);

    const tx = await erc20Instance.decreaseAllowance(spender, subtractedValue);
    await waitForTx(constants.PROVIDER, tx.hash)
}

// pause transfer
module.exports.pause = async function pause(wallet) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Transfer have been paused`);

    const tx = await erc20Instance.pause();
    await waitForTx(constants.PROVIDER, tx.hash)
}

// unpause transfer
module.exports.unpause = async function unpause(wallet) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Transfer have been unpaused`);

    const tx = await erc20Instance.unpause();
    await waitForTx(constants.PROVIDER, tx.hash)
}

// ----------------------role and permission-------------------------------

// grant role to other by admin
module.exports.grantRole = async function grantRole(wallet, role, address) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Admin grant ${address} role`);

    const tx = await erc20Instance.grantRole(role, address);
    await waitForTx(constants.PROVIDER, tx.hash)
}

// revoke role by admin
module.exports.revokeRole = async function revokeRole(wallet, role, address) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Admin revoke ${address} role`);

    const tx = await erc20Instance.revokeRole(role, address);
    await waitForTx(constants.PROVIDER, tx.hash)
}
