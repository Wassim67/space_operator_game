import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  containermain: {
    display: "flex",
    backgroundColor: "#211D1D",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 19,
    color: "#FFFFFF",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginBottom: 5,

  },
  buttonText: {
    color: "#000000",
    fontSize: 50,
    textAlign: "center",
  },
  buttonContainer: {
    top: windowHeight * 0.1,

  },
  playerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: windowHeight * 0.2
  },
  image: {
    width: 300, // Définir la largeur souhaitée
    height: 300, // Définir la hauteur souhaitée
  },
  boutique: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  }
});

export default styles;
