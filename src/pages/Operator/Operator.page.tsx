import React, { useRef, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomText2 from "../../components/CustomText2";
import styles from "./styles";
import { t } from "i18next";
import CustomButton from "../../components/CustomButton";
import CustomView from "../../components/CustomView";
import CustomProgressBar from "../../components/CustomProgressBar";
import CustomTimer from "../../components/CustomTimer"; // Import du composant CustomTimer
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RootStackParamList";
import { SafeAreaView, Image, TouchableOpacity } from "react-native";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

interface Operator {
  navigation: NavigationProp<RootStackParamList, "Operator">;
}

export const Operator: React.FC<Operator> = ({ navigation }) => {
  const handleExit = () => {
    navigation.navigate("MainMenu");
  };

  const userCode = "XX-99";

  const rocketRef = useRef<Image>(null);

  const rotateRocket = () => {
    const randomDegree = Math.floor(Math.random() * 90); // Générer un degré aléatoire entre 0 et 90
    if (rocketRef.current) {
      rocketRef.current.setNativeProps({
        style: {
          transform: [{ rotate: `${randomDegree}deg` }],
        },
      });
    }
  };

  // État pour suivre si le bouton est activé ou désactivé
  const [buttonThreeRed, setbuttonThreeRed] = useState(true);
  const [buttonOneRed, setbuttonOneRed] = useState(true);

  const [buttonOnePurple, setbuttonOnePurple] = useState(true);
  const [buttonTwoPurple, setbuttonTwoPurple] = useState(true);

  const [buttonThreeYellow, setbuttonThreeYellow] = useState(true);
  const [buttonYellow, setbuttonYellow] = useState(true);

  const [buttonGreen, setbuttonGreen] = useState(true);
  const [buttonOneGreen, setbuttonOneGreen] = useState(true);

  const [buttonTwoBlue, setbuttonTwoBlue] = useState(true);
  const [buttonFourBlue, setbuttonFourBlue] = useState(true);

  // Fonction pour changer l'état du bouton et l'image associée
  const toggleButtonThreeRed = () => {
    setbuttonThreeRed(!buttonThreeRed);
    if (buttonThreeRed === true) {
      console.log("buttonThreeRedOn");
    } else {
      console.log("buttonThreeRedOff");
    }
  };
  const toggleButtonOneRed = () => {
    setbuttonOneRed(!buttonOneRed);
    if (buttonOneRed === true) {
      console.log("buttonOneRedOn");
    } else {
      console.log("buttonOneRedOff");
    }
  };
  const toggleButtonOnePurple = () => {
    setbuttonOnePurple(!buttonOnePurple);
    if (buttonOnePurple === true) {
      console.log("buttonOnePrupleOn");
    } else {
      console.log("buttonOnePurpleOff");
    }
  };
  const toggleButtonTwoPurple = () => {
    setbuttonTwoPurple(!buttonTwoPurple);
    if (buttonTwoPurple === true) {
      console.log("buttonTwoPrupleOn");
    } else {
      console.log("buttonTwoPrupleOff");
    }
  };
  const toggleButtonThreeYellow = () => {
    setbuttonThreeYellow(!buttonThreeYellow);
    if (buttonThreeYellow === true) {
      console.log("buttonThreeYellowOn");
    } else {
      console.log("buttonThreeYellowOff");
    }
  };
  const toggleButtonYellow = () => {
    setbuttonYellow(!buttonYellow);
    if (buttonYellow === true) {
      console.log("buttonYellowOff");
    } else {
      console.log("buttonYellowOff");
    }
  };
  const toggleButtonOneGreen = () => {
    setbuttonOneGreen(!buttonOneGreen);
    if (buttonOneGreen === true) {
      console.log("buttonGreenOn");
    } else {
      console.log("buttonGreenOff");
    }
  };
  const toggleButtonGreen = () => {
    setbuttonGreen(!buttonGreen);
    if (buttonGreen === true) {
      console.log("buttonOneGreenOn");
    } else {
      console.log("buttonOneGreenOn");
    }
  };
  const toggleButtonTwoBlue = () => {
    setbuttonTwoBlue(!buttonTwoBlue);
    if (buttonTwoBlue === true) {
      console.log("buttonTwoblueOn");
    } else {
      console.log("buttonTwoblueOff");
    }
  };
  const toggleButtonFourBlue = () => {
    setbuttonFourBlue(!buttonFourBlue);
    if (buttonFourBlue === true) {
      console.log("buttonFourblueOn");
    } else {
      console.log("buttonFourblueOff");
    }
  };

  return (
    <SafeAreaView style={styles.containermain}>
      <CustomView gap={15} justifyContent="space-between" flexDirection="row">
        <CustomView>
          <CustomText2 textSize="medium" color="white" text="Tour : 1" />
          <CustomTimer initialTime={20} />
        </CustomView>

        <CustomText2 textSize="large" color="white" text="Rôle : Operators" />
        <CustomButton
          size="small"
          textColor="white"
          color="red"
          title={t("settings.exit")}
          onPress={handleExit}
        />
      </CustomView>

      <CustomView gap={15} flexDirection="row" minHeight={5000}>
        {/* etat de la fusée */}
        <CustomView flexDirection="column">
          <CustomText2
            textSize="medium"
            color="white"
            text="Etat de la fusée"
          />
          <CustomView flexDirection="row">
            <CustomProgressBar orientation="vertical" progress={0.45} />
            <TouchableOpacity onPress={rotateRocket}>
              <Image
                ref={rocketRef}
                source={require("./assets/rocket_1f680.gif")}
                style={styles.imageRocketGif}
              />
            </TouchableOpacity>
          </CustomView>
        </CustomView>

        {/* tableau de bord */}
        <CustomView
          maxWidth={600}
          minWidth={600}
          maxHeight={250}
          minHeight={250}
          borderRadius={4}
          backgroundColor="#BBB3A6"
        >
          <CustomView>
            <CustomText2
              textSize="medium"
              color="white"
              text="Tableau de bord"
            />
            <CustomText2 textSize="medium" color="white" text={userCode} />
          </CustomView>
          <CustomView gap={2} padding={2} maxHeight={230} flexWrap="wrap">
            <TouchableOpacity onPress={toggleButtonThreeRed}>
              <Image
                source={
                  buttonThreeRed
                    ? require("./assets/buttonOff/togglebutton3red.png")
                    : require("./assets/buttonOn/togglebutton3redOn.png")
                }
                style={styles.toggleButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleButtonOnePurple}>
              <Image
                source={
                  buttonOnePurple
                    ? require("./assets/buttonOff/togglebutton1purple.png")
                    : require("./assets/buttonOn/togglebutton1purpleOn.png")
                }
                style={styles.toggleButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleButtonThreeYellow}>
              <Image
                source={
                  buttonThreeYellow
                    ? require("./assets/buttonOff/togglebutton3yellow.png")
                    : require("./assets/buttonOn/togglebutton3yellowOn.png")
                }
                style={styles.toggleButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleButtonGreen}>
              <Image
                source={
                  buttonGreen
                    ? require("./assets/buttonOff/togglebuttongreen.png")
                    : require("./assets/buttonOn/togglebuttongreenOn.png")
                }
                style={styles.toggleButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleButtonTwoBlue}>
              <Image
                source={
                  buttonTwoBlue
                    ? require("./assets/buttonOff/togglebutton2blue.png")
                    : require("./assets/buttonOn/togglebutton2blueOn.png")
                }
                style={styles.toggleButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleButtonOneRed}>
              <Image
                source={
                  buttonOneRed
                    ? require("./assets/buttonOff/togglebutton1red.png")
                    : require("./assets/buttonOn/togglebutton1redOn.png")
                }
                style={styles.toggleButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleButtonTwoPurple}>
              <Image
                source={
                  buttonTwoPurple
                    ? require("./assets/buttonOff/togglebutton2purple.png")
                    : require("./assets/buttonOn/togglebutton2purpleOn.png")
                }
                style={styles.toggleButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleButtonYellow}>
              <Image
                source={
                  buttonYellow
                    ? require("./assets/buttonOff/togglebuttonyellow.png")
                    : require("./assets/buttonOn/togglebuttonyellowOn.png")
                }
                style={styles.toggleButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleButtonOneGreen}>
              <Image
                source={
                  buttonOneGreen
                    ? require("./assets/buttonOff/togglebutton1green.png")
                    : require("./assets/buttonOn/togglebutton1greenOn.png")
                }
                style={styles.toggleButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleButtonFourBlue}>
              <Image
                source={
                  buttonFourBlue
                    ? require("./assets/buttonOff/togglebutton4blue.png")
                    : require("./assets/buttonOn/togglebutton4blueOn.png")
                }
                style={styles.toggleButton}
              />
            </TouchableOpacity>

            {/* Button controle fusée */}
            <CustomView gap={2} alignItems="center">
              {/* radar */}
              <Image
                source={require("./assets/radar.gif")}
                style={styles.imageRadar}
              />
              {/* <TouchableOpacity>
                <AntDesign name="upcircle" size={45} color="black" />
              </TouchableOpacity>
              <CustomView gap={2} flexDirection="row">
                <TouchableOpacity>
                  <AntDesign name="leftcircle" size={45} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="downcircle" size={45} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="rightcircle" size={45} color="black" />
                </TouchableOpacity>
              </CustomView> */}
            </CustomView>
            <CustomView
            
             gap={2}
              flexWrap="wrap"
              padding={8}
              borderRadius={8}
              borderSize={10}
              borderColor="#FDF7E5"
              backgroundColor="#54B572"
            >
              <TouchableOpacity>
                <CustomButton
                  textColor="white"
                  size="small"
                  color="#ABD2B3"
                  borderRadius={4}
                  onPress={toggleButtonFourBlue}
                  title="1"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomButton
                  textColor="white"
                  size="small"
                  color="#ABD2B3"
                  borderRadius={4}
                  onPress={toggleButtonFourBlue}
                  title="2"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomButton
                  textColor="white"
                  size="small"
                  color="#ABD2B3"
                  borderRadius={4}
                  onPress={toggleButtonFourBlue}
                  title="3"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomButton
                  textColor="white"
                  size="small"
                  color="#ABD2B3"
                  borderRadius={4}
                  onPress={toggleButtonFourBlue}
                  title="4"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomButton
                  textColor="white"
                  size="small"
                  color="#ABD2B3"
                  borderRadius={4}
                  onPress={toggleButtonFourBlue}
                  title="5"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomButton
                  textColor="white"
                  size="small"
                  color="#ABD2B3"
                  borderRadius={4}
                  onPress={toggleButtonFourBlue}
                  title="6"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomButton
                  textColor="white"
                  size="small"
                  color="#ABD2B3"
                  borderRadius={4}
                  onPress={toggleButtonFourBlue}
                  title="7"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomButton
                  textColor="white"
                  size="small"
                  color="#ABD2B3"
                  borderRadius={4}
                  onPress={toggleButtonFourBlue}
                  title="8"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomButton
                  textColor="white"
                  size="small"
                  color="#ABD2B3"
                  borderRadius={4}
                  onPress={toggleButtonFourBlue}
                  title="9"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CustomButton
                  textColor="white"
                  size="small"
                  color="#ABD2B3"
                  borderRadius={4}
                  onPress={toggleButtonFourBlue}
                  title="0"
                />
              </TouchableOpacity>
              <TouchableOpacity>
              <Entypo  name="fingerprint" size={35} color="black" />
              </TouchableOpacity>
            </CustomView>
          </CustomView>
        </CustomView>
      </CustomView>
    </SafeAreaView>
  );
};

export default Operator;
