import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

import { Icon } from "react-native-elements";

import { Picker } from "../components/Picker";

import styles from "./styles";

class Main extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Hello, Angel</Text>
        <Text style={styles.subTitle}>Balance world nature</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View style={styles.profileBtn}>
            <Icon name="user" size={32} type="evilicon" color="#fff" />
          </View>
        </TouchableOpacity>

        <Picker />
      </View>
    );
  }
}

export default Main;
