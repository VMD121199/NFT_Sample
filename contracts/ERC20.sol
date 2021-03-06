pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("Token ERC20", "E20") {
        _mint(msg.sender, 10 * 10**9 * 10**18);
    }
}
