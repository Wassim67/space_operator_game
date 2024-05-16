import { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
} from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import styles from "./styles";
import stylesTablet from "./styleTablet"; // Importer les styles spécifiques pour tablette
import {
  playAmbientSound,
  stopAmbientSound,
  playClickSound,
} from "../../core/AmbientSound/AmbientSound"; // Importation des fonctions du son d'ambiance
import axios from "axios";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, "MainMenu">;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MainMenu: React.FC<MainMenuProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const [gamerName, setGamerName] = useState("Default Capitain");
  const [modalVisible, setModalVisible] = useState(false); // State pour contrôler la visibilité de la fenêtre modale
  const [newGamerName, setNewGamerName] = useState(""); // State pour stocker le nouveau nom de joueur
  const gamerId = uuidv4();

  const handleSaveName = () => {
    setGamerName(newGamerName); // Mettre à jour le nom de joueur avec le nouveau nom
    setModalVisible(false); // Fermer la fenêtre modale
  };

  useEffect(() => {
    playAmbientSound(); // Démarrage du son d'ambiance lors du montage du composant
    return () => {
      stopAmbientSound(); // Arrêt du son d'ambiance lors du démontage du composant
    };
  }, []);

  const handleCreateGame = async () => {
    try {
      const response = await axios.post(
        "https://space-operators-bb2423167918.herokuapp.com/create-game"
      );
      const gameId = response.data.id;
      console.log(gameId);
      navigation.navigate("CreateGame", {
        gamerId: gamerId,
        gameId: gameId,
        gamerName: gamerName,
      });
      console.log(gameId);
    } catch (error) {
      console.error("Error creating game:", error);
    }
  };

  const handleExit = () => {
    console.log("Quitter");
  };

  const handleNavigate = (page: keyof RootStackParamList, params?: any) => {
    playClickSound(true);
    if (page === "CreateGame") {
      handleCreateGame();
    } else {
      navigation.navigate(page, params);
    }
  };

  // Utiliser les styles spécifiques pour tablette si la largeur de la fenêtre est suffisamment grande
  const dynamicStyles = windowWidth >= 600 ? stylesTablet : styles;

  return (
    <SafeAreaView style={dynamicStyles.containermain}>
      <View style={dynamicStyles.container}>
        <View style={dynamicStyles.playerContainer}>
          <CustomText style={dynamicStyles.title}>{gamerName}</CustomText>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <AntDesign name="edit" size={windowWidth * 0.05} color="white" />
          </TouchableOpacity>
          <Image
            source={require("./assets/astronaute.jpg")}
            style={[dynamicStyles.image, { resizeMode: "contain" }]}
          />
        </View>
        <View style={dynamicStyles.buttonContainer}>
          <CustomText style={dynamicStyles.title}>ID : {gamerId}</CustomText>
          <CustomButton
            title={t("main_menu.create_game")}
            onPress={() => handleNavigate("CreateGame", { gamerId: "7" })}
          />
          <CustomButton
            title={t("main_menu.join_game")}
            onPress={() => handleNavigate("JoinGame")}
          />
          <CustomButton
            title={t("main_menu.history")}
            onPress={() => handleNavigate("CreateGame")}
          />
          <CustomButton title={t("main_menu.exit_game")} onPress={handleExit} />
        </View>
      </View>
      <View style={dynamicStyles.boutique}>
        <TouchableOpacity onPress={() => handleNavigate("Settings")}>
          <Ionicons
            name="settings-outline"
            size={windowWidth * 0.1}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate("Help")}>
          <AntDesign
            name="questioncircleo"
            size={windowWidth * 0.1}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigate("Information")}>
          <Ionicons
            name="information-circle-outline"
            size={windowWidth * 0.1}
            color="white"
          />
        </TouchableOpacity>
        <Feather name="shopping-cart" size={windowWidth * 0.08} color="white" />
      </View>

      {modalVisible && (
        <View style={dynamicStyles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={dynamicStyles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={dynamicStyles.modalContent}>
            <CustomText style={dynamicStyles.modalTitle}>
              Modifier le nom de joueur
            </CustomText>
            <TextInput
              style={dynamicStyles.input}
              placeholder="Nouveau nom"
              onChangeText={(text) => setNewGamerName(text)}
              value={newGamerName}
            />
            <View style={dynamicStyles.modalButtons}>
              <CustomButton
                title="Annuler"
                onPress={() => setModalVisible(false)}
              />
              <CustomButton title="Enregistrer" onPress={handleSaveName} />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MainMenu;
