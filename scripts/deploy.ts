import { ethers } from "hardhat";

async function main() {
    // Fetch the ContractFactory for the "chai" contract
    const Chai = await ethers.getContractFactory("chai");

    // Deploy the contract
    const chai = await Chai.deploy();

    // Ensure the contract is properly deployed
    await chai.deployed();

    // Log the address where the contract is deployed
    console.log("Chai deployed to:", chai.address);
}

// Handle errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
