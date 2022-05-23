pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Marketplace is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    mapping(address => bool) private allowedNFT;
    mapping(uint256 => MarketItem) public martketItem;

    event CreateItemSale(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _tokenPrice,
        address _seller
    );
    event BuyItem(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _tokenPrice,
        address _seller,
        address _buyer
    );
    event CancelSell(address _nftAddress, uint256 _tokenId);

    struct MarketItem {
        uint256 itemId;
        address nftAddress;
        uint256 tokenId;
        address seller;
        address buyer;
        uint256 price;
        bool sold;
        bool isCanceled;
        uint256 timeCreated;
        uint256 timeSold;
    }

    constructor(address _allowedNFT) {
        allowedNFT[_allowedNFT];
    }

    function setAllowedNFT(address _nftAddress, bool _license)
        external
        onlyOwner
    {
        allowedNFT[_nftAddress] = _license;
    }

    function createMarketItem(
        address _nftAddress,
        uint256 _tokenId,
        uint256 _price
    ) external {
        require(allowedNFT[_nftAddress], "Only allowed NFT");
        uint256 itemId = _itemIds.current();
        martketItem[itemId] = (
            itemId,
            _nftAddress,
            _tokenId,
            msg.sender,
            address(0),
            _price,
            false,
            false,
            block.timestamp,
            0
        );
        IERC721(_nftAddress).transferFrom(msg.sender, address(this), _tokenId);
        _itemIds.increment();
        emit CreateItemSale(_nftAddress, _tokenId, _price, msg.sender);
    }
}
