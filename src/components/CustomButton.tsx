import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { GlobalTheme } from "../styles/theme";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  textColor?: string;
  size?: "small" | "medium" | "large"; // Nouvelle prop pour la taille du bouton
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  color = GlobalTheme.colors.background,
  textColor = "#000000",
  size = "medium", // Par défaut, la taille du bouton est moyenne
}) => {
  let buttonStyle: ViewStyle = {};
  let textStyle: TextStyle = {};

  // Déterminer la taille du bouton en fonction de la valeur de la prop size
  switch (size) {
    case "small":
      buttonStyle = styles.smallButton;
      textStyle = styles.smallText;
      break;
    case "large":
      buttonStyle = styles.largeButton;
      textStyle = styles.largeText;
      break;
    default:
      buttonStyle = styles.mediumButton;
      textStyle = styles.mediumText;
      break;
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        { backgroundColor: color },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          textStyle,
          { fontFamily: "Barlow_700Bold", color: textColor },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginVertical: 5,
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Barlow_400Regular",
  },
  smallButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  mediumButton: {
    paddingVertical: 16,
    paddingHorizontal: 50,
  },
  largeButton: {
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 20,
  },
  largeText: {
    fontSize: 40,
  },
});

export default CustomButton;
