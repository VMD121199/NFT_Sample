pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT721 is ERC721URIStorage, Ownable {
    
    constructor(string _name, string _symbol) ERC721(_name, _symbol);

    function createNFT(string _uri) external {
        _safeMint(msg.sender, _idToken);
        _setTokenURI(_idToken, tokenURI);
    }
}
