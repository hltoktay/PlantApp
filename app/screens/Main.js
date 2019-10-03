import React, { Component } from "react";
import { Text, View, Button, TouchableOpacity, ScrollView } from "react-native";

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
        <View style={styles.box1}>
          <Text style={styles.itemName1}>Plants and Trees</Text>
          <View style={styles.itemNum}>
            <View>
              <Text style={styles.subName}>In growing</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around"
                }}
              >
                <Icon
                  name="arrow-up"
                  size={20}
                  type="evilicon"
                  color="#3bce45"
                />
                <Text style={{ color: "#fff", fontSize: 14 }}>3000</Text>
              </View>
            </View>
            <View>
              <Text style={styles.subName}>Cut by man</Text>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="arrow-down"
                  size={20}
                  type="evilicon"
                  color="#b2093c"
                />
                <Text style={{ color: "#fff", fontSize: 14 }}> 400</Text>
              </View>
            </View>
          </View>

          <View style={styles.box2}>
            <Text style={styles.itemName2}>Seeds</Text>
            <View style={styles.itemNum}>
              <View>
                <Text style={styles.subName}>Sown</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <Icon
                    name="arrow-up"
                    size={20}
                    type="evilicon"
                    color="#3bce45"
                  />
                  <Text style={{ color: "#fff", fontSize: 14 }}>3000</Text>
                </View>
              </View>
              <View>
                <Text style={styles.subName}>Harvest</Text>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="arrow-down"
                    size={20}
                    type="evilicon"
                    color="#b2093c"
                  />
                  <Text style={{ color: "#fff", fontSize: 14 }}> 400</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Main;
