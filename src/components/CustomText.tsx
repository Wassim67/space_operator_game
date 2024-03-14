import React from "react";
import { Text, StyleSheet } from "react-native";

interface CustomTextProps {
  children: React.ReactNode;
  style?: any;
}

const CustomText: React.FC<CustomTextProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Barlow_400Regular",
    color: "white",
  },
});

export default CustomText;
