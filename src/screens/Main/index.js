import React, { Component } from "react";

import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar
} from "react-native";

/**
 *
 *
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ImageBackground
        source={{
          uri: "https://cdn.vife.dev/rn-template/background.png"
        }}
        style={styles.container}
        resizeMode="cover"
      >
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Image
          source={{
            uri: "https://cdn.vife.dev/rn-template/logo.png"
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcome}>Bem-vindo ao template VIFE!</Text>
        <Text style={styles.instructions}>
          Essa é a tela principal da sua aplicação
        </Text>
        <Text style={styles.instructions}>
          Você pode editar a tela no arquivo:
        </Text>
        <Text style={[styles.instructions, styles.fileName]}>
          src/screens/Main/index.js
        </Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20
  },
  fileName: {
    fontWeight: "bold",
    marginTop: 5
  },
  instructions: {
    color: "#DDD",
    fontSize: 14,
    marginTop: 20,
    textAlign: "center"
  },
  logo: {
    height: Dimensions.get("window").height * 0.11,
    marginVertical: Dimensions.get("window").height * 0.11,
    width: Dimensions.get("window").height * 0.11 * (1950 / 662)
  },
  welcome: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Main;
