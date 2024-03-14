import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { GlobalTheme } from "../styles/theme";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: GlobalTheme.colors.background },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { fontFamily: "Barlow_700Bold" }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginVertical: 5,
    marginTop: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Barlow_400Regular",
  },
});

export default CustomButton;
