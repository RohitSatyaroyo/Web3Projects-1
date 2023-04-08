/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork:'goerli',
    network:{
      hardhat:{},
      goerli:{
        url:'https://eth-goerli.g.alchemy.com/v2/xGIfCSDOhSf7Zq2RrG75CdGe8SKTJ66o',
        accounts:[`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
