import React from "react";
import { SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomText2 from "../../components/CustomText2";
import styles from "./styles";
import { t } from "i18next";
import CustomButton from "../../components/CustomButton";
import CustomView from "../../components/CustomView";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";

interface JoinGameIOS {
  // navigation: StackNavigationProp<any>;
  navigation: NavigationProp<RootStackParamList, "ChangeGameIos">;

}

export const JoinGameIOS: React.FC<JoinGameIOS> = ({ navigation }) => {
  const handleExit = () => {
    navigation.navigate("MainMenu");
  };

  return (
    <SafeAreaView style={styles.containermain}>
      <CustomView>
        <CustomButton
          size="large"
          textColor="white"
          color="red"
          title={t("joinGameIos.exit")}
          onPress={handleExit}
        />
      </CustomView>
      <CustomText2 text="Page JoinGameIOS" textSize="medium" color="white" />
    </SafeAreaView>
  );
};

export default JoinGameIOS;
