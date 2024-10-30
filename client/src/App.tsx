import './App.css'
import {useEffect, useState} from "react";
import { ethers } from "hardhat";


function App() {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
    })

    useEffect(() => {
        const template = async () => {
            const contractAddress = "";
            const contractABI = "";
            //MetaMask part
            //1. In order to do transactions on goerli testnet
            //2. MetaMask consist of infura api which actually help in connecting to the blockchain
            const { ethereum } = window;

            const account = await ethereum.request({method: 'eth_requestAccounts'});

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            )
        }
        template();
    }, []);

    return (
        <>

        </>
    )
}

export default App
