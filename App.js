import 'react-native-gesture-handler';
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import Restaurant from "./src/screens/Restaurant";
import React, {createContext, useEffect} from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "./src/theme";
import {
  useFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {Lato_400Regular} from '@expo-google-fonts/lato';
import {NavigationContainer} from "@react-navigation/native";
import {RestaurantsContextProvider} from './src/services/restaurant/context'
import {LocationContextProvider} from "./src/services/Location/context";
import Navigator from "./src/navigators";



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
        <ThemeProvider theme={theme}>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigator/>
              <ExpoStatusBar style="auto"/>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
      </NavigationContainer>
    )
      ;
  }
}