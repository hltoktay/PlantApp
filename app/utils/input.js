import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Picker } from "react-native";

const input = props => {
  let template = null;

  switch (props.type) {
    case "textinput":
      template = (
        <TextInput style={[styles.input, props.overrideStyle]} {...props} />
      );
      break;
    default:
      return template;
  }

  return template;
};

const styles = StyleSheet.create({
  input: {
    marginLeft: 30,
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#a2a1a1",
    fontSize: 16,
    padding: 15,
    marginTop: 10,
    backgroundColor: "#ACE1AF",
    borderRadius: 20
  }
});

export default input;
