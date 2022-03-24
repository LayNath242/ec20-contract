const api = require('../src/api');
const constants = require("../src/constants")

//get wallet to use for deploy and call function
const wallet = api.utils.wallet(constants.privateKey);

// // deploy your smart contract
// api.erc20.deploy(wallet, "Luy SableCoin", "luy")
//   .then((address) => { console.log(`✓ ERC20 contract deployed at Address ${address}`)});

// check your balance in contract
api.erc20.checkBalance("0x34cF5F9c6AaD6207051C1e19a29cb081C24f8352").then()
  .then((balance) => { console.log(`balance: ${balance}`)});

//mint your balance. make sure your are minter (deloyer contract are admin and have all permission)
// api.erc20.mint(wallet, wallet.address, 1000000)

// // transfer balance 
// api.erc20.transfer(wallet, "0x34cF5F9c6AaD6207051C1e19a29cb081C24f8352", 10)