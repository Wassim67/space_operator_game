import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleProp,
  TextStyle,
  Image,
} from "react-native";
import CustomButton from "../../components/CustomButton";
import styles from "./styles";
import CustomText from "../../components/CustomText";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

// Utilisez NavigationProp avec votre objet ParamList
interface MainMenuProps {
  navigation: NavigationProp<any>;
}

export const MainMenu: React.FC<MainMenuProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const handleCreateGame = () => {
    console.log("Créer une partie");
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
          <CustomButton title={t("main_menu.create_game")} onPress={handleCreateGame} />
          <CustomButton title={t("main_menu.join_game")} onPress={handleJoinGame} />
          <CustomButton title={t("main_menu.history")} onPress={handleHistory} />
          <CustomButton title={t("main_menu.exit_game")} onPress={handleExit} />
        </View>
      </View>
      <View style={styles.boutique}>
        <TouchableOpacity onPress={handleSetting}>
          <Ionicons name="settings-outline" size={50} color="white" />
        </TouchableOpacity>
        <AntDesign name="questioncircleo" size={50} color="white" />
        <Ionicons name="information-circle-outline" size={60} color="white" />
        <Feather name="shopping-cart" size={50} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default MainMenu;
