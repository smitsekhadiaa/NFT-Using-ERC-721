require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_API_KEY_URL=process.env.ALCHEMY_API_KEY_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks:{
  // 1->how do we define which test network to deploy to?
  // 2->how do we define which account to use for deployment?

    goerli:{
      url:ALCHEMY_API_KEY_URL,
      accounts:[PRIVATE_KEY],
    }
  }



};
