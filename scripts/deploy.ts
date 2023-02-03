const BN = require("ethers").BigNumber;
import { ethers } from "hardhat";

function sleep(ms : any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {

  let ERC20 = await ethers.getContractFactory("ERC20");
  let erc20 = await ERC20.deploy("Test","TST");
  await sleep(2000);
  console.log("erc20: ",erc20.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });