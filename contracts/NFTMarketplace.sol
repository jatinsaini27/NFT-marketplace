// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.20;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract NFTMarketplace is ERC721URIStorage{
   uint256 private _tokenIds;
   uint256 private _itemsSold;
   uint256 listingPrice = 0.0025 ether;

   address payable owner;
   mapping(uint256 => MarketItem) private idMarketItems;
   struct MarketItem{
    uint256 tokenID;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;

   }
   event idMarketItemCreated(
    uint256 indexed tokenID,
    address seller,
    address owner,
    uint256 price,
    bool  sold
   );
   modifier onlyOwner{
    require(msg.sender == owner,"Only owner of the marketplace");
    _;

   }
   constructor() ERC721("NFT Metarse Token","MYNFT")
   {
    owner = payable(msg.sender);
   }
   function updateListingPrice(uint256 _listingPrice) public payable onlyOwner{
   

   }
   function getListingPrice() public view returns(uint256){
    return listingPrice;
   }

   function createToken(string memory tokenURI, uint256 price) public payable returns(uint256){
    _tokenIds += 1;
    uint256 newTokenID = _tokenIds;
    _mint(msg.sender,newTokenID);
    _setTokenURI(newTokenID,tokenURI);
    createMarketItem(newTokenID,price);
    return newTokenID;


    
   }
   function createMarketItem(uint256 tokenId, uint256 price) private {
    require(price>0,"Price must be atleast 1");
    require(msg.value == listingPrice, "Price must be equal to listing price");
    idMarketItems[tokenId] = MarketItem(
        tokenId,
        payable(msg.sender),
        payable(address(this)),
        price,
        false
    );
    _transfer(msg.sender,address(this),tokenId);
    emit idMarketItemCreated(tokenId,msg.sender,address(this),price,false);
   }

   function resellToken(uint256 tokenId, uint256 price) public payable{
    require(idMarketItems[tokenId].owner == msg.sender,"You are not the owner of the token");
    idMarketItems[tokenId].sold == false;
    require(msg.value == listingPrice, "Price must be equal to listing price");
    idMarketItems[tokenId].price = price;
    idMarketItems[tokenId].seller = payable(msg.sender);
    idMarketItems[tokenId].owner = payable(address(this));
   _itemsSold -= 1;
    _transfer(msg.sender,address(this),tokenId);

   }

   function createMarketSale(uint256 tokenId) public payable{
    uint256 price = idMarketItems[tokenId].price;
    require(msg.value == price,"Price must be equal to the price of the item");
    idMarketItems[tokenId].owner = payable(msg.sender);
    idMarketItems[tokenId].sold = true;
    idMarketItems[tokenId].owner = payable(address(0));
    _itemsSold += 1;
    _transfer(address(this),msg.sender,tokenId);
    payable(owner).transfer(listingPrice);
    payable(idMarketItems[tokenId].seller).transfer(msg.value);

   }

   function fetchMarketItems() public view returns(MarketItem[] memory){
    uint256 itemCount = _tokenIds;
    uint256 unSoldItemCount = _tokenIds - _itemsSold;
    uint256 currentIndex = 0;
    MarketItem[] memory items = new MarketItem[](unSoldItemCount);
    for(uint256 i = 0; i < itemCount; i++){
        if(idMarketItems[i + 1].owner == address(this)){
            uint256 currentId = i + 1;
            MarketItem storage currentItem = idMarketItems[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
    }
    return items;
   }

   function fetchMyNFTs() public view returns(MarketItem[] memory){
    uint256 totalCount = _tokenIds;
    uint256 itemCount = 0;
    uint256 currentIndex = 0;
    for(uint256 i = 0; i < totalCount; i++){
        if(ownerOf(i + 1) == msg.sender){
            itemCount += 1;
        }
    }
    MarketItem[] memory items = new MarketItem[](itemCount);
    for(uint256 i = 0; i < totalCount; i++){
        if(ownerOf(i + 1) == msg.sender){
            uint256 currentId = i + 1;
            MarketItem storage currentItem = idMarketItems[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
    }
    return items;
   }

   function fetchItemsListed() public view returns(MarketItem[] memory){
    uint256 totalCount = _tokenIds;
    uint256 listedItemCount = _itemsSold;
    uint256 currentIndex = 0;
    for(uint256 i = 0; i < totalCount; i++){
        if(idMarketItems[i + 1].seller == msg.sender){
            listedItemCount += 1;
        }
    }
    MarketItem[] memory items = new MarketItem[](listedItemCount);
    for(uint256 i = 0; i < totalCount; i++){
        if(idMarketItems[i + 1].seller == msg.sender){
            uint256 currentId = i + 1;
            MarketItem storage currentItem = idMarketItems[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }
    }
    return items;
   }

   
}





