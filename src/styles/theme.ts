import { DefaultTheme } from '@react-navigation/native';
import {
  Barlow_400Regular,
  Barlow_700Bold,
  useFonts,
} from "@expo-google-fonts/barlow";

export const GlobalTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#333333',
  },
  fonts: {
    regular: 'Barlow_400Regular',
    bold: 'Barlow_700Bold',
  },
};
