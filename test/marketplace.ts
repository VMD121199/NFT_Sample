import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, assert, Assertion } from "chai";
import { ethers } from "hardhat";
import { NFT721, Marketplace } from "../typechain-types";

describe("NFT721", () => {
  let [admin, user1]: SignerWithAddress[] = [];
  let nft721: NFT721;
  let nft721b: NFT721;
  let marketplace: Marketplace;
  beforeEach(async () => {
    [admin, user1] = await ethers.getSigners();
    const nft = await ethers.getContractFactory("NFT721");
    nft721 = (await nft.deploy()) as NFT721;
    await nft721.deployed();

    nft721b = (await nft.deploy()) as NFT721;
    await nft721b.deployed();

    var marketplaceFactory = await ethers.getContractFactory("Marketplace");
    marketplace = (await marketplaceFactory.deploy(
      nft721.address
    )) as Marketplace;
    await marketplace.deployed();
  });

  describe("marketplace", () => {
    beforeEach(async () => {
      let uri =
        "https://gateway.pinata.cloud/ipfs/QmdHgdy2sZ6wCVjtXUfLjW6S6LdmZWeWxdn1RtVeWHGcup";

      console.log(marketplace.address);
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
      await marketplace
        .connect(admin)
        .buyItem(0, { value: (await marketplace.getMarketItem(0)).price });
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
      await marketplace
        .connect(admin)
        .buyItem(0, { value: (await marketplace.getMarketItem(0)).price });
      await expect(
        await (
          await marketplace.getMarketItem(0)
        ).buyer
      ).to.be.equal(admin.address);
      await expect(
        marketplace
          .connect(admin)
          .buyItem(0, { value: (await marketplace.getMarketItem(0)).price })
      ).to.be.revertedWith("Item has been sold");
    });

    it("Can't buy item that canceled", async () => {
      await marketplace.connect(user1).cancelSell(0);
      await expect(
        marketplace
          .connect(admin)
          .buyItem(0, { value: (await marketplace.getMarketItem(0)).price })
      ).to.be.revertedWith("Item has been canceled");
    });

    it("Can't buy item", async () => {
      await expect(
        marketplace
          .connect(user1)
          .buyItem(0, { value: (await marketplace.getMarketItem(0)).price })
      ).to.be.revertedWith("Can't buy from yourself");
    });
  });
});
