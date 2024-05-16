import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import CustomButton from "../../components/CustomButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { t } from "i18next";
import CustomText2 from "../../components/CustomText2";
import CustomView from "../../components/CustomView";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";

interface HelpProps {
  // navigation: StackNavigationProp<any>;
  navigation: NavigationProp<RootStackParamList, "Help">;
}

export const Help: React.FC<HelpProps> = ({ navigation }) => {
  const handleQuit = () => {
    navigation.navigate("MainMenu");
  };

  return (
    <SafeAreaView style={styles.containermain}>
      <CustomView
        borderRadius={10}
        flexDirection="row"
        flexWrap="wrap"
        alignContent="center"
        justifyContent="space-between"
        alignItems="center"
        padding={10}
        gap={5}
      >
        <CustomButton
          textColor="white"
          color="red"
          title={t("help.exit")}
          onPress={handleQuit}
        />
        <CustomText2
          text={t("help.rule_game")}
          textSize="medium"
          color="white"
        />
      </CustomView>
    </SafeAreaView>
  );
};

export default Help;
