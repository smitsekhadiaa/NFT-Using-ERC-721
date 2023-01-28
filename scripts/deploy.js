// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// ether.js comes in built wiht hardhat

// import ethers

const { ethers } = require("hardhat");

async function main() {
  // 3 task we need to do in deploy
  // 1-> somehow tell the script we want to depliy NFTee.sol contract
  // hard hat will know from below line and give you a instance of the contract.
  const contract = await ethers.getContractFactory("NFTee");

  // 2-> deploy it
  const deployedContract=await contract.deploy();
  // 2.1-> wait for deployment to be finished
  await deployedContract.deployed();

  // 3-> print the address of deployed contract
  console.log("NFT contract deployed to :", deployedContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
