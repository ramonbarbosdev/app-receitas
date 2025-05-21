import { Stack, useLocalSearchParams } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useThemeContext } from './styles/ThemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function LayoutInner() {
  const { theme } = useThemeContext();
  const params = useLocalSearchParams();
  const animationType = params.customBackAnimation === 'true' ? 'slide_from_left' : 'fade';

  return (
    <SafeAreaProvider>
      <StatusBar style={theme.dark ? 'light' : 'dark'} />
       <Stack
        screenOptions={{
          headerShown: false,
          animation: animationType,
        }}
    />
    </SafeAreaProvider>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <LayoutInner />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
