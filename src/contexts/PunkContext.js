import { createContext, useCallback, useEffect, useState } from "react";
import axios from 'axios';

export const PunkContext = createContext({});

export const PunkProvider = ({ children }) => {
    const [punkListData, setPunkListData] = useState([]);
    const [selectedPunk, setSelectedPunk] = useState({});

    useEffect(()=> {
        const getMyNfts = async () => {
            try{
                const { data: { assets }} = await axios.get("https://testnets-api.opensea.io/assets?asset_contract_address=0x57b816E95ac0C5d22ef151778B7eBb2993D71DBd");
            
                const collectionsFormatted = assets.map(asset => {
                    return {
                        id: asset.token_id,
                        name: asset.name,
                        traits: asset.traits,
                        image: asset.image_url,
                        owner: {
                            address: asset.owner.address || '',
                            avatar: asset.owner.profile_img_url || '',
                            user: asset.owner.user || 'uknown'
                        }
                    }
                });
                
                setSelectedPunk(collectionsFormatted[0]);
                setPunkListData(collectionsFormatted);
            }catch(err){
                console.log(err);
            }
        }
        getMyNfts();
    }, []);

    const handleSelectPunk = useCallback((punkId)=> {
        const selectedPunk = punkListData.find(punk => punk.id === punkId);

        setSelectedPunk(selectedPunk);
    }, [punkListData]);
  
    return (
        <PunkContext.Provider 
            value={{
                punkListData,
                selectedPunk,
                handleSelectPunk
            }}
        >
            {children}
        </PunkContext.Provider>
    )
}