import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";

interface CustomViewProps {
  children?: React.ReactNode;
  backgroundColor?: string; // Couleur d'arrière-plan
  borderRadius?: number; // Rayon de bordure
  style?: ViewStyle; // Autres styles personnalisés
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"; // Prop pour flex-direction
  flexWrap?: "nowrap" | "wrap"; // Prop pour flex-wrap
  alignContent?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between"; // Prop pour align-content
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between"; // Prop pour justify-content
  alignItems?: "center" | "flex-start" | "flex-end"; // Prop pour align-items
  padding?: number; // Prop pour le padding
  gap?: number; // Prop pour l'espacement entre les enfants (gap)
}

const CustomView: React.FC<CustomViewProps> = ({
  backgroundColor,
  borderRadius,
  style,
  flexDirection,
  flexWrap,
  alignContent,
  justifyContent,
  alignItems,
  padding,
  gap,
  children
}) => {
  const viewStyle: ViewStyle = {
    backgroundColor,
    borderRadius,
    flexDirection,
    flexWrap,
    alignContent,
    justifyContent,
    alignItems,
    padding,
    ...style,
    display: "flex" // Toujours en display flex
  };

  const itemStyle: ViewStyle = {
    margin: gap // Appliquer un margin pour l'espacement entre les enfants
  };

  return (
    <View style={viewStyle}>
      {React.Children.map(children, child => (
        <View style={itemStyle}>{child}</View>
      ))}
    </View>
  );
};

export default CustomView;

// exemple props utilisation
// <CustomView
//   backgroundColor="lightblue"
//   borderRadius={10}
//   flexDirection="row"
//   flexWrap="wrap"
//   alignContent="center"
//   justifyContent="space-between"
//   alignItems="center"
//   padding={10}
//   gap={5}
// >
// </CustomView>