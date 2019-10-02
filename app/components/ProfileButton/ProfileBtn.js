import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { withNavigation } from "react-navigation";

import HeaderBtn from "../HeaderButton/headerBtn";
import { EvilIcons } from "@expo/vector-icons";

class ProfileBtn extends Component {
  state = {};

  render() {
    return (
      <HeaderBtn left onPress={() => navigation.navigate("Profile")}>
        <EvilIcons name="user" color="white" size={35} />
      </HeaderBtn>
    );
  }
}

export default withNavigation(ProfileBtn);
