import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containermain: {
        flex: 1,
        backgroundColor: "#211D1D",
    }
});

export default styles;
