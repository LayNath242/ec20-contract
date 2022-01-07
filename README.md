# erc20-contract

## Requirement
- First choose your blockchain that you want to deploy your smart contract
- To deploy smart contract to blockchain you need some coin of blockchain you choose (eth, bnb, etc, ...)
**Note**: This is Ethereum testnet [faucet](https://faucet.dimensions.network) use to test 
- Create .env file and input as .evn.example
- run 
``sh
    ./init.sh
``

### Work with contract
- Generate mnemonic or use your exit mnemonic
- Generate private key from mnemonic
- Deploy your smart contract to blockchain after deploy put your contact address to .env file
**Note**: You have to sure your account have balance.
- Call contract funtion (checkBalance, transfer, etc,...) see [example](https://github.com/LayNath242/ec20-contract/tree/main/example/example.js) more [function](https://github.com/LayNath242/ec20-contract/blob/main/src/erc20.js)
