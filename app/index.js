import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import Home from "./screens/Home";
import Main from "./screens/Main";
import Login from "./screens/login";
import Profile from "./screens/Profile";
import InviteFriends from "./screens/InviteFriends";

EStyleSheet.build({
  $primaryBlue: "#4f6d7a"
});

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: Profile
    },
    Share: {
      screen: InviteFriends
    }
  },
  {
    navigationOptions: {
      headerTitleStyle: {
        fontWeight: "600"
      }
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Main: {
      screen: Main
    },
    Login: {
      screen: Login
    },
    Profile: ProfileStack
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

// export default createAppContainer(AppNavigator);

export default () => <AppNavigator />;
