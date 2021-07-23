import React, {createContext, useState} from "react";

const isLoadingContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const value = {
    isLoading,
    setIsLoading
  };
  const isLoadingContext = createContext(value);
  return (
    <isLoadingContext.Provider value={value}>
      {children}
    </isLoadingContext.Provider>
  );
}

export default isLoadingContextProvider;