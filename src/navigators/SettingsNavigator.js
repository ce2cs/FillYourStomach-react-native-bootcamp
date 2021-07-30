import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Settings from "../screens/Settings";
import Camera from "../screens/Camera";

const SettingsStack = createStackNavigator();

const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={Settings}
      />
      <SettingsStack.Screen name="Camera" component={Camera} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;