import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containermain: {
        flex: 1,
        backgroundColor: "#211D1D",

    },
    title: {
        fontSize: 30,
        color: '#FFFFFF',
        marginBottom: 10,
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
        height: 200, },
        container:{}
});

export default styles;
