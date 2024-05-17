import React from "react";
import {
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import CustomText2 from "../../components/CustomText2";
import { t } from "i18next";
import CustomButton from "../../components/CustomButton";
import CustomView from "../../components/CustomView";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import CustomProgressBar from "../../components/CustomProgressBar";
import CustomTimer from "../../components/CustomTimer";
import styles from "./style";
import CustomCommandeGame from "../../components/CustomCommandeGame";

interface Operator {
  navigation: NavigationProp<RootStackParamList, "Operator">;
}

const lose = false;

export const Operator: React.FC<Operator> = ({ navigation }) => {
  const handleExit = () => {
    navigation.navigate("MainMenu");
  };

  if (lose) {
    return (
      <SafeAreaView style={styles.containermain}>
        <CustomView style={{ alignItems: "center", marginTop: 20 }}>
          <CustomText2 text="You lose" color="red" textSize="large" />
        </CustomView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.containermain}>
      <CustomText2 text="tour : 1" color="white" textSize="little" />
      <CustomView
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <CustomTimer initialTime={15} />
        <CustomText2
          bold
          text="Votre role : Operator"
          color="white"
          textSize="medium"
        />
        <CustomButton
          size="small"
          textColor="white"
          color="red"
          title={t("settings.exit")}
          onPress={handleExit}
        />
      </CustomView>

      <ScrollView>
        <CustomView gap={15} flexDirection="row">
          <CustomProgressBar orientation="vertical" progress={0.45} />
          <Image
            source={require("./assets/rocket_1f680.gif")}
            style={styles.imageRocketGif}
          />
          <CustomView
            padding={8}
            borderRadius={4}
            backgroundColor="#C1C1C1"
            style={{ flex: 1 }} // Ajoutez cette ligne
          >
            <CustomView gap={12} flexDirection="row">
              <CustomText2
                text="XX-99"
                bold
                color="#0000FF"
                textSize="medium"
              />
              <CustomText2
                text="Tableau de bord"
                bold
                color="black"
                textSize="medium"
              />
              <CustomView>
                <CustomCommandeGame
                  elements={[
                    {
                      valueType: "color",
                      value: "#bb2222",
                      type: "button",
                      id: 1,
                    },
                    {
                      valueType: "color",
                      value: "#ff5c5c",
                      type: "button",
                      id: 2,
                    },
                    {
                      valueType: "color",
                      value: "#008000",
                      type: "button",
                      id: 3,
                    },
                    {
                      valueType: "color",
                      value: "#0000FF",
                      type: "button",
                      id: 4,
                    },
                    {
                      valueType: "color",
                      value: "#FFFF00",
                      type: "button",
                      id: 5,
                    },
                    {
                      valueType: "string",
                      value: "Commencer",
                      type: "button",
                      id: 6,
                    },
                    {
                      valueType: "string",
                      value: "Arrêter",
                      type: "button",
                      id: 7,
                    },
                    {
                      valueType: "string",
                      value: "Réinitialiser",
                      type: "button",
                      id: 8,
                    },
                  ]}
                />
              </CustomView>
            </CustomView>

            <CustomView>
              <CustomCommandeGame
                elements={[
                  {
                    valueType: "color",
                    value: "#0000FF",
                    type: "switch",
                    id: 9,
                  },
                  {
                    valueType: "color",
                    value: "#FFFF00",
                    type: "switch",
                    id: 10,
                  },
                  {
                    valueType: "string",
                    value: "Quoicoubeh",
                    type: "switch",
                    id: 11,
                  },
                  {
                    valueType: "string",
                    value: "Apagnan",
                    type: "switch",
                    id: 12,
                  },
                  {
                    valueType: "number",
                    value: "30",
                    type: "switch",
                    id: 13,
                  },
                  {
                    valueType: "number",
                    value: "30",
                    type: "switch",
                    id: 14,
                  },
                ]}
              />
            </CustomView>
          </CustomView>
        </CustomView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Operator;
