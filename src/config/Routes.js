import React from "react";
import { Icon } from "native-base";

import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Home from "~/screens/Home";
import Splash from "~/screens/Splash";

const Routes = createSwitchNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="cards-playing-outline"
            type="MaterialCommunityIcons"
            style={{ color: tintColor, fontSize: 20 }}
          />
        )
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="cards-playing-outline"
            type="MaterialCommunityIcons"
            style={{ color: tintColor, fontSize: 20 }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    activeTintColor: "#fff",
    shifting: true,
    barStyle: {
      backgroundColor: "#1b1b1b"
    }
  }
);

export default createAppContainer(Routes);
