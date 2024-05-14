import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, TextInput, View, Alert } from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import styles from "./styles";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import useWebSocket from "../../websocket";
import Player from "../../type/Player";

const JoinGame: React.FC<{
  navigation: StackNavigationProp<RootStackParamList, "MainMenu">;
}> = ({ navigation }) => {
  const [gameId, setGameId] = useState("");
  const [playerName, setPlayerName] = useState("");
  const errorHandledRef = useRef(false);
  const route = useRoute<RouteProp<RootStackParamList, "JoinGame">>();
  const [players, setPlayers] = useState<Player[]>([]);
  const gamerId = route.params?.gamerId;

  useEffect(() => {
    if (gameId && playerName && gamerId) {
      useWebSocket(
        gameId,
        gamerId,
        playerName,
        navigation,
        setPlayers,
        errorHandledRef
      );
    }
  }, [gameId, playerName, gamerId, navigation]);

  const handleJoinGame = () => {
    if (!gameId || !playerName) {
      console.log("Veuillez remplir tous les champs.");
      return;
    }

    navigation.navigate("CreateGame", {
      gameId: gameId,
      gamerId: uuidv4(),
      gamerName: playerName,
    });
  };

  const handleQuit = () => {
    navigation.navigate("MainMenu");
  };

  return (
    <SafeAreaView style={styles.containermain}>
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>Connexion à une partie</CustomText>
        <CustomButton title="Quitter" onPress={handleQuit} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="ID de la salle"
          value={gameId}
          onChangeText={setGameId}
        />
        <TextInput
          style={styles.input}
          placeholder="Nom du joueur"
          value={playerName}
          onChangeText={setPlayerName}
        />
        <CustomButton title="Rejoindre la partie" onPress={handleJoinGame} />
      </View>
    </SafeAreaView>
  );
};

export default JoinGame;
