/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFT721, NFT721Interface } from "../../contracts/NFT721";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "createNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040805180820182526006815265135e4813919560d21b60208083019182528351808501909452600384526213919560ea1b9084015281519192916200005b91600091620000ea565b50805162000071906001906020840190620000ea565b5050506200008e620000886200009460201b60201c565b62000098565b620001cd565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000f89062000190565b90600052602060002090601f0160209004810192826200011c576000855562000167565b82601f106200013757805160ff191683800117855562000167565b8280016001018555821562000167579182015b82811115620001675782518255916020019190600101906200014a565b506200017592915062000179565b5090565b5b808211156200017557600081556001016200017a565b600181811c90821680620001a557607f821691505b60208210811415620001c757634e487b7160e01b600052602260045260246000fd5b50919050565b61193a80620001dd6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde1461021b578063c87b56dd1461022e578063da2ed03e14610241578063e985e9c514610254578063f2fde38b1461029057600080fd5b8063715018a6146101e75780638da5cb5b146101ef57806395d89b4114610200578063a22cb4651461020857600080fd5b806323b872dd116100de57806323b872dd1461018d57806342842e0e146101a05780636352211e146101b357806370a08231146101c657600080fd5b806301ffc9a71461011057806306fdde0314610138578063081812fc1461014d578063095ea7b314610178575b600080fd5b61012361011e3660046115aa565b6102a3565b60405190151581526020015b60405180910390f35b6101406102f5565b60405161012f9190611707565b61016061015b366004611656565b610387565b6040516001600160a01b03909116815260200161012f565b61018b610186366004611580565b610414565b005b61018b61019b36600461142c565b61052a565b61018b6101ae36600461142c565b61055b565b6101606101c1366004611656565b610576565b6101d96101d43660046113de565b6105ed565b60405190815260200161012f565b61018b610674565b6007546001600160a01b0316610160565b6101406106da565b61018b610216366004611544565b6106e9565b61018b610229366004611468565b6106f8565b61014061023c366004611656565b610730565b61018b61024f3660046115e4565b6108a7565b6101236102623660046113f9565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61018b61029e3660046113de565b61090c565b60006001600160e01b031982166380ac58cd60e01b14806102d457506001600160e01b03198216635b5e139f60e01b145b806102ef57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546103049061182c565b80601f01602080910402602001604051908101604052809291908181526020018280546103309061182c565b801561037d5780601f106103525761010080835404028352916020019161037d565b820191906000526020600020905b81548152906001019060200180831161036057829003601f168201915b5050505050905090565b6000610392826109d7565b6103f85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061041f82610576565b9050806001600160a01b0316836001600160a01b0316141561048d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016103ef565b336001600160a01b03821614806104a957506104a98133610262565b61051b5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016103ef565b61052583836109f4565b505050565b6105343382610a62565b6105505760405162461bcd60e51b81526004016103ef9061176c565b610525838383610b4b565b610525838383604051806020016040528060008152506106f8565b6000818152600260205260408120546001600160a01b0316806102ef5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016103ef565b60006001600160a01b0382166106585760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016103ef565b506001600160a01b031660009081526003602052604090205490565b6007546001600160a01b031633146106ce5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103ef565b6106d86000610ce7565b565b6060600180546103049061182c565b6106f4338383610d39565b5050565b6107023383610a62565b61071e5760405162461bcd60e51b81526004016103ef9061176c565b61072a84848484610e08565b50505050565b606061073b826109d7565b6107a15760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b60648201526084016103ef565b600082815260066020526040812080546107ba9061182c565b80601f01602080910402602001604051908101604052809291908181526020018280546107e69061182c565b80156108335780601f1061080857610100808354040283529160200191610833565b820191906000526020600020905b81548152906001019060200180831161081657829003601f168201915b50505050509050600061085160408051602081019091526000815290565b9050805160001415610864575092915050565b81511561089657808260405160200161087e92919061169b565b60405160208183030381529060405292505050919050565b61089f84610e3b565b949350505050565b60006108b260085490565b90506108be3382610f13565b6108fe8184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610f2d92505050565b610525600880546001019055565b6007546001600160a01b031633146109665760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103ef565b6001600160a01b0381166109cb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103ef565b6109d481610ce7565b50565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610a2982610576565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610a6d826109d7565b610ace5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103ef565b6000610ad983610576565b9050806001600160a01b0316846001600160a01b03161480610b2057506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061089f5750836001600160a01b0316610b3984610387565b6001600160a01b031614949350505050565b826001600160a01b0316610b5e82610576565b6001600160a01b031614610bc25760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016103ef565b6001600160a01b038216610c245760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103ef565b610c2f6000826109f4565b6001600160a01b0383166000908152600360205260408120805460019290610c589084906117e9565b90915550506001600160a01b0382166000908152600360205260408120805460019290610c869084906117bd565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415610d9b5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103ef565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e13848484610b4b565b610e1f84848484610fb8565b61072a5760405162461bcd60e51b81526004016103ef9061171a565b6060610e46826109d7565b610eaa5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016103ef565b6000610ec160408051602081019091526000815290565b90506000815111610ee15760405180602001604052806000815250610f0c565b80610eeb846110c5565b604051602001610efc92919061169b565b6040516020818303038152906040525b9392505050565b6106f48282604051806020016040528060008152506111c3565b610f36826109d7565b610f995760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016103ef565b6000828152600660209081526040909120825161052592840190611329565b60006001600160a01b0384163b156110ba57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610ffc9033908990889088906004016116ca565b602060405180830381600087803b15801561101657600080fd5b505af1925050508015611046575060408051601f3d908101601f19168201909252611043918101906115c7565b60015b6110a0573d808015611074576040519150601f19603f3d011682016040523d82523d6000602084013e611079565b606091505b5080516110985760405162461bcd60e51b81526004016103ef9061171a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061089f565b506001949350505050565b6060816110e95750506040805180820190915260018152600360fc1b602082015290565b8160005b811561111357806110fd81611867565b915061110c9050600a836117d5565b91506110ed565b60008167ffffffffffffffff81111561112e5761112e6118d8565b6040519080825280601f01601f191660200182016040528015611158576020820181803683370190505b5090505b841561089f5761116d6001836117e9565b915061117a600a86611882565b6111859060306117bd565b60f81b81838151811061119a5761119a6118c2565b60200101906001600160f81b031916908160001a9053506111bc600a866117d5565b945061115c565b6111cd83836111f6565b6111da6000848484610fb8565b6105255760405162461bcd60e51b81526004016103ef9061171a565b6001600160a01b03821661124c5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103ef565b611255816109d7565b156112a25760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103ef565b6001600160a01b03821660009081526003602052604081208054600192906112cb9084906117bd565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b8280546113359061182c565b90600052602060002090601f016020900481019282611357576000855561139d565b82601f1061137057805160ff191683800117855561139d565b8280016001018555821561139d579182015b8281111561139d578251825591602001919060010190611382565b506113a99291506113ad565b5090565b5b808211156113a957600081556001016113ae565b80356001600160a01b03811681146113d957600080fd5b919050565b6000602082840312156113f057600080fd5b610f0c826113c2565b6000806040838503121561140c57600080fd5b611415836113c2565b9150611423602084016113c2565b90509250929050565b60008060006060848603121561144157600080fd5b61144a846113c2565b9250611458602085016113c2565b9150604084013590509250925092565b6000806000806080858703121561147e57600080fd5b611487856113c2565b9350611495602086016113c2565b925060408501359150606085013567ffffffffffffffff808211156114b957600080fd5b818701915087601f8301126114cd57600080fd5b8135818111156114df576114df6118d8565b604051601f8201601f19908116603f01168101908382118183101715611507576115076118d8565b816040528281528a602084870101111561152057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561155757600080fd5b611560836113c2565b91506020830135801515811461157557600080fd5b809150509250929050565b6000806040838503121561159357600080fd5b61159c836113c2565b946020939093013593505050565b6000602082840312156115bc57600080fd5b8135610f0c816118ee565b6000602082840312156115d957600080fd5b8151610f0c816118ee565b600080602083850312156115f757600080fd5b823567ffffffffffffffff8082111561160f57600080fd5b818501915085601f83011261162357600080fd5b81358181111561163257600080fd5b86602082850101111561164457600080fd5b60209290920196919550909350505050565b60006020828403121561166857600080fd5b5035919050565b60008151808452611687816020860160208601611800565b601f01601f19169290920160200192915050565b600083516116ad818460208801611800565b8351908301906116c1818360208801611800565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906116fd9083018461166f565b9695505050505050565b602081526000610f0c602083018461166f565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b600082198211156117d0576117d0611896565b500190565b6000826117e4576117e46118ac565b500490565b6000828210156117fb576117fb611896565b500390565b60005b8381101561181b578181015183820152602001611803565b8381111561072a5750506000910152565b600181811c9082168061184057607f821691505b6020821081141561186157634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561187b5761187b611896565b5060010190565b600082611891576118916118ac565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146109d457600080fdfea2646970667358221220e12b516809973d9670bf0748d2dbaf6ff4c0a14f1373af01d7f50a150bab7dec64736f6c63430008060033";

type NFT721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFT721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFT721__factory extends ContractFactory {
  constructor(...args: NFT721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFT721> {
    return super.deploy(overrides || {}) as Promise<NFT721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFT721 {
    return super.attach(address) as NFT721;
  }
  override connect(signer: Signer): NFT721__factory {
    return super.connect(signer) as NFT721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFT721Interface {
    return new utils.Interface(_abi) as NFT721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFT721 {
    return new Contract(address, _abi, signerOrProvider) as NFT721;
  }
}