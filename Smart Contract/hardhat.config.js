require("dotenv").config();

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      blockGasLimit: 12500000,
      gasPrice: 8000000000
    },
    goerli: {
      url: process.env.GOERLI_URL,
      accounts:
      process.env.GOERLI_PRIVATE_KEY !== undefined ? [process.env.GOERLI_PRIVATE_KEY] : [],
    },
    mainnet: {
      url: process.env.MAINNET_URL,
      accounts:
      process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
    // apiKey: {
    //   goerli: process.env.ETHERSCAN_API_KEY,
    //   mainnet: process.env.ETHERSCAN_API_KEY,
    // },
    // customChains: [
    //   {
    //     network: "goerli",
    //     chainId: 5,
    //     urls: {
    //       apiURL: "https://api-goerli.etherscan.io/api",
    //       browserURL: "https://goerli.etherscan.io"
    //     }
    //   }
    // ]
  }
};
