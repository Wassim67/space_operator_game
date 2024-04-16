import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomView from "./CustomView";
import CustomText from "./CustomText";
import CustomText2 from "./CustomText2";

interface CustomTimerProps {
  initialTime: number; // Temps initial en secondes
}

const CustomTimer: React.FC<CustomTimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => Math.max(prevTime - 1, 0)); // Arrêter le minuteur à 0
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const timerTextStyle = time <= 5 ? { color: "red" } : {};

  return (
    <CustomView flexDirection="row" style={styles.timerContainer}>
      <CustomText2 color="white" textSize="medium" text="TEMPS : " />
      <Text style={[styles.timerText, timerTextStyle]}>{formatTime(time)}</Text>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: "#211D1D",
    padding: 10,
    borderRadius: 5,
  },
  timerText: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default CustomTimer;
