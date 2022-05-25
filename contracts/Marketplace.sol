pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Marketplace is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;
    mapping(address => bool) private allowedNFT;
    mapping(uint256 => MarketItem) public marketItem;

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
    event CancelSell(address _seller, uint256 _itemId);

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
        allowedNFT[_allowedNFT] = true;
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
        require(
            IERC721(_nftAddress).ownerOf(_tokenId) == msg.sender,
            "Only token owner"
        );
        uint256 itemId = _itemIds.current();
        marketItem[itemId] = MarketItem(
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

    function buyItem(uint256 _itemId) external payable {
        MarketItem storage mki = marketItem[_itemId];
        require(msg.sender.balance >= mki.price, "Insufficient balance");
        require(msg.value >= mki.price, "Not enough to pay");
        require(!mki.sold, "Item has been sold");
        require(!mki.isCanceled, "Item has been canceled");
        require(mki.seller != msg.sender, "Can't buy from yourself");

        payable(mki.seller).transfer(mki.price);
        IERC721(mki.nftAddress).transferFrom(
            address(this),
            msg.sender,
            mki.tokenId
        );
        mki.buyer = msg.sender;
        mki.sold = true;
        mki.timeSold = block.timestamp;
        _itemsSold.increment();
        emit BuyItem(
            mki.nftAddress,
            mki.tokenId,
            mki.price,
            mki.seller,
            mki.buyer
        );
    }

    function cancelSell(uint256 _itemId) external {
        MarketItem storage mki = marketItem[_itemId];
        require(!mki.sold, "Item has been sold");
        require(!mki.isCanceled, "Item has been cancel");
        require(mki.seller == msg.sender, "Forbiden");

        mki.isCanceled = true;

        IERC721(mki.nftAddress).transferFrom(
            address(this),
            msg.sender,
            mki.tokenId
        );
        emit CancelSell(msg.sender, mki.itemId);
    }

    function getMarketItems() external view returns (MarketItem[] memory) {
        uint256 itemCount = _itemIds.current();
        uint256 unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;
        MarketItem[] memory items = new MarketItem[](unsoldItemCount);

        for (uint256 i = 0; i < itemCount; i++) {
            if (marketItem[i].buyer == address(0)) {
                MarketItem storage currentItem = marketItem[i];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function getMarketItem(uint256 itemId)
        external
        view
        returns (MarketItem memory)
    {
        return marketItem[itemId];
    }
}
