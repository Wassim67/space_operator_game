import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomText2 from "../../components/CustomText2";
import styles from "./styles";
import { t } from "i18next";
import CustomButton from "../../components/CustomButton";
import CustomView from "../../components/CustomView";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";

interface Thank_You {
  navigation: NavigationProp<RootStackParamList, "Information">;
}

export const Thank_You: React.FC<Thank_You> = ({ navigation }) => {
  const handleQuit = () => {
    navigation.navigate("Information");
  };

  const textList = [
    { key: 1, text: t("Thank_You.Main_developers") },
    { key: 2, text: "Juliano Etenach \rWassim Jallabi" },
    { key: 3, text: t("Thank_You.Design_and_development") },
    { key: 4, text: "Juliano Etenach \rWassim Jallabi" },
    { key: 5, text: t("Thank_You.Creative_direction") },
    { key: 6, text: "Juliano Etenach \rWassim Jallabi" },
    { key: 7, text: t("Thank_You.Programming") },
    { key: 8, text: "Juliano Etenach \rWassim Jallabi" },
    { key: 9, text: t("Thank_You.Script_and_narration") },
    { key: 10, text: "Juliano Etenach \rWassim Jallabi\r Weil Alexis" },
    { key: 11, text: t("Thank_You.Voice") },
    { key: 12, text: "Juliano Etenach \rWassim Jallabi" },
    { key: 13, text: t("Thank_You.Testers/QA") },
    { key: 14, text: "Juliano Etenach \rWassim Jallabi" },
    { key: 15, text: t("Thank_You.Third-party_licenses_and_resources") },
    { key: 16, text: "Weil Alexis" },
    { key: 17, text: t("Thank_You.Graphics_and_artistic_design") },
    { key: 18, text: "Juliano Etenach \rWassim Jallabi" },
    { key: 19, text: t("Thank_You.Music_and_sound_effects") },
    { key: 20, text: "Juliano Etenach \rWassim Jallabi" },
  ];

  return (
    <SafeAreaView style={styles.containermain}>
      <CustomView padding={10} gap={30} flexDirection={"row"}>
        <ScrollView>
          <CustomView flexDirection={"column"}>
            <CustomView flexDirection={"column"} alignItems="center">
              <CustomView gap={10} backgroundColor="#333333">
                {textList.map((item) => (
                  <CustomText2
                    key={item.key}
                    text={item.text}
                    textSize="medium"
                    color="white"
                  />
                ))}
              </CustomView>
            </CustomView>
          </CustomView>
        </ScrollView>
        <CustomView alignContent="space-between" flexDirection={"column"}>
          <CustomButton
            textColor="white"
            color="red"
            onPress={handleQuit}
            title={t("Thank_You.exit")}
          />
        </CustomView>
      </CustomView>
    </SafeAreaView>
  );
};

export default Thank_You;
