const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const greeter = await Greeter.deploy("Hello, World!");

  const fctToken = await FCTToken.deploy("FCTToken", "TKN");

  await fctToken.deployed();

  console.log("Token deployed to:", fctToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
