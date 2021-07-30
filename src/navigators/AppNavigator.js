import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import Restaurant from "../screens/Restaurant";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaView, Text} from "react-native";
import RestaurantsNavigator from "./RestaurantNavigator";
import Map from "../screens/Map";
import Settings from "../screens/Settings";
import {IsShowFavoritesOnlyContextProvider} from "../context/isFavoritesOnly";
import {FavoritesContextProvider} from "../services/Favorites/context";
import {LocationContextProvider} from "../services/Location/context";
import {RestaurantsContextProvider} from "../services/restaurant/context";
import {IsRestaurantSortedContextProvider} from "../context/isRestaurantSorted";

const Tab = createBottomTabNavigator();


const AppNavigator = () => {
  return (
    <IsShowFavoritesOnlyContextProvider>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <IsRestaurantSortedContextProvider>
              <Tab.Navigator
                screenOptions={({route}) => ({
                  tabBarIcon: ({focused, color, size}) => {

                    if (route.name === 'Restaurant') {
                      return focused
                        ? <Ionicons name='restaurant' size={size} color={color}/>
                        : <Ionicons name='restaurant-outline' size={size} color={color}/>
                    } else if (route.name === 'Settings') {
                      return focused
                        ? <Ionicons name='ios-person-circle' size={size} color={color}/>
                        : <Ionicons name='ios-person-circle-outline' size={size} color={color}/>;
                    } else if (route.name === 'Map') {
                      return focused
                        ? <MaterialCommunityIcons name="map-marker-radius" size={size} color={color}/>
                        : <MaterialCommunityIcons name="map-marker-radius-outline" size={size} color={color}/>
                    }
                  },
                })}
                tabBarOptions={{
                  activeTintColor: 'tomato',
                  inactiveTintColor: 'gray',
                }}
              >
                <Tab.Screen name="Restaurant" component={RestaurantsNavigator}/>
                <Tab.Screen name="Map" component={Map}/>
                <Tab.Screen name="Settings" component={Settings}/>
              </Tab.Navigator>
            </IsRestaurantSortedContextProvider>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </IsShowFavoritesOnlyContextProvider>
  )
};

export default AppNavigator;