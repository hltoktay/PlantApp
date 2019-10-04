import React from "react";
import { View, Image } from "react-native";

import LogoImage from "./logo.png";

const Logo = () => (
  <View style={{}}>
    <Image
      source={LogoImage}
      resizeMode={"contain"}
      style={{
        width: 300,
        height: 400,

        transform: [{ rotate: "90deg" }]
      }}
    />
  </View>
);

export default Logo;
