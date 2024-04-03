import * as React from "react";
import { View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import styles from "./styles";

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, "MainMenu">;
}

const MainMenu: React.FC<MainMenuProps> = ({ navigation }) => {
  const { t } = useTranslation();

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

  const handleSetting = () => {
    navigation.navigate("Settings");
    console.log("Settings");
  };
  // change name
  const handleChangeName = () => {
    navigation.navigate("ChangeName"); // Naviguer vers la page ChangeName
  };

  const handleHelp = () => {
    navigation.navigate("Help");
    console.log("Help");
  };

  const handleInformation = () => {
    navigation.navigate("Information");
    console.log("Information");
  };

  return (
    <SafeAreaView style={styles.containermain}>
      <View style={styles.container}>
        <View style={styles.playerContainer}>
          <TouchableOpacity onPress={handleChangeName}>
            <Feather name="edit" size={20} color="white" />
          </TouchableOpacity>
          <CustomText style={styles.title}>Juliano Capitain</CustomText>
          <Image
            source={require("./assets/astronaute.jpg")} // Assurez-vous que le chemin de l'image est correct
            style={styles.image}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomText style={styles.title}>
            ID : a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11
          </CustomText>
          <CustomButton
            title={t("main_menu.create_game")}
            onPress={handleCreateGame}
          />
          <CustomButton
            title={t("main_menu.join_game")}
            onPress={handleJoinGame}
          />
          <CustomButton
            title={t("main_menu.history")}
            onPress={handleHistory}
          />
          <CustomButton title={t("main_menu.exit_game")} onPress={handleExit} />
        </View>
      </View>
      <View style={styles.boutique}>
        <TouchableOpacity onPress={handleSetting}>
          <Ionicons name="settings-outline" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHelp}>
          <AntDesign name="questioncircleo" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInformation}>
          <Ionicons
            name="information-circle-outline"
            size={60}
            color="white"
          />
        </TouchableOpacity>
        <Feather name="shopping-cart" size={50} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default MainMenu;
