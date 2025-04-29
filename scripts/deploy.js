const hre = require("hardhat");

async function main() {
    // Get the contract to deploy
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy the NFTMarketplace contract
    const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
    const nftMarketplace = await NFTMarketplace.deploy();

    console.log("NFTMarketplace contract deployed to:", nftMarketplace.address);
}

// Call the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
