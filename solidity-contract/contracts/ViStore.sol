// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./ERC20/ERC20PresetMinterPauser.sol";

contract VIStore is ERC20PresetMinterPauser {

    /**
     * @dev Allows overriding the name, symbol & decimal of the base ERC20 contract
     */
    constructor(string memory name, string memory symbol, uint8 decimals) public ERC20PresetMinterPauser(name, symbol) {
    }
}