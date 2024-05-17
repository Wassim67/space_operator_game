import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import CustomView from "../../components/CustomView";
import CustomText from "../../components/CustomText";

interface WaitingProps {
  navigation: NavigationProp<RootStackParamList, "Waiting">;
  route: any; // Ajoutez le type de route
}

const Waiting: React.FC<WaitingProps> = ({ navigation, route }) => {
  const { gameId, operationData } = route.params; // Récupérez l'ID de la partie et les données de l'opération des paramètres de route

  const handleQuit = () => {
    navigation.navigate("MainMenu");
  };
  const handleThank_You = () => {
    navigation.navigate("Thank_You");
  };
  const handleCredits = () => {
    navigation.navigate("Credits");
  };

  return (
    <SafeAreaView>
      <CustomView>
        <CustomText>En attente</CustomText>
      </CustomView>
    </SafeAreaView>
  );
};

export default Waiting;
