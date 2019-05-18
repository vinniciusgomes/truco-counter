import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
  Platform
} from "react-native";

/**
 *
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreEles: 0,
      scoreNos: 0,
      partidasNos: 0,
      partidasEles: 0
    };
  }
  static navigationOptions = {
    header: null
  };

  addScoreNos = () => {
    if (this.state.scoreNos >= 12) {
      this.setState({
        partidasNos: this.state.partidasNos + 1
      });
      Alert.alert(
        "Nós ganhamos!",
        "Deseja continuar a partida?",
        [
          {
            text: "Não",
            onPress: () => this.resetScore(),
            style: "destructive"
          },
          {
            text: "Sim",
            onPress: () => this.setState({ scoreNos: 0 })
          }
        ],
        { cancelable: false }
      );
    } else {
      this.setState({
        scoreNos: this.state.scoreNos + 1
      });
    }
  };

  removeScoreNos = () => {
    if (this.state.scoreNos >= 1) {
      this.setState({ scoreNos: this.state.scoreNos - 1 });
    }
  };

  addScoreEles = () => {
    if (this.state.scoreEles >= 12) {
      this.setState({
        partidasEles: this.state.partidasEles + 1
      });
      Alert.alert(
        "Eles vencerão!",
        "Deseja continuar a partida?",
        [
          {
            text: "Não",
            onPress: () => this.resetScore(),
            style: "destructive"
          },
          {
            text: "Sim",
            onPress: () => this.setState({ scoreEles: 0 })
          }
        ],
        { cancelable: false }
      );
    } else {
      this.setState({
        scoreEles: this.state.scoreEles + 1
      });
    }
  };

  removeScoreEles = () => {
    if (this.state.scoreEles >= 1) {
      this.setState({ scoreEles: this.state.scoreEles - 1 });
    }
  };

  resetScore = () => {
    this.setState({
      scoreNos: 0,
      scoreEles: 0,
      partidasNos: 0,
      partidasEles: 0
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Image
          source={require("~/assets/img/bg.jpg")}
          style={{ height: 200, width: "auto" }}
        />
        <View style={{ alignItems: "center", marginTop: -80 }}>
          <View style={styles.scoreboard}>
            <Image
              source={require("~/assets/img/cards.png")}
              style={{ width: 30, height: 30 }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ fontSize: 50, fontWeight: "500", color: "#fff" }}>
                {this.state.scoreNos}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "100",
                  margin: 20,
                  color: "#909090"
                }}
              >
                x
              </Text>
              <Text style={{ fontSize: 50, fontWeight: "500", color: "#fff" }}>
                {this.state.scoreEles}
              </Text>
            </View>
            <Text style={{ color: "#909090" }}>
              {this.state.partidasNos} x {this.state.partidasEles}
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 20
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "500" }}>Nós</Text>
            <Text style={{ color: "#fff", fontWeight: "500" }}>Eles</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={() => this.addScoreNos()}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "#1b1b1b",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 20 }}>+1</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.scoreNos == 0 ? true : false}
                onPress={() => this.removeScoreNos()}
                style={{ opacity: this.state.scoreNos == 0 ? 0.5 : 1 }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "#1b1b1b",
                    marginLeft: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 20 }}>-1</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 2,
                height: 150,
                marginTop: -50,
                backgroundColor: "#1b1b1b"
              }}
            />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={() => this.addScoreEles()}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "#1b1b1b",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 20 }}>+1</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.scoreEles == 0 ? true : false}
                onPress={() => this.removeScoreEles()}
                style={{ opacity: this.state.scoreEles == 0 ? 0.5 : 1 }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "#1b1b1b",
                    marginLeft: 20,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 20 }}>-1</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => this.resetScore()}>
              <View
                style={{
                  width: Dimensions.get("window").width - 200,
                  height: 40,
                  marginTop: 50,
                  borderRadius: 1,
                  borderWidth: 1,
                  borderColor: "rgb(129,129,129)",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "rgb(129,129,129)" }}>ZERAR PLACAR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212"
  },
  header: {
    borderBottomColor: "#fff",
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 40
  },
  scoreboard: {
    width: Dimensions.get("window").width - 40,
    height: 160,
    backgroundColor: "#1b1b1b",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  resetButton: {
    marginTop: 50,
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: "#fff",
    width: Dimensions.get("window").width - 40,
    height: 50
  }
});

export default Home;
