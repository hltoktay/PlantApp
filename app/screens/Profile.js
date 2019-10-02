import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";

import styles from "./styles";
import ListColumn from "../components/ListColumn/ListColumn";

const LINKS = [
  {
    link: "Share",
    title: "Invite friends",
    icon: <Icon name="heart" size={28} type="evilicon" color="#000" />
  },
  {
    link: "Help",
    title: "Help enviroment",
    icon: <Icon name="eye" size={28} type="evilicon" color="#000" />
  },
  {
    link: "About",
    title: "About this app",
    icon: <Icon name="tag" size={28} type="evilicon" color="#000" />
  },
  {
    link: "Settings",
    title: "Your Account Settings",
    icon: <Icon name="settings" size={28} type="feather" color="#000" />
  }
];

class Profile extends Component {
  static navigationOptions = {
    title: "My Profile"
  };

  render() {
    const { goBack, navigate } = this.props.navigation;
    return (
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <ListColumn>
          <ListColumn.Left>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                marginLeft: 20,
                marginTop: 10
              }}
            >
              Hi, Angel
            </Text>
          </ListColumn.Left>

          <ListColumn.Right>
            <View style={{}}>
              <Image
                style={{ height: 50, width: 50, borderRadius: 25 }}
                source={require("../image/profile.png")}
              />
            </View>
          </ListColumn.Right>
        </ListColumn>
        {LINKS.map(el => (
          <ListColumn key={el.link}>
            <ListColumn.Left>
              <View
                style={{
                  flexDirection: "row",
                  alignContent: "center",
                  padding: 5
                }}
              >
                <View style={{ flex: 0.2 }}>{el.icon}</View>
                <View style={{ flex: 1, marginTop: 5 }}>
                  <Text>{el.title}</Text>
                </View>
              </View>
            </ListColumn.Left>

            <ListColumn.Right>
              <Icon
                name="doubleright"
                size={16}
                type="antdesign"
                color="#000"
              />
            </ListColumn.Right>
          </ListColumn>
        ))}
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#333",
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            width: "70%",
            alignSelf: "center",
            height: 40,
            marginTop: 20
          }}
          onPress={() => navigate("Home")}
        >
          <Text> Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Profile;
