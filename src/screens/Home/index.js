import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image
} from "react-native";
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

import { styles } from "./styles";

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
      scoreTime2: 0,
      scoreTime1: 0,
      partidasTime1: 0,
      partidasTime2: 0,
      darkMode: true,
      truco: false,
      gestureName: "none"
    };
  }
  static navigationOptions = {
    header: null
  };

  onSwipeUpTime1(gestureState) {
    this.addScoreTime1();
  }

  onSwipeDownTime1(gestureState) {
    this.removeScoreTime1();
  }

  onSwipeTime1(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        this.removeScoreTime1();
        break;
      case SWIPE_DOWN:
        this.addScoreTime1();
        break;
    }
  }

  onSwipeTime2(gestureName, gestureState) {
    const { SWIPE_UP, SWIPE_DOWN } = swipeDirections;
    this.setState({ gestureName: gestureName });
    switch (gestureName) {
      case SWIPE_UP:
        this.removeScoreTime2();
        break;
      case SWIPE_DOWN:
        this.addScoreTime2();
        break;
    }
  }

  addScoreTime1 = () => {
    if (this.state.scoreTime1 >= 11) {
      if (this.state.scoreTime1 < 12) {
        this.setState({ scoreTime1: this.state.scoreTime1 + 1 });
      }
      Alert.alert(
        "O Time 1 venceu!",
        "Deseja continuar a partida?",
        [
          {
            text: "Não",
            onPress: () => this.resetScore(),
            style: "destructive"
          },
          {
            text: "Sim",
            onPress: () =>
              this.setState({
                scoreTime1: 0,
                scoreTime2: 0,
                partidasTime1: this.state.partidasTime1 + 1
              })
          }
        ],
        { cancelable: false }
      );
    } else {
      if (this.state.truco === true) {
        this.setState({
          scoreTime1: this.state.scoreTime1 + 3
        });
      } else {
        this.setState({
          scoreTime1: this.state.scoreTime1 + 1
        });
      }
    }
  };

  removeScoreTime1 = () => {
    if (this.state.scoreTime1 >= 1) {
      if (this.state.truco === true) {
        this.setState({ scoreTime1: this.state.scoreTime1 - 3 });
      } else {
        this.setState({ scoreTime1: this.state.scoreTime1 - 1 });
      }
    }
  };

  addScoreTime2 = () => {
    if (this.state.scoreTime2 >= 11) {
      if (this.state.scoreTime2 < 12) {
        this.setState({ scoreTime2: this.state.scoreTime2 + 1 });
      }
      Alert.alert(
        "O Time 2 venceu!",
        "Deseja continuar a partida?",
        [
          {
            text: "Não",
            onPress: () => this.resetScore(),
            style: "destructive"
          },
          {
            text: "Sim",
            onPress: () =>
              this.setState({
                scoreTime2: 0,
                scoreTime1: 0,
                partidasTime2: this.state.partidasTime2 + 1
              })
          }
        ],
        { cancelable: false }
      );
    } else {
      if (this.state.truco === true) {
        this.setState({
          scoreTime2: this.state.scoreTime2 + 3
        });
      } else {
        this.setState({
          scoreTime2: this.state.scoreTime2 + 1
        });
      }
    }
  };

  removeScoreTime2 = () => {
    if (this.state.scoreTime2 >= 1) {
      if (this.state.truco === true) {
        this.setState({ scoreTime2: this.state.scoreTime2 - 3 });
      } else {
        this.setState({ scoreTime2: this.state.scoreTime2 - 1 });
      }
    }
  };

  resetScore = () => {
    Alert.alert(
      "Cuidado",
      "Você deseja reiniciar a partida?",
      [
        {
          text: "Não"
        },
        {
          text: "Sim",
          style: "destructive",
          onPress: () =>
            this.setState({
              scoreTime1: 0,
              scoreTime2: 0,
              partidasTime1: 0,
              partidasTime2: 0
            })
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 80
    };
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={"transparent"}
          translucent
        />
        <Image source={require("~/assets/img/bg.jpg")} style={styles.bg} />
        <View style={styles.scoreCard}>
          <View style={styles.scoreboard}>
            <Image
              source={require("~/assets/img/cards.png")}
              style={styles.iconCard}
            />
            <View style={styles.pontuacao}>
              <GestureRecognizer
                onSwipe={(direction, state) =>
                  this.onSwipeTime1(direction, state)
                }
                config={config}
              >
                <Text style={styles.scoreText}>{this.state.scoreTime1}</Text>
              </GestureRecognizer>
              <Text style={styles.x}>x</Text>
              <TouchableOpacity onPress={() => this.addScoreTime2()}>
                <Text style={styles.scoreText}>{this.state.scoreTime2}</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ color: "#909090" }}>
              {this.state.partidasTime1} x {this.state.partidasTime2}
            </Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.timeSeparator}>
            <Text style={styles.text500}>Time 1</Text>
            <Text style={styles.text500}>Time 2</Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={() => this.setState({ scoreTime1: this.state.scoreTime1 + 3})}>
                <View style={styles.addButton}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>+3</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.scoreTime1 == 0 ? true : false}
                onPress={() => this.setState({ scoreTime1: this.state.scoreTime1 - 3})}
                style={{ opacity: this.state.scoreTime1 == 0 ? 0.5 : 1 }}
              >
                <View style={styles.menos}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>-3</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={() => this.addScoreTime2()}>
                <View style={styles.addButton}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>+3</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.scoreTime2 == 0 ? true : false}
                onPress={() => this.removeScoreTime2()}
                style={{ opacity: this.state.scoreTime2 == 0 ? 0.5 : 1 }}
              >
                <View style={styles.menos}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>-3</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: -30
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={() => this.addScoreTime1()}>
                <View style={styles.addButton}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>+9</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.scoreTime1 == 0 ? true : false}
                onPress={() => this.removeScoreTime1()}
                style={{ opacity: this.state.scoreTime1 == 0 ? 0.5 : 1 }}
              >
                <View style={styles.menos}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>-9</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={() => this.addScoreTime2()}>
                <View style={styles.addButton}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>+9</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.scoreTime2 == 0 ? true : false}
                onPress={() => this.removeScoreTime2()}
                style={{ opacity: this.state.scoreTime2 == 0 ? 0.5 : 1 }}
              >
                <View style={styles.menos}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>-9</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: -30
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={() => this.addScoreTime1()}>
                <View style={styles.addButton}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>+12</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.scoreTime1 == 0 ? true : false}
                onPress={() => this.removeScoreTime1()}
                style={{ opacity: this.state.scoreTime1 == 0 ? 0.5 : 1 }}
              >
                <View style={styles.menos}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>-12</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={() => this.addScoreTime2()}>
                <View style={styles.addButton}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>+12</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={this.state.scoreTime2 == 0 ? true : false}
                onPress={() => this.removeScoreTime2()}
                style={{ opacity: this.state.scoreTime2 == 0 ? 0.5 : 1 }}
              >
                <View style={styles.menos}>
                  <Text style={{ color: "#fff", fontSize: 19 }}>-12</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={() => this.resetScore()}>
              <View style={styles.buttonOutline}>
                <Text style={{ color: "rgb(129,129,129)", fontSize: 12 }}>
                  ZERAR PLACAR
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Home;
