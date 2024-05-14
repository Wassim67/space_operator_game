// import React from "react";
// import { View, ViewStyle, StyleSheet } from "react-native";

// interface CustomViewProps {
//   children?: React.ReactNode;
//   backgroundColor?: string; // Couleur d'arrière-plan
//   borderRadius?: number; // Rayon de bordure
//   style?: ViewStyle; // Autres styles personnalisés
// }

// const CustomView: React.FC<CustomViewProps> = ({ backgroundColor, borderRadius, style, children }) => {
//   const viewStyle: ViewStyle = {
//     backgroundColor,
//     borderRadius,
//     ...style,
//   };

//   return <View style={viewStyle}>{children}</View>;
// };

// export default CustomView;
import React from "react";
import { View, ViewStyle } from "react-native";

interface CustomViewProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  borderRadius?: number;
  style?: ViewStyle;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  flexWrap?: "nowrap" | "wrap";
  alignContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between";
  alignItems?: "center" | "flex-start" | "flex-end";
  padding?: number;
  gap?: number;
  width?: number; // Ajout de la propriété width
  height?: number; // Ajout de la propriété height
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
  width, // Ajout de la prop width
  height, // Ajout de la prop height
  children,
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
    width, // Ajout de la propriété width
    height, // Ajout de la propriété height
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
