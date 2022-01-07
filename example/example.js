const api = require('../src/api');

// generate mnemonic
const mnemonic = api.utils.generateMnemonic();

//generate private key
const privatekey = api.utils.generatePrivateKey(mnemonic);

//get wallet to use for deploy and call function
const wallet = api.utils.wallet(privatekey);

// deploy your smart contract
api.erc20.deploy(wallet, "selendra", "sel")
  .then((address) => { console.log(`✓ ERC20 contract deployed at Address ${address}`)});

// check your balance in contract
api.erc20.checkBalance(wallet.address).then()
  .then((balance) => { console.log(`balance: ${balance}`)});

//mint your balance. make sure your are minter (deloyer contract are admin and have all permission)
api.erc20.mint(wallet, wallet.address, 10000000)

// transfer balance 
api.erc20.transfer(wallet, "0x5b3F084Dd296DBda4a655E83Fc84d39C2b5a5C09", 100000)