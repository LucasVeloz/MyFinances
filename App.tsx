import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

import { useFonts, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import theme from './src/global/styles/theme';
import darkTheme from './src/global/styles/darkTheme';
import { Routes } from './src/routes';

export default function App() {
  const currentTheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : theme}>
      <NavigationContainer>
        <StatusBar backgroundColor="transparent" translucent style="auto" />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
