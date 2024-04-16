import * as React from "react";
import { View, SafeAreaView, Image, TouchableOpacity, Modal, Text, StyleSheet, TextInput, Platform } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";
import CustomButton from "../../components/CustomButton";
import CustomText from "../../components/CustomText";
import styles from "./styles";
import CustomView from "../../components/CustomView";
import CustomText2 from "../../components/CustomText2";

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, "MainMenu">;
}

const MainMenu: React.FC<MainMenuProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const [modalVisibleChangeName, setModalVisibleChangeName] = React.useState(false);
  const [modalVisibleJoinGame, setModalVisibleJoinGame] = React.useState(false);
  const [newName, setNewName] = React.useState('');
  const [userName, setUserName] = React.useState('Juliano Capitain');
  const [roomName, setRoomName] = React.useState("");

  const handleCreateGame = () => {
    navigation.navigate("CreateGame", { gamerId: "7" });
  };

  // const handleCreateGame = () => {
  //   // Envoyer une requête POST
  //   fetch("https://space-operators-bb2423167918.herokuapp.com/create-game", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     // body: JSON.stringify({ gamerId: "7" }) // Vous pouvez inclure d'autres données ici si nécessaire
  //   })
  //     .then(response => {
  //       // Gérer la réponse
  //       if (!response.ok) {
  //         throw new Error("Erreur lors de la création du jeu");
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Traiter les données de réponse si nécessaire
  //       console.log("Réponse de la création du jeu:", data);
  //     })
  //     .catch(error => {
  //       // Gérer les erreurs
  //       console.error("Erreur lors de la création du jeu:", error);
  //     });
  // };


  const handleJoinGame = () => {
    if (Platform.OS === 'ios') {
      navigation.navigate("Help");
    } else {
      setModalVisibleJoinGame(true);
    }
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

const handleChangeName = () => {
  if (Platform.OS === 'ios') {
    // navigation.navigate("ChangeNameIos", { currentName: userName });
    navigation.navigate("Help");
  } else {
    setModalVisibleChangeName(true);
  }
};

  const handleHelp = () => {
    navigation.navigate("Help");
    console.log("Help");
  };

  const handleInformation = () => {
    navigation.navigate("Information");
    console.log("Information");
  };

  const handleShop = () => {
    navigation.navigate("Shop");
    console.log("Shop");
  };

  const toggleModalChangeName = () => {
    setModalVisibleChangeName(!modalVisibleChangeName);
  };

  const handleSubmitName = () => {
    console.log("New Name:", newName);
    
    if (newName !== "")
    {
      setUserName(newName);
    }
    toggleModalChangeName();
  };

  const handleChangeNameJoinGame = () => {
    setModalVisibleJoinGame(true);
  };

  const handleSubmitNameJoinGame = () => {
    console.log("New Name:", newName);
    if (newName !== "")
    {
      setUserName(newName);
    }
    setModalVisibleJoinGame(false);
  };

  const toggleModalJoinGame = () => {
    setModalVisibleJoinGame(!modalVisibleJoinGame);
  };

  const userId = "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"

  return (
    <SafeAreaView style={styles.containermain}>
      <View style={styles.container}>
        <View style={styles.playerContainer}>
          <TouchableOpacity onPress={handleChangeName}>
            <Feather name="edit" size={20} color="white" />
          </TouchableOpacity>
          <CustomText2 textSize="medium" color="white" text={userName} />
          <Image
            source={require("./assets/astronaute.jpg")} // Assurez-vous que le chemin de l'image est correct
            style={styles.image}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomView flexDirection="row">
            <CustomText2 textSize="medium" color="white" text="ID :" />
            <CustomText2 textSize="medium" color="white" text={userId} />
          </CustomView>
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
        <TouchableOpacity onPress={handleShop}>
        <Feather name="shopping-cart" size={50} color="white" />
        </TouchableOpacity>
      </View>

      {/* Modal pour changer le nom */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleChangeName}
        onRequestClose={toggleModalChangeName}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>CHANGER SON NOM</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setNewName(text)}
              value={newName}
              placeholder="NOUVEAU NOM"
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={handleSubmitName}
              >
                <Text style={styles.buttonText}>VALIDER</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={toggleModalChangeName}
              >
                <Text style={styles.buttonText}>ANNULER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal pour rejoindre une partie */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleJoinGame}
        onRequestClose={toggleModalJoinGame}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>REJOINDRE UNE PARTIE</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setNewName(text)}
              value={newName}
              placeholder="Votre nom"
            />
            <TextInput

              style={styles.input}
              onChangeText={text => setRoomName(text)}
              value={roomName}
              placeholder="Nom de la salle"
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.submitButton]}
                onPress={handleSubmitNameJoinGame}
              >
                <Text style={styles.buttonText}>REJOINDRE</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={toggleModalJoinGame}
              >
                <Text style={styles.buttonText}>ANNULER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MainMenu;
