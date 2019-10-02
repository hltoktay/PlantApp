import React, { PureComponent } from "react";
import { View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const Left = ({ children }) => (
  <View style={{ flex: 1, alignContent: "flex-start" }}>{children}</View>
);

const Right = ({ children }) => (
  <View style={{ alignContent: "flex-end", marginTop: 5 }}>{children}</View>
);

class ListColumn extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handlePress = this.handlePress.bind(this);
  }

  static Left = Left;
  static Right = Right;

  renderContent = () => (
    <TouchableOpacity
      onPress={this.handlePress}
      style={{
        flexDirection: "row",
        padding: 5,
        alignContent: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#d1d1d1"
      }}
    >
      {this.props.children}
    </TouchableOpacity>
  );

  handlePress = () => {
    const { navigate } = this.props.navigation;
    navigate(this.props.link);
  };

  render() {
    if (this.props.link) {
      return (
        <TouchableOpacity onPress={this.handlePress}>
          {this.renderContent()}
        </TouchableOpacity>
      );
    }
    return this.renderContent();
  }
}

export default withNavigation(ListColumn);
