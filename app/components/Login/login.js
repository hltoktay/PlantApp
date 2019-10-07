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

import { connect } from "react-redux";
import { autoSignIn } from "../../actions/user_action";
import { bindActionCreators } from "redux";

import { getTokens, setTokens } from "../../utils/misc";

class Login extends Component {
  state = {
    loading: false
  };

  goNext = () => {
    this.props.navigation.navigate("Main");
  };

  componentDidMount() {
    getTokens(value => {
      if (value[0][1] === null) {
        this.setState({ loading: false });
      } else {
        this.props.autoSignIn(value[1][1]).then(() => {
          if (!this.props.User.auth.token) {
            this.setState({ loading: false });
          } else {
            setTokens(this.props.User.auth, () => {
              this.goNext();
            });
          }
        });
      }
    });
  }

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
            <LoginForm goNext={this.goNext} />
          </View>
        </ScrollView>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    User: state.User
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ autoSignIn }, dispatch);
}

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

// export default withNavigation(Login);
