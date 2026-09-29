
"use client"
import React, { useContext } from "react";
import { ItemContext } from "../../../contex/ItemContexProvide";

const SaveForLatter = ({item}) => {

     const { saveForLatter, setSaveForLatter } = useContext(ItemContext);
    
      const handleSaveLatter = () => {
        console.log("triger");
        setSaveForLatter([...saveForLatter, item]);
        console.log(item ,"from save latter ");
        
    
      };
    return (
             <button onClick={() => handleSaveLatter()} className="border border-gray-700 hover:bg-gray-800 text-white text-xs px-5 py-3 rounded-lg transition">
                ♡ Save for later
              </button>
    );
};

export default SaveForLatter;