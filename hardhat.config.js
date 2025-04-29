require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.20", // Use the version of Solidity that you are working with
  networks: {
    hardhat: {
      chainId: 1337, // Default Hardhat local network
    },
  },
};
