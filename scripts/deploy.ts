import { ethers } from "hardhat";

async function main() {

    const Chai = await ethers.getContractFactory("chai");


    const chai = await Chai.deploy();


    await chai.waitForDeployment()


    console.log("Chai deployed to:", `${await chai.getAddress()}`);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
