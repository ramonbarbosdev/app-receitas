import { Stack, useLocalSearchParams } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useThemeContext } from './styles/ThemeContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
         <GestureHandlerRootView style={{ flex: 1 }}>
        <LayoutInner />
      </GestureHandlerRootView>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
