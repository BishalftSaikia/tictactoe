import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Svg, { Path, Circle } from "react-native-svg";
import { getStatusBarHeight } from "react-native-status-bar-height";

const XSvgComponent = (
  <Svg width={33.333} height={33.333}>
    <Path d="M33.333 3.333L30 0 16.667 13.333 3.333 0 0 3.333l13.333 13.334L0 30l3.333 3.333L16.667 20 30 33.333 33.333 30 20 16.667z" />
  </Svg>
);
const OSvgComponent = (
  <Svg
    width={33.333}
    height={33.333}
    fill="none"
    stroke="black"
    strokeWidth="4"
  >
    <Circle cx={16} cy={16} r={13} />
  </Svg>
);
const statusBarHeight = getStatusBarHeight();
export default class App extends Component {
  state = {
    player: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    clicked: false
  };

  onClick = index => {
    let arr = [].concat(this.state.player);
    if (arr[index] == 0) {
      if (this.state.clicked) {
        arr[index] = 1;
      } else {
        arr[index] = 2;
      }
      this.state.clicked = !this.state.clicked;
      this.checkWinningState(arr);
      this.setState({ player: arr });
    }
  };
  svgLogic = index => {
    if (this.state.player[index] == 1) {
      return XSvgComponent;
    } else if (this.state.player[index] == 2) {
      return OSvgComponent;
    }
  };
  newGame = () => {
    let arr = [].concat(this.state.player);
    for (i = 0; i < arr.length; i++) {
      arr[i] = 0;
    }
    this.setState({ player: arr, clicked: false });
  };
  checkWinningState = arr => {
    //let arr = [].concat(this.state.player);
    for (i = 0; i < arr.length; i += 3) {
      if (arr[i] == arr[i + 1] && arr[i] == arr[i + 2] && arr[i] == 1) {
        alert("Winner : Player 2");
      } else if (arr[i] == arr[i + 1] && arr[i] == arr[i + 2] && arr[i] == 2) {
        alert("Winner : Player 1");
      }
    }
    for (i = 0; i < 3; i++) {
      if (arr[i] == arr[i + 3] && arr[i] == arr[i + 6] && arr[i] == 1) {
        alert("Winner : Player 2");
      } else if (arr[i] == arr[i + 3] && arr[i] == arr[i + 6] && arr[i] == 2) {
        alert("Winner : Player 1");
      }
    }
    if (arr[0] == arr[4] && arr[0] == arr[8] && arr[0] == 1) {
      alert("Winner : Player 2");
    } else if (arr[0] == arr[4] && arr[0] == arr[8] && arr[0] == 2) {
      alert("Winner : Player 1");
    } else if (arr[2] == arr[4] && arr[2] == arr[6] && arr[2] == 1) {
      alert("Winner : Player 2");
    } else if (arr[2] == arr[4] && arr[2] == arr[6] && arr[2] == 2) {
      alert("Winner : Player 1");
    }
  };
  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            height: statusBarHeight,
            width: "100%",
            backgroundColor: "#212121"
          }}
        />
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              aspectRatio: 6 / 1,
              flexDirection: "row",
              backgroundColor: "#212121"
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-start",
                paddingLeft: 18
              }}
            >
              <Text
                style={{
                  color: "#FF9500",
                  fontSize: 16
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16
                }}
              >
                Tic Tac Toe
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-end",
                paddingRight: 18
              }}
              onPress={() => this.newGame()}
            >
              <Text style={{ color: "#FF9500", fontSize: 16 }}>New Game</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              aspectRatio: 5 / 4,
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <View style={{ width: "70%", height: "80%" }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightWidth: 0.5,
                    borderBottomWidth: 0.5
                  }}
                  onPress={() => this.onClick(0)}
                >
                  {this.svgLogic(0)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightWidth: 0.5,
                    borderBottomWidth: 0.5,
                    borderLeftWidth: 0.5
                  }}
                  onPress={() => this.onClick(1)}
                >
                  {this.svgLogic(1)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 0.5,
                    borderLeftWidth: 0.5
                  }}
                  onPress={() => this.onClick(2)}
                >
                  {this.svgLogic(2)}
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightWidth: 0.5,
                    borderBottomWidth: 0.5,
                    borderTopWidth: 0.5
                  }}
                  onPress={() => this.onClick(3)}
                >
                  {this.svgLogic(3)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightWidth: 0.5,
                    borderBottomWidth: 0.5,
                    borderTopWidth: 0.5,
                    borderLeftWidth: 0.5
                  }}
                  onPress={() => this.onClick(4)}
                >
                  {this.svgLogic(4)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderLeftWidth: 0.5,
                    borderBottomWidth: 0.5,
                    borderTopWidth: 0.5
                  }}
                  onPress={() => this.onClick(5)}
                >
                  {this.svgLogic(5)}
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightWidth: 0.5,
                    borderTopWidth: 0.5
                  }}
                  onPress={() => this.onClick(6)}
                >
                  {this.svgLogic(6)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRightWidth: 0.5,
                    borderLeftWidth: 0.5,
                    borderTopWidth: 0.5
                  }}
                  onPress={() => this.onClick(7)}
                >
                  {this.svgLogic(7)}
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderLeftWidth: 0.5,
                    borderTopWidth: 0.5
                  }}
                  onPress={() => this.onClick(8)}
                >
                  {this.svgLogic(8)}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              aspectRatio: 5 / 4,
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 20, color: "black" }}>
              {this.state.clicked ? "Player 2" : "Player 1"}
            </Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
