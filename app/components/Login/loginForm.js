import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Platform } from "react-native";

import Input from "../../utils/input";
import ValidationRules from "../../utils/validationRules";

import { connect } from "react-redux";
import { signUp, signIn } from "../../actions/user_action";
import { bindActionCreators } from "redux";

class LoginForm extends Component {
  state = {
    type: "Login",
    action: "Login",
    actionMode: "I want to register",
    hasError: false,
    form: {
      email: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          isEmail: true
        }
      },
      password: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          isRequired: true,
          minLength: 6
        }
      },
      confirmPassword: {
        value: "",
        valid: false,
        type: "textinput",
        rules: {
          confirmPass: "password"
        }
      }
    }
  };

  updateInput = (name, value) => {
    this.setState({
      hasError: false
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;

    /// rules
    let rules = formCopy[name].rules;
    let valid = ValidationRules(value, rules, formCopy);

    formCopy[name].valid = valid;

    this.setState({
      form: formCopy
    });
  };

  confirmPassword = () =>
    this.state.type != "Login" ? (
      <Input
        placeholder="Confirm your password"
        placeholderTextColor="#000"
        type={this.state.form.confirmPassword.type}
        value={this.state.form.confirmPassword.value}
        onChangeText={value => this.updateInput("confirmPassword", value)}
        secureTextEntry
        // overrideStyle={{}}
      />
    ) : null;

  formHasErrors = () =>
    this.state.hasError ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>Oops, check your info</Text>
      </View>
    ) : null;

  submitUser = () => {
    let isFormValid = true;
    let formToSubmit = {};
    const formCopy = this.state.form;

    for (let key in formCopy) {
      if (this.state.type === "Login") {
        // LOGIN
        if (key !== "confirmPassword") {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit[key] = formCopy[key].value;
        }
      } else {
        //REGISTER
        isFormValid = isFormValid && formCopy[key].valid;
        formToSubmit[key] = formCopy[key].value;
      }
    }

    if (isFormValid) {
      if (this.state.type === "Login") {
        this.props.signIn(formToSubmit);
      } else {
        this.props.signUp(formToSubmit);
      }
    } else {
      this.setState({
        hasError: true
      });
    }
  };

  changeFormType = () => {
    const type = this.state.type;

    this.setState({
      type: type === "Login" ? "Register" : "Login",
      action: type === "Login" ? "Register" : "Login",
      actionMode: type === "Login" ? "I want to Login" : "I want to register"
    });
  };

  render() {
    return (
      <View>
        <Input
          placeholder="Enter email"
          placeholderTextColor="#000"
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          autoCapitalize={"none"}
          keyboardType={"email-address"}
          onChangeText={value => this.updateInput("email", value)}
          // overrideStyle={{}}
        />

        <Input
          placeholder="Enter your password"
          placeholderTextColor="#000"
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={value => this.updateInput("password", value)}
          secureTextEntry
          // overrideStyle={{}}
        />

        {this.confirmPassword()}
        {this.formHasErrors()}

        <View style={{ marginTop: 20 }}>
          <View style={styles.button}>
            <Button
              color="#004204"
              title={this.state.action}
              onPress={this.submitUser}
            />
          </View>

          <View style={styles.button}>
            <Button
              title={this.state.actionMode}
              onPress={this.changeFormType}
              color="#004204"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: "#f44336"
  },
  errorLabel: {
    color: "#fff",
    textAlignVertical: "center",
    textAlign: "center"
  },
  button: {
    marginBottom: 0
  }
});

function mapStateToProps(state) {
  console.log(state);
  return {
    User: state.User
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signIn, signUp }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
