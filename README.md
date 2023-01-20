# setup
````
npm init
npm install hardhat

````


# init
````
npx hardhat

````


# build

````
npx hardhat compile
npx hardhat run scripts/deploy-erc20-token.js --network goerli
npx hardhat verify --network goerli 0x78086EC1956bb17Db4f73390125Fc2FC0D16feAD --contract contracts/HIHIToken.sol:HIHIToken
npx hardhat verify --constructor-args

npx hardhat compile
npx hardhat run scripts/deploy-erc20-token.js --network goerli
npx hardhat verify --network goerli 0xABFB8A9C66AcA998F68c7b4Ad58886E4090618EC --contract contracts/ILOVEYOUToken.sol:ILOVEYOUToken
npx hardhat verify --constructor-args


npx hardhat compile
npx hardhat run scripts/deploy-erc20-token.js --network goerli
npx hardhat verify --network goerli 0x1e2c9E83262C30847CFa486fBECFF03A525Bedae --contract contracts/YOULOVEMEToken.sol:YOULOVEMEToken
npx hardhat verify --constructor-args


npx hardhat compile
npx hardhat run scripts/deploy-erc20-usdt-token.js --network goerli
npx hardhat verify --network goerli 0xE6B8F12512a2bf04D84FA4EB0f17274E58A959d7
npx hardhat verify --constructor-args


npx hardhat compile
npx hardhat run scripts/deploy-erc20-token.js --network gpextest
npx hardhat verify --network gpextest 0x97422e704d8e60F8E942cAA4cA73094Ddc0673d5 --contract contracts/BirdgangToken.sol:BirdgangToken
npx hardhat verify --constructor-args



npx hardhat compile
npx hardhat run scripts/deploy-erc20-token.js --network wemixtest


Token address : 0x9BbC2dB2B8c98deFcE30a58265a13E76d0B84285


npx hardhat compile
npx hardhat run scripts/deploy-erc20-token.js --network goerli
npx hardhat verify --network goerli 0xD6e2E917B7e29D9CF0dC3f29131d4f2A763338E2 --contract contracts/BirdgangToken.sol:BirdgangToken
npx hardhat verify --constructor-args

````


# test

````
npx hardhat test

````


# token
```` 
ETH TOKEN
SYMBOL : BGT
ADDRESS : 0x26a86ab64571fd1E693A4Fe0cB9202ee5Ab75c47
AMOUNT : 1000000
NETWORKS : rinkeby

SYMBOL :  ILOVEYOUToken (ILYT)
ADDRESS : 0xABFB8A9C66AcA998F68c7b4Ad58886E4090618EC
AMOUNT : 1,000,000,000 ILYT
NETWORKS : goerli


SYMBOL :  YOULOVEMEToken (YLMT)
ADDRESS : 0x1e2c9E83262C30847CFa486fBECFF03A525Bedae
AMOUNT : 1,000,000,000 ILYT
NETWORKS : goerli


SYMBOL : HIHI
ADDRESS : 0x78086EC1956bb17Db4f73390125Fc2FC0D16feAD
AMOUNT : 100,000,000,000,000
NETWORKS : goerli


SYMBOL : USDTB
ADDRESS : 0x9182275157D8bDCe2C3f36FfBfD0b596Fa6D1D03
AMOUNT : 1000000
NETWORKS : goerli



SYMBOL : BGT
ADDRESS : 0x9BbC2dB2B8c98deFcE30a58265a13E76d0B84285
AMOUNT : 1000000
NETWORKS : wemixtest



OTHERS
https://goerli.etherscan.io/address/0xD6e2E917B7e29D9CF0dC3f29131d4f2A763338E2#code

````



# link

````
https://docs.openzeppelin.com/

https://infura.io/

https://rinkeby.etherscan.io/address/0x26a86ab64571fd1E693A4Fe0cB9202ee5Ab75c47
https://rinkeby.etherscan.io/address/0x26a86ab64571fd1E693A4Fe0cB9202ee5Ab75c47#code

https://goerli.etherscan.io/address/0xcbac53f2f7BfF399382180C3Ec35d0D79d56baf1
https://goerli.etherscan.io/address/0xcbac53f2f7BfF399382180C3Ec35d0D79d56baf1#code

https://goerli.etherscan.io/address/0x9182275157D8bDCe2C3f36FfBfD0b596Fa6D1D03#code
https://goerli.etherscan.io/address/0xABFB8A9C66AcA998F68c7b4Ad58886E4090618EC#code
https://goerli.etherscan.io/address/0x1e2c9E83262C30847CFa486fBECFF03A525Bedae#code

````
