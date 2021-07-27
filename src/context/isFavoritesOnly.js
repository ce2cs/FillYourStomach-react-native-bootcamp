import React, {createContext, useState} from "react";

export const isShowFavoritesOnlyContext = createContext(false);

export const IsShowFavoritesOnlyContextProvider = ({children}) => {
  const [isShowFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const value = {
    isShowFavoritesOnly,
    setShowFavoritesOnly
  };
  return (
    <isShowFavoritesOnlyContext.Provider value={value}>
      {children}
    </isShowFavoritesOnlyContext.Provider>
  );
}
