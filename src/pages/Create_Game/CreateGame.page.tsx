import React, { useEffect } from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import CustomText from "../../components/CustomText";
import CustomButton from "../../components/CustomButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import Item from "../../components/Item";
import styles from "./styles";

interface UserData {
  id: string;
  username: string;
  statut: string;
}

const DATA: UserData[] = [
  { id: "1", username: "WSM", statut: "Prêt" },
  { id: "2", username: "Captain Juliano", statut: "En attente" },
];

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, "MainMenu">;
  // route: RouteProp<RootStackParamList, "CreateGame">;
}

export const CreateGame: React.FC<MainMenuProps> = ({ navigation}) => {
  const ws = new WebSocket("wss://space-operators-bb2423167918.herokuapp.com");

  const gameId = 85;
  const renderItem = ({ item }: { item: UserData }) => (
    <Item username={item.username} statut={item.statut} />
  );

  const handleQuit = () => {
    navigation.navigate("MainMenu");
  };

  const handleJoinGame = () => {
    console.log("Rejoindre une partie");
  };

  useEffect(() => {
    ws.onopen = () => {
      console.log("WebSocket ouvert");

      // premier joueur
      const player1Data = {
        type: "connect",
        data: {
          gameId: gameId,
          playerId: "1",
          playerName: "WSM",
        },
      };
      ws.send(JSON.stringify(player1Data));

      // deuxième joueur
      const player2Data = {
        type: "connect",
        data: {
          gameId: gameId,
          playerId: "2",
          playerName: "Juliano",
        },
      };
      ws.send(JSON.stringify(player2Data));
    };

    ws.onclose = () => {
      console.log("WebSocket fermé");
    };

    ws.onmessage = (event) => {
      console.log("Message reçu :", event.data);
      if (event.data === "ping") {
        ws.send("pong");
        console.log("pong");
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <SafeAreaView style={styles.containermain}>
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>ID PARTIE : {gameId}</CustomText>
        <CustomButton title="Quitter" onPress={handleQuit} />
      </View>
      <View style={styles.contentWithoutTitle}>
        <View style={styles.actions}>
          <CustomButton
            title="Demarrer la partie"
            onPress={handleJoinGame}
          ></CustomButton>
        </View>
        <View style={styles.usersContainer}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.usersList}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateGame;