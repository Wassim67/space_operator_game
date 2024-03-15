import React from "react";
import { SafeAreaView, FlatList, View } from "react-native";
import CustomText from "../../components/CustomText";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import Item from "../../components/Item";
import styles from "./styles";
import CustomButton from "../../components/CustomButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../RootStackParamList";

interface UserData {
  id: string;
  username: string;
  statut: string;
}

const DATA: UserData[] = [
  { id: "1", username: "WSM", statut: "Prêt" },
  { id: "2", username: "Captain Juliano", statut: "En attente" },
  { id: "3", username: "kjj", statut: "En attente" },
  { id: "4", username: "kjj", statut: "En attente" },
  { id: "5", username: "kjj", statut: "En attente" },
  { id: "6", username: "kjj", statut: "En attente" },
  { id: "7", username: "kjj", statut: "En attente" },
  { id: "8", username: "kjj", statut: "En attente" },
];

interface MainMenuProps {
  navigation: StackNavigationProp<RootStackParamList, "MainMenu">;
}

export const CreateGame: React.FC<MainMenuProps> = ({ navigation }) => {
  const renderItem = ({ item }: { item: UserData }) => (
    <Item username={item.username} statut={item.statut} />
  );
  const handleQuit = () => {
    navigation.navigate("MainMenu");
  };

  const handleJoinGame = () => {
    console.log("Rejoindre une partie");
  };
  return (
    <SafeAreaView style={styles.containermain}>
      <View style={styles.titleContainer}>
        <CustomText style={styles.title}>ID PARTIE : 120403</CustomText>
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
