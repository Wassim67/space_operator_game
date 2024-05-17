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
import useWebSocket from "../../websocket";

interface UserData {
  id: string;
  name: string;
  status: boolean;
}

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, "MainMenu">;
}

const CreateGame: React.FC<MainMenuProps> = ({ navigation }) => {
  const [players, setPlayers] = useState<UserData[]>([]);
  const [role, setRole] = useState<string>("");
  const errorHandledRef = useRef(false);

  const route = useRoute<RouteProp<RootStackParamList, "CreateGame">>();
  const gameId = route.params?.gameId;
  const gamerName = route.params?.gamerName;
  const gamerId = route.params?.gamerId;

  // Define ws outside the useEffect hook
  const ws = useWebSocket(
    gameId,
    gamerId,
    gamerName,
    navigation,
    setPlayers,
    setRole,
    errorHandledRef
  );

  useEffect(() => {
    return () => {
      // Close the WebSocket connection when the component unmounts
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
      .catch((error) => {
        console.error("Erreur lors du changement de statut :", error);
        Alert.alert("Erreur", "Impossible de changer le statut.");
      });
  };

  // const startGame = () => {
  //   if(players.length < 2 || !players.every((player) => player.status)){
  //     Alert.alert("Erreur", "Les utilisateurs ne sont pas prêts");
  //   }
  //   else{
  //     axios
  //     .post(`https://space-operators-bb2423167918.herokuapp.com/create-game`)
  //     .then((response) => {
  //       console.log("Réponse de la création de la partie :", response.data);
  //       sendStartRequest(gameId);
  //       navigation.navigate("Waiting")
  //     })
  //     .catch((error) => {
  //       console.error("Erreur lors de la création de la partie :", error);
  //       Alert.alert("Erreur", "Impossible de créer une pwartie.");
  //     });
  //   }
  // };

  const startGame = () => {
    // Vérifiez si tous les joueurs sont prêts et s'il y a plus d'un joueur dans la partie
    if (players.length < 2 || !players.every((player) => player.status)) {
      Alert.alert("Erreur", "Les utilisateurs ne sont pas prêts");
    } else {
      axios
        .post(`https://space-operators-bb2423167918.herokuapp.com/create-game`)
        .then((response) => {
          console.log("Réponse de la création de la partie :", response.data);
          // Vérifiez si le joueur n'est pas seul dans la partie
          if (players.length > 1) {
            sendStartRequest(gameId);
            navigation.navigate("Waiting", { gameId: response.data.id, operationData: operationData }); // Transmettez les données de l'opération à la page "Waiting"
          } else {
            Alert.alert("Impossible", "Vous êtes seul dans la partie.");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la création de la partie :", error);
          Alert.alert("Erreur", "Impossible de créer une partie.");
        });
    }
  };
  

  const sendStartRequest = (gameId: string) => {
    // Envoyer une demande de démarrage de partie au serveur via WebSocket
    const startRequest = {
        type: "start",
        data: {
            gameId: gameId
        }
    };
    ws.current?.send(JSON.stringify(startRequest));
  };

  const renderItem = ({ item }: { item: UserData }) => {
    console.log(item.status, "statut");
    return (
      <Item username={item.name} statut={item.status ? "Prêt" : "Occupé"} />
    );
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
