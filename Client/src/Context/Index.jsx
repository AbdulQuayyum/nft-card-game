import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { useNavigate } from 'react-router-dom';

import { GetParams } from '../Utilities/Onboard';
// import { ABI, ADDRESS } from "../Contract/Index"
import { CreateEventListeners } from "./CreateEventListners"

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState("")
    const [battleGround, setBattleGround] = useState("bg-astral")
    const [contract, setContract] = useState(null)
    const [provider, setProvider] = useState(null)

    useEffect(() => {
        const setSmartContractAndProvider = async () => {
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const newProvider = new ethers.providers.Web3Provider(connection)
            const signer = newProvider.getSigner()
            const newContract = new ethers.Contract(ADDRESS, ABI, signer)

            setProvider(newProvider)
            setContract(newContract)
        }

        setSmartContractAndProvider()
    }, [])

    return (
        <GlobalContext.Provider value={{

        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)