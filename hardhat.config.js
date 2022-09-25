/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();

require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");

const {
  INFURA_KEY,
  DEPLOYER_PRIVATE_KEY,
  ETHERSCAN_KEY
} = process.env

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: ETHERSCAN_KEY
    }
  }
};
