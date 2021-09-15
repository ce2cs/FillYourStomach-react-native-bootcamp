import React from "react";

import {createStackNavigator} from "@react-navigation/stack";
import Restaurants from "../screens/Restaurant";
import RestaurantDetail from "../screens/RestaurantDetail";


const RestaurantStack = createStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={Restaurants}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;