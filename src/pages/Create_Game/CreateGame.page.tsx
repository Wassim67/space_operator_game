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
  username: string;
  statut: boolean;
}

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, "MainMenu">;
}

const CreateGame: React.FC<MainMenuProps> = ({ navigation }) => {
  const [players, setPlayers] = useState<UserData[]>([]);
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

  const renderItem = ({ item }: { item: UserData }) => {
    console.log(item.statut, "statut");
    return (
      <Item username={gamerName} statut={item.statut ? "Prêt" : "Occupé"} />
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
            title="Démarrer la partie"
            onPress={handleChangeStatut}
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
