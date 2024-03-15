import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#211D1D",
    // alignItems: "center",

  },
  showButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

  },
  card: {
    marginVertical: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  largeCard: {
    width: 200, 
    height: 200, 
  },
    image: {
      width: 150, 
      height: 150, 
  },
});

export default styles;