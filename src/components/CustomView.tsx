import React from "react";
import { View, ViewStyle } from "react-native";

interface CustomViewProps {
  children?: React.ReactNode;
  backgroundColor?: string; // Couleur d'arrière-plan
  borderRadius?: number; // Rayon de bordure
  borderColor?: string; // Couleur de bordure
  borderSize?: number; // Taille de la bordure
  style?: ViewStyle; // Autres styles personnalisés
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"; // Prop pour flex-direction
  flexWrap?: "nowrap" | "wrap"; // Prop pour flex-wrap
  alignContent?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between"; // Prop pour align-content
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between"; // Prop pour justify-content
  alignItems?: "center" | "flex-start" | "flex-end"; // Prop pour align-items
  padding?: number; // Prop pour le padding
  gap?: number; // Prop pour l'espacement entre les enfants (gap)
  maxWidth?: number; // Largeur maximale
  maxHeight?: number; // Hauteur maximale
  minWidth?: number; // Largeur minimale
  minHeight?: number; // Hauteur minimale
  widthPercentage?: number; // Pourcentage de la largeur parente
  heightPercentage?: number; // Pourcentage de la hauteur parente
  fullsize?: boolean; // Remplir entièrement l'espace disponible
}

const CustomView: React.FC<CustomViewProps> = ({
  backgroundColor,
  borderRadius,
  borderColor,
  borderSize,
  style,
  flexDirection,
  flexWrap,
  alignContent,
  justifyContent,
  alignItems,
  padding,
  gap,
  children,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  widthPercentage,
  heightPercentage,
  fullsize,
}) => {
  const viewStyle: ViewStyle = {
    backgroundColor,
    borderRadius,
    borderColor,
    borderWidth: borderColor ? borderSize || 1 : 0, // Ajout de la largeur de la bordure si borderColor est spécifié, sinon 0
    flexDirection,
    flexWrap,
    alignContent,
    justifyContent,
    alignItems,
    padding,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    width: fullsize ? "100%" : widthPercentage ? `${widthPercentage}%` : undefined, // Définir la largeur en pourcentage si widthPercentage est spécifié
    height: fullsize ? "100%" : heightPercentage ? `${heightPercentage}%` : undefined, // Définir la hauteur en pourcentage si heightPercentage est spécifié
    ...style,
    display: "flex",
  };

  const itemStyle: ViewStyle = {
    margin: gap,
  };

  return (
    <View style={viewStyle}>
      {React.Children.map(children, (child) => (
        <View style={itemStyle}>{child}</View>
      ))}
    </View>
  );
};

export default CustomView;
