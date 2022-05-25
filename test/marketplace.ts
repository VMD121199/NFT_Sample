import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, assert, Assertion } from "chai";
import { ethers } from "hardhat";
import { NFT721, Marketplace, ERC20 } from "../typechain-types";

describe("NFT721", () => {
  let [admin, user1]: SignerWithAddress[] = [];
  let nft721: NFT721;
  let nft721b: NFT721;
  let token: ERC20;
  let marketplace: Marketplace;
  let uri =
    "https://gateway.pinata.cloud/ipfs/QmdHgdy2sZ6wCVjtXUfLjW6S6LdmZWeWxdn1RtVeWHGcup";
  let max_int256 =
    "115792089237316195423570985008687907853269984665640564039457584007913129639935";
  beforeEach(async () => {
    [admin, user1] = await ethers.getSigners();
    const nft = await ethers.getContractFactory("NFT721");
    nft721 = (await nft.deploy()) as NFT721;
    await nft721.deployed();

    nft721b = (await nft.deploy()) as NFT721;
    await nft721b.deployed();

    const erc20 = await ethers.getContractFactory("Token");
    token = (await erc20.deploy()) as ERC20;
    await token.deployed();

    var marketplaceFactory = await ethers.getContractFactory("Marketplace");
    marketplace = (await marketplaceFactory.deploy(
      nft721.address,
      token.address
    )) as Marketplace;
    await marketplace.deployed();

    await token
      .connect(admin)
      .transfer(user1.address, ethers.utils.parseEther("1000"));
  });

  describe("marketplace", () => {
    beforeEach(async () => {
      await expect(await nft721.connect(user1).createNFT(uri));
      await nft721.connect(user1).approve(marketplace.address, 0);
      await marketplace
        .connect(user1)
        .createMarketItem(nft721.address, 0, 1000);
    });
    it("Create new Item sale", async () => {
      await expect((await marketplace.getMarketItems()).length).to.be.equal(1);
    });

    it("Buy success", async () => {
      await token.connect(admin).approve(marketplace.address, max_int256);
      await marketplace.connect(admin).buyItem(0);
      await expect(
        await (
          await marketplace.getMarketItem(0)
        ).buyer
      ).to.be.equal(admin.address);
    });

    it("Cancel Sell", async () => {
      await marketplace.connect(user1).cancelSell(0);
      await expect(
        await (
          await marketplace.getMarketItem(0)
        ).isCanceled
      ).to.be.equal(true);
    });

    it("Can't buy item that sold", async () => {
      await token.connect(admin).approve(marketplace.address, max_int256);
      await marketplace.connect(admin).buyItem(0);
      await expect(
        await (
          await marketplace.getMarketItem(0)
        ).buyer
      ).to.be.equal(admin.address);
      await expect(marketplace.connect(admin).buyItem(0)).to.be.revertedWith(
        "Item has been sold"
      );
    });

    it("Can't buy item that canceled", async () => {
      await token.connect(admin).approve(marketplace.address, max_int256);
      await marketplace.connect(user1).cancelSell(0);
      await expect(marketplace.connect(admin).buyItem(0)).to.be.revertedWith(
        "Item has been canceled"
      );
    });

    it("Can't buy item", async () => {
      await token.connect(user1).approve(marketplace.address, max_int256);
      await expect(marketplace.connect(user1).buyItem(0)).to.be.revertedWith(
        "Can't buy from yourself"
      );
    });

    it("Only token owner can create item", async () => {
      await await nft721.connect(user1).createNFT(uri);
      await expect(
        marketplace.connect(admin).createMarketItem(nft721.address, 1, 1000)
      ).to.be.revertedWith("Only token owner");
    });

    it("nonexistent token", async () => {
      await expect(
        marketplace.connect(admin).createMarketItem(nft721.address, 2, 1000)
      ).to.be.revertedWith("ERC721: owner query for nonexistent token");
    });
  });
});
