import * as React from "react";
import {
  StatusBar,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import { t } from "i18next";

interface Credits {
  navigation: NavigationProp<RootStackParamList, "Credits">;
}

export const Credits: React.FC<Credits> = ({ navigation }) => {
  const handleQuit = () => {
    navigation.navigate("Information");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/MainMenu_SPACE_GAME.jpg")}
        style={styles.image}
      />
      <TouchableOpacity style={styles.button} onPress={handleQuit}>
        <Text style={styles.buttonText}>{t("Credits.exit")}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  button: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Credits;
