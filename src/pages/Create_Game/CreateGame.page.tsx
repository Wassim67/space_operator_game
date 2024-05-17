import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView, FlatList, View, Alert } from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import Item from "../../components/Item";
import styles from "./styles";
import axios from "axios";
import useWebSocketConnection from "../../websocket/websocketConnection";
import useWebSocketMessageHandler from "../../websocket/websocketMessageHandler";
import Player from "../../type/Player";
import Operator from "../Operator/Operator.page";
import Instructor from "../Instructor/Instructor.page";

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, "MainMenu">;
}

const CreateGame: React.FC<MainMenuProps> = ({ navigation }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [role, setRole] = useState<string>("");
  const errorHandledRef = useRef(false);

  const route = useRoute<RouteProp<RootStackParamList, "CreateGame">>();
  const gameId = route.params?.gameId;
  const gamerName = route.params?.gamerName;
  const gamerId = route.params?.gamerId;

  const ws = useWebSocketConnection(gameId, gamerId, gamerName, navigation);
  useWebSocketMessageHandler(
    setPlayers,
    navigation,
    gameId,
    gamerId,
    gamerName
  );
  useEffect(() => {
    return () => {
      ws.current?.close();
    };
  }, []);

  const handleChangeStatut = () => {
    console.log(gamerId);
    if (players.length === 1) {
      Alert.alert("Impossible", "Vous êtes seul dans la partie.");
      return;
    }
    axios
      .post(
        `https://space-operators-bb2423167918.herokuapp.com/ready/${gamerId}`
      )
      .then(() => {
        // setRole("instructeur");
      })
      .catch((error) => {
        console.error("Erreur lors du changement de statut :", error);
        Alert.alert("Erreur", "Impossible de changer le statut.");
      });
  };
  const startGame = () => {
    if (players.length < 2 || !players.every((player) => player.status)) {
      Alert.alert("Erreur", "Les utilisateurs ne sont pas prêts");
    } else {
      axios
        .post(`https://space-operators-bb2423167918.herokuapp.com/create-game`)
        .then((response) => {
          console.log("Réponse de la création de la partie :", response.data);
          console.log(players, "stocker les players");
          sendStartRequest(gameId);
        })
        .catch((error) => {
          console.error("Erreur lors de la création de la partie :", error);
          Alert.alert("Erreur", "Impossible de créer une partie.");
        });
    }
  };
  

  const sendStartRequest = (gameId: string) => {
    const startRequest = {
      type: "start",
      data: {
        gameId: gameId,
      },
    };
    ws.current?.send(JSON.stringify(startRequest));
  };

  const renderItem = ({ item }: { item: Player }) => {
    console.log(item);
    if (item.role === "operator") {
      return <Operator navigation={navigation} />;
    } else if (item.role === "instructor") {
      return <Instructor navigation={navigation} />;
    } else {
      return (
        <Item
          username={item.name}
          statut={item.status ? "Prêt" : "Occupé"}
          role={item.role}
        />
      );
    }
  };

  const handleQuit = () => {
    navigation.navigate("MainMenu");
  };

  return (
    <SafeAreaView style={styles.containermain}>
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>ID PARTIE : {gameId}</CustomText>
        <CustomButton title="Quitter" onPress={handleQuit} />
      </View>
      <View style={styles.contentWithoutTitle}>
        <View style={styles.actions}>
          <CustomButton
            title="pret"
            onPress={handleChangeStatut}
          ></CustomButton>
          <CustomButton
            title="Démarrer la partie"
            onPress={startGame}
          ></CustomButton>
        </View>
        <View style={styles.usersContainer}>
          <FlatList
            data={players}
            renderItem={renderItem}
            keyExtractor={(item) =>
              item.id ? item.id.toString() : Math.random().toString()
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.usersList}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateGame;
