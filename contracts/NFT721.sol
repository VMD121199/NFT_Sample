pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT721 is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;

    constructor() ERC721("My NFT", "NFT") {}

    function createNFT(string calldata _uri) external {
        uint256 tokenId = _itemIds.current();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _uri);
        _itemIds.increment();
    }

    function getTotalNFT() external view returns (uint256) {
        return _itemIds.current();
    }
}
