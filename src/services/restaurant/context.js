import React, {useState, createContext, useEffect, useMemo} from "react";

import {restaurantsRequest} from "./service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const restaurantRequestAsync = async () => {
    setIsLoading(true)
    try {
      const restaurantsData = await restaurantsRequest();
      setRestaurants(restaurantsData);
      setIsLoading(false)
    } catch (err) {
      setError(err);
      console.log(error)
    }
  }

  useEffect(() => {
    restaurantRequestAsync();
  }, [])

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};