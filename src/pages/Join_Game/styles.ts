import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containermain: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    titleContainer: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
        color: "#000000",
        marginBottom: 10,
    },
    formContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    contentWithoutTitle: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    errorMessage: {
        color: "red", // Styling du message d'erreur en rouge
        marginBottom: 10, // Ajoute une marge inférieure au message d'erreur
    },
});

export default styles;
