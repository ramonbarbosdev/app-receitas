import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/homescreen';
import CreateRecipeScreen from './components/createrecipescreen';

export type RootStackParamList = {
  Home: undefined;
  CreateRecipeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home"  /*screenOptions={{ headerShown: false }}*/>
      <Stack.Screen name="Home" component={HomeScreen}   options={{ headerShown: false }} />
      <Stack.Screen name="CreateRecipeScreen" component={CreateRecipeScreen}   options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
