import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

import styles from "./style";

class Picker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: [
        {
          label: "USA-California",
          value: "USA-California",
          color: "#f48d37"
        },
        {
          label: "EU-Germany",
          value: "EU - Germany",
          color: "#009236"
        },
        {
          label: "ME-Turkey",
          value: "ME-Turkey",
          color: "#a7003b"
        },
        {
          label: "MENA-Marakkesh",
          value: "MENA-Marakkesh",
          color: "#000cb4"
        }
      ]
    };
  }
  render() {
    return (
      <View style={{ marginTop: 170, marginLeft: 46 }}>
        <RNPickerSelect
          placeholder={{
            label: "Select Region...",
            value: null,
            color: "#017f90",
            fontWeight: "400"
          }}
          onValueChange={value => {
            this.setState({
              favNumber: value
            });
          }}
          items={this.state.country}
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 15,
              right: 120
            },
            placeholder: {
              color: "#fff",
              fontSize: 12,
              fontWeight: "bold"
            }
          }}
          Icon={() => {
            return <View style={styles.pickerContainer} />;
          }}
        />
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: "70%",
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#33b2c3",
    borderRadius: 10,
    fontFamily: "TimesNewRomanPSMT"
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,

    color: "black",
    paddingRight: 30 // to ensure the text is never behind the icon
  }
});

export default Picker;
