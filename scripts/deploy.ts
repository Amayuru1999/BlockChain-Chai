import {ethers} from "hardhat";

async function main(){
    const Chai = await ethers.getContractFactory("Chai");
    const chai = await Chai.deploy();
    await chai.deployed();
    console.log("Chai deployed to:", chai.address);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
});