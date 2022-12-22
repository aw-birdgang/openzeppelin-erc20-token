/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

const {
  INFURA_KEY,
  DEPLOYER_PRIVATE_KEY,
  ETHERSCAN_KEY_RINKEBY,
  ETHERSCAN_KEY_GOERLI,
  POLYGON_KEY_MUMBAI
} = process.env

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_KEY}`,
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
    wemixtest: {
      url: `https://api.test.wemix.com/`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`]
    },
    gpextest: {
      url: `https://testnet.rpc.gb.gpexdev.com`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: ETHERSCAN_KEY_RINKEBY,
      goerli: ETHERSCAN_KEY_GOERLI,
      // polygon
      polygon: POLYGON_KEY_MUMBAI,
      // mumbai: POLYGON_KEY_MUMBAI,
      polygonMumbai: POLYGON_KEY_MUMBAI,
      wemixtest: ETHERSCAN_KEY_GOERLI,
      gpextest: ETHERSCAN_KEY_GOERLI
    }
  }
};
