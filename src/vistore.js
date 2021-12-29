const ethers = require('ethers');
const constants = require('./constants');
const { waitForTx } = require("./utils")

// deploy smart contract to block chain
async function deploy(wallet, name, symbol) {
    const factory = new ethers.ContractFactory(
        constants.ContractABIs.VISTORE.abi,
        constants.ContractABIs.VISTORE.bytecode,
        wallet
    );
    const contract = await factory.deploy(name, symbol);
    await contract.deployed();
    console.log(`✓ ERC20 contract deployed at Address ${contract.address}`)
}

///-----------------Contract detail info----------------------------------------------

// check contract decimal
async function decimal(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const decimal = await erc20Instance.decimals();
    console.log(`decimal is :${decimal}` );
    return decimal;
}

// check contract decimal
async function name(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const name = await erc20Instance.name();
    console.log(`name is :${name}` );
    return name;
}

// check contract name
async function name(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const name = await erc20Instance.name();
    console.log(`name is :${name}` );
    return name;
}

// check contract symbol
async function symbol(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const symbol = await erc20Instance.symbol();
    console.log(`symbol is :${symbol}` );
    return symbol;
}

// check contract status pause or not
async function pause(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const pause = await erc20Instance.paused();
    console.log(`Your contract is pause: ${pause}` );
    return pause;
}

///-------------------------Contract role info----------------------------------------

// check contract admin role in byte
async function defaultAdminRole(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const adminRole = await erc20Instance.DEFAULT_ADMIN_ROLE();
    console.log(`Default admin role in bytes :${adminRole}` );
    return adminRole;
}

// check contract minter role in byte
async function minterRole(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const minterRole = await erc20Instance.MINTER_ROLE()
    console.log(`Minter role in bytes :${minterRole}` )
    return minterRole;
}

// check contract paused role in byte 
async function pausedRole(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const pauseRole = await erc20Instance.PAUSER_ROLE()
    console.log(`Pauser role in bytes :${pauseRole}` )
    return pauseRole;
}

// count role member for each role
async function roleMemberCount(role){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const roleMember = await erc20Instance.getRoleMemberCount(role)
    console.log(` There are ${roleMember} member in this role` )
    return roleMember;
}

// check you are member of role or not
async function hasRole(role, address){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER
    );
    const isMember = await erc20Instance.hasRole(role, address)
    console.log(`You are memeber of this role: ${isMember}` )
    return isMember;
}

///-------------------------Contract balance info----------------------------------------

// check balance in your contract
async function checkBalance(address){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER,
    );
    const balance = await erc20Instance.balanceOf(address)
    console.log(`Account ${address} has a balance of ${balance}` )
}

// check balance in your contract
async function checkTotalSupply(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER,
    );
    const balance = await erc20Instance.totalSupply()
    console.log(`Your total supply is: ${balance}` )
}

// check allowance balance in your contract
async function checkAllowance(owner, spender){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi,
        constants.PROVIDER,
    );
    const allowance = await erc20Instance.allowance(owner, spender)
    console.log(`Your allowance balance is: ${allowance}` )
}

///------------------Mint and burn balance---------------------------------------------------

// Minte balance by minter 
async function minte(wallet, to, amount){
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
async function burn(wallet, amount){
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
async function burnFrom(wallet, address, amount){
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
async function transfer(wallet, recipient, amount) {
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
async function transferFrom(wallet, sender, recipient, amount) {
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
async function approve(wallet, spender, amount) {
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
async function increaseAllowance(wallet, spender, addAmount) {
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
async function decreaseAllowance(wallet, spender, subtractedValue) {
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
async function pause(wallet) {
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
async function unpause(wallet) {
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
async function grantRole(wallet, role, address) {
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
async function revokeRole(wallet, role, address) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.VISTORE.abi, 
        wallet
    );
    console.log(`Admin revoke ${address} role`);

    const tx = await erc20Instance.revokeRole(role, address);
    await waitForTx(constants.PROVIDER, tx.hash)
}
