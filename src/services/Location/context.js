import React, {useState, useEffect} from "react";

import {locationRequest, locationTransform} from "./service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({children}) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloadTime, setReloadTime] = useState(0);

  const reload = () => {
    setReloadTime(reloadTime + 1);
  }

  useEffect(() => {
    async function locationRequestAsync(keyword) {
      setError(null)
      try {
        const res = await locationRequest(keyword.toLowerCase());
        setLocation(res);
        setIsLoading(false)
      } catch (e) {
        setError(e);
        console.log(e.message);
      }
    }
    locationRequestAsync(keyword)
  }, [keyword, reloadTime])

  const onSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    if (searchKeyword.length === 0) {
      return;
    }
    setIsLoading(true);
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
        setKeyword,
        reload
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};