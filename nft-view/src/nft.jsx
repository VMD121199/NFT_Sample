import React, { useCallback, useEffect, useRef, useState } from "react";
import IERC721 from "./contracts/NFT721.sol/NFT721.json";
import configData from "./config.json";
import Web3 from "web3";
const NFT721 = () => {
  const [isLoading, setIsLoading] = useState(false);

  const changeNetworkInMetamask = async (chainId) => {
    var params;
    switch (chainId) {
      case 97:
        params = [
          {
            chainId: "0x61",
            chainName: "BSC Testnet",
            nativeCurrency: {
              symbol: "BNB",
              decimals: 18,
            },
            rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
            blockExplorerUrls: ["https://testnet.bscscan.com"],
          },
        ];
        break;
    }
    if (window.ethereum) {
      await window.ethereum.enable();
      try {
        switch (chainId) {
          case 97:
            // check if the chain to connect to is installed
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x61" }], // chainId must be in hexadecimal numbers
            });
            break;
        }
      } catch (switchError) {
        if (switchError.code === 4902 || switchError.code === -32603) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: params,
            });
          } catch (addError) {
            console.error(addError);
          }
        }
      }
    } else {
      window.location.href =
        "https://metamask.app.link/dapp/" + configData.path_dapp;
      // handleOpenMetaMaskWarning()
      // if no window.ethereum then MetaMask is not installed
      // alert('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
    }
  };

  const connectMetamask = async () => {
    setIsLoading(true);
    console.log("connectMetamask", true);
    if (window.ethereum) {
      try {
        window.web3 = new Web3(window.ethereum);
        const { eth, utils } = window.web3;
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        let networkId = await window.ethereum.request({
          method: "eth_chainId",
        });
        networkId = await utils.hexToNumberString(networkId);
        if (accounts[0]) {
          await changeNetworkInMetamask(configData.networkId);
        }
        localStorage.setItem("account", JSON.stringify(accounts[0]));
      } catch (error) {
        if (error.code === 4001) {
          setIsLoading(false);
        }
      }
    } else {
      window.location.href =
        "https://metamask.app.link/dapp/" + configData.path_dapp;
      // handleOpenMetaMaskWarning()
    }
    setIsLoading(false);
  };
};

export default NFT721;
