/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

const {
  INFURA_KEY,
  DEPLOYER_PRIVATE_KEY,
  ETHERSCAN_KEY,
  POLYGON_KEY_MUMBAI
} = process.env

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
    },
    // gpextest: {
    //   url: `https://testnet.rpc.gb.gpexdev.com`,
    //   accounts: [`${DEPLOYER_PRIVATE_KEY}`]
    // },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_KEY,
      sepolia: ETHERSCAN_KEY,
      // polygon
      polygon: POLYGON_KEY_MUMBAI,
      // mumbai: POLYGON_KEY_MUMBAI,
      polygonMumbai: POLYGON_KEY_MUMBAI,
      // gpextest: ETHERSCAN_KEY_GOERLI
    }
  }
};
