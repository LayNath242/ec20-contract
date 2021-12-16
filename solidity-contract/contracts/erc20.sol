// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

// contact source https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DigitalLearning is ERC20 {
    address public admin;

    // balance 100000 * 10^18 is standard decimals
    constructor() ERC20("Digital Learning", "DGL") {
        _mint(msg.sender, 100000 * (10**uint256(decimals())));
        admin = msg.sender;
    }

    // change owner of contact
    function updateAdmin(address newAdmin) external {
        require(msg.sender == admin, "only admin");
        admin = newAdmin;
    }

    // burn token by addmin
    function burn(address from, uint256 amount) external {
        require(msg.sender == admin, "only admin");
        _burn(from, amount);
    }

    // mint token by addmin
    function mint(address to, uint256 amount) external {
        require(msg.sender == admin, "only admin");
        _mint(to, amount);
    }
}
