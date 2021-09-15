import React, {createContext, useState} from "react";

export const isRestaurantSortedContext = createContext(false);

export const IsRestaurantSortedContextProvider = ({children}) => {
  const [isRestaurantSorted, setRestaurantSorted] = useState(false);
  const value = {
    isRestaurantSorted,
    setRestaurantSorted
  };
  return (
    <isRestaurantSortedContext.Provider value={value}>
      {children}
    </isRestaurantSortedContext.Provider>
  );
}
