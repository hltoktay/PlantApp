import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import Main from "../screens/Main";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Main: {
      screen: Main
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
