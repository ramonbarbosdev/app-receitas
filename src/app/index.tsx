import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/homescreen';
import Create from './components/createrecipescreen';
import Recipe from './components/recipeetailscreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Receitas } from './models/Receitas';

export type RootStackParamList = {
  Home: undefined;
  Create: {id: number} | undefined;
  Recipe: { objeto: Receitas };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView  style={{ flex: 1 }}>
       <SafeAreaProvider>
         <Stack.Navigator initialRouteName="Home"  /*screenOptions={{ headerShown: false }}*/>
          <Stack.Screen name="Home" component={HomeScreen}   options={{ headerShown: false }} />
          <Stack.Screen name="Create" component={Create}   options={{ headerShown: false }} />
          <Stack.Screen name="Recipe" component={Recipe}   options={{ headerShown: false }} />
        </Stack.Navigator>
       </SafeAreaProvider>
    </GestureHandlerRootView>
   
  );
}
