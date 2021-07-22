import 'react-native-gesture-handler';
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import Restaurant from "./src/screens/Restaurant";
import React, {useEffect} from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "./src/theme";
import {
  useFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {Lato_400Regular} from '@expo-google-fonts/lato';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, SafeAreaView} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {restaurantsRequest} from "./src/services/restaurant/service";
import {RestaurantsContextProvider} from './src/services/restaurant/context'

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

export default function App() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular
  });



  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <RestaurantsContextProvider>
          <ThemeProvider theme={theme}>
            <Tab.Navigator
              screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName;

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
              <Tab.Screen name="Restaurant" component={Restaurant}/>
              <Tab.Screen name="Map" component={Map}/>
              <Tab.Screen name="Settings" component={Settings}/>
            </Tab.Navigator>
            <ExpoStatusBar style="auto"/>
          </ThemeProvider>
        </RestaurantsContextProvider>
      </NavigationContainer>
    );
  }
}