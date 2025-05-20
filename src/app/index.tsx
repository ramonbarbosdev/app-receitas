import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/homescreen';
import CreateRecipeScreen from './components/createrecipescreen';
import Recipe from './components/recipeetailscreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export type RootStackParamList = {
  Home: undefined;
  CreateRecipeScreen: undefined;
  Recipe: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView >
      <Stack.Navigator initialRouteName="Home"  /*screenOptions={{ headerShown: false }}*/>
        <Stack.Screen name="Home" component={HomeScreen}   options={{ headerShown: false }} />
        <Stack.Screen name="CreateRecipeScreen" component={CreateRecipeScreen}   options={{ headerShown: false }} />
        <Stack.Screen name="Recipe" component={Recipe}   options={{ headerShown: false }} />
    </Stack.Navigator>
    </GestureHandlerRootView>
   
  );
}
