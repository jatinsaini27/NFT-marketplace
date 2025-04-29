'use client';

import React, { useState, useEffect, createContext } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import axios from 'axios';
import Router from 'next/router';
import { useRouter } from 'next/navigation';
import { NFTMarketplaceAddress, NFTMarketplaceABI } from './constants';

export const NFTMarketplaceContext = createContext();

// Pinata credentials
const pinataApiKey = "f5c95534f3105d0b2796";
const pinataSecretApiKey = "dc29788ffe4222c5abc46f92e141a23c0a66a2f7c771d486f58144ac62ad0896";

const fetchContract = (signerOrProvider) =>
    new ethers.Contract(NFTMarketplaceAddress, NFTMarketplaceABI, signerOrProvider);

// Connecting to smart contract
const connectingWithSmartContract = async () => {
    try {
        const web3modal = new Web3Modal({
            cacheProvider: true,  // Optional: Auto-connect
            network: "localhost", // <-- Force to your local network
            providerOptions: {},  // Keep empty for now
        });

        const connection = await web3modal.connect();

        const provider = new ethers.providers.Web3Provider(connection, "any");
        const signer = provider.getSigner();

        const network = await provider.getNetwork();
        console.log("Connected to network:", network.name);

        // No ENS support on local, but no crash now
        if (network.chainId !== 31337 && network.chainId !== 1337) {
            console.warn('You are not connected to localhost (Hardhat/Ganache). Current chainId:', network.chainId);
        }

        const contract = fetchContract(signer);
        return contract;
    } catch (error) {
        console.error("Error connecting with smart contract:", error);
    }
};


export const NFTMarketplaceProvider = ({ children }) => {
    const titleData = "Discover, collect and sell NFTs";
    const [currentAccount, setCurrentAccount] = useState("");
    const router = useRouter();

    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum) return alert("Please install MetaMask.");
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            }
        } catch (error) {
            console.error("Error checking wallet connection:", error);
        }
    };

    useEffect(() => {
        checkIfWalletConnected();
    }, []);

    const connectWallet = async () => {
        try {
            if (!window.ethereum) return alert("Please install MetaMask.");
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);
            Router.push("/");
            window.location.reload();
        } catch (error) {
            console.error("Error connecting wallet:", error);
        }
    };

    const uploadToIPFS = async (file) => {
        try {
            const formData = new FormData();
            formData.append("file", file);

            const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
                maxBodyLength: 'Infinity',
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                    'pinata_api_key': pinataApiKey,
                    'pinata_secret_api_key': pinataSecretApiKey,
                },
            });

            const url = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
            return url;
        } catch (error) {
            console.error("Error uploading file to IPFS:", error);
        }
    };

    const uploadJSONToIPFS = async (jsonData) => {
        try {
            const res = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS', jsonData, {
                headers: {
                    'pinata_api_key': pinataApiKey,
                    'pinata_secret_api_key': pinataSecretApiKey,
                },
            });

            const url = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`;
            return url;
        } catch (error) {
            console.error("Error uploading JSON to IPFS:", error);
        }
    };

    const createNFT = async (name, price, description, image) => {
        try {
            if (!name || !description || !price || !image) return alert("Please fill all fields");
            if (isNaN(price) || price <= 0) return alert("Please enter a valid price.");

            const data = { name, description, image };
            const metadataURL = await uploadJSONToIPFS(data);
            await createSale(metadataURL, price, false, null);

            router.push("/");
        } catch (error) {
            console.error("Error creating NFT:", error);
        }
    };

    const createSale = async (url, formInputPrice, isReselling, id) => {
        try {
            if (isNaN(formInputPrice) || formInputPrice <= 0) return alert("Please enter a valid price.");

            const contract = await connectingWithSmartContract();
            const price = ethers.utils.parseUnits(formInputPrice.toString(), "ether");
            const listingPrice = await contract.getListingPrice();

            const transaction = !isReselling
                ? await contract.createToken(url, price, { value: listingPrice.toString() })
                : await contract.resellToken(id, price, { value: listingPrice.toString() });

            await transaction.wait();

            Router.push(isReselling ? "/my-assets" : "/");
            window.location.reload();
        } catch (error) {
            console.error("Error creating sale:", error);
        }
    };

    const fetchNFTs = async () => {
        try {
            const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
            const contract = fetchContract(provider);

            const data = await contract.fetchMarketItems();
            const items = await Promise.all(
                data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
                    const tokenUri = await contract.tokenURI(tokenId);
                    const {
                        data: { image, name, description },
                    } = await axios.get(tokenUri);

                    const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether");

                    return {
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                    };
                })
            );
            return items;
        } catch (error) {
            console.error("Error fetching NFTs:", error);
        }
    };

    const fetchMyNFTsOrListedNFTs = async (type) => {
        try {
            const contract = await connectingWithSmartContract();
            let data;

            if (type === "fetchItemsListed") {
                data = await contract.fetchItemsListed();
            } else {
                data = await contract.fetchMyNFTs();
            }

            const items = await Promise.all(
                data.map(async ({ tokenId, seller, owner, price: unformattedPrice }) => {
                    const tokenUri = await contract.tokenURI(tokenId);
                    const {
                        data: { image, name, description },
                    } = await axios.get(tokenUri);

                    const price = ethers.utils.formatUnits(unformattedPrice.toString(), "ether");

                    return {
                        price,
                        tokenId: tokenId.toNumber(),
                        seller,
                        owner,
                        image,
                        name,
                        description,
                    };
                })
            );
            return items;
        } catch (error) {
            console.error("Error fetching my NFTs or listed NFTs:", error);
        }
    };

    const buyNFT = async (nft) => {
        try {
            const contract = await connectingWithSmartContract();
            const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
            const transaction = await contract.createMarketSale(nft.tokenId, { value: price });

            await transaction.wait();
            Router.push("/my-assets");
            window.location.reload();
        } catch (error) {
            console.error("Error buying NFT:", error);
        }
    };

    return (
        <NFTMarketplaceContext.Provider
            value={{
                checkIfWalletConnected,
                connectWallet,
                uploadToIPFS,
                createNFT,
                fetchNFTs,
                fetchMyNFTsOrListedNFTs,
                currentAccount,
                titleData,
                buyNFT,
            }}
        >
            {children}
        </NFTMarketplaceContext.Provider>
    );
};
