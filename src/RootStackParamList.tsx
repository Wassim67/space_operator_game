// Définition des paramètres de chaque écran de la pile de navigation
export type RootStackParamList = {
  MainMenu: undefined; // L'écran MainMenu sans paramètres
  CreateGame: { gamerId: string; gameId: string; gamerName: string };
  Settings: undefined;
  Help: undefined;
  Information: undefined;
  ChangeName: undefined;
  Thank_You: undefined;
  Credits: undefined;
  Operator: undefined;
  Instructor: undefined;
  Waiting: undefined;
  JoinGame: { gamerId: string; gameId: string; gamerName: string };
};
