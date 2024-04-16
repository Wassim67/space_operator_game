import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containermain: {
        flex: 1,
        backgroundColor: "#211D1D",
    },
      input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "white", // Text color
  },
});

export default styles;
