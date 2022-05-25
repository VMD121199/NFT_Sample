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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "addressToTokens",
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
    inputs: [],
    name: "getMyNFTs",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
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
  "0x60806040523480156200001157600080fd5b506040805180820182526006815265135e4813919560d21b60208083019182528351808501909452600384526213919560ea1b9084015281519192916200005b91600091620000ea565b50805162000071906001906020840190620000ea565b5050506200008e620000886200009460201b60201c565b62000098565b620001cd565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000f89062000190565b90600052602060002090601f0160209004810192826200011c576000855562000167565b82601f106200013757805160ff191683800117855562000167565b8280016001018555821562000167579182015b82811115620001675782518255916020019190600101906200014a565b506200017592915062000179565b5090565b5b808211156200017557600081556001016200017a565b600181811c90821680620001a557607f821691505b60208210811415620001c757634e487b7160e01b600052602260045260246000fd5b50919050565b611a6f80620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c8063715018a6116100ad578063b88d4fde11610071578063b88d4fde14610259578063c87b56dd1461026c578063da2ed03e1461027f578063e985e9c514610292578063f2fde38b146102ce57600080fd5b8063715018a6146102125780638714a76a1461021a5780638da5cb5b1461022d57806395d89b411461023e578063a22cb4651461024657600080fd5b806323b872dd116100f457806323b872dd146101a357806342842e0e146101b6578063629cb2e4146101c95780636352211e146101de57806370a08231146101f157600080fd5b806301ffc9a71461012657806306fdde031461014e578063081812fc14610163578063095ea7b31461018e575b600080fd5b61013961013436600461169b565b6102e1565b60405190151581526020015b60405180910390f35b610156610333565b604051610145919061183c565b610176610171366004611747565b6103c5565b6040516001600160a01b039091168152602001610145565b6101a161019c366004611671565b610452565b005b6101a16101b136600461151d565b610568565b6101a16101c436600461151d565b610599565b6101d16105b4565b60405161014591906117f8565b6101766101ec366004611747565b610614565b6102046101ff3660046114cf565b61068b565b604051908152602001610145565b6101a1610712565b610204610228366004611671565b610778565b6007546001600160a01b0316610176565b6101566107a9565b6101a1610254366004611635565b6107b8565b6101a1610267366004611559565b6107c7565b61015661027a366004611747565b6107ff565b6101a161028d3660046116d5565b610976565b6101396102a03660046114ea565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101a16102dc3660046114cf565b6109fd565b60006001600160e01b031982166380ac58cd60e01b148061031257506001600160e01b03198216635b5e139f60e01b145b8061032d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461034290611961565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90611961565b80156103bb5780601f10610390576101008083540402835291602001916103bb565b820191906000526020600020905b81548152906001019060200180831161039e57829003601f168201915b5050505050905090565b60006103d082610ac8565b6104365760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061045d82610614565b9050806001600160a01b0316836001600160a01b031614156104cb5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161042d565b336001600160a01b03821614806104e757506104e781336102a0565b6105595760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161042d565b6105638383610ae5565b505050565b6105723382610b53565b61058e5760405162461bcd60e51b815260040161042d906118a1565b610563838383610c3c565b610563838383604051806020016040528060008152506107c7565b336000908152600960209081526040918290208054835181840281018401909452808452606093928301828280156103bb57602002820191906000526020600020905b8154815260200190600101908083116105f7575050505050905090565b6000818152600260205260408120546001600160a01b03168061032d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161042d565b60006001600160a01b0382166106f65760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161042d565b506001600160a01b031660009081526003602052604090205490565b6007546001600160a01b0316331461076c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161042d565b6107766000610dd8565b565b6009602052816000526040600020818154811061079457600080fd5b90600052602060002001600091509150505481565b60606001805461034290611961565b6107c3338383610e2a565b5050565b6107d13383610b53565b6107ed5760405162461bcd60e51b815260040161042d906118a1565b6107f984848484610ef9565b50505050565b606061080a82610ac8565b6108705760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f72206044820152703737b732bc34b9ba32b73a103a37b5b2b760791b606482015260840161042d565b6000828152600660205260408120805461088990611961565b80601f01602080910402602001604051908101604052809291908181526020018280546108b590611961565b80156109025780601f106108d757610100808354040283529160200191610902565b820191906000526020600020905b8154815290600101906020018083116108e557829003601f168201915b50505050509050600061092060408051602081019091526000815290565b9050805160001415610933575092915050565b81511561096557808260405160200161094d92919061178c565b60405160208183030381529060405292505050919050565b61096e84610f2c565b949350505050565b600061098160085490565b905061098d3382611004565b6109cd8184848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061101e92505050565b33600090815260096020908152604082208054600181018255908352912001819055610563600880546001019055565b6007546001600160a01b03163314610a575760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161042d565b6001600160a01b038116610abc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161042d565b610ac581610dd8565b50565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610b1a82610614565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610b5e82610ac8565b610bbf5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161042d565b6000610bca83610614565b9050806001600160a01b0316846001600160a01b03161480610c1157506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061096e5750836001600160a01b0316610c2a846103c5565b6001600160a01b031614949350505050565b826001600160a01b0316610c4f82610614565b6001600160a01b031614610cb35760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161042d565b6001600160a01b038216610d155760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161042d565b610d20600082610ae5565b6001600160a01b0383166000908152600360205260408120805460019290610d4990849061191e565b90915550506001600160a01b0382166000908152600360205260408120805460019290610d779084906118f2565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415610e8c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161042d565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610f04848484610c3c565b610f10848484846110a9565b6107f95760405162461bcd60e51b815260040161042d9061184f565b6060610f3782610ac8565b610f9b5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161042d565b6000610fb260408051602081019091526000815290565b90506000815111610fd25760405180602001604052806000815250610ffd565b80610fdc846111b6565b604051602001610fed92919061178c565b6040516020818303038152906040525b9392505050565b6107c38282604051806020016040528060008152506112b4565b61102782610ac8565b61108a5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b606482015260840161042d565b600082815260066020908152604090912082516105639284019061141a565b60006001600160a01b0384163b156111ab57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906110ed9033908990889088906004016117bb565b602060405180830381600087803b15801561110757600080fd5b505af1925050508015611137575060408051601f3d908101601f19168201909252611134918101906116b8565b60015b611191573d808015611165576040519150601f19603f3d011682016040523d82523d6000602084013e61116a565b606091505b5080516111895760405162461bcd60e51b815260040161042d9061184f565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061096e565b506001949350505050565b6060816111da5750506040805180820190915260018152600360fc1b602082015290565b8160005b811561120457806111ee8161199c565b91506111fd9050600a8361190a565b91506111de565b60008167ffffffffffffffff81111561121f5761121f611a0d565b6040519080825280601f01601f191660200182016040528015611249576020820181803683370190505b5090505b841561096e5761125e60018361191e565b915061126b600a866119b7565b6112769060306118f2565b60f81b81838151811061128b5761128b6119f7565b60200101906001600160f81b031916908160001a9053506112ad600a8661190a565b945061124d565b6112be83836112e7565b6112cb60008484846110a9565b6105635760405162461bcd60e51b815260040161042d9061184f565b6001600160a01b03821661133d5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161042d565b61134681610ac8565b156113935760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161042d565b6001600160a01b03821660009081526003602052604081208054600192906113bc9084906118f2565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461142690611961565b90600052602060002090601f016020900481019282611448576000855561148e565b82601f1061146157805160ff191683800117855561148e565b8280016001018555821561148e579182015b8281111561148e578251825591602001919060010190611473565b5061149a92915061149e565b5090565b5b8082111561149a576000815560010161149f565b80356001600160a01b03811681146114ca57600080fd5b919050565b6000602082840312156114e157600080fd5b610ffd826114b3565b600080604083850312156114fd57600080fd5b611506836114b3565b9150611514602084016114b3565b90509250929050565b60008060006060848603121561153257600080fd5b61153b846114b3565b9250611549602085016114b3565b9150604084013590509250925092565b6000806000806080858703121561156f57600080fd5b611578856114b3565b9350611586602086016114b3565b925060408501359150606085013567ffffffffffffffff808211156115aa57600080fd5b818701915087601f8301126115be57600080fd5b8135818111156115d0576115d0611a0d565b604051601f8201601f19908116603f011681019083821181831017156115f8576115f8611a0d565b816040528281528a602084870101111561161157600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561164857600080fd5b611651836114b3565b91506020830135801515811461166657600080fd5b809150509250929050565b6000806040838503121561168457600080fd5b61168d836114b3565b946020939093013593505050565b6000602082840312156116ad57600080fd5b8135610ffd81611a23565b6000602082840312156116ca57600080fd5b8151610ffd81611a23565b600080602083850312156116e857600080fd5b823567ffffffffffffffff8082111561170057600080fd5b818501915085601f83011261171457600080fd5b81358181111561172357600080fd5b86602082850101111561173557600080fd5b60209290920196919550909350505050565b60006020828403121561175957600080fd5b5035919050565b60008151808452611778816020860160208601611935565b601f01601f19169290920160200192915050565b6000835161179e818460208801611935565b8351908301906117b2818360208801611935565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906117ee90830184611760565b9695505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561183057835183529284019291840191600101611814565b50909695505050505050565b602081526000610ffd6020830184611760565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611905576119056119cb565b500190565b600082611919576119196119e1565b500490565b600082821015611930576119306119cb565b500390565b60005b83811015611950578181015183820152602001611938565b838111156107f95750506000910152565b600181811c9082168061197557607f821691505b6020821081141561199657634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156119b0576119b06119cb565b5060010190565b6000826119c6576119c66119e1565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610ac557600080fdfea264697066735822122027c45b5d24b1aeb13fb045466fcebc590e0cd91ff30dca63b23d9fe590a6929964736f6c63430008060033";

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
