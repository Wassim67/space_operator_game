import React from "react";
import { SafeAreaView, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomText2 from "../../components/CustomText2";
// import styles from "../Thank_You/styles";
import { t } from "i18next";
import CustomButton from "../../components/CustomButton";
import CustomView from "../../components/CustomView";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import styles from "./style";
import CustomProgressBar from "../../components/CustomProgressBar";
import CustomTimer from "../../components/CustomTimer";

interface Instructor {
  navigation: NavigationProp<RootStackParamList, "Instructor">;
}

export const Instructor: React.FC<Instructor> = ({ navigation }) => {
  const handleExit = () => {
    navigation.navigate("MainMenu");
  };

  const lose = false;

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
          text="Votre role : Instructeur"
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

      <CustomView gap={15} flexDirection="row">
        <CustomProgressBar orientation="vertical" progress={0.45} />
        <Image
          source={require("./assets/rocket_1f680.gif")}
          style={styles.imageRocketGif}
        />
        <CustomView padding={8} borderRadius={4} backgroundColor="#C1C1C1">
          <CustomView gap={15} flexDirection="column">
            <CustomView gap={15} flexDirection="row">
              <CustomText2
                text="XX-99"
                bold
                color="#0000FF"
                textSize="medium"
              />
              <CustomText2
                text="Votre description :"
                bold
                color="black"
                textSize="medium"
              />
            </CustomView>
            <CustomText2
              text="Mettre Variable description"
              bold
              color="black"
              textSize="large"
            />
          </CustomView>
        </CustomView>
      </CustomView>
    </SafeAreaView>
  );
};

export default Instructor;
