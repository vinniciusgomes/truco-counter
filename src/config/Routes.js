import React from "react";
import { Icon } from "native-base";

import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Home from "~/screens/Home";
import Help from "~/screens/Help";
import Settings from "~/screens/Settings";
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
    },
    Help: {
      screen: Help,
      navigationOptions: {
        tabBarLabel: "Help",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="questioncircleo"
            type="AntDesign"
            style={{ color: tintColor, fontSize: 20 }}
          />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="setting"
            type="AntDesign"
            style={{ color: tintColor, fontSize: 20 }}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Splash",
    activeTintColor: "#fff",
    shifting: true,
    barStyle: {
      backgroundColor: "#1b1b1b"
    }
  }
);

export default createAppContainer(Routes);
