import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface CustomTextProps {
  text: string;
  style?: TextStyle;
  bold?: boolean;
  color?: string;
  textSize?: "little" | "medium" | "large";
  textAlign?: "start" | "end" | "center" | "justify" | undefined; // Utilisation de types spécifiques pour textAlign
  //rajouter le children
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  style,
  bold,
  color,
  textSize,
  textAlign,
}) => {
  const textStyle = bold ? styles.boldText : undefined;
  const textColorStyle = color ? { color } : undefined;
  const textSizeStyle =
    textSize === "little"
      ? styles.littleText
      : textSize === "medium"
      ? styles.mediumText
      : textSize === "large"
      ? styles.largeText
      : undefined;
  const textAlignStyle: TextStyle | undefined =
    textAlign === "start"
      ? { textAlign: "left" }
      : textAlign === "end"
      ? { textAlign: "right" }
      : textAlign === "center"
      ? { textAlign: "center" }
      : textAlign === "justify"
      ? { textAlign: "justify" }
      : undefined;
  return (
    <Text
      style={[textStyle, textColorStyle, textSizeStyle, textAlignStyle, style]}
    >
      {text}
    </Text>
  ); // Utilisez la prop text pour afficher le texte
};

const styles = StyleSheet.create({
  boldText: {
    fontFamily: "Barlow_700Bold",
    fontWeight: "bold",
  },
  littleText: {
    fontSize: 16,
  },
  mediumText: {
    fontSize: 22,
  },
  largeText: {
    fontSize: 30,
  },
});

export default CustomText;
