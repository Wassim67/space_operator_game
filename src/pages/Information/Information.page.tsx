import React from "react";
import { SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomText2 from "../../components/CustomText2";
import styles from "../Thank_You/styles";
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
    <SafeAreaView style={styles.containermain}>
      <CustomView width={600} padding={10} gap={30} flexDirection={"row"}>
        <CustomView flexDirection={"column"}>
          <CustomText2
            text={t("information.title_information")}
            textSize="large"
            color="white"
          />
          <CustomView flexDirection={"column"} alignItems="center">
            <CustomView padding={10} backgroundColor="#333333">
              <CustomText2
                text={t("information.description_information")}
                textSize="medium"
                color="white"
              />
            </CustomView>
          </CustomView>
        </CustomView>

        <CustomView alignContent="space-between" flexDirection={"column"}>
          <CustomButton
            textColor="white"
            color="red"
            onPress={handleQuit}
            title={t("information.exit")}
          />
          <CustomView>
            <CustomButton
              textColor="black"
              color="white"
              onPress={handleThank_You}
              title={t("information.Thank_You")}
            />
            <CustomButton
              textColor="black"
              color="white"
              onPress={handleCredits}
              title={t("information.credits")}
            />
          </CustomView>
        </CustomView>
      </CustomView>
    </SafeAreaView>
  );
};

export default Information;
