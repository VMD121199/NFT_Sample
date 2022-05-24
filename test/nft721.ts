import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { NFT721 } from "../typechain-types";

describe("NFT721", () => {
  let [admin, user1]: SignerWithAddress[] = [];
  let nft721: NFT721;
  beforeEach(async () => {
    [admin, user1] = await ethers.getSigners();
    const nft = await ethers.getContractFactory("NFT721");
    nft721 = (await nft.deploy()) as NFT721;
    await nft721.deployed();
  });

  describe("create nft", () => {
    it("should be success", async () => {
      let uri =
        "https://gateway.pinata.cloud/ipfs/QmdHgdy2sZ6wCVjtXUfLjW6S6LdmZWeWxdn1RtVeWHGcup";

      await expect(await nft721.connect(user1).createNFT(uri));
      await expect(
        await (await nft721.balanceOf(user1.address)).toString()
      ).to.be.equal("1");
    });
  });
});
