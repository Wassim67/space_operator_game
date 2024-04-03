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

interface Information {
  // navigation: StackNavigationProp<any>;
  navigation: NavigationProp<RootStackParamList, "Information">;

}

export const Information: React.FC<Information> = ({ navigation }) => {
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
          title={t("settings.exit")}
          onPress={handleExit}
        />
      </CustomView>
      <CustomText2 text="Page Information" textSize="medium" color="white" />
    </SafeAreaView>
  );
};

export default Information;
