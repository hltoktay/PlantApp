import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  Button,
  Alert
} from "react-native";
import { withNavigation } from "react-navigation";

import styles from "./style";

class Container extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} barStyle="light-content" />
        <ImageBackground
          source={require("../../image/plant.jpg")}
          style={{ width: "100%", height: "100%", opacity: 1 }}
        >
          <Text style={styles.title}>Think natural</Text>
          <Text style={styles.content}>Blance your world</Text>

          <View style={styles.bgColor}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.skipButton}
            >
              <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Main")}
              style={styles.startButton}
            >
              <Text style={styles.text}>GET STARTED</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default withNavigation(Container);
