import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import Restaurant from "../screens/Restaurant";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaView, Text} from "react-native";
import RestaurantsNavigator from "./RestaurantNavigator";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeAreaView>
    <Text>Settings</Text>
  </SafeAreaView>
);
const Map = () => (
  <SafeAreaView>
    <Text>Map</Text>
  </SafeAreaView>
);
const AppNavigator = () => {
  return (<Tab.Navigator
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
  </Tab.Navigator>)
};

export default AppNavigator;