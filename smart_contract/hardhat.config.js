require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "rinkeby",
  solidity: '0.8.0',
  networks:{
    rinkeby:{
      url: 'https://eth-rinkeby.alchemyapi.io/v2/4NPZoCKq-jtnhiGE8YJrLQf2WWM0-jtx',
      accounts: ['33ab8410b36ca96e1b0ab9c8eaaabf1b953df4ae33aa2c88512fc96ccc24374a']
    }
  }
}