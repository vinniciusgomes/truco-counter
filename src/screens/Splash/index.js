import React, { Component } from "react";
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  BackHandler
} from "react-native";

/**
 *
 *
 * @class Splash
 * @extends {Component}
 */
class Splash extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount = () => {
    console.clear();
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      BackHandler.exitApp();
      return true;
    });
    this.redirect();
  };

  componentWillUnmount() {
    this.backHandler.remove();
  }

  redirect = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 500);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={"transparent"}
          translucent
        />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("~/assets/img/cards.png")}
            style={{
              width: 150,
              height: 150
            }}
          />
        </View>
        <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
          <Text style={{ color: "#909090", opacity: 0.6 }}>Powered by</Text>
          <Image
            source={require("~/assets/img/icone.png")}
            style={{
              width: 40,
              height: 40,
              marginBottom: 20
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212"
  }
});
export default Splash;
