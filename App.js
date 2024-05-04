import { StyleSheet, View } from "react-native";
import { ImageBackground, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import cat from "./cat.jpg";
import laugh from "./assets/laugh.mp3";

export default function App() {
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(laugh);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    playSound();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
        }}
        source={cat}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={styles.full}
          onPress={playSound}
        ></TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  full: {
    width: "100%",
    height: "100%",
  },
});
