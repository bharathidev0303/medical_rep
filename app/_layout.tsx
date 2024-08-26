import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { ApiProvider } from '@MR/apiservice';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    GilroyMedium: require('../assets/fonts/Gilroy-Medium.ttf'),
    GilroyBold: require('../assets/fonts/Gilroy-Bold.ttf'),
    GilroyRegular: require('../assets/fonts/Gilroy-Regular.ttf'),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
      <ApiProvider>
        <Stack>
          <Stack.Screen key='index' name="index" options={{ headerShown: false }} />
          <Stack.Screen key='authorized' name="(authorized)" options={{ headerShown: false }} />
          <Stack.Screen key='noAuthorized' name="(noAuthorized)" options={{ headerShown: false }} />
          <Stack.Screen key='not-found' name="+not-found" options={{ headerShown: false }} />
        </Stack>
      </ApiProvider>
    </ThemeProvider>
  );
}



