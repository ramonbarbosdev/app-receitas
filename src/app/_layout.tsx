import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useThemeContext } from './styles/ThemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function LayoutInner() {
  const { theme } = useThemeContext();

  return (
    <SafeAreaProvider>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView>
        <LayoutInner />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
