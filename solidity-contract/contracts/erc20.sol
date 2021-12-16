// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

// contact source https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DigitalLearning is ERC20 {
    address public admin;

   constructor() ERC20("Digital Learning", "DGL") {
        _mint(msg.sender, 100000 * (10**uint256(decimals())));
        admin = msg.sender;
    }

    function updateAdmin(address newAdmin) external {
        require(msg.sender == admin, "only admin");
        admin = newAdmin;
    }

     function burn(address owner, uint256 amount) external {
        require(msg.sender == admin, "only admin");
        _burn(owner, amount);
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == admin, "only admin");
        _mint(to, amount);
    }
}
