import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containermain: {
        flex: 1,
        backgroundColor: "#211D1D",
        padding: 15,
        // flexDirection: "row"
    },
    imageRocketGif: {
        width: 180, // Définir la largeur souhaitée
        height: 180, // Définir la hauteur souhaitée
        // transform: [{ rotate: "-45deg" }]
        // transform: [{ rotate: "-90" }]
      },
});

export default styles;
