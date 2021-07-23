import React, {useState, createContext, useEffect, useMemo, useContext} from "react";

import {restaurantsRequest} from "./service";
import {LocationContext} from "../Location/context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const {location} = useContext(LocationContext);

  const restaurantRequestAsync = async (location) => {
    setIsLoading(true)
    try {
      const restaurantsData = await restaurantsRequest(location);
      setRestaurants(restaurantsData);
      setIsLoading(false)
    } catch (err) {
      setError(err);
      console.log(error)
      console.log('restaurant request failed');
    }
  }

  useEffect(() => {
    restaurantRequestAsync(location);
  }, [location])

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