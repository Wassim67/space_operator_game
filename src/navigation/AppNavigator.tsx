import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainMenu } from "../pages/Main_Menu/MainMenu.page";
import SplashScreen from "../pages/Splash_Screen/SplashScreen.page";
import {
  Barlow_400Regular,
  Barlow_700Bold,
  useFonts,
} from "@expo-google-fonts/barlow";

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
