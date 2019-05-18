import React, { Component } from "react";
import { Text, View } from "react-native";

/**
 *
 *
 * @class Help
 * @extends {Component}
 */
class Help extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#121212"
        }}
      >
        <Text style={{ color: "#fff" }}> Em desenvolvimento </Text>
      </View>
    );
  }
}
export default Help;
