import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { Audio } from "expo-av";

const colorList = {
  1: "#D63031",
  2: "#AE1438",
  3: "#0A79DF",
  4: "#0A3D62",
  5: "#26ae60",
  6: "#218F76",
  7: "#F3B63A",
  8: "#7B8788",
  9: "#4C4B4B",
  10: "#1287A5",
};

const soundList = {
  1: require("./assets/one.wav"),
  2: require("./assets/two.wav"),
  3: require("./assets/three.wav"),
  4: require("./assets/four.wav"),
  5: require("./assets/five.wav"),
  6: require("./assets/six.wav"),
  7: require("./assets/seven.wav"),
  8: require("./assets/eight.wav"),
  9: require("./assets/nine.wav"),
  10: require("./assets/ten.wav"),
};

export default function App() {
  const playSound = async (number) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(soundList[number]);
      await soundObject.playAsync().then((status) => {
        setTimeout(() => {
          soundObject.unloadAsync();
        }, status.durationMillis);
      });
      // Your sound is playing!
    } catch (error) {
      console.log("error in loading sound.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        <Image style={styles.logo} source={require("./assets/logo.png")} />

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: colorList[1] }, styles.item]}
            onPress={() => playSound(1)}
          >
            <Text style={styles.itemText}>One</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorList[2] }, styles.item]}
            onPress={() => playSound(2)}
          >
            <Text style={styles.itemText}>two</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorList[3] }, styles.item]}
            onPress={() => playSound(3)}
          >
            <Text style={styles.itemText}>three</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: colorList[4] }, styles.item]}
            onPress={() => playSound(4)}
          >
            <Text style={styles.itemText}>four</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorList[5] }, styles.item]}
            onPress={() => playSound(5)}
          >
            <Text style={styles.itemText}>five</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorList[6] }, styles.item]}
            onPress={() => playSound(6)}
          >
            <Text style={styles.itemText}>six</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[{ backgroundColor: colorList[7] }, styles.item]}
            onPress={() => playSound(7)}
          >
            <Text style={styles.itemText}>seven</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorList[8] }, styles.item]}
            onPress={() => playSound(8)}
          >
            <Text style={styles.itemText}>eight</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[{ backgroundColor: colorList[9] }, styles.item]}
            onPress={() => playSound(9)}
          >
            <Text style={styles.itemText}>nine</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[{ backgroundColor: colorList[10] }, styles.item]}
          onPress={() => playSound(10)}
        >
          <Text style={styles.itemText}>ten</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  gridContainer: {
    flex: 1,
    margin: 5,
    marginBottom: 60,
  },

  logo: {
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 15,
  },

  rowContainer: {
    flexDirection: "row",
  },

  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },

  itemText: {
    color: "white",
    fontSize: 20,
  },
});
