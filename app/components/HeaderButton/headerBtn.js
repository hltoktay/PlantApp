import React from "react";
import { View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./styles";

const MARGIN_SIZE = 8;

const HeaderButton = ({ children, letf, rigth, onPress, style }) => {
  let _style = {};

  if (left) {
    _style.marginLeft = MARGIN_SIZE;
  } else if (rigth) {
    _style.marginRight = MARGIN_SIZE;
  }

  return (
    <TouchableOpacity style={[_style, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default withNavigation(HeaderButton);
