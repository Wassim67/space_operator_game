import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containermain: {
        flex: 1,
        backgroundColor: "#211D1D",

    },
    titleContainer: {
        marginTop: windowHeight * 0.05,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 30,
        color: '#FFFFFF',
        marginBottom: 10,
    },
    usersContainer: {
        flex: 1,
        paddingVertical: 40

    },
    usersList: {
        flexGrow: 1,
    },

    itemText: {
        color: "black",
    },
    actions: {
        display: "flex",
    },
    contentWithoutTitle: {
        flexDirection: "row",
    }

});

export default styles;
