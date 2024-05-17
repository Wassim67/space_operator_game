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
  Intructor: undefined;
  // Instructor: { gameId: string; player: { id: string; name: string } }; // Correction de "Intructor" à "Instructor"
  Waiting: { gameId: string; operationData: any }; // Mettez à jour la définition de Waiting pour inclure les paramètres
  JoinGame: { gamerId: string; gameId: string; gamerName: string };
};
