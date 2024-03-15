import * as React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import { NavigationProp } from "@react-navigation/native"; // Importer NavigationProp
import CustomButton from "../../components/CustomButton";
import styles from "./styles";
import CustomText from "../../components/CustomText";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { RootStackParamList } from "../../RootStackParamList";
import { StackNavigationProp } from "@react-navigation/stack";

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, "MainMenu">;
}
export const MainMenu: React.FC<MainMenuProps> = ({ navigation }) => {
  const handleCreateGame = () => {
    navigation.navigate("CreateGame", { gamerId: "7" });
  };

  const handleJoinGame = () => {
    console.log("Rejoindre une partie");
  };

  const handleHistory = () => {
    console.log("Historique");
  };

  const handleExit = () => {
    console.log("Quitter");
  };

  return (
    <SafeAreaView style={styles.containermain}>
      <View style={styles.container}>
        <View style={styles.playerContainer}>
          <CustomText style={styles.title}>Juliano Capitain</CustomText>
          <Image
            source={require("./assets/astronaute.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomText style={styles.title}>
            ID : a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11
          </CustomText>
          <CustomButton title="Créer une partie" onPress={handleCreateGame} />
          <CustomButton title="Rejoindre une partie" onPress={handleJoinGame} />
          <CustomButton title="Historique" onPress={handleHistory} />
          <CustomButton title="Quitter" onPress={handleExit} />
        </View>
      </View>
      <View style={styles.boutique}>
        <Ionicons name="settings-outline" size={50} color="white" />
        <AntDesign name="questioncircleo" size={50} color="white" />
        <Ionicons name="information-circle-outline" size={60} color="white" />
        <Feather name="shopping-cart" size={50} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default MainMenu;
