import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Barlow_400Regular,
  Barlow_700Bold,
  useFonts,
} from "@expo-google-fonts/barlow";
import { I18nextProvider } from "react-i18next";

// Chemin vers le fichier de configuration i18n.js
import i18n from "../../i18n";

//import des pages
import MainMenu from "../pages/Main_Menu/MainMenu.page";
import SplashScreen from "../pages/Splash_Screen/SplashScreen.page";
import Settings from "../pages/Settings/Settings.page";
import CreateGame from "../pages/Create_Game/CreateGame.page";
import Help from "../pages/Help/Help.page";
import Information from "../pages/Information/Information.page";
import { ChangeName } from "../pages/Change_Name/ChangeName";
// import Credits from "../pages/Credits/Credits.page";
import Credits from "../pages/Credits/Credits.page";
import Thank_You from "../pages/Thank_You/Thank_You.page";
import JoinGamePage from "../pages/Join_Game/JoinGame_test.page";
import OperatorPage from "../pages/Operator/Operator.page";
import InstructorPage from "../pages/Instructor/Instructor.page";
import WaitingPage from "../pages/Waiting/Waiting.page";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [fontsLoaded] = useFonts({
    Barlow_400Regular,
    Barlow_700Bold,
  });
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(async () => {
      setLoading(false);
    }, 3000); // Petit timer de 3 secondes pour "afficher la page d'introduction"

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />; // Afficher l'écran d'introduction pendant le chargement
  }

  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainMenu"
            component={MainMenu}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateGame"
            component={CreateGame}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Help"
            component={Help}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Information"
            component={Information}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Thank_You"
            component={Thank_You}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Credits"
            component={Credits}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="JoinGame"
            component={JoinGamePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Operator"
            component={OperatorPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Instructor"
            component={InstructorPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Waiting"
            component={WaitingPage}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen
            name="ChangeName"
            options={{ headerShown: false }}
            component={ChangeName}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
};

export default AppNavigator;
