import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const baseStylesTablet = StyleSheet.create({
    containermain: {
        display: "flex",
        flex: 1,
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
        marginTop: windowHeight * 0.1
    },
    image: {
        width: 300,
        height: 300,
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

const stylesTablet = StyleSheet.create({
    ...baseStylesTablet,
    // Styles spécifiques pour la modal
    modalContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
    },
    modalOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#FFFFFF",
        padding: 20,
        borderRadius: 10,
        width: "80%",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ...baseStylesTablet,
    buttonContainer: {
        justifyContent: 'center',
        marginTop: windowHeight * 0.1,
    },
    playerContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        marginTop: windowHeight * 0.1,
        marginRight: windowHeight * 0.1
    },
});

export default stylesTablet;
