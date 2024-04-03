import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

interface CustomTextProps {
  children?: React.ReactNode;
  style?: TextStyle;
  bold?: boolean;
}

const CustomText: React.FC<CustomTextProps> = ({ children, style, bold }) => {
  const textStyle = bold ? styles.boldText : undefined;
  return <Text style={[textStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  boldText: {
    fontFamily: "Barlow_700Bold",
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomText;
