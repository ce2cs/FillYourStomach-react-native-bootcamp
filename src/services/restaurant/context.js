import React, {useState, createContext, useEffect, useMemo, useContext} from "react";

import {restaurantsRequest} from "./service";
import {LocationContext} from "../Location/context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({children}) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadTime, setReloadTime] = useState(0);
  const {location} = useContext(LocationContext);

  const reload = () => {
    setReloadTime(reloadTime + 1);
  }

  const restaurantRequestAsync = async (location) => {
    setIsLoading(true)
    setError(null)
    try {
      const formattedLocation = `${location.lat},${location.lng}`
      const restaurantsData = await restaurantsRequest(formattedLocation);
      setRestaurants(restaurantsData);
      setIsLoading(false)
    } catch (err) {
      setError(err);
      console.log(error)
      console.log('restaurant request failed');
    }
  }

  useEffect(() => {
    if (location) {
      restaurantRequestAsync(location);
    }
  }, [location, reloadTime])

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
        setRestaurants,
        reload
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};