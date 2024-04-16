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
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',

  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  // buttonContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   width: "100%",
  // },
  // button: {
  //   borderRadius: 5,
  //   padding: 10,
  //   width: 100,
  //   alignItems: "center",
  // },
  submitButton: {
    backgroundColor: "#007bff",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
  },
  // buttonText: {
  //   color: "white",
  //   fontWeight: "bold",
  // },

});

export default styles;
