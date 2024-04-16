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

interface ShopProps {
  navigation: NavigationProp<RootStackParamList, "Shop">;

}

export const Shop: React.FC<ShopProps> = ({ navigation }) => {
  const handleQuit = () => {
    navigation.navigate("MainMenu");
  };

  return (
    <SafeAreaView style={styles.containermain}>
      <CustomView
        backgroundColor="#000000"
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
          title={t("Shop.exit")}
          onPress={handleQuit}
        />
        <CustomText2
          text={t("Shop.rule_game")}
          textSize="medium"
          color="white"
        />
      </CustomView>
    </SafeAreaView>
  );
};

export default Shop;
