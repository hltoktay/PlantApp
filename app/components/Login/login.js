import React from "react";
import { View, Text, Button } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./style";

const Login = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}> THIS IS LOGIN PAGE</Text>
    <Button title="Back" onPress={() => navigation.goBack()} />
  </View>
);

export default withNavigation(Login);
