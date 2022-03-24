const ethers = require('ethers');
const constants = require('./constants');

// check contract admin role in byte
module.exports.defaultAdminRole = async function defaultAdminRole(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER
    );
    const adminRole = await erc20Instance.DEFAULT_ADMIN_ROLE();
    return adminRole;
}

// check contract minter role in byte
module.exports.minterRole = async function minterRole(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER
    );
    const minterRole = await erc20Instance.MINTER_ROLE()
    return minterRole;
}

// check contract paused role in byte 
module.exports.pausedRole =async function pausedRole(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER
    );
    const pauseRole = await erc20Instance.PAUSER_ROLE()
    return pauseRole;
}

// count role member for each role
module.exports.roleMemberCount = async function roleMemberCount(role){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER
    );
    const roleMember = await erc20Instance.getRoleMemberCount(role)
    return roleMember;
}

// check you are member of role or not
module.exports.hasRole = async function hasRole(role, address){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER
    );
    const isMember = await erc20Instance.hasRole(role, address)
    return isMember;
}

// grant role to other by admin
module.exports.grantRole = async function grantRole(wallet, role, address) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi, 
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
        constants.ContractABIs.STABLECOIN.abi, 
        wallet
    );
    console.log(`Admin revoke ${address} role`);

    const tx = await erc20Instance.revokeRole(role, address);
    await waitForTx(constants.PROVIDER, tx.hash)
}

// pause transfer
module.exports.pause = async function pause(wallet) {
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi, 
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
        constants.ContractABIs.STABLECOIN.abi, 
        wallet
    );
    console.log(`Transfer have been unpaused`);

    const tx = await erc20Instance.unpause();
    await waitForTx(constants.PROVIDER, tx.hash)
}
