import 'react-native-gesture-handler';
import {StatusBar as ExpoStatusBar} from "expo-status-bar";
import React, {createContext, useEffect} from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "./src/theme";
import {
  useFonts,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {Provider} from 'react-native-paper';
import {Lato_400Regular} from '@expo-google-fonts/lato';
import {NavigationContainer} from "@react-navigation/native";
import {RestaurantsContextProvider} from './src/services/restaurant/context'
import {LocationContextProvider} from "./src/services/Location/context";
import Navigator from "./src/navigators";
import {FavoritesContextProvider} from "./src/services/Favorites/context";
import {NativeBaseProvider} from "native-base"
import {IsShowFavoritesOnlyContextProvider} from "./src/context/isFavoritesOnly";
import {IsRestaurantSortedContextProvider} from "./src/context/isRestaurantSorted";
import firebase from "firebase";
import {AuthenticationContextProvider} from "./src/services/authentication/context";

const firebaseConfig = {
  apiKey: "AIzaSyD5FevnPxEqI28YFD20GFd3Ft7ywGttZEM",
  authDomain: "meals-to-go-f3278.firebaseapp.com",
  projectId: "meals-to-go-f3278",
  storageBucket: "meals-to-go-f3278.appspot.com",
  messagingSenderId: "241794748598",
  appId: "1:241794748598:web:f1670330f47f1b1f60d617"
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

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
        <AuthenticationContextProvider>
          <NativeBaseProvider>
            <ThemeProvider theme={theme}>
              <Navigator/>
            </ThemeProvider>
          </NativeBaseProvider>
        </AuthenticationContextProvider>
      </NavigationContainer>
    )
      ;
  }
}