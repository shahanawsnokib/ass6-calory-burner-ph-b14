"use client";

import React, { createContext, useState } from "react";

export const ItemContext = createContext({});

const ItemContexProvide = ({ children }) => {
  const [addTodaysPlan, setTodaysPlan] = useState([]);
  const [saveForLatter, setSaveForLatter] = useState([]);

  const sharedDataObj = {
    addTodaysPlan,
    setTodaysPlan,
    saveForLatter,
    setSaveForLatter,
  };

  return (
    <ItemContext.Provider value={sharedDataObj}>
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContexProvide;