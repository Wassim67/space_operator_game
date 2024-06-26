import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";
import { Card } from "@rneui/themed";
import CustomButton from "../../components/CustomButton";
import { NavigationProp } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../../RootStackParamList";
import {
  stopAmbientSound,
  playAmbientSound,
} from "../../core/AmbientSound/AmbientSound"; // Importez les fonctions pour jouer et arrêter le son d'ambiance

interface SettingsProps {
  navigation: NavigationProp<RootStackParamList, "Settings">;
}

const Settings: React.FC<SettingsProps> = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const [musicOn, setMusicOn] = useState(false);
  const [volumeOn, setVolumeOn] = useState(true);
  const [lang, setLang] = useState(() => {
    return i18n.language || "fr";
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedVolume = await AsyncStorage.getItem("volumeOn");
        if (storedVolume !== null) {
          setVolumeOn(JSON.parse(storedVolume));
        }

        const storedMusic = await AsyncStorage.getItem("musicOn");
        if (storedMusic !== null) {
          setMusicOn(JSON.parse(storedMusic));
        }
      } catch (error) {
        console.error("Error retrieving data from AsyncStorage:", error);
      }
    };
    fetchData();

    return () => {};
  }, []);

  const toggleMusic = () => {
    const newMusicState = !musicOn;
    setMusicOn(newMusicState);
    AsyncStorage.setItem("musicOn", JSON.stringify(newMusicState)); // Store the new music state
    console.log("ChangeMusic");

    console.log(newMusicState);
    if (newMusicState) {
      playAmbientSound(); // Si la musique est activée, démarrez le son d'ambiance
    } else {
      stopAmbientSound(); // Si la musique est désactivée, arrêtez le son d'ambiance
    }
  };

  const toggleVolume = () => {
    const newVolumeState = !volumeOn;
    setVolumeOn(newVolumeState);
    console.log(volumeOn);
    AsyncStorage.setItem("volumeOn", JSON.stringify(newVolumeState));
  };

  const toggleLang = () => {
    let newLang;
    switch (lang) {
      case "en":
        newLang = "fr";
        break;
      case "fr":
        newLang = "en";
        break;
      default:
        newLang = "fr";
    }
    setLang(newLang);
    i18n.changeLanguage(newLang);
    console.log("ChangeLang");
  };

  const handleExit = () => {
    navigation.navigate("MainMenu");
    console.log("MainMenu");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <CustomButton
          size="large"
          textColor="white"
          color="red"
          title={t("settings.exit")}
          onPress={handleExit}
        />
      </View>
      <View style={styles.showButton}>
        <TouchableOpacity onPress={toggleMusic}>
          <Card containerStyle={[styles.card, styles.largeCard]}>
            {musicOn ? (
              <MaterialIcons name="music-note" size={100} color="black" />
            ) : (
              <MaterialIcons name="music-off" size={100} color="black" />
            )}
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleVolume}>
          <Card containerStyle={[styles.card, styles.largeCard]}>
            {volumeOn ? (
              <MaterialCommunityIcons
                name="volume-variant-off"
                size={100}
                color="black"
              />
            ) : (
              <MaterialCommunityIcons
                name="volume-source"
                size={100}
                color="black"
              />
            )}
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleLang}>
          <Card containerStyle={[styles.card, styles.largeCard]}>
            <Image
              source={
                lang === "fr"
                  ? require("./assets/france.png")
                  : require("./assets/royaume-uni.png")
              }
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
