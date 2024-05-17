import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalTheme } from "../styles/theme";

interface ItemProps {
  username: string;
  statut: string;
  role: string;
}

const Item: React.FC<ItemProps> = ({ username, statut }) => {
  let statutColor;
  if (statut === "Prêt") {
    statutColor = styles.statutReady;
  } else if (statut === "En attente") {
    statutColor = styles.statutPending;
  } else {
    statutColor = styles.statut;
  }

  let backgroundColor;
  if (statut === "Prêt") {
    backgroundColor = "#00ff00";
  } else if (statut === "En attente") {
    backgroundColor = "orange";
  } else {
    backgroundColor = "#e0e0e0";
  }

  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{username}</Text>

      <View style={[styles.statutContainer, { backgroundColor }]}>
        <Text style={[styles.statut, statutColor]}>{statut}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: "auto",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 25,
    color: "black",
    fontFamily: GlobalTheme.fonts.bold,
  },
  statutContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    textAlign: "center",
    borderRadius: 10, // Arrondir les bords
    paddingHorizontal: 10, // Ajout de marge horizontale
  },
  statut: {
    fontSize: 25,
    color: "gray",
    alignItems: "center",
    padding: 10,
  },
  statutReady: {
    color: "white",
  },
  statutPending: {
    color: "white",
  },
  button: {
    marginLeft: 10,
  },
});
export default Item;
