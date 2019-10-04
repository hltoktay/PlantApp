import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./style";

import Logo from "./logo";
import LoginForm from "./loginForm";

class Login extends Component {
  state = {
    loading: false
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <Logo />
            <LoginForm />
          </View>
        </ScrollView>
      );
    }
  }
}

export default withNavigation(Login);
