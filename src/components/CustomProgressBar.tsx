import React from "react";
import { View, StyleSheet } from "react-native";

interface CustomProgressBarProps {
  progress: number; // Valeur de progression entre 0 et 1
  orientation?: "vertical" | "horizontal"; // Orientation de la barre de progression
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ progress, orientation = "horizontal" }) => {
  let color: string;

  if (progress > 0.75) {
    color = "red";
  } else if (progress > 0.5) {
    color = "orange";
  } else if (progress > 0.25) {
    color = "yellow";
  } else {
    color = "green";
  }

  const containerStyle = orientation === "vertical" ? styles.verticalProgressBarContainer : styles.horizontalProgressBarContainer;

  return (
    <View style={containerStyle}>
      <View style={[styles.progressBar, { [orientation === "vertical" ? "height" : "width"]: `${progress * 100}%`, backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalProgressBarContainer: {
    height: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 35,
    overflow: "hidden",
  },
  verticalProgressBarContainer: {
    width: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 35,
    overflow: "hidden",
    flexDirection: "column-reverse",
  },
  progressBar: {
    backgroundColor: "green",
    borderRadius: 35,
  },
});

export default CustomProgressBar;
