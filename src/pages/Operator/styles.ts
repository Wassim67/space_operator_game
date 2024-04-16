import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  containermain: {
    flex: 1,
    backgroundColor: "#211D1D",
    // flexDirection: "row",
    // alignContent: "center",
    // justifyContent: "center",
    // alignItems: "center"

  },
  imageRocket: {
    width: 76.5, // Définir la largeur souhaitée
    height: 132, // Définir la hauteur souhaitée
  },
  imageRocketGif: {
    width: 180, // Définir la largeur souhaitée
    height: 180, // Définir la hauteur souhaitée
    // transform: [{ rotate: "-45deg" }]
    // transform: [{ rotate: "-90" }]

  },
  imageRadar: {
    width: 100, // Définir la largeur souhaitée
    height: 100, // Définir la hauteur souhaitée
  },

  toggleButton: {
    width: 80, // Définir la largeur souhaitée
    height: 35, // Définir la hauteur souhaitée
  },

  buttonScan: {
    color: "#ABD2B3"
  }
  
});

export default styles;
