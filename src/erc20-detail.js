const ethers = require('ethers');
const constants = require('./constants');

// check contract decimal
module.exports.decimal = async function decimal(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER
    );
    const decimal = await erc20Instance.decimals();
    return decimal;
}

// check contract name
module.exports.name =  async function name(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER
    );
    const name = await erc20Instance.name();
    return name;
}

// check contract symbol
module.exports.symbol = async function symbol(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER
    );
    const symbol = await erc20Instance.symbol();
    return symbol;
}

// check contract status pause or not
module.exports.pauseStatus = async function pauseStatus(){
    const erc20Instance = new ethers.Contract(
        constants.ERC20_ADDRESS,
        constants.ContractABIs.STABLECOIN.abi,
        constants.PROVIDER
    );
    const pause = await erc20Instance.paused();
    return pause;
}