import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import CustomView from "../../components/CustomView";
import CustomText from "../../components/CustomText";

interface WaitingProps {
  navigation: NavigationProp<RootStackParamList, "Waiting">;
}

const Waiting: React.FC<WaitingProps> = ({ navigation }) => {
  const handleQuit = () => {
    navigation.navigate("MainMenu");
  };
  const handleThank_You = () => {
    navigation.navigate("Thank_You");
  };
  const handleCredits = () => {
    navigation.navigate("Credits");
  };
  // console.log(players);
  return (
    <SafeAreaView>
      <CustomView>
        <CustomText>En attente</CustomText>
      </CustomView>
    </SafeAreaView>
  );
};

export default Waiting;
