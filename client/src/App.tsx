import { useState, useEffect } from 'react';
// import abi from "./contractJson/chai.json";
import { ethers, Contract, Signer, providers } from "ethers";
// import Memos from './components/Memos';
// import Buy from './components/Buy';
import chai from "./chai.png";
import './App.css';

interface StateType {
    provider: providers.Web3Provider | null;
    signer: Signer | null;
    contract: Contract | null;
}

function App() {
    const [state, setState] = useState<StateType>({
        provider: null,
        signer: null,
        contract: null
    });

    const [account, setAccount] = useState<string>('Not connected');

    useEffect(() => {
        const template = async () => {
            const contractAddress = "0xa64e3144835aF8781c750ceC432784a68d883266";
            const contractABI = abi.abi;

            try {
                const { ethereum } = window as any; // `window` needs to be typed as `any` to access `ethereum`

                if (!ethereum) {
                    console.log("Metamask not found");
                    return;
                }

                const accounts: string[] = await ethereum.request({
                    method: "eth_requestAccounts"
                });

                window.ethereum.on("accountsChanged", () => {
                    window.location.reload();
                });

                setAccount(accounts[0]);

                const provider = new ethers.providers.Web3Provider(ethereum); // read the Blockchain
                const signer = provider.getSigner(); // write to the blockchain

                const contract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    signer
                );

                console.log(contract);

                setState({ provider, signer, contract });
            } catch (error) {
                console.log(error);
            }
        };

        template();
    }, []);

    return (
        <div>
            <img src={chai} className="img-fluid" alt=".." width="100%" />
            <p style={{ marginTop: "10px", marginLeft: "5px" }}>
                <small>Connected Account - {account}</small>
            </p>

            <Buy state={state} />
            <Memos state={state} />
        </div>
    );
}

export default App;
