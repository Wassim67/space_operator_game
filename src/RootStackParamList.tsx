import { StackNavigationProp } from "@react-navigation/stack";

// Définition des paramètres de chaque écran de la pile de navigation
export type RootStackParamList = {
  MainMenu: undefined; // L'écran MainMenu sans paramètres
  CreateGame: { gamerId: string }; // L'écran CreateGame avec un paramètre gameId de type string
  Settings: undefined;
  ChangeName: undefined;
  // Ajoutez d'autres écrans et leurs paramètres ici si nécessaire
};
