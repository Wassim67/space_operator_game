import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import styles from "./styles";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/MainMenu_SPACE_GAME.jpg")}
        style={styles.image}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default SplashScreen;
